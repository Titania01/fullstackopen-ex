import React from 'react'

// const Total = ({exercise1, exercise2, exercise3 }) => {
//   return (
//     <div>
//       <p>Number of exercises {exercise1 + exercise2 + exercise3} </p>
//     </div>
//   )
// }
const Total = ({ parts }) => {
  return (
    <p>Total number of exercises { parts.reduce((sum, value) => sum + value.exercises,0)} </p>
  )
}

export default Total
