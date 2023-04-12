import "./App.css";
import { useState, useEffect } from "react";

//Importing a pure JS function
import { mainChart } from "./chart/anychartGantt";

function App() {
  //Creating items state variable
  const [items, setItems] = useState([
    { index: "1", text: 10 },
    { index: "2", text: 12 },
    { index: "3", text: 18 },
    { index: "4", text: 11 },
  ]);

  //Add a new item to the state function
  const addRandomItem = () => {
    const randomValue = Math.floor(Math.random() * 20) + 1;
    const newItem = { index: items.length + 1, text: randomValue };
    setItems((prevItems) => [...prevItems, newItem]);
  };

  //Remove random item from the state function
  const removeRandomItem = () => {
    const randomIndex = Math.floor(Math.random() * items.length);
    setItems((prevItems) => [
      ...prevItems.slice(0, randomIndex),
      ...prevItems.slice(randomIndex + 1),
    ]);
  };

  //Calling useEffect to get chart at the right time
  useEffect(() => {
    //Making a chart instance
    const chart = mainChart("chart_container", items);

    //Preventing duplicate renders
    return () => chart.dispose();
  }, [items]);

  return (
    <div className="App">
      <div>
        <button
          onClick={() => {
            addRandomItem();
          }}
        >
          Add New Random Item
        </button>
        <button
          onClick={() => {
            removeRandomItem();
          }}
        >
          Remove Random Item
        </button>
      </div>

      <div id="chart_container"></div>
    </div>
  );
}

export default App;
