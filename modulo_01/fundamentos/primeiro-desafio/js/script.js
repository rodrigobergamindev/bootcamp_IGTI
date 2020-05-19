window.addEventListener('load', start);

let globalNames = [];
let inputName = null;

function start () {
    inputName = document.querySelector('#inputName')
    preventFormSubmit()
    activateInput()
    render()
}


function preventFormSubmit () {
    function handleFormSubmit(event) {
        event.preventDefault()
    }

    let form = document.querySelector('form')
    form.addEventListener('submit', handleFormSubmit)
}

function activateInput() {
    function insertName(newName) {
        globalNames.push(newName)
        console.log(globalNames)
        render()
    }
    function handleTyping(event) {
        const key = event.key === 'Enter' ? event.key : ''
        console.log(key)
        if(key) {
           insertName(event.target.value)
        }
    }
    inputName.focus()
    inputName.addEventListener('keyup', handleTyping)
}

function render() {
    const divNames = document.querySelector('#names')
    
    //Criar ul
    //Inserir N itens nesta ul, conforme o tamanho de globalNames

    const ul = document.createElement('ul')
    divNames.innerHTML = ''
    globalNames.forEach(name => {
        const li = document.createElement('li')
        li.textContent = name
        ul.appendChild(li)
    })
    divNames.appendChild(ul)
}