//Event Handlers
let count = document.getElementById('count')
let subtractNumber = document.getElementById('subtract')
let resetNumber = document.getElementById('reset')
let addNumber = document.getElementById('add')

//Event Targets
subtractNumber.addEventListener('click', () => {
    count.innerHTML--;
    changeColor()
})

resetNumber.addEventListener('click', () => {
    count.innerHTML = 0;
    changeColor()
})

addNumber.addEventListener('click', () => {
    count.innerHTML++;
    changeColor()
})

//Function that will change # color based on positive or negative
function changeColor() {
    if (count.innerHTML > 0) {
        count.style.color = 'yellowgreen'
    }
    else if (count.innerHTML < 0) {
        count.style.color = 'orangered'
    }
    else {
        count.style.color = 'white'
    }
}
