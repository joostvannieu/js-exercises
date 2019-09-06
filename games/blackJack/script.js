(function () {
    //Class for cards, cards have 2 properties: a suit and a value
    class Card{
        constructor(suit, value){
            this._suit = suit;
            this._value = value;
        }
    }
    //Class for decks, a deck is a collection of cards (52 would be a single deck, but it could be extended to multiple decks in a shoe)
    class Deck {
        constructor(){
            this._cards = [];
            const suits = ['♥', '♠', '♣', '♦'];
            const values = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];

            //Push all cards into the deck (if working with shoes of multiple decks, iterate over this multiple times (for i <= numberOfDecks)
            for (let suit in suits){
                for (let value in values){
                    let card = new Card(suits[suit], values[value]);
                    this._cards.push(card);
                }
            }
        }

        //Fisher–Yates shuffle - place random 'card' from front of array to position in back of same array
        //More on this at: https://bost.ocks.org/mike/shuffle/ or https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle
        shuffleDeck(){
            let cardsToBeShuffled = this._cards.length, temp, cardsRemaining;

            // While there remain elements to shuffle…
            while (cardsToBeShuffled) {
                // Pick a remaining element…
                cardsRemaining = Math.floor(Math.random() * cardsToBeShuffled--);
                // And swap it with the current element.
                temp = this._cards[cardsToBeShuffled];
                this._cards[cardsToBeShuffled] = this._cards[cardsRemaining];
                this._cards[cardsRemaining] = temp;
            }
            return this.cards;
        }
        //Deals a card
        dealCard(){
            let cardDealt, deckHasCards = false;

            //Check if array of cards exists, which it should, and if it contains any cards
            if(Array.isArray(this._cards) && this._cards.length){
                deckHasCards = true;
            }
            //Get top card
            return cardDealt = this._cards.pop();
        }
    }

    class Player {
        constructor(name){
            this._name = name;
            this._hand = [];
            this._isDealer = false;
            this._handValue = 0;
        }
        /*get _name(){
            return this._name;
        }
        get _hand(){
            return this._hand;
        }
        set _name(newName){
            this._name = newName;
        }
        set _hand(newHand){
            this._hand = newHand;
        }*/
        calculateHandValue(){
            let handValue = 0, handHasCards = false;

            //Check if hand array exists, which it should, and if it contains any cards
            if (Array.isArray(this._hand) && this._hand.length){
                handHasCards = true;
            }
            if(handHasCards) {
                this._hand.forEach(function (card) {
                    if (Number.isInteger(card._value)) {
                        handValue += card._value
                    } else if (!Number.isInteger(card._value) && card._value !== 'A') {
                        handValue += 10
                    } else {
                        if ((handValue + 11) <= 21) {
                            handValue += 11
                        } else {
                            handValue += 1
                        }
                    }
                });
            }
            this._handValue = handValue;
        }
    }

    let playerNames = ['player1','dealer'], players = [], currentPlayer;
    const myDeck = new Deck();
    const INITIAL_DEAL = 2; //hand size after initial deal of cards

    //Make deck ready for game
    myDeck.shuffleDeck();

    //Create players
    function createPlayers() {
        playerNames.forEach(function (playerName) {
            players.push(new Player(playerName))

        });
        //set last player to be the dealer
        players[players.length-1]._isDealer = true;
    }

    //Deal the initial hands to all players, including dealer
    function dealInitialHands(){
        for (let i = 0; i < INITIAL_DEAL; i++){
            players.forEach(function (player) {
                player._hand.push(myDeck.dealCard())
            })
        }
    }

    //

    createPlayers();
    currentPlayer = players[0];
    dealInitialHands();
    currentPlayer.calculateHandValue();
    console.log(currentPlayer);

})();