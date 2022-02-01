const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round');
const Game = require('../src/Game');

describe('Game', function() {
  let game;
  beforeEach(() => {
    game = new Game();
  });

  it('should be a function', function() {
    expect(Game).to.be.a('function');
  });

  it('should be an instance of a game', function() {
    expect(game).to.be.an.instanceof(Game);
  });

  it('should be able to start a new game', function() {
    game.start();
    expect(game.currentRound.deck.cards.length).to.equal(30);
  });

  it('should keep track of the current round', function() {
    game.start();
    expect(game.currentRound).to.be.an.instanceof(Round);
  });

  it('should have a deck of cards', function() {
    game.start();
    expect(game.currentRound.deck.cards).to.be.an('array');
  });

});