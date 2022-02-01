class Deck{
  constructor(cards) {
    this.cards = cards;
    this.deckLength = 3
  }

  countCards() {
    return this.deckLength;
  }
}


module.exports = Deck;