export default function Square({ value }) {
  return (
    <button
      className="square"
      onClick={() => console.log('click')}
    >
      {value}
    </button>
  )
}
