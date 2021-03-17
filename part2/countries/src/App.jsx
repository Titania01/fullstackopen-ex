import {useState, useEffect} from 'react'
import CountryToShow from './CountryToShow'
import axios from 'axios'
import './App.css';

function App() {
  const [countries , setCountries] = useState([])
  const [query, setQuery] = useState('')
  const [displayCountry, setDisplayCountry] = useState([])
  const [weather, setWeather] = useState([])


  useEffect(() => {
    axios('https://restcountries.eu/rest/v2/all')
      .then(response =>{ setCountries(response.data)})
      .catch(console.log)
  },[])

  const handleInputChange = (e) => {
    if(displayCountry.length)setDisplayCountry([])
    setQuery(e.target.value)
  }

  // const countryToDisplay = query.trim()? countries.filter(country => {
  //   const queryTest=query.toLowerCase().trim()
  //   const countryTest = (country.name).toLowerCase()
  //    return countryTest.includes(queryTest)
    // }): []

  return (
    <div className="App">
      <form>
        <label htmlFor="name">Find countries</label>
        <input  id="name" type="text" value={query} onChange={(e) => handleInputChange(e)} autoComplete='off'/>
      </form>
      {/* <CountryToShow query={query} countries={countries} /> */}
      <CountryToShow query={query} countries={countries} displayCountry ={displayCountry} setDisplayCountry={setDisplayCountry} weather={weather} setWeather={setWeather} />
      {/* {query.trim() && 
        <div className="countriesQueried">
        {
          countryToDisplay.map((country, countryIndex) => (<p key={`country-index${countryIndex}`}>{country.name}</p>))
        }
        </div>
      } */}
    </div>
  );
}

export default App;
