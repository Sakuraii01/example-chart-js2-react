const useViewModel = () => {
  const DATA_COUNT = 8;
  const NUMBER = { count: DATA_COUNT, min: 250, max: 1000 };
  const generateRandomData = () => {
    const data = [];
    for (let i = 0; i < DATA_COUNT; i++) {
      data.push(
        Math.floor(Math.random() * (NUMBER.max - NUMBER.min + 1)) + NUMBER.min
      );
    }
    console.log(data);
    return data;
  };
  const labels = [
    "30 ม.ค",
    "31 ม.ค",
    "1 ก.พ",
    "2 ก.พ",
    "4 ก.พ",
    "5 ก.พ",
    "6 ก.พ",
    "7 ก.พ",
  ];
  const options = {
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
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Dataset 1",
        data: generateRandomData(),
        backgroundColor: "#88BBB6",
        borderRadius: 7,
        borderSkipped: false,
      },
      {
        label: "Dataset 2",
        data: generateRandomData(),
        backgroundColor: "#E5F1F0",
        borderRadius: 7,
        borderSkipped: false,
      },
    ],
  };

  return {
    generateRandomData,
    data,
    options,
  };
};
export default useViewModel;
