//This is the main function of a Chart.

/**
 * @param {Object} container - DOM element in which the chart will be rendered
 * @param {(Object | Array)} data - Data for the chart
 * @returns {Object} Main chart object
 */

export const gantChart = (container, data) => {
  // Create Gantt project chart.
  var chart = anychart.ganttProject();

  // Set the data for the chart
  chart.data(data, "as-tree");

  // Set title for the chart
  chart.title("Creating Gantt chart with React and Anychart");

  // Set correct Zoom level
  chart.fitAll();

  // Set container for the chart
  chart.container(container);

  // Draw the chart in the container
  chart.draw();

  //Return Chart object
  return chart;
};
