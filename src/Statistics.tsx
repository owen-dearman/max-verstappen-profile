import { useEffect } from "react";
import { fetchBio } from "./fetchBio";
import { fetchRaceData } from "./fetchRaceData";

export function Statistics() {
  useEffect(() => {
    async function fetchAllData() {
      const bioData = await fetchBio();
      const raceData = await fetchRaceData();
    }
    fetchAllData();
  }, []);
  return <div></div>;
}
