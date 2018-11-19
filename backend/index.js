// load required modules
const express       = require('express');
const morganLogger  = require('morgan');
const bodyParser    = require('body-parser');
const http          = require('http');

// set up the express app
const app = express();

// log requests to the console
app.use(morganLogger('dev'));

// parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// define twitter endpoint
app.get('/twitter', (req, res) => {
    res.status(200).send({
        status: {
            code: 200,
            message: 'OK!'
        },
        data: [1, 2, 3, 4, 4]
    });
});

// define facebook endpoint
app.get('/facebook', (req, res) => {
    res.status(200).send({
        status: {
            code: 200,
            message: 'OK!'
        },
        data: [2, 2, 2, 4, 4]
    });
});

// define mailchimp endpoint
app.get('/mailchimp', (req, res) => {
    res.status(200).send({
        status: {
            code: 200,
            message: 'OK!'
        },
        data: [1, 1, 1, 2, 2]
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