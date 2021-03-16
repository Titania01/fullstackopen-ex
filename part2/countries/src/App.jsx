import {useState, useEffect} from 'react'
import axios from 'axios'
import './App.css';

function App() {
  const [countries , setCountries] = useState([])
  const [query, setQuery] = useState('')

  useEffect(() => {
    axios('https://restcountries.eu/rest/v2/all')
      .then(response =>{ setCountries(response.data)})
      .catch(console.log)
  },[])

  const countryToDisplay = query.trim()? countries.filter(country => {
    const queryTest=query.toLowerCase().trim()
    const countryTest = (country.name).toLowerCase()
     return countryTest.includes(queryTest)
    }): []

  return (
    <div className="App">
      <form>
        <label htmlFor="name">Find</label>
        <input  id="name" type="text" value={query} onChange={({target}) => setQuery(target.value)} autoComplete='off'/>
      </form>
      {query.trim() && 
        <div className="countriesQueried">
        {
          countryToDisplay.map((country, countryIndex) => (<p key={`country-index${countryIndex}`}>{country.name}</p>))
        }
        </div>
      }
    </div>
  );
}

export default App;
