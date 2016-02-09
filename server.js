'use strict';

let express = require('express'),
    routes = require('./app/routes/index.js');
//import express from 'express';

let app = express();

routes(app);

app.listen(3000, ()=>console.log('Listening on port 3000...'));