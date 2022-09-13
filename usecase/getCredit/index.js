const getBalanceUrl = 'http://ws.esaj.ir/apiremaining/remaining';

let makeCreateGetCreditRequest = require('./src/makeCreateGetCreditRequest');
let mekGetCreditFromResponse = require('./src/mekGetCreditFromResponse');
let makeGetCredit = require('./src/makeGetCredit');

module.exports = function(_username, _passsword){
    let createGetCreditRequest = makeCreateGetCreditRequest();
    let getCreditFromResponse = mekGetCreditFromResponse();
    let getCredit = makeGetCredit(
        _username,
        _passsword,
        getBalanceUrl,
        createGetCreditRequest,
        getCreditFromResponse
    );
    return Object.freeze(
        {
            getCredit,
        }
    );;
};

