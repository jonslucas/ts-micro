(()=> {
    'use strict';

    const moment = require('moment');
    const parseDate = (date)=>{
        return {
            'unix': date.getTime() /1000,
            'natural':moment.utc(date).format('MMMM Do, YYYY')
        };
    };

    function tsHandler() {
        // convert natural language date/time into Date obj
        this.handleTime = (req, res)=> {
            const timestamp = req.params.timestamp;
            const date = Date.parse(timestamp);
            if (isNaN(date)) {
                // in unable to parse, i.e. either a unix time or invalid
                if (timestamp.match(/[^\d]+/)) {
                    // param was invalid

                    res.json({
                        'unix': null,
                        'natural': null
                    });
                    res.end();
                } else {
                    // param was a unix time string;
                    // don't forget to convert sec to ms
                    res.json(parseDate(new Date(parseInt(timestamp) * 1000)));

                }

            } else {
                // param was natural language date
                res.json(parseDate(new Date(date)));

            }

        };

    }


    module.exports = tsHandler;
})();