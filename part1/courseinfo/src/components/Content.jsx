import React from 'react'
import Part from './Part'

const Content = ({name1, name2, name3, exercise1, exercise2, exercise3}) => {
  return (
    <div>
<Part name= {name1} exercise={exercise1}/>
<Part name= {name2} exercise={exercise2}/>
<Part name= {name3} exercise={exercise3}/>

    </div>
  )
}

export default Content
