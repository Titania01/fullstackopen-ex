import React from 'react'
import Country from './Country'

const CountryToShow = ({query, countries, displayCountry, setDisplayCountry}) => {
  // const [displayCountry, setDisplayCountry] = useState([])
  const countriesToDisplay = query.trim() ? countries.filter(country => country.name.toLowerCase().includes(query.toLowerCase())): [] 
  const countriesLength = countriesToDisplay.length

  return (
    <div>
      { !displayCountry.length ?
        (
        countriesLength === 1 ? <Country country={countriesToDisplay} /> :
        countriesLength < 10 ? countriesToDisplay.map((country, countryIndex) =>
      <div key={`country-index${countryIndex}`} style={{display:'flex', alignItems:'center'}} >
        <p>{country.name}</p>
        <button onClick={() => setDisplayCountry([country])}>show</button>
        </div>): 
        <p>Too many matches, specify another filter</p>
        ):
        <Country country={displayCountry} />
      }
    </div>
  )
}

export default CountryToShow
