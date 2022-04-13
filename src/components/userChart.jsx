import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import PropTypes from "prop-types";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const UserChart = ({ data }) => {
  return (
    <Bar
      options={{
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: "Users album chart",
          },
        },
      }}
      data={data}
    />
  );
};

UserChart.prototype = {
  data: PropTypes.object.isRequired,
};
export default UserChart;
