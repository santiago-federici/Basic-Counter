const number = document.querySelector('.number')
const increase = document.querySelector('.btn-increase')
const decrease = document.querySelector('.btn-decrease')
const reset = document.querySelector('.btn-reset')

let otherNumb = number.innerHTML

increase.addEventListener('click', () => {
    otherNumb++
    number.innerHTML = otherNumb
})

decrease.addEventListener('click', () => {
    otherNumb--
    number.innerHTML = otherNumb
})

reset.addEventListener('click', () => {
    number.innerHTML = 0
    otherNumb = 0
})

