export default function Log({ turns }) {
  return (
    <ol id="log">
      {turns.map((turn) => {
        return (
          <li key={`${turn.square.row}_${turn.square.col}`}>
            {turn.player} selected row {turn.square.row}, column{" "}
            {turn.square.row}
          </li>
        );
      })}
    </ol>
  );
}
