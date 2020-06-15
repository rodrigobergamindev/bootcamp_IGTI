import React, { Component } from 'react'
import css from './countries.module.css'

export default class Country extends Component {
    render() {
        const { country } = this.props
        const { name, flag } = country
        return (
            <div className={`${css.country} ${css.border}`}>
                <img className={css.flag} src={flag}/>
                <span className={css.countryName}>{country.name}</span>
            </div>
        )
    }
}
