
const myDeck = {
    deck: [],
    drawnCards: [],
    suits: ['hearts', 'diamonds', 'spades', 'clubs'],
    values: [2,3,4,5,6,7,8,9,10,'J', 'Q','K','A'],
    initializeDeck(){
        const {suits, values, deck, drawnCards}= this;
        for (let value of values){
            for (let suit of suits){
                deck.push({value, suit})
    }}},
    draw(){
        var card = this.deck.pop();
        this.drawnCards.push(card);
        return card;
    },
    drawMultiple(numCards){
        const cards = [];
       for(i=0; i<numCards; i++){
            cards.push(this.draw())
        }
        return cards;
    },
    //fisher yates shuffle
    shuffle(){
        for (let i = this.deck.length-1; i>0; i--){
            let j= Math.floor(Math.random()*(i+1));
            [this.deck[i],this.deck[j]]=[this.deck[j], this.deck[i]];
        }

}

        }