import React from 'react'

function Part({name, exercise, total}) {
  return (
    <div>
    <span>{name}</span> <span>{exercise}</span> <span>{total}</span>
    </div>
  )
}

export default Part
