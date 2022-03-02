import {useState} from 'react'
import Card from '../Cards/Card'
import Result from '../Information/Result'

const Game = props => {
  const {styling} = props

  const startingPlayerChoices = {
    playerOne: 'question',
    playerTwo: 'question'
  }

  const [playerChoices, setPlayerChoices] = useState(startingPlayerChoices)

  const playerId = Object.keys(playerChoices).find(player => playerChoices[player] === 'question')

  const cards = {
    rock: {
      beats: 'scissors'
    },
    paper: {
      beats: 'rock'
    },
    scissors: {
      beats: 'paper'
    }
  }

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

  return (
    <div className={styling}>
      {!winnerHasBeenDecided && <Card onConfirmChoices={playerCardChoiceHandler} playerId={playerId}/>}
      {winnerHasBeenDecided && <Result winningText={winner} onRestartGame={restartGame}/>}
    </div>
  )
}

export default Game
