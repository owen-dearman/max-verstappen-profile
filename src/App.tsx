import { useReducer } from "react";
import { Biography } from "./Biography";
import { FamousQuote } from "./FamousQuote";
import { Header } from "./Header";
import { reducerFunction } from "./reducerFunction";
import { emptyState } from "./StateAndAction";
import { Statistics } from "./Statistics";

function App(): JSX.Element {
  const [{ isLoading, race, bio }, dispatch] = useReducer(
    reducerFunction,
    emptyState
  );
  return (
    <>
      <Header />
      <Statistics raceData={race} isLoading={isLoading} dispatch={dispatch} />
      <Biography bioData={bio} />
      <FamousQuote />
    </>
  );
}

export default App;
