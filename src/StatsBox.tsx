import { getCurrentYear } from "./utils/getCurrentYear";
import { RaceDataType } from "./utils/interfaces";
import { percentageOf } from "./utils/percentageOf";

interface StatsBoxProps {
  raceData: RaceDataType | null;
}

export function StatsBox({ raceData }: StatsBoxProps): JSX.Element {
  const currentYear = getCurrentYear();
  return (
    <div className="statsbox-container">
      <h1 className="statsbox-title">Career Statistics</h1>
      <div className="grid-container">
        <h2 className="grid-tag">Championship Wins:</h2>
        <h2 className="grid-value">
          {raceData?.standings.championshipWins}
          {percentageOf(
            raceData?.standings.championshipWins,
            raceData?.standings.championshipHistory.years.length
          )}
        </h2>
        <h2 className="grid-tag">Race Wins:</h2>
        <h2 className="grid-value">
          {raceData?.races.raceWins}
          {percentageOf(raceData?.races.raceWins, raceData?.races.races)}
        </h2>
        <h2 className="grid-tag">Podiums:</h2>
        <h2 className="grid-value">
          {raceData?.races.podiums}
          {percentageOf(raceData?.races.podiums, raceData?.races.races)}
        </h2>
        <h2 className="grid-tag">Races:</h2>
        <h2 className="grid-value">{raceData?.races.races}</h2>
        <h2 className="grid-tag">Pole Positions:</h2>
        <h2 className="grid-value">
          {raceData?.poles}
          {percentageOf(raceData?.poles, raceData?.races.races)}
        </h2>
        <h2 className="grid-tag">Total Points (to {currentYear - 1}):</h2>
        <h2 className="grid-value">{raceData?.standings.totalPoints}</h2>
        <h2 className="grid-tag">Debut:</h2>
        <h2 className="grid-value">{raceData?.races.debut}</h2>
      </div>
    </div>
  );
}
