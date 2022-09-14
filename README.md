# ir.fecharge.esaj
esaj provider api wrapper

## features

1. get balance
2. topup

## How To install
```
npm i ir.fecharge.esaj
```

## How To Use

require node v16.14.0 to run
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

### Businness requirement

As a reseller you should have an valid account on esaj site, to get a username and password contact the company from (https://esaj.ir/)[https://esaj.ir/]