'use strict';

module.exports = (app)=> {
    app.route('/')
        .get((req, res)=>{
            res.sendFile(process.cwd() + '/public/index.html');
        });
    app.route('/ts/:timestamp')
        .get();
};
