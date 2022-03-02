import './Intro.css'

const Intro = props => {
  const {onStartGame} = props
  return (
    <div>
      <p className="heading">
        How the game works
      </p>
      <ol className="instructions">
        <li>Decide who is Player One and who is Player Two</li>
        <li>Player One selects rock, paper or scissors and confirms</li>
        <li>Player Two does not peek at Player One's selection</li>
        <li>Player Two makes their selection</li>
        <li>Once Player Two hits "Confirm" the winner is decided</li>
      </ol>

      <div className="confirm__container">
        <button onClick={onStartGame} >Got it</button>
      </div>
    </div>
  )
}

export default Intro
