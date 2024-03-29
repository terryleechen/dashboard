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

function HiLow({ history }: { history: Day[] }) {
  //error in structure of data
  const high: { x: string[]; y: number[]; type: string } = {
    x: [],
    y: [],
    type: "scatter",
  };
  const low: { x: string[]; y: number[]; type: string } = {
    x: [],
    y: [],
    type: "scatter",
  };
  const data: [
    { x: string[]; y: number[]; type: string },
    { x: string[]; y: number[]; type: string }
  ] = [high, low];

  useEffect(() => {
    history.map((day) => {
      high.x.push(day.date);
      high.y.push(day.high);
      low.x.push(day.date);
      low.y.push(day.low);
    });
  }, [history]);

  return (
    <div>
      <Plot
        //use Plotly to create line graphs
        data={[
          {
            x: data[0].x,
            y: data[0].y,
            type: "scatter",
            name: "High",
            line: {
              color: "purple",
            },
          },
          {
            x: data[1].x,
            y: data[1].y,
            type: "scatter",
            name: "Low",
            line: {
              color: "green",
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
          title: "Hi/Low Stock Price",
        }}
        config={{ displayModeBar: false }}
      />
    </div>
  );
}
export default HiLow;
