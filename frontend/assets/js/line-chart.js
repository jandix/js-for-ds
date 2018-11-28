// init api base URL
var baseURL = 'https://api.correlaid.org';

// get canvas context
var ctx = document.getElementById("sampleChart").getContext('2d');

// init empty datasets
var data = {
    labels: [],
    datasets: []
};

// init options
var options =  {
    responsive: true,
    title: {
        display: false
    },
    tooltips: {
        mode: 'index',
        intersect: false,
    },
    hover: {
        mode: 'nearest',
        intersect: true
    },
    elements: {
        line: {
            tension: 0, // disables bezier curves
        }
    }
};

// init line chart
var lineChart = new Chart(ctx, {
    type: 'line',
    data: data,
    options: options
});

// x axis labels
$.get(baseURL + '/timeline')
    .done(function (response) {
        lineChart.data.labels = response.data;
    });

// get facebook data
$.get(baseURL + '/facebook')
    .done(function (response) {
        addDataSet(lineChart, response.data, 'Facebook', '#0e1f56');
    });

// get twitter data
$.get(baseURL + '/twitter')
    .done(function (response) {
        addDataSet(lineChart, response.data, 'Twitter', '#55acee');
    });

// YOUR CODE GOES BETWEEN THIS COMMENTS
$.get(baseURL + '/mailchimp')
    .done(function (response) {
        addDataSet(lineChart, response.data, 'Mailchimp', '#ffa500');
    });
// YOUR CODE GOES BETWEEN THIS COMMENTS
