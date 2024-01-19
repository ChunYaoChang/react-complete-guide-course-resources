import { useState, useRef } from "react";

export default function Player() {
  const [enteredplayerName, setEnteredPlayerName] = useState("");
  const playerName = useRef();
  function handleClick() {
    setEnteredPlayerName(playerName.current.value);
    playerName.current.value = "";
  }

  return (
    <section id="player">
      <h2>Welcome {enteredplayerName ?? "guest"}</h2>
      <p>
        <input type="text" ref={playerName} />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
