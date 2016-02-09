'use strict';

let moment = require('moment');

function tsHandler() {
    // convert natural language date/time into Date obj
    this.handleTime = (req, res)=>{
        let date = Date.parse(req.params.timestamp);
        if (isNaN(date)){
            res.json({
                'unix': null,
                'natural': null
            });
        } else {
            date = new Date(date);
            res.json({
                'unix': date.getTime(),
                'natural': moment(date).format('MMMM Do YYYY')
            });
        }

    };

};


module.exports = tsHandler;