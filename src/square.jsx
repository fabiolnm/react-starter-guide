import { useState } from "react"

export default function Square({ value }) {
  const [state, setState] = useState({ value: null })

  return (
    <button
      className="square"
      onClick={() => setState({ value: 'X' })}
    >
      {state.value}
    </button>
  )
}
