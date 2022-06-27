import { Dispatch, useEffect, useReducer } from "react";
import { Biography } from "./Biography";
import { FamousQuote } from "./FamousQuote";
import { Header } from "./Header";
import { reducerFunction } from "./utils/reducerFunction";
import { Action, emptyState } from "./utils/StateAndAction";
import { Statistics } from "./Statistics";
import { LinkList } from "./LinkList";
import { fetchRaceData } from "./utils/fetchRaceData";
import { fetchBio } from "./utils/fetchBio";
import { Footer } from "./Footer";
import { Graph } from "./Graph";

function App(): JSX.Element {
  const [{ isLoading, race, bio }, dispatch] = useReducer(
    reducerFunction,
    emptyState
  );

  useEffect(() => {
    async function fetchAllData(dispatch: Dispatch<Action>) {
      dispatch({ type: "request" });
      const bioData = await fetchBio();
      const raceData = await fetchRaceData();
      dispatch({ type: "fetchData", raceData: raceData, bioData: bioData });
    }
    fetchAllData(dispatch);
  }, []);

  return (
    <>
      <Header />
      {isLoading ? (
        <h1>Data Loading...</h1>
      ) : (
        <>
          <Statistics raceData={race} />
          <Biography bioData={bio} />
          <FamousQuote />
          {race && <Graph data={race.standings.championshipHistory} />}
          {bio && <LinkList wikiLink={bio.info} />}
        </>
      )}
      <Footer />
    </>
  );
}

export default App;
