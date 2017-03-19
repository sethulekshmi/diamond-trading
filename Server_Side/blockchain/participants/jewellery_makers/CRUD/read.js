'use strict';

let tracing = require(__dirname+'/../../../../tools/traces/trace.js');
let participants = require(__dirname+'/../../participants_info.js');

let read = function(req, res)
{
    tracing.create('ENTER', 'GET blockchain/participants/jewellery_makers', {});

    if(!participants.participants_info.hasOwnProperty('jewellery_makers'))
    {
        res.status(404);
        let error = {};
        error.message = 'Unable to retrieve jewellery_makers';
        error.error = true;
        tracing.create('ERROR', 'GET blockchain/participants/jewellery_makers', error);
        res.send(error);
    }
    else
    {
        tracing.create('EXIT', 'GET blockchain/participants/jewellery_makers', {'result':participants.participants_info.jewellery_makers});
        res.send({'result':participants.participants_info.jewellery_makers});
    }

};
exports.read = read;
