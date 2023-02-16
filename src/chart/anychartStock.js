//This is the main function of a Stock Chart.

export const stockChart = (container, data) => {
  // Create data table object
  let table = anychart.data.table();
  table.addData(data);

  //Create Mapping object
  let mapping = table.mapAs({ open: 1, high: 2, low: 3, close: 4 });

  //Create and configurate stock chart instance
  let chart = anychart.stock();
  chart.title("Retrieving current yAxis value by click");
  chart.crosshair().displayMode("float");

  //Create chart plot
  let plot = chart.plot(0);

  //Create series
  let ohlcSeries = plot.ohlc(mapping);
  ohlcSeries.name("Stock Chart Series");

  //Create variable for label value
  let yAxisLabelValue = 0;

  //Handling click event
  plot.listen("click", (e) => {
    let label = plot.crosshair().yLabel();
    let labelValue = label.text();
    yAxisLabelValue = labelValue;
    console.log(yAxisLabelValue);
    chart.title().text("Y Axis label: " + yAxisLabelValue);
  });

  //Configure and draw chart
  chart.container(container);
  chart.draw();
  return chart;
};
