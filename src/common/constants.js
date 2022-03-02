const startingPlayerChoices = {
  playerOne: 'question',
  playerTwo: 'question'
}

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

module.exports = {
  startingPlayerChoices,
  cards
}
