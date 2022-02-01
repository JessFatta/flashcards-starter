const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/Deck');
const Card = require('../src/Card');
const Round = require('../src/Round');

describe('Round', function() {
  let cards;
  let deck;
  let card1;
  let card2;
  let card3;
  let round;
  this.beforeEach(() => {    
    card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    card2 = new Card(2, 'What is a comma-separated list of related values?', ['array', 'object', 'function'], 'array');
    card3 = new Card(3, 'What type of prototype method directly modifies the existing array?', ['mutator method', 'accessor method', 'iteration method'], 'mutator method');
    cards = [card1, card2, card3];
    deck = new Deck(cards);
    round = new Round(deck);

  });

  it('should be a function', function() {
    expect(Round).to.be.a('function');
  });

  it('should be an instance of Round', function() {
    expect(round).to.be.an.instanceof(Round);
  });

  it('should return the first card of the deck at the start of the game', function() {
    expect(round.returnCurrentCard()).to.equal(card1);
  });

  it('should update the turns count after a guess', function() {
    expect(round.turns).to.equal(0);
    round.takeTurn('guess');
    expect(round.turns).to.equal(1);
  });

  it('should make the next card the current card', function() {
    round.takeTurn('another guess');
    expect(round.returnCurrentCard()).to.equal(card2);
  });

  it('should store the ids of incorrect guesses', function() {
    round.takeTurn('another guess');
    expect(round.incorrectGuesses).to.deep.equal([1])
  });

  it('should calculate the percentage of correct guesses', function() {
    round.takeTurn('wrong guess');
    round.takeTurn('array');
    const correctAverage = round.calculatePercentCorrect();
    expect(correctAverage).to.equal(50);
  });

  it('should print a message and percent to the console', function() {
    round.takeTurn('wrong guess');
    round.takeTurn('array');
    const endMessage = round.endRound();
    expect(endMessage).to.be.a('string');
  });
});