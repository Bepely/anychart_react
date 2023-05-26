import { useEffect } from "react";
import "./App.css";

// Importing a pure JS function
import { mapChart } from "./chart/anychartMap";

//declare callback function for creating and rendering a chart
function fetchChartAndRender() {
  return mapChart()
    .then((chart) => {
      chart.container("container");
      chart.draw();
      return chart;
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

function App() {
  useEffect(() => {
    const chartPromise = fetchChartAndRender();
    //call the chart update on it's render
    //then dispose duplicate
    return () => {
      chartPromise.then((chart) => chart.dispose());
    };
  }, []);

  return (
    <div className="App">
      <div id="container"></div>
    </div>
  );
}

export default App;
