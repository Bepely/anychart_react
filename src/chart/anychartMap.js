//This is the main function of a Chart.

/**
 * @param {Object} container - DOM element in which the chart will be rendered
 * @param {(Object | Array)} data - Data for the chart
 * @returns {Object} Main chart object
 */

export const mapChart = () => {
  return new Promise((resolve, reject) => {
    var svgData;

    fetch("https://cdn.anychart.com/svg-data/seat-map/theater.svg")
      .then((response) => response.text())
      .then((data) => {
        svgData = data;

        var chart = anychart.seatMap([
          { id: "1", value: "Row - 1" },
          { id: "2", value: "Row - 1" },
          { id: "3", value: "Row - 1" },
          { id: "4", value: "Row - 2" },
          { id: "5", value: "Row - 2" },
          { id: "6", value: "Row - 2" },
          { id: "7", value: "Row - 3" },
          { id: "8", value: "Row - 3" },
          { id: "9", value: "Row - 3" },
          { id: "10", value: "Row - 4" },
          { id: "11", value: "Row - 4" },
          { id: "12", value: "Row - 4" },
        ]);

        chart.geoData(svgData);
        chart.padding([70, 20, 50, 20]);

        chart
          .legend()
          .enabled(true)
          .itemsSourceMode("categories")
          .position("right")
          .itemsLayout("vertical");

        var series = chart.getSeries(0);

        series.colorScale(
          anychart.scales.ordinalColor([
            { equal: "Row - 4", color: "#109BC7" },
            { equal: "Row - 3", color: "#109BC7" },
            { equal: "Row - 2", color: "#109BC7" },
            { equal: "Row - 1", color: "#d38d5f" },
          ])
        );

        // Resolve the Promise with the chart object
        resolve(chart);
      })
      .catch((error) => {
        // Reject the Promise with the error
        reject(error);
      });
  });
};
