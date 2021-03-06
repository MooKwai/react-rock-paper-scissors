import {useState} from 'react'
import Card from '../Cards/Card'
import Result from '../Information/Result'
import {startingPlayerChoices, cards} from '../../common/constants'
import Intro from '../Information/Intro'

const Game = props => {
  const {styling} = props

  const [introComplete, setIntroComplete] = useState(false)
  const [playerChoices, setPlayerChoices] = useState(startingPlayerChoices)

  const playerId = Object.keys(playerChoices).find(player => playerChoices[player] === 'question')

  const playerCardChoiceHandler = player => {
    setPlayerChoices(prevState => {
      return {
        ...prevState,
        ...player
      }
    })
  }

  const decideWinner = playerChoices => {
    if (playerChoices.playerOne === 'question' || playerChoices.playerTwo === 'question') {
      return false
    }
    if (playerChoices.playerOne === playerChoices.playerTwo) {
      return 'It\'s a draw!'
    }
    if (cards[playerChoices.playerOne].beats === playerChoices.playerTwo) {
      return 'Player One wins!'
    }
    return 'Player Two wins!'
  }

  const winner = decideWinner(playerChoices)
  const winnerHasBeenDecided = !!winner

  const restartGame = () => {
    setPlayerChoices(startingPlayerChoices)
  }

  const startGame = () => {
    setIntroComplete(true)
  }

  return (
    <div className={styling}>
      {!introComplete && <Intro onStartGame={startGame} />}
      {introComplete && !winnerHasBeenDecided && <Card onConfirmChoices={playerCardChoiceHandler} playerId={playerId}/>}
      {introComplete && winnerHasBeenDecided && <Result winningText={winner} onRestartGame={restartGame}/>}
    </div>
  )
}

export default Game
