import React from 'react'

const Weather = ({capital, weatherData}) => {
  //[ Return null if we haven't got the response from the weather API 
  //[ or if we have used a wrong API KEY or the API returned unsuccess
  //[ or if we have data from a previous country
  if(weatherData === null || weatherData.location.name !== capital) {
    return null
  }

  return (
    <>
      <h1>Weather in {capital}</h1>
      <p><strong>temperature: </strong>{weatherData.current.temperature} celsius</p>  
      <img src={weatherData.current.weather_icons[0]} width="128" height="128" alt="flag of country"/>
      <p><strong>wind: </strong>{weatherData.current.wind_speed} mph direction {weatherData.current.wind_dir}</p>  
    </>
  )
}

export default Weather