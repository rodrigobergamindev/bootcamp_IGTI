import React, { Component, useState, useEffect } from 'react';
import Countries from './components/Countries/Countries';
import Header from './components/Header/Header';


export default function App () {
  const [allCountries, setAllCountries] = useState([])
  const [filteredCountries, setFilteredCountries] = useState([])
  const [filteredPopulation, setfilteredPopulation] = useState(0)
  const [userFilter, setUserFilter] = useState('')

    useEffect(() => {
      
      const getCountries = async() => {
        const res = await fetch('https://restcountries.eu/rest/v2/all')
        let allCountries = await res.json()
        
        allCountries = allCountries.map(item => {
          const {name, numericCode, flag, population} = item
          return {
            name,
            filterName: name.toLowerCase(),
            id: numericCode,
            flag,
            population
          }
        })
        
        setAllCountries(allCountries)
        setFilteredCountries(Object.assign([], allCountries))
      }
      
      getCountries()
    }, [])

  const calculateTotalPopulationFrom = (countries) => {
    const totalPopulation = countries.reduce((accumulator, current) => {
      return accumulator + current.population
    }, 0 )
    return totalPopulation
  }

  const handleChangeFilter = (newText) => {
    setUserFilter(newText)

    const filterLowerCase = newText.toLowerCase()

    const filteredCountries = allCountries.filter(
      (country) => {
        return country.filterName.includes(filterLowerCase)
      }
    )

    const filteredPopulation = calculateTotalPopulationFrom(filteredCountries)
    setFilteredCountries(filteredCountries)
    setfilteredPopulation(filteredPopulation)
 /*    this.setState({
      filteredCountries,
      filteredPopulation
    }) */

  }

    return (
      <div className="container">
        <h1 style={styles.centeredTitle}>React <em>Countries</em></h1>
        <Header filter={userFilter} 
        totalPopulation = {filteredPopulation}
        countryCount = {filteredCountries.length} 
        onChangeFilter={handleChangeFilter}/>
        <Countries countries={filteredCountries}/>
      </div>
    )

}


const styles = {
    centeredTitle: {
      textAlign: 'center'
    }
}