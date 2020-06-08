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
    //mostCities(states)
    //lessCities(states)
    //longerCityNameAll()
    //lessCityNameAll()
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

function mostCities(states){
    
    const mostCities = states.sort((a,b) => a.cidades.length - b.cidades.length)
    .reverse()
    .forEach(state => console.log(`${state.sigla} - ${state.cidades.length} `))
}

function lessCities(states){
    
    const mostCities = states.sort((a,b) => a.cidades.length - b.cidades.length)
    .forEach(state => console.log(`${state.sigla} - ${state.cidades.length} `))
}

function longerCityNameAll(){
    
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
        let arrCities = []
        let citiesNames = []

        states.forEach(state => {
            let rawData = fs.readFileSync(`./modulo_02/projeto-pratico/states/${state}`)
            let states = JSON.parse(rawData)
            const cities = states.cidades.map(city => `${city.Nome} - ${city.Estado}`)
            arrCities.push(cities)
        })

        arrCities.forEach(city => {
            city.forEach(cityName => citiesNames.push(cityName))
        })
        
        const longerCityNameAll = citiesNames.sort((a,b) => {
            if(a.length > b.length){
                return -1
            }else if(a.length === b.length){
                if(a > b){
                    return 1
                }else{
                    return -1
                }
            }else{
                return 1
            }
        })
        
        console.log(longerCityNameAll[0])
    }
}

function lessCityNameAll(){
    
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
        let arrCities = []
        let citiesNames = []

        states.forEach(state => {
            let rawData = fs.readFileSync(`./modulo_02/projeto-pratico/states/${state}`)
            let states = JSON.parse(rawData)
            const cities = states.cidades.map(city => `${city.Nome} - ${city.Estado}`)
            arrCities.push(cities)
        })

        arrCities.forEach(city => {
            city.forEach(cityName => citiesNames.push(cityName))
        })
        
        const longerCityNameAll = citiesNames.sort((a,b) => {
            if(a.length > b.length){
                return 1
            }else if(a.length === b.length){
                if(a > b){
                    return 1
                }else{
                    return -1
                }
            }else{
                return -1
            }
        })
        
        console.log(longerCityNameAll[0])
    }
}

main()

