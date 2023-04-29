export const barChartData = {
  labels: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],
  datasets: [
    {
      label: "Monthly Sales",
      data: [12, 19, 3, 5, 2, 3, 10, 15, 7, 8, 14, 6],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
        "rgba(100, 200, 132, 0.2)",
        "rgba(200, 100, 235, 0.2)",
        "rgba(150, 150, 86, 0.2)",
        "rgba(180, 100, 192, 0.2)",
        "rgba(100, 100, 255, 0.2)",
        "rgba(100, 255, 64, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
        "rgba(100, 200, 132, 1)",
        "rgba(200, 100, 235, 1)",
        "rgba(150, 150, 86, 1)",
        "rgba(180, 100, 192, 1)",
        "rgba(100, 100, 255, 1)",
        "rgba(100, 255, 64, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

export const options = {
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

export const listItems = [
  { id: 1, displayName: "Apple" },
  { id: 2, displayName: "Banana" },
  { id: 3, displayName: "Cherry" },
  { id: 4, displayName: "Date" },
  { id: 5, displayName: "Elderberry" },
  { id: 6, displayName: "Fig" },
  { id: 7, displayName: "Grape" },
  { id: 8, displayName: "Honeydew" },
  { id: 9, displayName: "Iced Jujube" },
  { id: 10, displayName: "Jackfruit" },
];
