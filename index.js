const url = 'http://localhost:3000'

function submitData(name, email) {
  const config = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({
      name: name,
      email: email,
    })
  }
  console.log('fetching data')
  return fetch(url + '/users', config)
    .then(r => r.json())
    .then(json => {
      document.querySelector('body').innerHTML = JSON.stringify(json)
    })
    .catch(error => {
      document.querySelector('body').textContent = JSON.stringify(error.message);
    })
}



submitData('elliott', 'exampleemail')