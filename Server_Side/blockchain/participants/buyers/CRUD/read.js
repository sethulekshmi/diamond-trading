'use strict';

let tracing = require(__dirname+'/../../../../tools/traces/trace.js');
let participants = require(__dirname+'/../../participants_info.js');

let read = function(req, res)
{
    tracing.create('ENTER', 'GET blockchain/participants/buyers', {});

    if(!participants.participants_info.hasOwnProperty('buyers'))
	{
        res.status(404);
        let error = {};
        error.message = 'Unable to retrieve buyers';
        error.error = true;
        tracing.create('ERROR', 'GET blockchain/participants/buyers', error);
        res.send(error);
    }
    else
	{
        tracing.create('EXIT', 'GET blockchain/participants/buyers', {'result':participants.participants_info.buyers});
        res.send({'result':participants.participants_info.buyers});
    }
};
exports.read = read;
