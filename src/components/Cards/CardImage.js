import './CardImage.css'

const CardImage = (props) => {
  const {image, name} = props.selectedCard

  return (
    <div>
      <img src={image.toString()} className="card__image" alt={name}/>
    </div>
  )
}

export default CardImage
