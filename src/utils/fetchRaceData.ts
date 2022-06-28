import axios, { AxiosResponse } from "axios";
import { RaceDataType, RacesType, StandingsType } from "./interfaces";

export async function fetchRaceData(): Promise<RaceDataType> {
  const standingsData: StandingsType = await fetchStandings();
  const raceData: RacesType = await fetchRaces();
  const poleData: number = await fetchPoles();
  return { standings: standingsData, races: raceData, poles: poleData };
}

//Fetch all required data

const fetchStandings = async (): Promise<StandingsType> => {
  const standingsResponse = await axios.get(
    "https://ergast.com/api/f1/drivers/max_verstappen/driverStandings.json"
  );
  return organiseStandings(standingsResponse);
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
    "https://ergast.com/api/f1/drivers/max_verstappen/grid/1/results.json"
  );
  return organisePoles(polesResponse);
};

//Retrieve required data from Axios responses

function organiseStandings(response: AxiosResponse<any, any>): StandingsType {
  let yearsActive = [];
  let championshipPositions = [];
  let raceWins = [];
  let championshipWins = 0;
  let totalPoints = 0;
  const championshipHistory =
    response.data.MRData.StandingsTable.StandingsLists;
  for (const seasonData of championshipHistory) {
    //add for graph data
    yearsActive.push(parseInt(seasonData.season));
    const season = seasonData.DriverStandings[0];
    const position = season.position;
    //add for graph data
    championshipPositions.push(parseInt(position));
    //add for graph data
    raceWins.push(parseInt(season.wins));
    //add to championship wins
    position === "1" && championshipWins++;
    //add up points
    totalPoints += parseInt(season.points);
  }
  return {
    championshipWins: championshipWins,
    totalPoints: totalPoints,
    championshipHistory: {
      years: yearsActive,
      positions: championshipPositions,
      wins: raceWins,
    },
  };
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
  //create debut string
  const debut = `${races[0].season}, ${races[0].raceName}`;
  return {
    races: parseInt(numRaces),
    raceWins: parseInt(numFirsts),
    podiums: parseInt(numFirsts) + parseInt(numSeconds) + parseInt(numThirds),
    debut: debut,
  };
}

function organisePoles(response: AxiosResponse<any, any>): number {
  const poles = response.data.MRData.total;
  return parseInt(poles);
}
