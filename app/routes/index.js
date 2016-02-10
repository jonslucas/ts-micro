(()=> {
    'use strict';

    let tsHandler = require(process.cwd() + '/app/controllers/timeStampHandler.server.js');

    module.exports = (app)=> {
        let tsHdlr = new tsHandler();
        app.route('/')
            .get((req, res)=> {
                res.sendFile(process.cwd() + '/public/index.html');
            });
        app.route('/:timestamp')
            .get(tsHdlr.handleTime);
    };
})();