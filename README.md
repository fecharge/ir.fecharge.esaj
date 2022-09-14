# ir.fecharge.esaj
esaj provider api wrapper

## features

1. get balance
2. topup

## How To install
npm i ir.fecharge.esaj

## How To Use
```
const irFechargeEsaj = require('./index')("user","pass");

irFechargeEsaj.getCredit()
    .then(function(result){
        console.log(result);
    })
    .catch(function(err){
        console.log(err);
    })
```