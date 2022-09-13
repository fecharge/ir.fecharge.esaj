const makeGetCreditFromResponse = require('../src/mekGetCreditFromResponse');
const getCreditFromResponse = makeGetCreditFromResponse();

describe('mekGetCreditFromResponse Test',()=>{
    it('Server With Correct Data',() => {
        const fakeResponse = [
            {
                return:{
                    $value:`{"status":-4,"message":"Some Message","remaining":123}`,
                    attributes : {}
                }
            }
        ];
            
        const data = getCreditFromResponse(fakeResponse);
        expect(data).not.toBe(undefined);
    }),
    it('Server With No Data',() => {
        const fakeResponse = undefined
        expect(()=> getCreditFromResponse(fakeResponse)).toThrow();
    }),
    it('Server With No Data',() => {
        const fakeResponse = [
            {
                return:{
                    $value:`{"message":"Some Message","remaining":123}`,
                    attributes : {}
                }
            }
        ];
        expect(()=> getCreditFromResponse(fakeResponse)).toThrow();
    }),
    it('Server With No Data',() => {
        const fakeResponse = [
            {
                return:{
                    $value:`{"status":-4,"remaining":123}`,
                    attributes : {}
                }
            }
        ];
        expect(()=> getCreditFromResponse(fakeResponse)).toThrow();
    }),
    it('Server With No Data',() => {
        const fakeResponse = [
            {
                return:{
                    $value:`{"status":-4,"message":"Some Message"}`,
                    attributes : {}
                }
            }
        ];
        expect(()=> getCreditFromResponse(fakeResponse)).toThrow();
    })

})