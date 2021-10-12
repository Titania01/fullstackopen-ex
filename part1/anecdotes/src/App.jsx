import React, { useState } from "react";
import Button from "./component/Button";
import "./index.css";

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
  ];
  const [selected, setSeleccted] = useState(0);
  const [votes, setVotes] = useState(Array(7).fill(0));

  const handleSelectedClick = () =>
    setSeleccted(selected < anecdotes.length - 1 ? selected + 1 : 0);

  const handleVotesClick = () => {
    const newVote = [...votes];
    newVote[selected] += 1;
    setVotes(newVote);
  };

  const mostVoted = Math.max(...votes);
  const mostVotedIndex = votes.indexOf(mostVoted);

  return (
    <div>
      <h2>Anecdote of The Day</h2>
      {anecdotes[selected]}
      <br />
      <div>has {votes[selected]} votes</div>
      <br />
      <Button
        style={{ margin: "1rem", cursor: "pointer" }}
        handleClick={handleSelectedClick}
        text="next anecdote"
      />

      <Button handleClick={handleVotesClick} text="vote" />
      <h2>Anecdote with Most Count</h2>
      <div>
        {mostVoted === 0 ? (
          <span>No vote has been casted</span>
        ) : (
          <>
            <p>{anecdotes[mostVotedIndex]}</p>
            <span>has {mostVoted} vote</span>
          </>
        )}
      </div>
    </div>
  );
};

export default App;
