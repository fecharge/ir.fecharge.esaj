module.exports = function(_username, _passsword){
	const { getCredit }  = require('./usecase/getCredit/index')(_username, _passsword);
    return Object.freeze(
        {
            getCredit,
        }
    );;
};