(()=>{
    "use strict";
    const express = require('express'),
        routes = require('../routes/index.js');
//import express from 'express';

    const app = express();

    routes(app);

    app.use('/public', express.static(process.cwd() + '/public'));

    module.exports = app;
})();