import React from 'react'

const Person = ({persons}) => {
  return (
    <div>
       <h2>Numbers</h2>
      {persons.map((person) => (
        <p key={person.name}> {person.name} {person.mobile} </p> 
      ))} {" "}
    </div>
  )
}

export default Person
