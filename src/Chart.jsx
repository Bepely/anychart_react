import { useRef } from "react";
import anychart from "anychart";

const AnyChartPie = () => {
  const chartContainer = useRef(null);

  anychart.onDocumentReady(function () {
    if (chartContainer.current) {
      const chart = anychart.pie();
      chart.data([
        { x: "A", value: 637166 },
        { x: "B", value: 721630 },
        { x: "C", value: 148662 },
        { x: "D", value: 78662 },
        { x: "E", value: 90000 },
      ]);
      chart.container(chartContainer.current);
      chart.draw();
    }
  });

  return (
    <div
      id="container"
      ref={chartContainer}
    />
  );
};

export default AnyChartPie;
