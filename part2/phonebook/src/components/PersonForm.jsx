import React from 'react'

const PersonForm = ({
  addPerson,
  newNumber,
  handleNewNumber,
  newName,
  handleNewName
}) => {
  return (
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNewName} />
        </div>
        <br/>
        <div>
          number: <input value={newNumber} onChange={handleNewNumber} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    
  )
}

export default PersonForm
