import React from "react";
import Header from "./components/Header"
import Content from "./components/Content"
import Total from "./components/Total"
import ReactDOM from "react-dom";


const App = () => {

  const course = 'Half Stack application development'
  const parts = [
    {
    name: 'Fundamentals of React',
    exercises: 10
  },
   {
    name:'Using props to pass data',
    exercises: 7
  },
  {
    name: 'State of a component',
    exercises: 14
  }
]  

  return (
    <div>
      <Header course={course}/>
      {/* <Content 
      name1={parts[0].name} 
      exercise1={parts[0].exercises} 
      name2={parts[1].name} 
      exercise2={parts[1].exercises} 
      name3={parts[2].name} 
      exercise3={parts[2].exercises}/> */}
      <Content parts={parts}/>
      {/* <Total 
      exercise1={parts[0].exercises} 
      exercise2={parts[1].exercises} 
      exercise3={parts[2].exercises} />   */}
      <Total parts={parts}/>
    </div>
  )
}


ReactDOM.render(<App />, document.getElementById("root"));
