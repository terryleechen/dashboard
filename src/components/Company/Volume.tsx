import { useEffect } from "react";
import Plot from "react-plotly.js";

type Day = {
  id: number;
  symbol: string;
  date: string;
  close: number;
  high: number;
  low: number;
  volume: number;
};

function Volume({ history }: { history: Day[] }) {
  const volume: { x: string[]; y: number[]; type: string } = {
    x: [],
    y: [],
    type: "scatter",
  };

  useEffect(() => {
    history.map((day) => {
      volume.x.push(day.date);
      volume.y.push(day.volume);
    });
  }, [history]);

  return (
    <div>
      <Plot
        //use Plotly to create line graphs
        data={[
          {
            x: volume.x,
            y: volume.y,
            type: "scatter",
            name: "High",
            line: {
              color: "organge",
            },
          },
        ]}
        layout={{
          height: 245,
          width: 650,
          xaxis: {
            linewidth: 1,
            fixedrange: true,
          },
          yaxis: {
            linecolor: "#636363",
            fixedrange: true,
          },
          title: "Daily Volume",
        }}
        config={{ displayModeBar: false }}
      />
    </div>
  );
}
export default Volume;
