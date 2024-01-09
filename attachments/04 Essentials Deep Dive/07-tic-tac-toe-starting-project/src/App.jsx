import { useState } from "react";
import GameBoard from "./components/GameBoard";
import Player from "./components/Player";
import Log from "./components/Log";
import { WINNING_COMBINATIONS } from "./winning-combinations";
import GameOver from "./components/GameOver";

const PLAYERS = {
  X: "Player 1",
  O: "Player 2",
};

const INITIAL_GAME_BOARD = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function deriveActivePlayer(gameTurns) {
  let curPlayer = "X";
  if (gameTurns.length > 0 && gameTurns[0].player === "X") {
    curPlayer = "O";
  }
  return curPlayer;
}

function deriveGameBoard(gameTurns) {
  let gameBoard = [...INITIAL_GAME_BOARD.map((row) => [...row])];
  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;
    gameBoard[row][col] = player;
  }
  return gameBoard;
}

function _checkWin(gameBoard, combination, player) {
  for (const { row, column } of combination) {
    if (!gameBoard[row][column] || gameBoard[row][column] != player) {
      return false;
    }
  }
  return true;
}

function checkWin(gameBoard, combinations) {
  let winner = null;
  for (const combination of combinations) {
    if (_checkWin(gameBoard, combination, "X")) {
      winner = "X";
    } else if (_checkWin(gameBoard, combination)) {
      winner = "O";
    }
  }
  return winner;
}

function App() {
  const [players, setPlayers] = useState(PLAYERS);
  const [gameTurns, setGameTurns] = useState([]);
  const currentActivePlayer = deriveActivePlayer(gameTurns);
  const gameBoard = deriveGameBoard(gameTurns);
  const winner = checkWin(gameBoard, WINNING_COMBINATIONS);
  const isDraw = !winner && gameTurns.length === 9;

  function handleSelectSquare(rowIndex, colIndex) {
    setGameTurns((prevGameTurns) => {
      let curPlayer = deriveActivePlayer(prevGameTurns);
      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: curPlayer },
        ...prevGameTurns,
      ];
      return updatedTurns;
    });
  }

  function handleRematch() {
    setGameTurns([]);
  }

  function handlePlayerNameChange(symbol, newName) {
    setPlayers((prevPlayers) => {
      let curPlayers = { ...prevPlayers };
      curPlayers[symbol] = newName;
      return curPlayers;
    });
  }

  console.log(gameTurns);

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName={PLAYERS.X}
            symbol="X"
            isActive={currentActivePlayer === "X"}
            onChangeName={handlePlayerNameChange}
          />
          <Player
            initialName={PLAYERS.O}
            symbol="O"
            isActive={currentActivePlayer === "O"}
          />
        </ol>
        {(winner || isDraw) && (
          <GameOver winner={players[winner]} onRematch={handleRematch} />
        )}
        <GameBoard onSelectSquare={handleSelectSquare} gameBoard={gameBoard} />
        <Log turns={gameTurns} />
      </div>
    </main>
  );
}

export default App;
