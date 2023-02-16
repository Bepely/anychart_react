//This example shows how to save a chart as an image

export const sunburst = (container, data) => {
  // Create sunburst chart.
  var chart = anychart.sunburst(data, "as-tree");
  chart.background().fill("transparent");

  // Listen to button click
  var btn = document.getElementById("pngBtn");
  btn.addEventListener("click", () => {
    chart.saveAsPng({
      width: 500,
      height: 500,
      quality: 0.3,
      filename: "My Chart PNG",
    });
  });
  chart.title("Download PNG chart with text");
  chart.container(container);
  chart.draw();
  return chart;
};
