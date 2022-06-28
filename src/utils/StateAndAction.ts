import {
  BioType,
  CareerStatistcsType,
  ChampionshipHistoryType,
} from "./interfaces";

export type State = {
  bio: BioType | null;
  careerStatistics: CareerStatistcsType[] | null;
  graphData: ChampionshipHistoryType | null;
  isLoading: boolean;
};

export type Action =
  | { type: "request" }
  | {
      type: "fetchData";
      careerStatistics: CareerStatistcsType[];
      bioData: BioType;
      graphData: ChampionshipHistoryType;
    };
export const emptyState: State = {
  isLoading: true,
  bio: null,
  careerStatistics: null,
  graphData: null,
};
