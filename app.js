const button = document.querySelector('button')

function toggle() {
    button.classList.toggle('altColor')
}

// toggle()
// important:  the parenthesis calls a function immediately, whereas without the parenthesis it becomes a callback.
// button.addEventListener('click', toggle)


button.addEventListener('click', toggle)



// button.addEventListener('click', function() {
//     button.classList.toggle('altColor')
// })


function firstAction() {
    alert('1st Action')
}
function secondAction() {
    alert('2nd Action')
}

// setTimeout(firstAction,5000)
// secondAction()

// Promises

let allGood = false;

// https://youtu.be/zu6I2FXakLI
// Possible promise states: Pending, Fulfilled, Rejected

let fetchSomeData = new Promise((resolve, reject)=>{
    if(!allGood){
        reject("error fetching data")
    } else {
        resolve({
            id:1,
            message: 'nice work!'
        })
    }
})

fetchSomeData.then(fetchdData=>{
    console.log('then:', fetchdData)
}).catch(err=>{
    console.error('catch:',err)
})
