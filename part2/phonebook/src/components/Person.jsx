import React from 'react'

const Person = ({persons, handleDeliete}) => {
  const handleDelete = person => {
    if(window.confirm(`Delete ${person.name}?`)) handleDeliete(person.id)
  }
  return (
    <div>
       <h2>Numbers</h2>
      {persons.map((person,personIndex) => (
        <p key={personIndex}>
          {person.name} {person.number} 
          <button onClick={(e) => handleDelete(person)}>delete</button>
        </p> 
      ))
      } {" "}
    </div>
  )
}

export default Person
