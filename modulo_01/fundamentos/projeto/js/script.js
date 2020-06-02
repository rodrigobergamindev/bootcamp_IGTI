function calculator(inp, result, spectre) {


result.forEach(item => {
    item.value = 0
    item.style.textAlign = 'center'
})

spectre.style.backgroundColor = `rgb(
    ${result[0].value}, 
    ${result[1].value}, 
    ${result[2].value}
    )`

function color(event) {
    const color = event.target.value
    const id = event.target.id
    console.log(`${event.target.id} : ${color}`)
    let rgb = id === 'r' ? result[0].value = color : ''
    id === 'g' ? result[1].value = color : ''
    id === 'b' ? result[2].value = color : ''

    spectre.style.backgroundColor = `rgb(
        ${result[0].value}, 
        ${result[1].value}, 
        ${result[2].value}
        )`

}


inp.forEach(input => {
    input.value = 0
    input.addEventListener("change", color)
})

}

const inputRange = document.querySelectorAll('input[type=range]')
const inputText = document.querySelectorAll('input[type=text]')
const spectre = document.querySelector('.spectre')
calculator(inputRange, inputText, spectre)



