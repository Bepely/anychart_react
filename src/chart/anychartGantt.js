export const gantChart = (container, data) => {
  // Creates Gantt project chart.
  var chart = anychart.ganttProject();
  chart.data(data, "as-tree");
  chart.title("Creating Gantt chart with React and Anychart");
  chart.container(container);
  chart.draw();
  return chart;
};
