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
    stepNumber: 0,
    xIsNext: true,
  })

  function handleClick(i) {
    const { stepNumber, xIsNext } = state
    const history = state.history.slice(0, stepNumber + 1)
    const current = history.at(-1)
    const squares = current.squares.slice();
    if(squares[i] || calculateWinner(squares) ) return

    squares[i] = xIsNext ? 'X' : 'O'
    setState({
      history: history.concat([{ squares }]),
      stepNumber: history.length,
      xIsNext: !xIsNext
    })
  }

  function jumpTo(stepNumber) {
    setState((state) => ({
      ...state,
      stepNumber,
      xIsNext: (stepNumber % 2) === 0
    }))
  }

  const { history, xIsNext, stepNumber } = state
  const { squares } = history[stepNumber]
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
        <ol>{ history.map((step, move) => (
          <li key={move}>
            <button onClick={() => jumpTo(move)}>
              Go to { move ? `move #${move}` : 'game start' }
            </button>
          </li>
        ))}</ol>
      </div>
    </div>
  )
}
