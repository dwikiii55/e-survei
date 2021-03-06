import React from "react";
import { Line } from "react-chartjs-2";

const data = {
  labels: ["1", "2", "3", "4", "5", "6"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 3, 5, 2, 3],
      fill: false,
      backgroundColor: "#394867",
      borderColor: "#9BA4B4",
    },
  ],
};

const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};

const ChartPertumbuhan = () => (
  <>
    <div className="header">
      <h1 className="title">Line Chart</h1>
      <div className="links"></div>
    </div>
    <Line data={data} options={options} />
  </>
);

export default ChartPertumbuhan;
