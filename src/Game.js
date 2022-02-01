const Card = require('./Card');
const data = require('./data');
const Deck = require('./Deck');
const Round = require('./Round')
const prototypeQuestions = data.prototypeData;
const util = require('./util');

class Game {
  constructor() {
    this.currentRound = undefined;

  }

  start() {
    let cards = [];
    prototypeQuestions.forEach(cardObj => {
      let eachCard = new Card(cardObj.id, cardObj.question, cardObj.answers, cardObj.correctAnswer);
      cards.push(eachCard);
    });

    let deck = new Deck(cards);
    let round = new Round(deck);
    this.currentRound = round;
    this.printMessage(deck);
    this.printQuestion(round);
  }

  printMessage(deck, round) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }
}

module.exports = Game;