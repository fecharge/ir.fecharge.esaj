module.exports = function makeCreateGetCreditRequest(){
    return function createGetCreditRequest(username, password){
        
        if(!username && !password){
            throw new Error("Specify Username and Password");
        }else if(!username){
            throw new Error("Specify Username");
        }else if(!password){
            throw new Error("Specify password");
        }

        const result = Object.freeze(
            {
                'username': username,
                'password': password  
            }
        )
        return result;
    }
}