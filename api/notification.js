var myHeaders = new Headers()
myHeaders.append('accept', 'application/json')
myHeaders.append('Content-Type', 'application/json')
myHeaders.append('x-api-key', 'QN_32832918b5cd4ba88240a72cf70adaed')

var requestOptions = {
	method: 'POST',
	headers: myHeaders,
	redirect: 'follow',
	body: JSON.stringify({
		name: 'My Notification',
		expression: 'KHR4X2xvZ3NfdG9waWMxID1+ICdCREFmRDAwZTMxMjE4RDVBMEQ3MTczQmE4Qjg1MEQ1NzBmZTkyM0JDJykgJiYgCih0eF9sb2dzX2FkZHJlc3MgPT0gJzB4QTQ5MjQwMDFEZGUzNTlEYzVhYUY4OTZiMjM2YUFFNWIxOGQ1RThDMCcpICYmIAoodHhfbG9nc190b3BpYzAgPT0gJzB4ZGRmMjUyYWQxYmUyYzg5YjY5YzJiMDY4ZmMzNzhkYWE5NTJiYTdmMTYzYzRhMTE2MjhmNTVhNGRmNTIzYjNlZicp',
		network: 'ethereum-sepolia',
		destinationIds: ['2dd0a226-1d22-401a-ad8e-7169ff24188d'],
	}),
}

fetch(
	'https://api.quicknode.com/quickalerts/rest/v1/notifications',
	requestOptions
)
	.then(response => response.text())
	.then(result => console.log(result))
	.catch(error => console.log('error', error))


// (tx_logs_topic1 =~ 'BDAfD00e31218D5A0D7173Ba8B850D570fe923BC') && 
// (tx_logs_address == '0xA4924001Dde359Dc5aaF896b236aAE5b18d5E8C0') && 
// (tx_logs_topic0 == '0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef')