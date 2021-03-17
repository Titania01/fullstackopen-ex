import React, {useEffect} from 'react'
import Axios from 'axios'

const Country = ({country, weather, setWeather}) => {
  const {name, population, languages, flag, capital} = country[0]
  
const weatherApiKey = process.env.REACT_APP_API_KEY
console.log({ weather })
const api = `http://api.weatherstack.com/current?access_key=${weatherApiKey}&query=${capital}`

useEffect(()=> {
  Axios(api).then(({data})=> setWeather(data.current)).catch(err => (err))
}, [api,setWeather])
console.log({ weatherApiKey})

  return (
    <div>
      <h2>{ name }</h2>
      <p>Capital - { capital }</p>
      <p>Population - { population }</p>
      <h2>Languages</h2>
      <ul>
        {
          languages.map((language, languageIndex)=> 
          <li key={`language-number${languageIndex}`}>{language.name}</li>)
        }
      </ul>
      <img src={flag} alt={`${name}-flag`} style={{width:'25rem'}}/>
      <h2>Weather in {capital}</h2>
      <p>
        temperature:{weather.temperature} Celcius 
      </p>
      <img src={weather.weather_icons} alt=""/>
      <p>Wind: {weather.wind_degree} mph direction {weather.wind_dir} </p>
    </div>
  )
}

export default Country