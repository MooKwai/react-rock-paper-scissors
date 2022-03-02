import {useState} from 'react'
import './Card.css'
import paper from '../../images/paper.svg'
import question from '../../images/question.svg'
import rock from '../../images/rock.svg'
import scissors from '../../images/scissors.svg'
import CardImage from './CardImage'
import CardForm from './CardForm'

const Card = (props) => {
  const {playerId, onConfirmChoices} = props

  const images = {
    rock,
    paper,
    scissors,
    question
  }
  const [selectedCard, setSelectedCard] = useState({
    name: 'question',
    image: images.question
  })

  const cardSelectHandler = event => {
    setSelectedCard({
      name: event.target.value,
      image: images[event.target.value]
    })
  }

  const cardConfirmHandler = event => {
    event.preventDefault()

    const player = {
      [playerId]: selectedCard.name
    }

    onConfirmChoices(player)
    setSelectedCard({
      name: 'question',
      image: images.question
    })

  }

  const parseId = playerId => {
    if (playerId === 'playerOne') return 'Player One'
    return 'Player Two'
  }

  const disableSubmit = selectedCard.image === images.question

  return (
    <div className="card__wrapper">
      <CardImage selectedCard={selectedCard}/>
      <div className="player__name">
        {parseId(playerId)}
      </div>
      <CardForm
        selectedCard={selectedCard}
        cardSelectHandler={cardSelectHandler}
        cardConfirmHandler={cardConfirmHandler}
        disableSubmit={disableSubmit}
      />
    </div>
  )
}

export default Card
