/*const r = document.querySelector('#r')
const g = document.querySelector('#g')
const b = document.querySelector('#b')

const rInput = document.querySelector('#r2')
const gInput = document.querySelector('#g2')
const bInput = document.querySelector('#b2')

const color = (event) => {
    const hexadecimal = event.target.value
    console.log(hexadecimal)
    

}

function calculator() {
r.addEventListener("change", color);
g.addEventListener("change", color);
b.addEventListener("change", color);
}

calculator()
*/

const inputRange = document.querySelectorAll('input[type=range]')
const inputText = document.querySelectorAll('input[type=text]')
const spectre = document.querySelector('.spectre')


function calculator(inp, result, spectre) {


result.forEach(item => {
    item.value = 125
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
    input.addEventListener("change", color)
})

}

calculator(inputRange, inputText, spectre)