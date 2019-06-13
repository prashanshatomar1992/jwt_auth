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

/**
 * Mongodb connection without ssl
 */
// mongoose.connect('mongodb://localhost/jwtauth')
/**
 * mongodb connection with ssl
 */
var mongodbOptions = { 'server': { 'sslValidate': false, 'sslCA': fs.readFileSync(__dirname + '/js/mongodb.pem') } };
mongoose.connect(mongodbURL + '?ssl=true', mongodbOptions);

const PORT = 3000;

mongoose.connection.on('error', function (err) {
    console.log('Error: Could not connect to MongoDB. Did you forget to run `mongod`?');
    mongoose.disconnect();
});
mongoose.connection.on('connected', function () {
    console.log('MongoDB connected!');
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/checking', function (req, res) {
    res.json({ "tuorial": "Welcome to Prashansha's tutorial" })
});

app.use('/user', user);

app.listen(PORT, () => {
    console.log('Server is running on Port', PORT);
});

