import "./App.css";
import { useEffect } from "react";

function App() {
  //Creating data variable
  const myData = [
    {
      x: "2022-07-26",
      y: "0.29822798232939185",
    },
    {
      x: "2022-08-26",
      y: "0.5",
    },
  ];

  //Calling useEffect to get chart at the right time
  useEffect(() => {
    //Making a chart instance
    const chart = anychart.line();
    chart.data(myData);

    // set the chart title
    chart.title("Sales of the Most Popular Products of ACME Corp.");

    // set the titles of the axes
    chart.xAxis().title("Year");
    chart.yAxis().title("Revenue");

    // draw
    chart.container("chart_container");
    chart.draw();

    //Preventing duplicate renders
    return () => chart.dispose();
  }, []);

  return (
    <div className="App">
      <div id="chart_container"></div>
    </div>
  );
}

export default App;
