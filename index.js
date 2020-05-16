// Add your code here

const submitData = (string1, string2) => {
  return fetch('http://localhost:3000/users', {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({
      name: string1,
      email: string2
    })
  })
  .then(resp => resp.json())
  .then(json => {
    let body = document.querySelector('body')
    body.innerHTML = json.id
  })
  .catch( error => {
    document.body.innerHTML = error.message
  })
};