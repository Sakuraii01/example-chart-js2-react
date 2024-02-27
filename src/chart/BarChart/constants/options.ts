export const options = {
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
  },
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    x: {
      stacked: true,
      grid: {
        display: false,
      },
      border: {
        display: false,
      },
    },
    y: {
      stacked: false,
      ticks: {
        stepSize: 250,
      },
      border: {
        dash: [10, 10],
        display: false,
      },
    },
  },
  scaleLineColor: "white",
  barPercentage: 1,
  categoryPercentage: 0.6,
};
