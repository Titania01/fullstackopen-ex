import React, { useState, useEffect } from 'react'
import Filter from "./components/Filter"
import Person from "./components/Person"
import PersonForm from "./components/PersonForm"
import Notification from "./components/Notification"
import "./index.css"

import * as phones from "./services/phones"

const App = () => {
  const [ persons, setPersons ] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [query, setQuery] = useState('')
  const [message, setMessage] = useState(null)

  useEffect(() => {
    phones.getAll().then((response)=> {
      setPersons(response.data)
      setNewNumber(response.data)    
    })
  }, [])

  const addPerson = (event) => {
    event.preventDefault()
    console.log('im here',{persons});
    if (!newName.trim()) return null;
    
    const existingUser = persons.find(
      (person) =>
        (person.name).toLowerCase().trim() === newName.toLowerCase() 
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
              return null;
            });
            
        }
    const newObject = { name: newName.trim(), number: newNumber.trim()}
    phones.create(newObject).then((res) => {
      setPersons([...persons, res.data])
      setMessage(`updated ${newName}`)
      setTimeout(() => {
        setMessage(null)
      }, 5000);
      setNewName("");
      setNewNumber("");
    })
      }
      else{
        phones.create({name:newName,number:newNumber})
        .then(({data}) => {
          setPersons(persons.concat(data))
          setMessage(`Added ${newName}`)
          setTimeout(() => {
            setMessage(null)
          }, 5000);
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
      { message && <Notification message={message}/> }
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
