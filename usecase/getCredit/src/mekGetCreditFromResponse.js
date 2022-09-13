module.exports = function mekGetCreditFromResponse(){
    return function getCreditFromResponse(serverResponse){
        const response = serverResponse[0];
        
        if(!response){
            throw new Error("No Response From WebService");
        }else if(!response.return){
            throw new Error("WebService Response Has No return value");
        }else if(!response.return.$value){
            throw new Error("WebService Response.return Has No value");
        }
        let value = JSON.parse(response.return.$value);

        if(value.status == undefined){
            throw new Error("WebService Response Has no Status value");
        }else if(!value.message){
            throw new Error("WebService Response Has no Message value");
        }else if(value.remaining == undefined){
            throw new Error("WebService Response Has no remaining value");
        }

        let status  = value.status;
        let message  = value.message;
        let remaining  = value.remaining;
        let result = {
            status: status,
            message: message,
            remaining: remaining,
        }
        return result;
    }
}