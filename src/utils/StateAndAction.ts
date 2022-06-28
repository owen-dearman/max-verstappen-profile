import {
  BioType,
  CareerStatistcs,
  championshipHistoryType,
} from "./interfaces";

export type State = {
  bio: BioType | null;
  careerStatistics: CareerStatistcs | null;
  graphData: championshipHistoryType | null;
  isLoading: boolean;
};

export type Action =
  | { type: "request" }
  | {
      type: "fetchData";
      careerStatistics: CareerStatistcs;
      bioData: BioType;
      graphData: championshipHistoryType;
    };
export const emptyState: State = {
  isLoading: true,
  bio: null,
  careerStatistics: null,
  graphData: null,
};
