import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const Header = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    
      <div>
        <Header course={Header} />
        <Content part={part1, part2, part3} exercises={exercises1, exercises2, exercises3}  />
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

