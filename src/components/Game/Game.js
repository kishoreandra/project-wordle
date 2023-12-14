import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import { GameResults } from "./GameResults";
import Guess from "../Guess";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [word, setWord] = React.useState("");
  const [words, setWords] = React.useState([]);
  const [match, setMatch] = React.useState("unknown");

  function submitWord(e) {
    e.preventDefault();
    setWords([...words, word]);
    if (word === answer && words.length <= 5) {
      setMatch("win");
    } else if (word !== answer && words.length >= 5) {
      setMatch("lose");
    } else {
      setMatch("unknown");
    }
    setWord("");
  }

  return (
    <>
      <Guess words={words} answer={answer} />
      <form onSubmit={submitWord} className="guess-input-wrapper">
        <label htmlFor="guess-input">Enter guess:</label>
        <input
          value={word}
          onChange={(e) => setWord(e.target.value.toUpperCase())}
          id="guess-input"
          type="text"
          minLength={"5"}
          maxLength={"5"}
          disabled={match !== "unknown"}
        />
      </form>
      <div className="guess-results">
        <GameResults words={words} answer={answer} result={match} />
      </div>
    </>
  );
}

export default Game;
