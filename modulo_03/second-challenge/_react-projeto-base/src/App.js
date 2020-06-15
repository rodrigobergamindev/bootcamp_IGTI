import React, { Component } from 'react';
import Countries from './components/Countries/Countries';
import Header from './components/Header/Header';


export default class App extends Component {
  constructor() {
    super()

    this.state = {
      allCountries: [],
      filteredCountries: [],
      filteredPopulation: 0,
      filter: ''
    }
  }
  
  async componentDidMount() {
    const res = await fetch('https://restcountries.eu/rest/v2/all')
    const json = await res.json()
    
    const allCountries = json.map(item => {
      const {name, numericCode, flag, population} = item
      return {
        name,
        filterName: name.toLowerCase(),
        id: numericCode,
        flag,
        population
      }
    })
    
    const filteredPopulation = this.calculateTotalPopulationFrom(allCountries)


    this.setState({
      allCountries,
      filteredCountries: Object.assign([], allCountries),
      filteredPopulation
    })

  }

  calculateTotalPopulationFrom = (countries) => {
    const totalPopulation = countries.reduce((accumulator, current) => {
      return accumulator + current.population
    }, 0 )
    return totalPopulation
  }

  handleChangeFilter = (newText) => {
    console.log(newText)
    this.setState({
      filter: newText
    })

    const filterLowerCase = newText.toLowerCase()

    const filteredCountries = this.state.allCountries.filter(
      (country) => {
        return country.filterName.includes(filterLowerCase)
      }
    )

    const filteredPopulation = this.calculateTotalPopulationFrom(filteredCountries)

    this.setState({
      filteredCountries,
      filteredPopulation
    })

  }

  render() {
    const { filteredCountries, filter, filteredPopulation } = this.state
    return (
      <div className="container">
        <h1 style={styles.centeredTitle}>React <em>Countries</em></h1>
        <Header filter={filter} 
        totalPopulation = {filteredPopulation}
        countryCount = {filteredCountries.length} 
        onChangeFilter={this.handleChangeFilter}/>
        <Countries countries={filteredCountries}/>
      </div>
    )
  }
}


const styles = {
    centeredTitle: {
      textAlign: 'center'
    }
}