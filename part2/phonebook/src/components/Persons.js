import React from 'react'

const Persons = ({persons, filter, handleRemove}) => {
  return (
    <>
      {persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase())).map(person =>
        <p key={person.name}>
          {person.name} {person.number}
          <button onClick={handleRemove} value={person.id}>delete</button>
        </p>
      )}
    </>
  )
}

export default Persons