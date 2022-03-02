import './Title.css'

const Title = props => {
  const {styling} = props
  return (
    <div className={`${styling} title__text`}>
      Rock, Paper, Scissors
    </div>
  )
}

export default Title
