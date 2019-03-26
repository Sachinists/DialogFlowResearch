'use strict';

const
    express = require('express'),
    bodyParser = require('body-parser'),
    http = require('http'),
    app = express();

require('dotenv').config()

var response = require('./response');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/webhook', (req, res) => {
    console.log("IN WEBHOOK POST");
    let body = req.body;
    console.log(JSON.stringify(body));
    res.setHeader('Content-Type','application/json');
    var r = new response("My name is Debjyoti Pandit","My name is Debjyoti Pandit","GunDescriptions");
    console.log(JSON.stringify(r));
    res.status(200).send(JSON.stringify(r));
});

app.get('/webhook', (req, res) => {
    console.log("IN WEBHOOK GET");
    res.status(200).send("Hello World");
});

app.listen(process.env.PORT || 1337, () => console.log('webhook is listening to port: '+process.env.PORT || 1337));