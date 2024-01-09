import { useState } from "react";

export default function Player({
  initialName,
  symbol,
  isActive,
  onChangeName,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(initialName);

  function handleEditClick() {
    setIsEditing((editing) => !editing);

    if (isEditing) {
      onChangeName(symbol, name);
    }
  }

  function handleChange(event) {
    setName(event.target.value);
  }

  let playerName = <span className="player-name">{name}</span>;
  let btnCaption = "Edit";
  if (isEditing) {
    playerName = (
      <input type="text" required value={name} onChange={handleChange}></input>
    );
    btnCaption = "Save";
  }

  return (
    <li className={isActive ? "active" : null}>
      <span className="player">
        {playerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{btnCaption}</button>
    </li>
  );
}
