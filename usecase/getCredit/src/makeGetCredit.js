var soap  = require('soap');
module.exports = function makeGetCredit(username, password, getBalanceUrl, createGetCreditRequest,getCreditFromResponse){
    
    return async function getCredit(){
        let getCreditRequest = createGetCreditRequest(username, password);
        let client = await soap.createClientAsync(getBalanceUrl);
        let response = await client.getRemainingAsync(getCreditRequest);
        let creditFromResponse = getCreditFromResponse(response);
        return creditFromResponse;
    }
}