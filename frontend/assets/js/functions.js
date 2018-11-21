// define function to add a dataset to the chart
function addDataSet (chart, data, label, color) {
    let datasets = chart.data.datasets;
    let dataset = {
        label:           label,
        backgroundColor: color,
        borderColor:     color,
        data:            data,
        fill:            false,
        borderWidth: 1
    };
    chart.data.datasets = [
        ...datasets,
        dataset
    ];
    chart.update();
}

// define function to add a datapoint to the map
function addDataPoint (context, projection, longitude, latitude, size) {

    if (size > 25) size = 25;

    context.append("circle")
        .attr("class","circle")
        .attr("cx", projection([longitude, latitude])[0])
        .attr("cy", projection([longitude, latitude])[1])
        .attr("r", size);
}