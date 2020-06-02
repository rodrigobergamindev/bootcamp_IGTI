const estados = require('./Estados.json')
const cidades = require('./Cidades.json')
const fs = require('fs')

function stateWithCities() {

    let newStates = estados.map(estado => {
        const {
            ID,
            Sigla,
            Nome
        } = estado
        return {
            id: ID,
            sigla: Sigla,
            nome: Nome,
            cidades: []
        }

    })

    cidades.forEach(cidade => {

        newStates.forEach(estado => {
            if (cidade.Estado === estado.id) {
                estado.cidades.push(cidade)
            }
        })

    })

    writeJsons(newStates)
    //compareCitiesSort(newStates)
    //compareCitiesReverse(newStates)
    //compareName(newStates)
<<<<<<< HEAD
    //compareNameReverse(newStates)
    //compareNameUF(newStates)
    //compareNameUFReverse(newStates)
=======
    //compareNameReverse(states)
>>>>>>> eb8193b6c936a04530c408a8d9523dc000577cc8
}

function writeJsons(states) {
    states.forEach(estado => {
        fs.writeFile(`./${estado.sigla}.json`, JSON.stringify(estado), function (err) {
            if (err) {
                console.log(err)
            }
        })

    })

}

function countCities(UF) {
    fs.readFile(`./${UF}.json`, function (err, data) {
        if (err) {
            console.log(err)
        }

        const state = JSON.parse(data)
        const cities = state.cidades
        console.log(`${UF} possui ${cities.length} cidades`)
    })

}

function compareCitiesSort(states) {

    const cities = states.map(state => {
        const {
            sigla,
            cidades
        } = state
        return {
            sigla: sigla,
            cities: cidades.length
        }
    })

     const citiesSorted = cities.sort((a,b) => {
        return (a.cities - b.cities)
    })

    console.log(citiesSorted)
}

function compareCitiesReverse(states) {
    const cities = states.map(state => {
        const {
            sigla,
            cidades
        } = state
        return {
            sigla: sigla,
            cities: cidades.length
        }
    })

     const citiesReverse = cities.sort((a,b) => {
        return (a.cities - b.cities)
    }).reverse()

<<<<<<< HEAD
    console.log(citiesReverse)
=======
    console.log(citiesSorted)
>>>>>>> eb8193b6c936a04530c408a8d9523dc000577cc8
}

function compareName(states){

    const cities = states.map(state => {
        const {
            sigla,
            nome
        } = state
        return {
            sigla: sigla,
            nome: nome,
<<<<<<< HEAD
=======
            nameLength: nome.length
>>>>>>> eb8193b6c936a04530c408a8d9523dc000577cc8
        }
    })

    const citiesSorted = cities.sort((a,b) => {
<<<<<<< HEAD
        return (a.nome.length - b.nome.length)
    })
=======
        return (a.nameLength - b.nameLength)
    })
    
    console.log(citiesSorted)
>>>>>>> eb8193b6c936a04530c408a8d9523dc000577cc8

    const citiesSortedPerName = citiesSorted.sort()
    console.log(citiesSortedPerName)
}

function compareNameReverse(states){

    const cities = states.map(state => {
        const {
            sigla,
            nome
        } = state
        return {
            sigla: sigla,
<<<<<<< HEAD
            nome: nome
=======
            nome: nome,
            nameLength: nome.length
>>>>>>> eb8193b6c936a04530c408a8d9523dc000577cc8
        }
    })

    const citiesSorted = cities.sort((a,b) => {
<<<<<<< HEAD
        return (a.nome.length - b.nome.length)
    }).reverse()
=======
        return (a.nameLength - b.nameLength)
    }).reverse()
    
    console.log(citiesSorted)
>>>>>>> eb8193b6c936a04530c408a8d9523dc000577cc8

    const citiesSortedPerName = citiesSorted.sort()
    console.log(citiesSortedPerName)
}

<<<<<<< HEAD
function compareNameUF(states) {
    const cities = states.map(state => {
        const {
            sigla,
            nome
        } = state
        return {
            sigla: sigla,
            nome: nome,
        }
    })

    const citiesSorted = cities.sort((a,b) => {
        return (a.nome.length - b.nome.length)
    })

    const citiesSortedPerName = citiesSorted.sort()
    console.log(citiesSortedPerName[0])
}

function compareNameUFReverse(states) {
    const cities = states.map(state => {
        const {
            sigla,
            nome
        } = state
        return {
            sigla: sigla,
            nome: nome,
        }
    })

    const citiesSorted = cities.sort((a,b) => {
        return (a.nome.length - b.nome.length)
    }).reverse()

    const citiesSortedPerName = citiesSorted.sort()
    console.log(citiesSortedPerName[0])
}
=======
>>>>>>> eb8193b6c936a04530c408a8d9523dc000577cc8

//countCities('SP')
stateWithCities()