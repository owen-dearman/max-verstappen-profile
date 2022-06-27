import { BioType, RaceDataType } from "./interfaces";

export type State = {
  bio: BioType | null;
  race: RaceDataType | null;
  isLoading: boolean;
};

export type Action =
  | { type: "request" }
  | { type: "fetchData"; raceData: RaceDataType; bioData: BioType };
export const emptyState: State = { isLoading: true, bio: null, race: null };
