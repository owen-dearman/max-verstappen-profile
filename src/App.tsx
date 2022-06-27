import { useReducer } from "react";
import { Header } from "./Header";
import { reducerFunction } from "./reducerFunction";
import { emptyState } from "./StateAndAction";
import { Statistics } from "./Statistics";

function App(): JSX.Element {
  const [fullState, dispatch] = useReducer(reducerFunction, emptyState);
  return (
    <>
      <Header />
      <Statistics data={fullState} dispatch={dispatch} />
    </>
  );
}

export default App;
