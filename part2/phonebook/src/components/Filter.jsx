import React from 'react'

const Filter = ({ everything, handleEverything }) => {
  return (
    <div>
      Filter shown with: <input value= {everything} onChange={handleEverything} /> 
    </div>
  )
}

export default Filter
