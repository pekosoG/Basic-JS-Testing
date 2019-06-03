'use strict'

let express = require('express');
const routerTesto = express.Router();
let moduleTesto = require('../modules/testoModule');

routerTesto.get('/',moduleTesto.getTests);

module.exports = routerTesto;