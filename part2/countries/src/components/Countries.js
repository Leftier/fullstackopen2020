import React from 'react'
import Country from './Country'

const Countries = ({countries, filter}) => {
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
        <p key={country.name}>
          {country.name}
        </p>
      )}
    </>
  )
}

export default Countries