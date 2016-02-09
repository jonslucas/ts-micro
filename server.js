'use strict';

let express = require('express'),
    routes = require('./app/routes/index.js');
//import express from 'express';

let app = express();

routes(app);
let port = process.env.PORT || 3000;
app.listen(port, ()=>console.log('Listening on port 3000...'));