import React, { useState, useEffect } from 'react'
import Filter from "./components/Filter"
import Person from "./components/Person"
import PersonForm from "./components/PersonForm"

import * as phones from "./services/phones"

const App = () => {
  const [ persons, setPersons ] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [query, setQuery] = useState('')

  useEffect(() => {
    phones.getAll().then((response)=> {
      setPersons(response.data)
      setNewNumber(response.data)    
    })
  }, [])

  const addPerson = (event) => {
    event.preventDefault()

    if (!newName.trim()) return null;
    // if (
    //   persons.find(
    //     (person) =>
    //     person.name.toLowerCase().trim() === newName.toLowerCase().trim()
    //   )
    // ){
    //   window.alert(`${newName} is already added to phonebook`);
    //   setNewName("")
    //   return;
    const existingUser = persons.find (
      (person) =>
        person.name.toLowerCase().trim() === newName.toLowerCase() 
      );
      if(existingUser) {
        if(window.confirm (
          `${newName} is already added to phonebook, replace the old number with a new one?`
          )
        ){
          const id = existingUser.id;
          phones
            .changePerson(id, {
              name: existingUser.name,
              number: newNumber.trim()
            })
            .then((res) => {
              setPersons((persons) => 
                persons.map((person) => {
                  if(person.id === res.data.id) person.number = res.data.number;
                  return person;
                })
              );
              setNewName("");
              setNewNumber("");
              return;
            });
            return;
        }
    const newObject = { name: newName.trim(), number: newNumber.trim()}
    phones.create(newObject).then((res) => {
      setPersons([...persons, res.data])
      setNewName("");
      setNewNumber("");
    })
  }
  };

  const filteredPersons = persons.filter(person => person.name?.trim().toLowerCase().indexOf(query.trim().toLowerCase()) > -1)
  
  const contactToShow = query.trim().length ? filteredPersons : persons

  const handleDeliete = (id) => {
    setPersons(contactToShow.filter(p => p.id!==id))
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter everything={query} handleEverything={e => setQuery(e.target.value)} />
      <h3>Add a new</h3>
      <PersonForm
        addPerson={addPerson}
        newName={newName}
        handleNewName={e => setNewName(e.target.value)}
        handleNewNumber={e => setNewNumber(e.target.value)}
        />
      <Person persons={contactToShow} handleDeliete={handleDeliete}  />  
    </div>
  )
}

export default App
