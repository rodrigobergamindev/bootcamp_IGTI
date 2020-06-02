/*console.log('test')

const input1 = document.querySelector('#input1')
input1.value = 'Rodrigo Bergamin'
*/

window.addEventListener('load', start);

function start() {
    console.log('Manipulando eventos')
    console.log('Totalmente carregada')

    
    const nameInput = document.querySelector('#nameInput')
    
    nameInput.addEventListener("keyup", countName);
}
    function countName(event) {
        let count = event.target.value;
        let div = document.querySelector('#nameLenght')
        div.innerHTML = count.length;
    }

