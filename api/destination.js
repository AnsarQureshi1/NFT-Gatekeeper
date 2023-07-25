var myHeaders = new Headers()
myHeaders.append('accept', 'application/json')
myHeaders.append('Content-Type', 'application/json')
myHeaders.append('x-api-key', process.env.API_KEY)

var requestOptions = {
	method: 'POST',
	headers: myHeaders,
	redirect: 'follow',
	body: JSON.stringify({
		name: 'My Destination',
		to_url: 'https://15f9-2406-d00-ee0b-5915-c951-444d-e43f-970d.ngrok-free.app/webhook',
		webhook_type: 'POST',
		service: 'webhook',
		payload_type: 5,
	}),
}

fetch(
	'https://api.quicknode.com/quickalerts/rest/v1/destinations',
	requestOptions
)
	.then(response => response.text())
	.then(result => console.log(result))
	.catch(error => console.log('error', error))
