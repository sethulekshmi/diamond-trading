'use strict';

let tracing = require(__dirname+'/../../../../tools/traces/trace.js');
let participants = require(__dirname+'/../../participants_info.js');

let read = function(req, res)
{
    tracing.create('ENTER', 'GET blockchain/participants/cutters', {});

    if(!participants.participants_info.hasOwnProperty('cutters'))
	{
        res.status(404);
        let error = {};
        error.message = 'Unable to retrieve cutters';
        error.error = true;
        tracing.create('ERROR', 'GET blockchain/participants/cutters', error);
        res.send(error);
    }
    else
	{
        tracing.create('EXIT', 'GET blockchain/participants/cutters', {'result':participants.participants_info.cutters});
        res.send({'result':participants.participants_info.cutters});
    }
};
exports.read = read;
