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

setTimeout(firstAction,5000)
secondAction()