import React from "react";

const PersonForm = ({
  addPersons,
  newNumber,
  handleNewNumber,
  newName,
  handlePersonChange,
}) => {
  return (
    <form onSubmit={addPersons}>
      name: <input value={newName} onChange={handlePersonChange} />
      <br />
      number: <input value={newNumber} onChange={handleNewNumber} />
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default PersonForm;
