export const GameResults = ({ words, result = "unknown", answer }) => {
  const win = (
    <div className="happy banner">
      <p>
        <strong>Congratulations!</strong> Got it in{" "}
        <strong>{words.length} guesses</strong>.
      </p>
    </div>
  );

  const lose = (
    <div className="sad banner">
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>.
      </p>
    </div>
  );
  return result === "unknown" ? null : result === "win" ? win : lose;
};
