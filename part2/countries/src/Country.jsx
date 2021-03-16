import React from 'react'

const Country = ({country}) => {
  const {name, population, languages, flag, capital} = country[0]
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
    </div>
  )
}

export default Country
