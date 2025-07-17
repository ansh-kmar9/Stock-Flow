// DoughnutChart.js;
import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

// DoughnoutChart.js
export const DoughnutChart = ({ data, options }) => {
  return (
    <Doughnut
      data={data}
      options={{
        ...options,
        responsive: true,
        maintainAspectRatio: false,
      }}
    />
  );
};
