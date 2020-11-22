import { getGlobalData, prepare } from "./data-service";
import Chart from "chart.js";

var ctx = document.getElementById("myChart").getContext("2d");

const drawData = (data) => {
  const preparedData = prepare(data);

  var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: "line",

    // The data for our dataset
    data: {
      labels: preparedData.map((item) => item.Date.toDateString()),
      datasets: [
        {
          label: "COVID-19 Global Deaths",
          backgroundColor: "red",
          borderColor: "red, 0.3",
          data: preparedData.map((item) => {
            return {
              x: item.Date,
              y: item.Deces
            };
          })
        },
        {
          label: "COVID-19 Global Infections",
          backgroundColor: "blue, 0.4",
          borderColor: "blue",
          data: preparedData.map((item) => {
            return {
              x: item.Date,
              y: item.Infection
            };
          })
        },
        {
          label: "COVID-19 Global Guerisons",
          backgroundColor: "green, 0.5",
          borderColor: "green",
          data: preparedData.map((item) => {
            return {
              x: item.Date,
              y: item.Guerisons
            };
          })
        }
      ]
    },

    // Configuration options go here
    options: {
      scales: {
        xAxes: [
          {
            type: "time",
            time: {
              unit: "day"
            }
          }
        ]
      }
    }
  });
};

getGlobalData().then((data) => {
  drawData(data);
});
