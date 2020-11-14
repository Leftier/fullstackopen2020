import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Weather from './Weather'

const Country = ({data}) => {
  const [ weather, setWeather ] = useState(null)

  useEffect(() => {
    axios
      .get(`http://api.weatherstack.com/current?access_key=${process.env.REACT_APP_API_KEY}&query=${data.capital}`)
      .then(response => {
        setWeather(response.data)
      })
  }, [data.capital])

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
      <img src={data.flag} width="128" height="128" alt="flag of country"/>
      <Weather capital={data.capital} weatherData={weather}/>
    </>
  )
}

export default Country