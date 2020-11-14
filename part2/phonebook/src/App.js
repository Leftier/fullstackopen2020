import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import personService from './services/persons'

const App = () => {
  const [ persons, setPersons ] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ filterName, setFilterName ] = useState('')

  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [])

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    setFilterName(event.target.value)
  }

  const addName = (event) => {
    event.preventDefault()
    if(persons.some(person => person.name === newName)) {
      alert(`${newName} is already added to phonebook`)
      return
    }

    const personObject = {
      name: newName,
      number: newNumber
    }

    personService
      .create(personObject)
      .then(returnedPerson => {
        setNewName('')
        setNewNumber('')
        setPersons(persons.concat(returnedPerson))
      })
  }

  const remove = (event) => {
    const id = parseInt(event.target.value)
    const person = persons.find(person => person.id === id)
    console.log(person)
    if (window.confirm("Delete " + person.name)) { 
      personService
      .remove(id)
      .then(() => 
        setPersons(persons.filter(person => 
          person.id !== id)
        )
      )
      .catch(() => console.log("Error deleting"))
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>

      <Filter value={filterName} onChange={handleFilterChange} />

      <h3>Add a new</h3>
      
      <PersonForm submit={addName} name={newName} number={newNumber} onChangeName={handleNameChange} onChangeNumber={handleNumberChange}/>
      
      <h3>Numbers</h3>

      <Persons persons={persons} filter={filterName} handleRemove={remove} />

    </div>
  )
}

export default App