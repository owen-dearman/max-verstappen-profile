import { useReducer } from "react";
import { Header } from "./Header";
import { reducerFunction } from "./reducerFunction";
import { emptyState } from "./StateAndAction";
import { Statistics } from "./Statistics";

function App(): JSX.Element {
  const [{ isLoading, race }, dispatch] = useReducer(
    reducerFunction,
    emptyState
  );
  return (
    <>
      <Header />
      <Statistics raceData={race} isLoading={isLoading} dispatch={dispatch} />
    </>
  );
}

export default App;
