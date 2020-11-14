import React from 'react'

const Country = ({data}) => {
  return (
    <>
      <h1>{data.name}</h1>  
      <p>capital {data.capital}</p>
      <p>population {data.population}</p>
      <h1>languages</h1>  
      <ul>
        {data.languages.map(language => 
          <li key={language.name}>{language.name}</li>
        )}
      </ul>
      <img src={data.flag} width="128" height="128"/>
    </>
  )
}

export default Country