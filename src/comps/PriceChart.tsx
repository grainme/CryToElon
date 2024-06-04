import React from "react";
import { Line } from "react-chartjs-2";
import "chart.js/auto";
import "chartjs-adapter-date-fns"; // Import the date adapter

// Function to generate random data
const generateData = (numPoints: number) => {
  const labels = [];
  const bitcoinData = [];
  const ethereumData = [];

  const startDate = new Date("2024-06-01T00:00:00Z");

  for (let i = 0; i < numPoints; i++) {
    const date = new Date(startDate.getTime() + i * 60000); // Add i minutes
    labels.push(date.toISOString());

    // Generate random data for Bitcoin and Ethereum
    bitcoinData.push(8000 + Math.random() * 5000); // Random value between 8000 and 13000
    ethereumData.push(200 + Math.random() * 6000); // Random value between 2300 and 2400
  }

  return { labels, bitcoinData, ethereumData };
};

const VolumeWeightedAveragePriceChart = () => {
  const { labels, bitcoinData, ethereumData } = generateData(40); // Generate data for 1440 minutes (1 day)

  const data = {
    labels: labels,
    datasets: [
      {
        label: "Bitcoin",
        data: bitcoinData,
        borderColor: "#6a994e",
        fill: false,
      },
      {
        label: "Ethereum",
        data: ethereumData,
        borderColor: "#bc4749",
        fill: false,
      },
    ],
  };

  const options = {
    scales: {
      x: {
        display: false, // Hide the x-axis labels
        type: "time",
        time: {
          unit: "minute",
          tooltipFormat: "PPpp",
        },
        title: {
          display: true,
          text: "Time",
        },
      },
      y: {
        title: {
          display: false,
          text: "Value",
        },
      },
    },
    plugins: {
      legend: {
        display: false, // Hide the legend
      },
    },
  };

  return <Line data={data} options={options} />;
};

export default VolumeWeightedAveragePriceChart;
