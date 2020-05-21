const data = require('./people.json')
const people = JSON.parse(JSON.stringify(data))


const doSpread = () => {
    const marriedMen = people.results.filter(person => person.name.title === 'Mr')
    const marriedWoman = people.results.filter(person => person.name.title === 'Ms')
    const marriedPeople = [...marriedMen, ...marriedWoman, {status: 'married'}]
    console.log(marriedPeople)
}

const infiniteSum = (...numbers) => numbers.reduce((acc,curr) => acc + curr, 0)
const doRest = () => console.log(infiniteSum(1,2,3,4,5,6,7,8,9,10,11,12,13,100,1000,5000,10000,1000000))


const doDestructuring = () => {
    const first = people.results[0]

    //Sem destructuring
    //const username = first.login.username;
    //const password = first.login.password;

    const {username, password} = first.login
    console.log(username)
    console.log(password)
}

doDestructuring()
doRest()
doSpread()