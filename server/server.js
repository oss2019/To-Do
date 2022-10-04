const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv').config();
const dbConnect = require('./dbConnect/db');
const app = express();

app.use(bodyParser.json());

dbConnect();
