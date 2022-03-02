import './CardForm.css'

const CardForm = (props) => {
  const {selectedCard, cardSelectHandler, cardConfirmHandler, disableSubmit} = props

  return (
    <form onSubmit={cardConfirmHandler}>
      <div className="card__controls">
        <div className="card__control">
          <label>Select a card</label>
        </div>
        <div className="card__control">
          <select value={selectedCard.name} onChange={cardSelectHandler}>
            <option value="question">Select</option>
            <option value="rock">Rock</option>
            <option value="paper">Paper</option>
            <option value="scissors">Scissors</option>
          </select>
        </div>
        <div>
          <button className="card__action" disabled={disableSubmit}>Confirm</button>
        </div>
      </div>
    </form>
  )
}

export default CardForm
