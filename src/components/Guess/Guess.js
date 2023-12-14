import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { checkGuess } from "../../game-helpers";

const guessBoard = range(NUM_OF_GUESSES_ALLOWED);

function spans({ words, id, item, answer }) {
  if (words[id]) {
    const checked = checkGuess(words[id], answer);
    return (
      <p key={item} className="guess">
        {words[id].split("").map((letter, kid) => (
          <span key={kid} className={`cell ${checked[kid].status}`}>
            {letter}
          </span>
        ))}
      </p>
    );
  }
  return (
    <p key={item} className="guess">
      <span className="cell"></span>
      <span className="cell"></span>
      <span className="cell"></span>
      <span className="cell"></span>
      <span className="cell"></span>
    </p>
  );
}

function Guess({ words = [], answer }) {
  return guessBoard.map((item, id) => spans({ words, id, item, answer }));
}

export default Guess;
