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
    //compareNameReverse(states)
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

    console.log(citiesSorted)
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
            nameLength: nome.length
        }
    })

    const citiesSorted = cities.sort((a,b) => {
        return (a.nameLength - b.nameLength)
    })
    
    console.log(citiesSorted)

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
            nome: nome,
            nameLength: nome.length
        }
    })

    const citiesSorted = cities.sort((a,b) => {
        return (a.nameLength - b.nameLength)
    }).reverse()
    
    console.log(citiesSorted)

    const citiesSortedPerName = citiesSorted.sort()
    console.log(citiesSortedPerName)
}


//countCities('SP')
stateWithCities()