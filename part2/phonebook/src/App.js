import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import Notification from './components/Notification'
import personService from './services/persons'
import './index.css'

const App = () => {
  const [ persons, setPersons ] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ filterName, setFilterName ] = useState('')
  const [ message, setMessage ] = useState(null)

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

  const handleUpdate = (person) => {
    const changedPerson = { ...person, number: newNumber }
    personService
      .update(changedPerson.id, changedPerson)
      .then(returnedPerson => {
        setNewName('')
        setNewNumber('')
        setMessage(`Updated ${returnedPerson.name}`)
        setPersons(persons.map(person => person.id !== returnedPerson.id ? person : returnedPerson))
        setTimeout(() => {
          setMessage(null)
        }, 5000)
      })
      .catch(() => {
        alert(
          `${person.name} was already deleted from server`
        )
        setPersons(persons.filter(person => person.id !== changedPerson.id))
      })
  }

  const addName = (event) => {
    event.preventDefault()
    const person = persons.find(person => person.name === newName)
    if(person && window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
      return handleUpdate(person)
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
        setMessage(`Added ${returnedPerson.name}`)
        setPersons(persons.concat(returnedPerson))
        setTimeout(() => {
          setMessage(null)
        }, 5000)
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
      <Notification message={message} />

      <Filter value={filterName} onChange={handleFilterChange} />

      <h3>Add a new</h3>
      
      <PersonForm submit={addName} name={newName} number={newNumber} onChangeName={handleNameChange} onChangeNumber={handleNumberChange}/>
      
      <h3>Numbers</h3>

      <Persons persons={persons} filter={filterName} handleRemove={remove} />

    </div>
  )
}

export default App