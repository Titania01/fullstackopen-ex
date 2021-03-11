import React, { useState, useEffect } from 'react'
import Filter from "./components/Filter"
import Person from "./components/Person"
import PersonForm from "./components/PersonForm"

import axios from 'axios'



const App = () => {
  const [ persons, setPersons ] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ everything, setEverything] = useState("")

  useEffect(() => {
    console.log('effect')
    axios
      .get("http://localhost:3004/persons")
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
  })
  }, [])
  console.log('render', persons.length, 'persons')


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
    };
    
    setPersons([
      ...persons, 
      { name: newName.trim(), mobile: newNumber.trim() }])
    setNewName("");
    setNewNumber('')
  };

  const handleFilter = persons.filter(
    (person) =>
      person.name.trim().toLocaleLowerCase().indexOf(everything.trim().toLowerCase()) > -1
  );
  
  const handleNewNumber = (e) => setNewNumber(e.target.value)
  const handleNewName = (e) => setNewName(e.target.value)
  const handleEverything = (e) => setEverything(e.target.value)
  const contactToShow = handleFilter.length ? handleFilter: persons;

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter everything={everything} handleEverything={handleEverything} />
      <h3>Add a new</h3>
      <PersonForm
        addPerson={addPerson}
        newName={newName}
        handleNewName={handleNewName}
        handleNewNumber={handleNewNumber}
        />
      {/* <div>
        filter shown with: <input value={everything} onChange={(e) => setEverything(e.target.value)} />
      </div>
      
      <form onSubmit={addPerson}>
        <div>
          name:{" "} 
          <input value={newName} onChange={(e) => setNewName(e.target.value)} />
        </div>
        <div>
          number: <input value={newNumber} onChange={(e) => setNewNumber(e.target.value)} />
        </div>
        <div>
          <button onClick={addPerson} type="submit">add</button>
        </div>
      </form> */}
      <Person persons={contactToShow} />
      {/* <h2>Numbers</h2>
      {contactToShow.map((person) => (
        <p key={person.name}> {person.name} {person.mobile} </p> 
      ))} {" "} */}
    </div>
  )
}

export default App
