// load required modules
const express       = require('express');
const morganLogger  = require('morgan');
const bodyParser    = require('body-parser');
const http          = require('http');
const cors          = require('cors');

// import data
const timeline      = require('./data/timeline');
const facebook      = require('./data/facebook');
const twitter       = require('./data/twitter');
const mailchimp     = require('./data/mailchimp');
const europeGEO     = require('./data/europe.geo');
const localChapters = require('./data/localchapters');

// set up the express app
const app = express();

// allow cors
app.use(cors());
app.options('*', cors());

// log requests to the console
app.use(morganLogger('dev'));

// parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// define timeline endpoint
app.get('/timeline', (req, res) => {
    res.status(200).send({
        status: {
            code: 200,
            message: 'OK!'
        },
        data: timeline
    });
});

// define twitter endpoint
app.get('/twitter', (req, res) => {
    res.status(200).send({
        status: {
            code: 200,
            message: 'OK!'
        },
        data: twitter
    });
});

// define facebook endpoint
app.get('/facebook', (req, res) => {
    res.status(200).send({
        status: {
            code: 200,
            message: 'OK!'
        },
        data: facebook
    });
});

// define mailchimp endpoint
app.get('/mailchimp', (req, res) => {
    res.status(200).send({
        status: {
            code: 200,
            message: 'OK!'
        },
        data: mailchimp
    });
});

// define europe geo
app.get('/geo/europe', (req, res) => {
    res.status(200).send({
        status: {
            code: 200,
            message: 'OK!'
        },
        data: europeGEO
    });
});

// define local chapter route
app.get('/local-chapters', (req, res) => {
    res.status(200).send({
        status: {
            code: 200,
            message: 'OK!'
        },
        data: localChapters
    });
});

// define first route
app.use('*', (req, res) => {
    res.status(200).send({
        status: {
            code: 200,
            message: 'OK!'
        },
        message: 'Hello World! Welcome to our little sample backend API.'
    });
});

// define port
const port = parseInt(process.env.PORT, 10) || 8000;
app.set('port', port);

// setup server
const server = http.createServer(app);
server.listen(port);
console.log('Server started on port ' + port + '.');