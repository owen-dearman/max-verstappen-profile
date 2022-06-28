import { CareerStatistcs } from "./interfaces";

interface LeaderboardProps {
  data: CareerStatistcs;
}

export function Leaderboard({ data }: LeaderboardProps): JSX.Element {
  return (
    <section className="leaderboard-container">
      <div className="leaderboard-title">CAREER STATISTICS</div>
      {data.map((stat) => {
        return (
          <div key={stat.id} className="driverContainer">
            <div className="driverLeft">
              <div className="driverPosition">{stat.id}</div>
              <span className={`line colour${stat.id % 6}`}></span>
              <div className="driverName">{stat.title}</div>
            </div>
            <div className="driverRight">{stat.value}</div>
          </div>
        );
      })}
    </section>
  );
}
