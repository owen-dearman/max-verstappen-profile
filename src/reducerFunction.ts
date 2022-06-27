import { Action, State } from "./StateAndAction";

export const reducerFunction = (state: State, action: Action) => {
  switch (action.type) {
    case "request":
      return { ...state, isLoading: true };
    case "fetchData":
      return {
        ...state,
        isLoading: false,
        bio: action.bioData,
        race: action.raceData,
      };
  }
};
