import React from 'react'


function Part({parts}) {
  return (
    <div>
    {/* <span>{name}</span> <span>{exercise}</span> <span>{total }</span> */}
    {
      parts.map((part, partIndex)=>
      <p key={`course-parts${partIndex}`}>
        {part.name} {part.exercises}
      </p>)
    }
    </div>
  )
}

export default Part
