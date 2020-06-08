const fs = require('fs')


function main(){

    const cities = JSON.parse(fs.readFileSync('./modulo_02/projeto-pratico/Cidades.json'))
    const rawStates = JSON.parse(fs.readFileSync('./modulo_02/projeto-pratico/Estados.json'))

    const states = rawStates.map(state => {
        const {ID, Sigla, Nome} = state 
        return {
            id: ID,
            sigla: Sigla,
            nome: Nome,
            cidades: []
        }
    })
    
    cities.forEach(city => {
        states.forEach(state => {
            if(city.Estado === state.id){
                city.Estado = state.sigla
                state.cidades.push(city)
            }
        })
    })

    //writeJSONS(states)
    //countCities('SP')
    //compareCitiesPerState()
    //compareCitiesPerStateTwo()
    //countCitiesUF() - NÃO COMPLETADO
    //countCitiesPerUF(states) - MODIFICAR
}

function countCities (UF){
    fs.readFile(`./modulo_02/projeto-pratico/states/${UF}.json`, 'utf8', (err,data) => {
        if(err){
            console.log(err)
        }
        const state = JSON.parse(data)
        console.log(`${UF} tem ${state.cidades.length} cidades`)
    })
}
function writeJSONS(states){
    states.forEach(state => {
        fs.writeFile(`./modulo_02/projeto-pratico/states/${state.sigla}.json`, JSON.stringify(state), (err) => console.log(err))
    })
}

function compareCitiesPerState(){
    fs.readdir('./modulo_02/projeto-pratico/states/', (err, files) => { 
        if (err) {
          console.log(err); 
        }
        let states = []
          files.forEach(file => {  
            states.push(file)
          }) 
          count(states)
      }) 

    function count(states){
        states.forEach(state => {
            let rawData = fs.readFileSync(`./modulo_02/projeto-pratico/states/${state}`)
            let states = JSON.parse(rawData)
            let cities = states.cidades

            const longerCityName = cities.map(city => `${city.Nome} - ${city.Estado}`)
            
            const longer = longerCityName.sort((a,b) => {
                return a.length - b.length
            })
            .reverse()
            .filter(city => city.length === longerCityName[0].length)
            .sort()[0]

            
            const a = 'Santo Antônio do Aracanguá'
            const b = 'Euclides da Cunha Paulista'
            console.log(longer)
        })
        
    }
}

function compareCitiesPerStateTwo(){
    fs.readdir('./modulo_02/projeto-pratico/states/', (err, files) => { 
        if (err) {
          console.log(err); 
        }
        let states = []
          files.forEach(file => {  
            states.push(file)
          }) 
          count(states)
      }) 

    function count(states){
        states.forEach(state => {
            let rawData = fs.readFileSync(`./modulo_02/projeto-pratico/states/${state}`)
            let states = JSON.parse(rawData)
            let cities = states.cidades

            const longerCityName = cities.map(city => `${city.Nome} - ${city.Estado}`)
            
            const longer = longerCityName.sort((a,b) => {
                return a.length - b.length
            })
            .filter(city => city.length === longerCityName[0].length)
            .sort()[0]

            
            const a = 'Santo Antônio do Aracanguá'
            const b = 'Euclides da Cunha Paulista'
            console.log(longer)
        })
        
    }
}

function compareCitiesUF(){
    fs.readdir('./modulo_02/projeto-pratico/states/', (err, files) => { 
        if (err) {
          console.log(err); 
        }
        let states = []
          files.forEach(file => {  
            states.push(file)
          }) 
          count(states)
      }) 

    function count(states){
        states.forEach(state => {
            let rawData = fs.readFileSync(`./modulo_02/projeto-pratico/states/${state}`)
            let states = JSON.parse(rawData)
            let cities = states.cidades
            let longerPerUF = []

            const longerCityName = cities.map(city => `${city.Nome} - ${city.Estado}`)
            
            let longer = longerCityName.sort((a,b) => {
                return a.length - b.length
            })
            .reverse()
            .filter(city => city.length === longerCityName[0].length)
            .sort()[0]
            longerPerUF.push(longer)

            console.log(longerPerUF)

            
        })
        
    }
}

function countCitiesPerUF(states){
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

    console.log(citiesSorted.reverse())
}

main()

