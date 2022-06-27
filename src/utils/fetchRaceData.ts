import axios, { AxiosResponse } from "axios";
import { RaceDataType, RacesType, StandingsType } from "./interfaces";

export async function fetchRaceData(): Promise<RaceDataType> {
  const standingsData: StandingsType = await fetchStandings();
  const raceData: RacesType = await fetchRaces();
  const poleData: number = await fetchPoles();
  return { standings: standingsData, races: raceData, poles: poleData };
}

const fetchStandings = async (): Promise<StandingsType> => {
  const standingsResponse = await axios.get(
    "https://ergast.com/api/f1/drivers/max_verstappen/driverStandings.json"
  );
  const standingsList =
    standingsResponse.data.MRData.StandingsTable.StandingsLists;
  return organiseStandings(standingsList);
};

const fetchRaces = async (): Promise<RacesType> => {
  const raceResponse = await axios.get(
    "https://ergast.com/api/f1/drivers/max_verstappen/results.json"
  );
  const firstResponse = await axios.get(
    " https://ergast.com/api/f1/drivers/max_verstappen/results/1.json"
  );
  const secondResponse = await axios.get(
    "https://ergast.com/api/f1/drivers/max_verstappen/results/2.json"
  );
  const thirdResponse = await axios.get(
    "https://ergast.com/api/f1/drivers/max_verstappen/results/3.json"
  );
  return organiseRaces(
    raceResponse,
    firstResponse,
    secondResponse,
    thirdResponse
  );
};

const fetchPoles = async (): Promise<number> => {
  const polesResponse = await axios.get(
    "https://ergast.com/api/f1/drivers/max_verstappen/qualifying/1.json"
  );
  const polesList = polesResponse.data.MRData.RaceTable.Races;
  return organisePoles(polesList);
};

function organiseStandings(championshipHistory: any[]): StandingsType {
  let championshipWins = 0;
  let totalPoints = 0;
  for (const seasonData of championshipHistory) {
    const season = seasonData.DriverStandings[0];
    season.position === "1" && championshipWins++;
    totalPoints += parseInt(season.points);
  }
  return { championshipWins: championshipWins, totalPoints: totalPoints };
}

function organiseRaces(
  raceHistory: AxiosResponse<any, any>,
  firstHistory: AxiosResponse<any, any>,
  secondHistory: AxiosResponse<any, any>,
  thirdResponse: AxiosResponse<any, any>
): RacesType {
  let numRaces = raceHistory.data.MRData.total;
  let numFirsts = firstHistory.data.MRData.total;
  let numSeconds = secondHistory.data.MRData.total;
  let numThirds = thirdResponse.data.MRData.total;
  const races = raceHistory.data.MRData.RaceTable.Races;
  const debut = `${races[0].season}, ${races[0].raceName}`;
  return {
    races: parseInt(numRaces),
    raceWins: parseInt(numFirsts),
    podiums: parseInt(numFirsts) + parseInt(numSeconds) + parseInt(numThirds),
    debut: debut,
  };
}

function organisePoles(poleHistory: any[]): number {
  let poles = 0;
  for (const race of poleHistory) {
    race.QualifyingResults[0].position === "1" && poles++;
  }
  return poles;
}
