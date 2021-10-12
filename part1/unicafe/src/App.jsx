import React, { useState } from "react";
import Statistics from "./components/Statistics";
import Button from "./components/Button";

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGoodClick = () => setGood(good + 1);
  const handleNeutralClick = () => setNeutral(neutral + 1);
  const handleBadClick = () => setBad(bad + 1);

  let all;

  return (
    <div>
      <h2>Give Feedback</h2>
      <Button handleClick={handleGoodClick} text="good" />
      <Button handleClick={handleNeutralClick} text="neutral" />
      <Button handleClick={handleBadClick} text="bad" />
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

export default App;
