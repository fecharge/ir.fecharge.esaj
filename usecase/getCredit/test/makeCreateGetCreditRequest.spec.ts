var makeCreateGetCreditRequest = require("../src/makeCreateGetCreditRequest");

const createGetCreditRequest = makeCreateGetCreditRequest();

describe("Create Get Credit Request",()=>{
    it('Get User Pass and Create request',()=>{
        const username = 'fakeUserName';
        const password = 'fakePassword';
        const result = createGetCreditRequest(username,password);
        expect(result).not.toBe(undefined);
    }),
    it('Fail With No User Pass ',()=>{
        let username;
        let password;
        expect( ()=> createGetCreditRequest(username,password)).toThrow();
    }),
    it('Fail With No User And Pass',()=>{
        let username;
        const password = 'fakePassword';
        expect( ()=> createGetCreditRequest(username,password)).toThrow();
    }),it('Fail With User and No Pass ',()=>{
        const username = 'fakeUserName';
        let password;
        expect( ()=> createGetCreditRequest(username,password)).toThrow();
    })
})


