import { RaceDataType } from "./interfaces";

interface StatsBoxProps {
  raceData: RaceDataType | null;
}

export function StatsBox({ raceData }: StatsBoxProps): JSX.Element {
  return (
    <div className="statsbox-container">
      <h1 className="statsbox-title">Career Statistics</h1>
      <div className="statsbox-grid-container">
        <h2 className="statxbox-grid-tag">Championship Wins:</h2>
        <h2 className="statsbox-grid-value">
          {raceData?.standings.championshipWins}
        </h2>
        <h2 className="statxbox-grid-tag">Race Wins:</h2>
        <h2 className="statsbox-grid-value">{raceData?.races.raceWins}</h2>
        <h2 className="statxbox-grid-tag">Podiums:</h2>
        <h2 className="statsbox-grid-value">{raceData?.races.podiums}</h2>
        <h2 className="statxbox-grid-tag">Races:</h2>
        <h2 className="statsbox-grid-value">{raceData?.races.races}</h2>
        <h2 className="statxbox-grid-tag">Pole Positions:</h2>
        <h2 className="statsbox-grid-value">{raceData?.poles}</h2>
        <h2 className="statxbox-grid-tag">Total Points:</h2>
        <h2 className="statsbox-grid-value">
          {raceData?.standings.totalPoints}
        </h2>
        <h2 className="statxbox-grid-tag">Debut:</h2>
        <h2 className="statsbox-grid-value">{raceData?.races.debut}</h2>
      </div>
    </div>
  );
}
