import Square from './square'
import { useState } from "react"

export default function Board() {
  const status = 'Next: X'

  const [state, setState] = useState({
    squares: Array(9).fill(null),
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
    squares[i] = 'X'
    setState({ squares })
  }

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
