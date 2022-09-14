module.exports = function makeCreateGetServiceListRequest(){
    return function createGetServiceListRequest(username, password, operatorId){
        if(
            !username &&
            !password &&
            operatorId != undefined
        ){
            throw new Error("Specify Username and Password and operatorId");
        }else if(!username){
            throw new Error("Specify Username");
        }else if(!password){
            throw new Error("Specify password");
        }else if(operatorId != undefined){
            throw new Error("Specify OperatorId");
        }

        const result = Object.freeze(
            {
                'username': username,
                'password': password,
                'operator_id': operatorId
            }
        )
        return result;
    }
}