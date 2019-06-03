'use strict'

let express = require('express');
let bodyParser = require('body-parser');
let routerTesto = require('./routes/testRoutes');

/*  AHORITA VEMOS MONGOOSE, PERENSE
let mongoose = require('mongoose');

let db = mongoose.connect(`mongodb://${process.env.mongo_url}/${process.env.mongo_db}`,{useNewUrlParser: true});
console.log(new Date().toUTCString()+`# MONGO: mongodb://${process.env.mongo_user}:${process.env.mongo_pass}@${process.env.mongo_url}/${process.env.mongo_db}`);
*/

const app = express();
app.use(bodyParser.json());

app.use('/testo',routerTesto);

let server = app.listen(process.env.port|3000,()=>{
    console.log(new Date().toUTCString()+`# SERVIDOR: http://localhost:${process.env.port|3000}`)
});

module.exports = server;