import React from 'react'
import Country from './Country'

const CountryToShow = ({query, countries}) => {
  const countriesToDisplay = query.trim() ? countries.filter(country => country.name.toLowerCase().includes(query.toLowerCase())): [] 
  const countriesLength = countriesToDisplay.length
  return (
    <div>
      {
        countriesLength === 1 ? <Country country={countriesToDisplay} /> :
        countriesLength < 10 ? countriesToDisplay.map((country, countryIndex) =>
      <p key={`country-index${countryIndex}`}>{country.name}</p>): <p>Too many matches, specify another filter</p>
      }
    </div>
  )
}

export default CountryToShow
