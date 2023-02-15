import "./App.css";
import { useEffect } from "react";
import { gantChart } from "./chart/anychartGantt";

function App() {
  //Creating data variable
  const myData = [
    {
      name: "Root",
      children: [
        {
          name: "Parent 1",
          children: [
            {
              name: "Child 1-1",
              actualStart: "2023-02-01",
              actualEnd: "2023-02-02T09:00",
            },
            {
              name: "Child 1-2",
              actualStart: "2023-02-02",
              actualEnd: "2023-02-02T11:00",
            },
            {
              name: "Child 1-3",
              actualStart: "2023-02-01",
              actualEnd: "2023-02-1T09:00",
            },
          ],
        },
        {
          name: "Parent 2",
          children: [
            {
              name: "Child 2-1",
              actualStart: "2023-02-02",
              actualEnd: "2023-02-02T09:00",
            },
            {
              name: "Child 2-2",
              actualStart: "2023-02-02",
              actualEnd: "2023-02-02T21:00",
            },
            {
              name: "Child 2-3",
              actualStart: "2023-02-03",
              actualEnd: "2023-02-04T10:00",
            },
          ],
        },
        {
          name: "Parent 3",
          children: [
            {
              name: "Child 3-1",
              actualStart: "2023-02-01",
              actualEnd: "2023-02-02T15:00",
            },
            {
              name: "Child 3-2",
              actualStart: "2023-02-02",
              actualEnd: "2023-02-03T09:00",
            },
          ],
        },
      ],
    },
  ];

  //Calling useEffect to get chart at the right time
  useEffect(() => {
    //Making a chart instance
    const chart = gantChart("chart_container", myData);

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
