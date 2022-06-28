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
            marker: { color: "white" },
          },
        ]}
        layout={{
          showlegend: false,
          paper_bgcolor: "rgba(0,0,0,0)",
          plot_bgcolor: "rgba(0,0,0,0)",
          width: window.innerWidth / 2,
          height: 500,
          xaxis: {
            showgrid: false,
            showline: true,
            linecolor: "white",
            linewidth: 2,
            title: { text: "Year" },
            range: [2015, currentYear - 1],
            tickcolor: "white",
            tickfont: { color: "white" },
            titlefont: { color: "white" },
          },
          yaxis: {
            showgrid: false,
            showline: true,
            linecolor: "white",
            linewidth: 2,
            title: { text: "Rank" },
            range: [20, 1],
            dtick: 1,
            tickcolor: "white",
            tickfont: { color: "white" },
            titlefont: { color: "white" },
          },
          title: "Championship Rankings",
          titlefont: { color: "white", size: 40 },
        }}
      />
      <Plot
        config={{ displayModeBar: false, staticPlot: true }}
        data={[
          {
            x: data.years,
            y: data.wins,
            type: "bar",
            marker: { color: "white" },
          },
        ]}
        layout={{
          showlegend: false,
          paper_bgcolor: "rgba(0,0,0,0)",
          plot_bgcolor: "rgba(0,0,0,0)",
          width: window.innerWidth / 2,
          height: 500,
          xaxis: {
            showgrid: false,
            showline: true,
            linecolor: "white",
            linewidth: 2,
            title: { text: "Year" },
            tickcolor: "white",
            tickfont: { color: "white" },
            titlefont: { color: "white" },
          },
          yaxis: {
            showgrid: false,
            showline: true,
            linecolor: "white",
            linewidth: 2,
            title: { text: "No. Wins" },
            dtick: 1,
            tickcolor: "white",
            tickfont: { color: "white" },
            titlefont: { color: "white" },
          },
          title: "Race Wins",
          titlefont: { color: "white", size: 40 },
        }}
      />
    </section>
  );
}
