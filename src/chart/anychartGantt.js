//This is the main function of a Chart.

/**
 * @param {Object} container - DOM element in which the chart will be rendered
 * @param {(Object | Array)} data - Data for the chart
 * @returns {Object} Main chart object
 */

export const mainChart = (container, data) => {
  // Create Gantt project chart.
  var legend = anychart.standalones.legend();

  //enable HTML in the legend items
  legend.useHtml(true);

  legend.items(data);

  // Set container for the chart
  legend.container(container);

  // Draw the chart in the container
  legend.draw();

  //Return Chart object
  return legend;
};
