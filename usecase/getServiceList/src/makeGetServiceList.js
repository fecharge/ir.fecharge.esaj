var soap  = require('soap');

module.exports = function makeGetServiceList(
        username,
        password,
        getServiceListUrl,
        createGetServiceListRequest,
        getServiceListFromResponse
){
    return async function getServiceList(operatorId){
        let getServiceListRequest = createGetServiceListRequest(username, password,operatorId);
        let client = await soap.createClientAsync(getServiceListUrl);
        let response = await client.getPackagesAsync(getServiceListRequest);
        let serviceListFromResponse = getServiceListFromResponse(response);
        return serviceListFromResponse;
    }
}