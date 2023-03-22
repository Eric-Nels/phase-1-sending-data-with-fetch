function submitData(custName, custEmail) {
    return fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify({
            name: custName,
            email: custEmail,
        }) 
    })
        .then(function (response) {
            return response.json();
        })
        .then(function (object) {
            const newId = object.id;
            document.body.append(newId)
        })
        .catch(function (error) {
            document.body.append(error.message);
        })
}


