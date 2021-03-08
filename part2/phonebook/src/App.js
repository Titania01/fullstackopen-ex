import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas' }
  ])
  const [ newName, setNewName ] = useState('')

  const addPerson = (event) => {
    event.preventDefault()

    if (!newName.trim()) return null;
    if (
      persons.find(
        (person) =>
        person.name.toLowerCase().trim() === newName.toLowerCase().trim()
      )
    ){
      alert(`${newName} is already added to phonebook`);
      setNewName("")
      return;
    }
    
    setPersons([...persons, { name: newName.trim() }])
    setNewName("")
    
  }

  return (
    <div>
      <h2>Phonebook</h2>
      
      <form onSubmit={addPerson}>
        <div>
          name:{" "} 
          <input value={newName} onChange={(e) => setNewName(e.target.value)} />
        </div>
        <div>
          <button onClick={addPerson} type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person) => (
        <p key={person.name}> {person.name} </p> 
      ))} {" "}
    </div>
  )
}

export default App
