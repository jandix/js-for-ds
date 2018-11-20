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
