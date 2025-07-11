import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

// Register required chart elements
ChartJS.register(ArcElement, Tooltip, Legend);

export default function DoughnutChart({ data }) {
  return <Doughnut data={data} />;
}
