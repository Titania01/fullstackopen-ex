import React from 'react'

import Header from "./Header";
import Content from "./Content";
// import Total from "./Total";


const Course = ({ course }) => {
  return (
    <div key={course.id}>
      <Header course={course.nae} />
      <Content parts={course.parts} />
    </div>
  )
}

export default Course
