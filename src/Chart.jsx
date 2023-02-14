import React, { useEffect, useRef } from "react";
import anychart from "anychart";

function GanttChart() {
  const chartRef = useRef(null);

  const myData = [
    {
      name: "Root",
      children: [
        {
          name: "Parent 1",
          children: [
            { name: "Child 1-1", value: 150000000 },
            { name: "Child 1-2", value: 45000000 },
            { name: "Child 1-3", value: 3200000 },
          ],
        },
        {
          name: "Parent 2",
          children: [
            { name: "Child 2-1", value: 55000000 },
            { name: "Child 2-2", value: 10600000 },
            { name: "Child 2-3", value: 5200000 },
          ],
        },
        {
          name: "Parent 3",
          children: [
            { name: "Child 3-1", value: 21000000 },
            { name: "Child 3-2", value: 9000000 },
          ],
        },
      ],
    },
  ];

  useEffect(() => {
    const chart = anychart.ganttProject();
    chart.data(myData);
    chart.container(chartRef.current);
    chart.draw();
  }, [chartRef.current]);

  return <div ref={chartRef} />;
}

export default GanttChart;
