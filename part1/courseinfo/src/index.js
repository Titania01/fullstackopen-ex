import React from "react";
import ReactDOM from "react-dom";

// const Header = (props) => {
//   console.log(props);
//   return (
//     <div>
//       <h1>{props.courses}</h1>
//     </div>
//   );
// };

// const Content = (props) => {
//   return (
//     <div>
//       <Parts step1={props.part1} step1Ex={props.parts} />
//     </div>
//   );
// };

// const Total = (props) => {
//   return (
//     <div>
//       <p>{props.total}</p>
//     </div>
//   );
// };

// const Parts = (props) => {
//   return (
//     <div>
//       <p>
//         {props.step1} {props.step1Ex}{" "}
//       </p>
//       <p>
//         {props.step2} {props.step2Ex}{" "}
//       </p>
//       <p>
//         {props.step3} {props.step3Ex}{" "}
//       </p>
//     </div>
//   );
// };

// const App = () => {
//   const course = "Half Stack application development";
//   const part1 = {
//     name: "Fundamentals of React",
//     exercises: 10,
//   };
//   const part2 = {
//     name: "Using props to pass data",
//     exercises: 7,
//   };
//   const part3 = {
//     name: "State of a component",
//     exercises: 14,
//   };
//   return (
//     <div>
//       <Header course={course} />
//       <Content part1={part1} part2={part2} part3={part3}/>
//       <Total part1={part1} part2={part2} part3={part3}/>
//     </div>
//   );
// };

const Hello = () => {
  return (
    <div>
      <p>Hello world</p>
    </div>
  )
}

const App = () => {

  return (
    <div>
      <h1>Greetings </h1>
      <Hello /> 
      <Hello /> 
      <Hello /> 
      <Hello /> 
    </div>
  )
}


// const App = () => {
//   const header = "Half Stack application development";
//   const part1 = "Fundamentals of React";
//   const exercises1 = 10;
//   const part2 = "Using props to pass data";
//   const exercises2 = 7;
//   const part3 = "State of a component";
//   const exercises3 = 14;

ReactDOM.render(<App />, document.getElementById("root"));

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
