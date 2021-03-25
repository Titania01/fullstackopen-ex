import React from 'react'

const Person = ({persons}) => {
  console.log(persons)
  return (
    <div>
       <h2>Numbers</h2>
      {persons.map((person,personIndex) => (
        <p key={personIndex}> {person.name} {person.number} </p> 
      ))
      } {" "}
    </div>
  )
}

export default Person
