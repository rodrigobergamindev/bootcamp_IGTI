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
    compareNameReverse(newStates)
    //compareNameUF(newStates)
    //compareNameUFReverse(newStates)
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
    })

    console.log()
    

}

function compareName(states){

    const estados = states.map(state => {
        const {
            sigla,
            cidades
        } = state
        return {
            sigla: sigla,
            cidades: cidades
        }
    })
    
    const cidadesMap = []
    estados.forEach(estado => {
       const cidades = estado.cidades
       cidades.map(cidade => {
           cidadesMap.push(cidade)
       })
    })


    const citiesSorted = cidadesMap.sort((a,b) => (a.Nome.length - b.Nome.length))
    console.log(citiesSorted)

}

function compareNameReverse(states){

    const estados = states.map(state => {
        const {
            sigla,
            cidades
        } = state
        return {
            sigla: sigla,
            cidades: cidades
        }
    })
    
    const cidadesMap = []
    estados.forEach(estado => {
       const cidades = estado.cidades
       cidades.map(cidade => {
           cidadesMap.push(cidade)
       })
    })


    const citiesSorted = cidadesMap.sort((a,b) => {
        const nomeA = a.Nome.toUpperCase()
        const nomeB = b.Nome.toUpperCase()
        if(a.Nome.length > b.Nome.length){
            return 1
        }
        else if(nomeA.length === nomeB.length){
        if (nomeA === nomeB) {
            return 0;
          } else if (nomeA < nomeB) {
            return -1;
          } else {
            return 1;
          }
        }else {
            return -1
        }
    })

    console.log(citiesSorted)
}

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

//countCities('SP')
stateWithCities()