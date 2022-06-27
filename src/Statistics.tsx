import { Dispatch, useEffect } from "react";
import { fetchBio } from "./utils/fetchBio";
import { fetchRaceData } from "./utils/fetchRaceData";
import { RaceDataType } from "./utils/interfaces";
import { Action } from "./utils/StateAndAction";
import { StatsBox } from "./StatsBox";

interface StatisticsProps {
  isLoading: boolean;
  raceData: RaceDataType | null;
  dispatch: Dispatch<Action>;
}

export function Statistics({
  isLoading,
  raceData,
  dispatch,
}: StatisticsProps): JSX.Element {
  useEffect(() => {
    async function fetchAllData(dispatch: Dispatch<Action>) {
      dispatch({ type: "request" });
      const bioData = await fetchBio();
      const raceData = await fetchRaceData();
      dispatch({ type: "fetchData", raceData: raceData, bioData: bioData });
    }
    fetchAllData(dispatch);
  }, [dispatch]);

  return (
    <section>
      {isLoading ? <h1>Data Loading</h1> : <StatsBox raceData={raceData} />}
    </section>
  );
}
