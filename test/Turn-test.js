const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Turn = require('../src/Turn');

describe('Turn', function() {
  let card;
  let turn;
  this.beforeEach(() => {
    card = new Card(2, 'What is a comma-separated list of related values?', ['array', 'object', 'function'], 'array')
    turn = new Turn('array', card)
  });

  it('should be a function', function() {
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of turn', function() {
    expect(turn).to.be.an.instanceof(Turn);
  });

  it('should be instantiated with two arguments', function() {
    expect(turn).to.have.property('guess');
    expect(turn).to.have.property('card');
  })

  it('should return a guess', function() {
    expect(turn.returnGuess()).to.equal('array');
  })

  it('should return the card', function() {
    expect(turn.returnCard()).to.equal(card);
  })

  it('should evaluate users guess and return true when correct', function() {
    expect(turn.evaluateGuess()).to.equal(true);
  })

  it('should evaluate users guess and return false when incorrect', function() {
    const turn = new Turn('wrong guess', card);
    expect(turn.evaluateGuess()).to.equal(false);
  })

  it('should give positive feedback when correct', function() {
    expect(turn.giveFeedback()).to.equal('Correct!');
  })
})