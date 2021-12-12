const suits = ['Spades', 'Clubs', 'Diamonds', 'Hearts'];
const ranks = ['A','2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

class Card {
    constructor(suit, rank, value) {
        this.suit = suit;
        this.rank = rank;
        this.value = value;
    }
}

class Deck {
    constructor() {
        this.cards = []; 
    }   
    
    createDeck() {
        for (let i = 0; i < suits.length; i++) {
            for (let j = 0; j < ranks.length; j++) {
                this.cards.push(new Card(suits[i], ranks[j], values[j]));
            }
        }
    } 

    shuffleDeck() {
        for (let i = this.cards.length - 1; i > 0; i--) {
            let tempIndex = Math.floor(Math.random() * (i +1));
            let newSet = this.cards[tempIndex];
            this.cards[tempIndex] = this.cards[i];
            this.cards[i] = newSet;
        }
    }
}

class Player {
 constructor(name) {
     this.playerName = name;
     this.playerCards = [];
     this.score = 0; 
 }

}

class Game {
 constructor() {
     this.cardsInMiddle = [];
     this.players = [];
 }

    start(playerOne, playerTwo) {
        this.players.push(new Player(playerOne));
        this.players.push(new Player(playerTwo));
        let d = new Deck();
        d.createDeck();
        d.shuffleDeck();    
        this.players[0].playerCards = d.cards.slice(0, 26);
        this.players[1].playerCards = d.cards.slice(26, 52);
    }

    beginRound() {
        if (playerOne > playerTwo) {
            alert('Player 1 is the winner!');
          } else if (playerOneName < playerTwoName) {
            alert('Player 2 is the winner!');
          } else {
            alert("It's a tie!");
          }
    }
}


let playGame = new Game();
playGame.start('Player 1', 'Player 2');
playGame.beginRound(); 
console.log(playGame.players); 