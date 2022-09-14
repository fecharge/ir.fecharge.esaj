const getServiceListUrl = 'http://wstopup.esaj.ir/apiinternet/packages';

const makeCreateGetServiceListRequest = require("./src/makeCreateGetServiceListRequest");
const makeGetServiceList = require("./src/makeGetServiceList");
const mekeGetServiceListFromResponse = require("./src/mekeGetServiceListFromResponse");



module.exports  =  function(username, password){
    let createGetServiceListRequest = makeCreateGetServiceListRequest();
    let getServiceListFromResponse = mekeGetServiceListFromResponse();
    let getServiceList = makeGetServiceList(
        username,
        password,
        getServiceListUrl,
        createGetServiceListRequest,
        getServiceListFromResponse
    );
    return Object.freeze({
        getServiceList,
    })
}
