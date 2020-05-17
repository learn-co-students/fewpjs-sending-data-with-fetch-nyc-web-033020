// Add your code here

let body = document.querySelector("body")

function submitData(name, email){

    let formData = {
        name: name,
        email: email
    }

    let configObj = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formData)
      };

    let addNewIdToDom = (object)=>{
        let newElement = document.createElement('p')
        newElement.textContent = object["id"]
        body.append(newElement)

    }

    return fetch("http://localhost:3000/users", configObj)
    .then(response => response.json())
    .then(function(object) {
        body.textContent = object.id
    })
    .catch(function(error){
        document.body.innerHTML = error.message
    })

}