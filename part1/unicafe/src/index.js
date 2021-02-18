import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Statistics from './components/Statistics';

const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h2>give feedback</h2>
      <button onClick={() => setGood(good + 1)}>
        good
        </button>
      <button onClick={() => setNeutral(neutral + 1)}>
        neutral
      </button>
      <button onClick={() => setBad(bad + 1)}>
        bad
        </button>
      {/* <Statistics good ={good} bad={bad} neutral={neutral} /> */}

      {(good || neutral || bad) ?    <Statistics good ={good} bad={bad} neutral={neutral} /> :<h2>No Feedback Given</h2>}
    </div>
  )
}


ReactDOM.render(<App />, document.getElementById('root')
);

