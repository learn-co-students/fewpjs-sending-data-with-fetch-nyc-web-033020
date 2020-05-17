// Add your code here
const url = "http://localhost:3000/users"
const urlHeader = {
    "Content-Type": "application/json",
    "Accept": "application/json"
}



function submitData(userName, userEmail){

    let configObj = {method: 'POST',
        headers: urlHeader,
        body: JSON.stringify({
            name: userName,
            email: userEmail
        })
    }
    return fetch(url, configObj)
    .then(resp => resp.json())
    .then(user => {
        const body = document.querySelector('body')
        body.innerHTML = user.id
    })
    .catch(function(error) {
        document.body.innerHTML = error
    })
}