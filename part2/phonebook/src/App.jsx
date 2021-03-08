import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', mobile: '040-123456' },
    { name: 'Ada Lovelace', mobile: '39-44-5323523' },
    { name: 'Dan Abramov', mobile: '12-43-234345' },
    { name: 'Mary Poppendieck', mobile: '39-23-6423122' }
  ])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ everything, setEverything] = useState("")


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
   
  const contactToShow = handleFilter.length ? handleFilter: persons;

  return (
    <div>
      <h2>Phonebook</h2>
      
      <div>
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
      </form>
      <h2>Numbers</h2>
      {contactToShow.map((person) => (
        <p key={person.name}> {person.name} {person.mobile} </p> 
      ))} {" "}
    </div>
  )
}

export default App
