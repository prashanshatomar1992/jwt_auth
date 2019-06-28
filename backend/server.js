/**
 * use link
 * https://appdividend.com/2018/02/07/node-js-jwt-authentication-tutorial-scratch/
 */
const express = require('express')
const app = express();
const bodyParser = require('body-parser');
const user = require('./routes/user.route');
const mongoose = require('mongoose');
const fs = require('fs');
var mongodbURL = 'mongodb://localhost:27017/jwtauth';
const User = require('./models/user.model');

// to allow cross origin request add cors
var cors = require('cors')
/**
 * Enabling HTTPS to express js
 * Reference link --> https://stackoverflow.com/questions/11744975/enabling-https-on-express-js
 */
const https = require('https');
var key = fs.readFileSync(__dirname + '/certs/selfsigned.key');
var cert = fs.readFileSync(__dirname + '/certs/selfsigned.crt');
var options = { key: key, cert: cert };
/***************** Enabling HTTPS to express js  END********************************************************* */
/**
 * Mongodb connection without ssl
 */
// mongoose.connect('mongodb://localhost/jwtauth')
/**
 * mongodb connection with ssl
 */
var mongodbOptions = { 'server': { 'sslValidate': false, 'sslCA': fs.readFileSync(__dirname + '/js/mongodb.pem') } };
mongoose.connect(mongodbURL + '?ssl=true', mongodbOptions);

var PORT = 3001;

mongoose.connection.on('error', function (err) {
    console.log('Error: Could not connect to MongoDB. Did you forget to run `mongod`?');
    mongoose.disconnect();
});
mongoose.connection.on('connected', function () {
    console.log('MongoDB connected!');
});

app.use('/static', express.static('public'))
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors())

app.get('/checking', function (req, res) {
    res.json({ "tuorial": "Welcome to Prashansha's tutorial    1" })
});

app.use('/user', user);

/**HTTPS server creating here */
var server = https.createServer(options, app);
var io = require('socket.io')(server);
io.on('connection', function (client) {
    console.log('Client connected...');
    client.on('join', function (data) {
        console.log(data);

        client.emit('messages', 'Hello from server');
    });
})
app.get('/', function (req, res) {
    User.find({})
    .exec()
    .then(function (user) {
        console.log(user)
        return res.status(200).json({
            success: 'Get user data successfully executed',
            payload: user
        });
    })
    .catch(error => {
        res.status(500).json({
            error: error
        })
    })
    // res.json({ "tuorial": "Welcome to Prashansha's tutorial   2" })
});

server.listen(PORT, () => {
    console.log('Server is running on Port', PORT);
});
// PORT =3002
// app.listen(PORT, () => {
//     console.log('Server is running on Port', PORT);
// });

