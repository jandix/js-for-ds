// setup map box container height
$lineChartContainer = $('div#chart-container');
$mapContainer       = $('div#map-container');
$mapContainer.height($lineChartContainer.height());

// resize map card if window size changes
$(window).on('resize', function () {
    $mapContainer.height($lineChartContainer.height());
});

// define size properties (does not matter but needed for calculations)
var w = 1200;
var h = 600;

// init map
var svg = d3.select('div#lc-map')
    .append("svg")
    .attr("preserveAspectRatio", "xMinYMin meet")
    .style("background-color","#c9e8fd")
    .attr("viewBox", "0 0 " + w + " " + h)
    .classed("svg-content", true);

// init projection
var projection = d3.geoMercator()
    .translate([w/2, h/2])
    .scale(2500).center([11,51]);

// init projection path
var path = d3.geoPath()
    .projection(projection);

// init country container
var countries = svg.append('g')
    .attr('class', 'countries');

// init circles container
var circles = svg.append('g')
    .attr('class', 'circles');

// get map data and plot map
$.get('https://api.correlaid.org/geo/europe')
    .done(function (response) {
        var europe = response.data.features;
        countries.selectAll('path')
            .data(europe)
            .enter()
            .append('path')
            .attr('class', 'country')
            .attr('d', path);
    });

// initialize 'Konstanz' local chapter
addDataPoint(circles, projection, 9.1732384, 47.6779496, 10);


// YOUR CODE GOES BETWEEN THIS COMMENTS
$.get('https://api.correlaid.org/local-chapters')
    .done(function (response) {
        response.data.forEach(function (city) {
            var baseURL = 'https://nominatim.openstreetmap.org/search/';
            var params = {
                city: city.city,
                country: city.country,
                format: 'json'
            };
            $.get(baseURL, params)
                .done(function (response) {
                    addDataPoint(circles, projection, response[0].lon, response[0].lat, city.size);
                });
        });
    });
// YOUR CODE GOES BETWEEN THIS COMMENTS
