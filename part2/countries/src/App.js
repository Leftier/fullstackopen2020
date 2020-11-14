import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import Countries from './components/Countries'
import axios from 'axios'

const App = () => {
  const [ countries, setCountries ] = useState([])
  const [ filterCountries, setFilterCountries ] = useState('')

  useEffect(() => {
    axios
      .get("https://restcountries.eu/rest/v2/all")
      .then(response => {
        setCountries(response.data)
      })
  }, [])

  const handleFilterChange = (event) => {
    setFilterCountries(event.target.value.trim())
  }
  
  return (
    <div>
      <Filter value={filterCountries} onChange={handleFilterChange} />
      <Countries countries={countries} filter={filterCountries} />
    </div>
  )
}

export default App