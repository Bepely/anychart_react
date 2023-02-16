import "./App.css";
import { useEffect } from "react";

//Importing a pure JS function
import { sunburst } from "./chart/anychart_sunburst";

function App() {
  //Creating data variable
  const myData = [
    {
      name: "Company A",
      children: [
        {
          name: "Technical",
          children: [
            { name: "Team Leaders" },
            { name: "Architects" },
            { name: "Developers" },
            { name: "Testers" },
          ],
        },
        {
          name: "Sales",
          children: [{ name: "Analysts" }, { name: "Executives" }],
        },
        { name: "HR" },
        { name: "Management" },
      ],
    },
  ];

  //Calling useEffect to get chart at the right time
  useEffect(() => {
    //Making a chart instance
    const chart = sunburst("chart_container", myData);

    //Preventing duplicate renders
    return () => chart.dispose();
  }, []);

  return (
    <div className="App">
      <div id="chart_container"></div>
      <button id="pngBtn">Save chart as PNG</button>
    </div>
  );
}

export default App;
