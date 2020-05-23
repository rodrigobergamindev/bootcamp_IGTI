const url = fetch('https://randomuser.me/api/?seed=javascript&results=100&nat=BR&noinfo')
let tabUsers = null 
let tabStatistics = null 
let inputName = null;
let allUsers = []
let usersCount = 0
let statistics = {}

window.addEventListener('load', () => {
    tabUsers = document.querySelector('#tabUsers')
    tabStatistics = document.querySelector('#tabStatistics')
    inputName = document.querySelector('#inputName')
    usersCount = document.querySelector('#usersCount')

    fetchUsers()
})

async function fetchUsers() {
    const res = await url
    const json = await res.json()

    allUsers = json.results.map(user => {
        const {name, dob, picture, gender} = user
        return {
            name: `${name.first} ${name.last}`,
            age: dob.age,
            picture: picture.thumbnail,
            gender: gender
        }
    })
    render()
}

function render() {
    preventFormSubmit()
    activateInput()
}

function preventFormSubmit () {
    function handleFormSubmit(event) {
        event.preventDefault()
    }

    let form = document.querySelector('form')
    form.addEventListener('submit', handleFormSubmit)
}

function activateInput() {

    function searchName(searchQuery) {
        function renderUsersList() {
            let usersHTML = "<div>"
            filtredUsers.forEach(user => {
                const {name, age, picture} = user
                const userHTML = `
                    <div class="user">
                    <img src="${picture}" alt="${name}"/> ${name}, ${age} anos
                    </div>
                `
                usersHTML += userHTML
            })
            usersHTML += '</div>'
            tabUsers.innerHTML = usersHTML
            usersCount.innerHTML = `Usuários encontrados: ${filtredUsers.length}`
        }

        filtredUsers = allUsers.filter(user => {
            const name = user.name.toLowerCase()
            if(name.includes(searchQuery)){
                return user
            }
        })
        console.log(filtredUsers)
        renderUsersList()
    }
    
    function handleTyping(event) {
        const key = event.key === 'Enter' ? event.key : ''
        let searchQuery = event.target.value.toLowerCase()
        if(key){
            searchName(searchQuery)
        }
        
    }

    inputName.focus()
    inputName.addEventListener('keyup', handleTyping)
}

function renderUsersList() {
    let usersHTML = "<div>"
    allUsers.forEach(user => {
        const {name, age, picture} = user

        const userHTML = `
        <div class="user">
            <div>
            <img src="${picture}" alt="${name}"/>
            </div>

            <div>
            <span>${name}, </span>
            </div>

            <div>
            <span>${age} anos</span>
            </div>
        
        `
        usersHTML += userHTML
    })
    usersHTML += '</div>'
    tabUsers.innerHTML = usersHTML
}