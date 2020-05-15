// Add your code here
function submitData(name, email) {

let confibObj = {
    method: "POST",
    headers: {
    "Content-Type": "application/json",
    "Accept": "application/json"
    },
    body: JSON.stringify({
        name: `${name}`,	
        email: `${email}`
    })
}
        
         
    let fAnswer = fetch("http://localhost:3000/users", confibObj)
    .then(res => res.json())
    .then(json => appendToIndex(json))
    .catch(function(error) {
        alert("isalop!! there is a mistake in your code")
        appendIndex(error.message)
    })
    
    function appendToIndex(json){
        let ul = document.createElement('ul')
        ul.innerHTML = `${json.id}`
        let body = document.querySelector('body')
        body.appendChild(ul)
    }

    function appendIndex(message){
        let ul = document.createElement('ul')
        ul.innerHTML = `${message}`
        let body = document.querySelector('body')
        body.appendChild(ul)
    }


    return fAnswer
}

submitData("jordan", "jordan@gmail.com")