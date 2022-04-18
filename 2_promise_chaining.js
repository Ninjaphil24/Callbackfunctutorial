// Promise chaining of several functions

let fetchData = function(data) {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('Fetching Data Complete')
            resolve({id:1,message: 'Nice work'})
        },2000)
    })
}

let parseData = function(data) {
    return new Promise((resolve,reject)=>{
        // foo=bar
        setTimeout(()=>{
            let parsedOutput=`Parsed the data for id: ${data.id} with message: ${data.message}`
            resolve({ parsed: parsedOutput})
        },2000)
    })
}

let echoData = function(data) {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log(data.parsed)            
        },2000)
    })
}

fetchData().then(parseData).then(echoData).catch(err=>{
    console.error(err)
})