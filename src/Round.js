const Turn = require('../src/Turn')

class Round {
  constructor(deck) {
    this.deck = deck;
    this.turns = 0;
    this.incorrectGuesses = [];
  }

  returnCurrentCard() {
    let currentCard = this.deck.cards[this.turns];
    return currentCard;
  }

  takeTurn(guess) {
    const turn = new Turn(guess, this.returnCurrentCard());
    this.turns++;
    if(!turn.evaluateGuess()) {
      this.incorrectGuesses.push(turn.card.id)
    }
    return turn.giveFeedback()
  }

  calculatePercentCorrect() {
    let correct = this.turns - this.incorrectGuesses.length;
    let percentCorrect = (correct / this.turns) * 100;
    return percentCorrect;
  }

  endRound() {
    let finalCorrect = this.turns - this.incorrectGuesses.length;
    let finalPercent = (finalCorrect / this.turns) * 100;
    console.log(`** Round Over! ** You answered ${Math.round(finalPercent)}% of questions correctly!`)
    return `** Round Over! ** You answered ${Math.round(finalPercent)}% of questions correctly!`
  }
}



module.exports = Round;