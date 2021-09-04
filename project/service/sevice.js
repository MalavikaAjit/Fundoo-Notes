/*******service file for api get and post services******/


const baseUrl1 = "http://fundoonotes.incubation.bridgelabz.com/api";



function getService(meth, url, data, headerss) {
    console.log(meth, baseUrl1 + url, data, headerss)
    return new Promise((resol, rej) => {
        fetch(baseUrl1 + url, {
            method: meth,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('token')
              }

        })
        .then(response => response.json())
        .then(result => {
            console.log(result)
             resol(result)

        })
        .catch((err)=>{
        console.log(err)
        })
    })
}


function postService(meth, url, data, headerss) {
    console.log(meth, baseUrl1 + url, data, headerss)
    return new Promise((resol, rej) => {
        fetch(baseUrl1 + url, {
            method: meth,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('token')
              },
        
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(result => {
            console.log(result)
             resol(result)

        })
        .catch((err)=>{
                 console.log(err)
        })
    })
}


