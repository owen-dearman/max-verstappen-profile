import Plot from "react-plotly.js";
import { getCurrentYear } from "./utils/getCurrentYear";
import { championshipHistoryType } from "./utils/interfaces";

interface GraphProps {
  data: championshipHistoryType;
}

export function Graph({ data }: GraphProps) {
  const currentYear = getCurrentYear();
  return (
    <section className="graph-container">
      <Plot
        config={{ displayModeBar: false, staticPlot: true }}
        data={[
          {
            x: data.years,
            y: data.positions,
            type: "scatter",
            mode: "lines",
            marker: { color: "black" },
          },
        ]}
        layout={{
          showlegend: false,
          paper_bgcolor: "rgba(0,0,0,0)",
          plot_bgcolor: "rgba(0,0,0,0)",
          width: window.innerWidth / 2,
          height: 500,
          titlefont: { color: "black" },
          xaxis: {
            showgrid: false,
            showline: true,
            linecolor: "black",
            linewidth: 2,
            title: { text: "Year" },
            range: [2015, currentYear - 1],
            tickcolor: "black",
            tickfont: { color: "black" },
            titlefont: { color: "black" },
          },
          yaxis: {
            showgrid: false,
            showline: true,
            linecolor: "black",
            linewidth: 2,
            title: { text: "Rank" },
            range: [20, 1],
            dtick: 1,
            tickcolor: "black",
            tickfont: { color: "black" },
            titlefont: { color: "black" },
          },
          title: "Championship Rankings",
        }}
      />
      <Plot
        config={{ displayModeBar: false, staticPlot: true }}
        data={[
          {
            x: data.years,
            y: data.wins,
            type: "bar",
            marker: { color: "black" },
          },
        ]}
        layout={{
          showlegend: false,
          paper_bgcolor: "rgba(0,0,0,0)",
          plot_bgcolor: "rgba(0,0,0,0)",
          width: window.innerWidth / 2,
          height: 500,
          titlefont: { color: "black" },
          xaxis: {
            showgrid: false,
            showline: true,
            linecolor: "black",
            linewidth: 2,
            title: { text: "Year" },
            tickcolor: "black",
            tickfont: { color: "black" },
            titlefont: { color: "black" },
          },
          yaxis: {
            showgrid: false,
            showline: true,
            linecolor: "black",
            linewidth: 2,
            title: { text: "No. Wins" },
            dtick: 1,
            tickcolor: "black",
            tickfont: { color: "black" },
            titlefont: { color: "black" },
          },
          title: "Race Wins",
        }}
      />
    </section>
  );
}
