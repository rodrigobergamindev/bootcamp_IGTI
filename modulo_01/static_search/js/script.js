const url = fetch('https://randomuser.me/api/?seed=javascript&results=100&nat=BR&noinfo')
let tabUsers = null 
let tabStatistics = null 
let inputName = null;
let allUsers = []
let usersCount = 0
let buttonSearch = null
let statistics = {
    male: null,
    female: null,
    sumAges: null,
    averageAges: null
}

window.addEventListener('load', () => {
    tabUsers = document.querySelector('#tabUsers')
    tabStatistics = document.querySelector('#tabStatistics')
    inputName = document.querySelector('#inputName')
    usersCount = document.querySelector('#usersCount')
    buttonSearch = document.querySelector('#search')

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
    inputName.addEventListener('keyup', buttonActivate)
}

function buttonActivate(event){
    if(event.key){
        buttonSearch.removeAttribute('disabled')
    }
    event.target.value === '' ? buttonSearch.setAttribute('disabled', 'disabled') : buttonSearch.removeAttribute('disabled')

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
        let filtredUsers = allUsers.filter(user => {
            const name = user.name.toLowerCase()
            if(name.includes(searchQuery)){
                return user
            }
        })
        renderUsersList(filtredUsers)
        renderStatisticsList(filtredUsers)
    }
    
    function handleTyping(event) {
        const key = event.key === 'Enter' ? event.key : ''
        let searchQuery = event.target.value.toLowerCase()
        if(key && searchQuery !== ''){
            searchName(searchQuery)
            clearInput()
        }
        
    }

    function clickSearch(event) {
        let searchQuery = inputName.value
        if(searchQuery !== ''){
            searchName(searchQuery)
            clearInput()
        }
    }

    inputName.focus()
    inputName.addEventListener('keyup', handleTyping)
    buttonSearch.addEventListener('click', clickSearch)
}

function renderUsersList(users) {
    let usersHTML = "<div>"
    users.forEach(user => {
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
    usersCount.innerHTML = `<h5>Usuários encontrados: ${users.length}</h5>`
}

function renderStatisticsList(users) {
    let male = users.filter(user => user.gender === 'male').length;
    let female = users.filter(user => user.gender === 'female').length;
    let sumAges = users.reduce((accumulator, current) => {
        return accumulator + current.age
    }, 0)
    let averageAges = (sumAges / users.length).toFixed(2)

    statistics = {male, female, sumAges, averageAges}
    
    const statisticsHTML = `
    <div class="statistics-view">
    <ul>
        <li>Sexo masculino: ${statistics.male}</li>
        <li>Sexo feminino: ${statistics.female}</li>
        <li>Soma das idade: ${statistics.sumAges}</li>
        <li>Média das idades: ${statistics.averageAges}</li>
    </ul>
    </div>
    `
    tabStatistics.innerHTML = `<h5>Estatísticas:</h5> ${statisticsHTML}`
}

function clearInput() {
    inputName.value = ''
    inputName.focus()
}