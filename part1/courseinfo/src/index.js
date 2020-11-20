import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  return (
    <div>
      <h1>
        {props.courses}
      </h1>
    </div>
  )
}

const Content = (props) => {
  
  return (
    <div>
      <Part step1 = {props.part1} step1Ex = {props.exercise1} />
      <Part step2 = {props.part2} step2Ex = {props.exercise2} />
      <Part step3 = {props.part3} step3Ex = {props.exercise3} />
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>
        {props.total}
      </p>
    </div>
  )
}

const Part = (props) => {
  return (
    <div>
      <p>{props.step1} {props.step1Ex} </p>
      <p>{props.step2} {props.step2Ex} </p>
      <p>{props.step3} {props.step3Ex} </p>

    </div>
  )
}

const App = () => {
  const header = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    
      <div>
        <Header courses={header} />
        <Content part1={part1} part2={part2} part3 ={part3} exercise1 = {exercises1} exercise2 = {exercises2} exercise3 = {exercises3} />
      
        <Total total={exercises1 + exercises2 + exercises3} />
      </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))

// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

