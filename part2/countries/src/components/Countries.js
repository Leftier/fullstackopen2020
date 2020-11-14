import React from 'react'
import Country from './Country'

const Countries = ({countries, filter, handleClick}) => {
  let filteredCountries = countries.filter(country => country.name.toLowerCase().includes(filter.toLowerCase()))

  if(filter === '') {
    return <p>Type the name of a country</p>
  }

  if(filteredCountries.length > 9) {
    return <p>Too many matches, specify another filter</p>
  }

  if(filteredCountries.length === 1) {
    return (
      <Country data={filteredCountries[0]} />
    )
  }

  return (
    <>
      {filteredCountries.map(country =>
        <div key={country.name}>
          {country.name}
          <button onClick={handleClick} value={country.name}>show</button>
        </div>
      )}
    </>
  )
}

export default Countries