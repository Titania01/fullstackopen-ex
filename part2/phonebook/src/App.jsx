import React, { useState, useEffect } from 'react'
import Filter from "./components/Filter"
import Person from "./components/Person"
import PersonForm from "./components/PersonForm"

// import axios from 'axios'
import phones from "./services/phones"

const App = () => {
  const [ persons, setPersons ] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ everything, setEverything] = useState("")

  useEffect(() => {
    console.log('effect')
    phones.getAll().then((response)=> {
      setPersons(response.data)
      setNewNumber(response.data)    
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
      window.alert(`${newName} is already added to phonebook`);
      setNewName("")
      return;
    };
    
    const newObject = { name: newName.trim(), number: newNumber.trim()}
    phones.create(newObject).then((res) => {
      setPersons([...persons, res.data])
      setNewName("");
      setNewNumber("");
    })  
  
  };

 

  const handleFilter = everything.trim() && persons.filter(
    (person) =>
      (person.name).trim().toLowerCase().indexOf(everything.trim().toLowerCase()) > -1
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
      <Person persons={contactToShow} />  
    </div>
  )
}

export default App
