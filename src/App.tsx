import { Dispatch, useEffect, useReducer } from "react";
import { Biography } from "./Biography";
import { FamousQuote } from "./FamousQuote";
import { Header } from "./Header";
import { reducerFunction } from "./utils/reducerFunction";
import { Action, emptyState } from "./utils/StateAndAction";
import { LinkList } from "./LinkList";
import { fetchRaceData } from "./utils/fetchRaceData";
import { fetchBio } from "./utils/fetchBio";
import { Footer } from "./Footer";
import { Graph } from "./Graph";
import { ImageCarousel } from "./ImageCarousel";
import { CareerStatistcs } from "./utils/interfaces";
import { Leaderboard } from "./utils/Leaderboard";
import { percentageOf } from "./utils/percentageOf";

function App(): JSX.Element {
  const [{ isLoading, careerStatistics, bio, graphData }, dispatch] =
    useReducer(reducerFunction, emptyState);

  useEffect(() => {
    async function fetchAllData(dispatch: Dispatch<Action>) {
      dispatch({ type: "request" });
      const bioData = await fetchBio();
      const raceData = await fetchRaceData();

      const graphData = raceData.standings.championshipHistory;
      const careerStatistics: CareerStatistcs = [
        {
          id: 1,
          title: "Championships",
          value: raceData.standings.championshipWins,
        },
        { id: 2, title: "Wins", value: raceData.races.raceWins },
        {
          id: 3,
          title: "Win %",
          value: percentageOf(raceData.races.raceWins, raceData.races.races),
        },
        { id: 4, title: "Podiums", value: raceData.races.podiums },
        {
          id: 5,
          title: "Podium %",
          value: percentageOf(raceData.races.podiums, raceData.races.races),
        },
        { id: 6, title: "Poles", value: raceData.poles },
        {
          id: 7,
          title: "Pole %",
          value: percentageOf(raceData.poles, raceData.races.races),
        },
        { id: 8, title: "Races", value: raceData.races.races },
        { id: 9, title: "Points", value: raceData.standings.totalPoints },
      ];

      dispatch({
        type: "fetchData",
        careerStatistics: careerStatistics,
        bioData: bioData,
        graphData: graphData,
      });
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
          <div className="subpage-container">
            {careerStatistics && <Leaderboard data={careerStatistics} />}
            <Biography bioData={bio} />
          </div>
          <FamousQuote />
          <ImageCarousel />
          {graphData && <Graph data={graphData} />}
          {bio && <LinkList wikiLink={bio.info} />}
        </>
      )}
      <Footer />
    </>
  );
}

export default App;
