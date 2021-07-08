import React, { useState } from "react";
import ReactDOM from "react-dom";
import Statistics from "./components/Statistics";
import Button from "./components/Button";

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  let all;

  return (
    <div>
      <h2>Give Feedback</h2>
      <Button handleEvent={() => setGood(good + 1)} text="good" />
      <Button handleEvent={() => setNeutral(neutral + 1)} text="neutral" />
      <Button handleEvent={() => setBad(bad + 1)} text="bad" />
      {good || neutral || bad ? (
        <table>
          <tbody>
            <Statistics text="Good" execution={good} />
            <Statistics text="Neutral" execution={neutral} />
            <Statistics text="Bad" execution={bad} />
            <Statistics text="All" execution={(all = good + neutral + bad)} />
            <Statistics
              text="Average"
              execution={good * 1 + neutral * 0 + (bad * -1) / 3}
            />
            <Statistics
              text="Positive"
              execution={((good / all) * 1 * 100 || 0) + "%"}
            />
          </tbody>
        </table>
      ) : (
        <h2>No Feedback Given</h2>
      )}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
