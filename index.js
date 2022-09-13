require('dotenv').config()
const { getCredit }  = require('./usecase/getCredit/index')(process.env.USERNAME,process.env.PASSSWORD);

async function credit(){
	try {
		let result = await getCredit();	
		console.log(result);
	} catch (error) {
		console.log(error.message);
	}
	
	
}

function charge(){
	let status = "done";
	return status;
}

credit();