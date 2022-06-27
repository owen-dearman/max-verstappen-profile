import { Dispatch, useEffect } from "react";
import { fetchBio } from "./fetchBio";
import { fetchRaceData } from "./fetchRaceData";
import { Action, State } from "./StateAndAction";

interface StatisticsProps {
    data: State;
    dispatch: Dispatch<Action>;
}

export function Statistics({ data, dispatch }: StatisticsProps): JSX.Element {
    useEffect(() => {
        async function fetchAllData(dispatch: Dispatch<Action>) {
            dispatch({ type: "request" });
            const bioData = await fetchBio();
            const raceData = await fetchRaceData();
            dispatch({ type: "fetchData", raceData: raceData, bioData: bioData });
        }
        fetchAllData(dispatch);
    }, [dispatch]);
    return <section>{data.isLoading && <h1>Data Loading</h1>}</section>;
}
