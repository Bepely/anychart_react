//This is the main function of a Gantt Chart. 
//All of the appereance settings should be done here

export const gantChart = (container, data) => {
  // Creates Gantt project chart.
  var chart = anychart.ganttProject();
  chart.data(data, "as-tree");
  chart.title("Creating Gantt chart with React and Anychart");
  chart.container(container);
  chart.draw();
  return chart;
};
