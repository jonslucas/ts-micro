(()=> {
    'use strict';

    let moment = require('moment');

    function tsHandler() {
        // convert natural language date/time into Date obj
        this.handleTime = (req, res)=> {
            let timestamp = req.params.timestamp;
            let date = Date.parse(timestamp);
            if (isNaN(date)) {
                // in unable to parse, i.e. either a unix time or invalid
                if (timestamp.match(/[^\d]+/)) {
                    // param was invalid

                    res.json({
                        'unix': null,
                        'natural': null
                    });
                } else {
                    // param was a unix time string;
                    // don't forget to convert sec to ms
                    date = new Date(parseInt(timestamp) * 1000);

                }

            } else {
                // param was natural language date
                date = new Date(date);

            }
            // don't for get to convert ms to sec
            res.json({
                'unix': date.getTime() / 1000,
                'natural': moment.utc(date).format('MMMM Do, YYYY')
            });
        };

    };


    module.exports = tsHandler;
})();