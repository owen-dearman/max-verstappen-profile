import { RaceDataType } from "./utils/interfaces";
import { StatsBox } from "./StatsBox";

interface StatisticsProps {
  raceData: RaceDataType | null;
}

export function Statistics({ raceData }: StatisticsProps): JSX.Element {
  return (
    <section>
      <StatsBox raceData={raceData} />
    </section>
  );
}
