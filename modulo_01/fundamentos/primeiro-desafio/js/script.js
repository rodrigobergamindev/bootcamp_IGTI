let globalNames = [];
let inputName = null;
let currentIndex = null;
let isEditing = false;

window.addEventListener('load', () => {
    inputName = document.querySelector('#inputName')
    preventFormSubmit()
    activateInput()
    render()
})
function preventFormSubmit () {
    function handleFormSubmit(event) {
        event.preventDefault()
    }

    let form = document.querySelector('form')
    form.addEventListener('submit', handleFormSubmit)
}

function activateInput() {
    function insertName(newName) {
        globalNames = [...globalNames, newName]
    }
    function updateName(newName){
        globalNames[currentIndex] = newName;
        
    }
    function handleTyping(event) {
        const key = event.key === 'Enter' ? event.key : ''
        if(key) {
            if(isEditing){
                updateName(event.target.value)
            }else{
                insertName(event.target.value)
            }
            render()
           isEditing = false
           clearinput()
        }
    }
    
    inputName.focus()
    inputName.addEventListener('keyup', handleTyping)
}

function render() {
    const divNames = document.querySelector('#names')
    divNames.innerHTML = ''
    
    //Criar ul
    //Inserir N itens nesta ul, conforme o tamanho de globalNames

    const ul = document.createElement('ul')
    function createDeleteButton(index) {
        function deleteName() {
            globalNames = globalNames.filter((_, i) => i !== index)
            render()
        }
        const button = document.createElement('button')
        button.classList.add('deleteButton')
        button.textContent = 'x'
        button.addEventListener('click', deleteName)
        return button
    }

    function createSpan(name, index) {
        function editItem(){
            inputName.value = name
            inputName.focus()
            isEditing = true;
            currentIndex = index;
        }

        const span = document.createElement('span')
        span.classList.add('clickable')
        span.textContent = name
        span.addEventListener('click', editItem)
        return span
    }


    globalNames.forEach((name, index) => {
        const li = document.createElement('li')
        const button = createDeleteButton(index)
        const span = createSpan(name, index)

        li.appendChild(button)
        li.appendChild(span)
        ul.appendChild(li)
    })
    divNames.appendChild(ul)
    clearinput()
}

const clearinput = () => {
    inputName.value = ''
    inputName.focus()
}