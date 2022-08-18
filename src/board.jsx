import Square from './square'
import { useState } from "react"

export default function Board() {
  const [state, setState] = useState({
    squares: Array(9).fill(null),
    xIsNext: true,
  })

  function renderSquare(i) {
    return (
      <Square
        value={state.squares[i]}
        onClick={() => handleClick(i)}
      />
    )
  }

  function handleClick(i) {
    const squares = state.squares.slice()
    squares[i] = state.xIsNext ? 'X' : 'O'
    setState({ squares, xIsNext: !state.xIsNext })
  }

  const status = 'Next player: ' + (state.xIsNext ? 'X' : 'O')

  return (
    <div>
      <div className="status">{status}</div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  )
}
