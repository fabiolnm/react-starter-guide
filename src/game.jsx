import Board from './board'
import { useState } from "react"

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i]
    if (squares[a]
      && squares[a] === squares[b]
      && squares[a] === squares[c]) {
      return squares[a]
    }
  }
  return null;
}

export default function Game() {
  const [state, setState] = useState({
    history: [{
      squares: Array(9).fill(null),
    }],
    xIsNext: true,
  })

  function handleClick(i) {
    const { history, xIsNext } = state
    const current = history.at(-1)
    const squares = current.squares.slice();
    if(squares[i] || calculateWinner(squares) ) return

    squares[i] = xIsNext ? 'X' : 'O'
    setState({
      history: history.concat([{ squares }]),
      xIsNext: !xIsNext
    })
  }

  const { history, xIsNext } = state
  const { squares } = history.at(-1)
  const winner = calculateWinner(squares)
  let status
  if (winner) {
    status = 'Winner: ' + winner
  } else {
    status = 'Next player: ' + (xIsNext ? 'X' : 'O')
  }

  return (
    <div className="game">
      <div className="game-board">
        <Board
          squares={squares}
          onClick={(i) => handleClick(i)}
        />
      </div>
      <div className="game-info">
        <div>{ status }</div>
        <ol>{/* TODO */}</ol>
      </div>
    </div>
  )
}
