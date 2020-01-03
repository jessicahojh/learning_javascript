fetch('https://reqres.in/api/users')
    .then(res => res.json()) // to convert to json (return another promise) 
    .then(data => console.log(data))


fetch('https://reqres.in/api/users', {
    method: 'POST',
    headers: {
        'Content-type':'application/json'  // needed as well
    },
    body: JSON.stringify({ // you need to stringify the object
        name: "User 1"
    })
}).then(res => {
    return res.json()
    })
    .then(data => console.log(data))
    .catch(error => console.log('ERROR'))