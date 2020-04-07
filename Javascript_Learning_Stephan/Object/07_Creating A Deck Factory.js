const mainDeck = makeDeck();

function makeDeck() {
  const deck = [];
  const suits = ['hearts', 'diamonds', 'spades', 'clubs'];
  const values = '2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K, A';
  for (let value of values.split(',')) {
    for (let suit of suits) {
      deck.push({ value, suit });
    }
  }
  return deck;
}

function drawCard(deck) {
  return deck.pop();
}

// const myDeck = makeDeck();
// console.log(drawCard(myDeck));
const myDeck = {
  deck: [],
  drawnCards: [],
  suits: ['hearts', 'diamonds', 'spades', 'clubs'],
  values: '2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K, A',
  initializeDeck() {
    const { suits, values, deck } = this;
    for (let value of values.split(',')) {
      for (let suit of suits) {
        deck.push({ value, suit });
      }
    }
    return deck;
  },
  drawCard() {
    const card = this.deck.pop();
    this.drawnCards.push(card);
    return card;
  },
  drawMultiple(numCards) {
    const cards = [];
    for (let i = 0; i < numCards; i++) {
      cards.push(this.drawCard());
    }
    return cards;
  }
};
myDeck.initializeDeck();
// console.log(myDeck.drawCard());
// console.log(myDeck.drawCard());
// console.log(myDeck.drawCard());
console.log(myDeck.drawMultiple(6));
console.log(myDeck);
