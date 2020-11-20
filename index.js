// Add your code here
function submitData( name, email){

    return fetch("http://localhost:3000/users", configObj)
    .then(response => response.json())
    .then(data => {
        addToDom(data)
    })
    .catch(error => {
        addErrorToDom(error)
    })
}