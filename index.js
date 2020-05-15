// Add your code here
let formData = {
  name: "Steve",
  email: "steve@steve.com"
}

let configObj = {
  method: "Post",
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json"
  },
  body: JSON.stringify(formData)
}

let url = "http://localhost:3000/users"

function submitData() {
  return fetch(url, configObj)
    .then(res => res.json())
    .then(json => document.body.textContent = json.id)
    .catch(err => {
      alert("cannot compute")
      document.body.textContent = err.message
    })
}
