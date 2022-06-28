export interface BioType {
  name: string;
  dob: string;
  nationality: string;
  num: number;
  code: string;
  info: string;
}

export type RaceDataType = {
  standings: StandingsType;
  races: RacesType;
  poles: number;
};

export type StandingsType = {
  championshipWins: number;
  totalPoints: number;
  championshipHistory: ChampionshipHistoryType;
};

export type ChampionshipHistoryType = {
  years: number[];
  positions: number[];
  wins: number[];
};

export type RacesType = {
  races: number;
  raceWins: number;
  podiums: number;
  debut: string;
};

export interface LinkType {
  id: number;
  title: string;
  url: string;
}

export type CareerStatistcsType = {
  id: number;
  title: string;
  value: number;
};
