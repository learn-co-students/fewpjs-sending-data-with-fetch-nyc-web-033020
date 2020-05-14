const submitData = (name,email) => {
	const data = {
		name: name,
		email, email
	};
	const reqObj = {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			"Accept": "application/json"
		},
		body: JSON.stringify(data)
	};
	const output = document.getElementById('res');

	return fetch("http://localhost:3000/users", reqObj)
	.then( res => res.json() )
	.then( json => output.innerHTML = json.id )
	.catch( err => output.innerHTML = 'Unauthorized Access');
}
