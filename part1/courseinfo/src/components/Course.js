import React from 'react'

import Header from "./Header";
import Content from "./Content";
// import Total from "./Total";


const Course = ({ courses }) => {
  console.log(courses)
  return (
    <div key={courses.id}>
      {
        courses.map(course => (
          <>
            <Header course={course.name} />
            <Content parts={course.parts} />
            {/* <Total parts={course.parts} /> */}
          </>
        ))
      }
    </div>
  )
}

export default Course
