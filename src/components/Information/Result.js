import './Result.css'
import '../Cards/Card.css'

const Result = (props) => {
  const {winningText, onRestartGame} = props
  return (
    <div>
      <p className="result__declaration">{winningText}</p>
      <button onClick={onRestartGame}>Restart</button>
    </div>
  )
}

export default Result
