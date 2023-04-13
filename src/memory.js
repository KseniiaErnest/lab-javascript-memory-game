class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;

    
  }

  shuffleCards() {
    if (!this.cards) {
      return undefined;
    }

    for (let i = 0; i < this.cards.length; i++) {
      let randomNum = Math.floor(Math.random() * (this.cards.length));

      let tempHolder = this.cards[i];
      this.cards[i] = this.cards[randomNum];
      this.cards[randomNum] = tempHolder;
    }

  }

  checkIfPair(card1, card2) {
    if (card1, card2) {
      this.pairsClicked++;
    } 
    
    if (card1 === card2) {
      this.pairsGuessed++;
    } 
    
    if (card1 === card2) {
      return true;
    } else if (card1 !== card2) {
      return false
    }
    
  }

  checkIfFinished() {
    if (this.pairsGuessed === 0) {
      return false
    } 
    
    
    if (this.pairsGuessed < 24 / 2) {
      return false
    } else if (this.pairsGuessed === 24 / 2) {
      return true
    }   
  }
}
