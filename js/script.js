console.log("Hello! Welcome to Game of War!")
console.log("You each get 26 Cards.")
console.log("Let's begin!")
;

let allSuits = ["♥️", "♠️", "♦️", "♣️"];
let allFaces = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
let allNumbers = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

class Card {
  constructor(number, face, suit) {
    this.number = number;
    this.face = face;
    this.suit = suit;
  }
}

//make a for loop for all the types of suits use theDeck as variable, then a for loop inside of that to represent the numbers for each suit and then push into empty array (I think)


const theDeck = [];
for (let k = 0; k < allSuits.length; k++) {
  for (let i = 0; i < allNumbers.length; i++) {
    let myCard = new Card(allNumbers[i], allFaces[i], allSuits[k]);
    theDeck.push(myCard);
  }
}
//Shuffles the deck
let shuffleDeck = theDeck.sort(() => Math.random() - 0.5);

let player1Deck = [];
let player2Deck = [];
let drawIndex;
let warPile = [];

//Shares 1 card each to each deck
while (theDeck.length > 0) {
  drawIndex = Math.random() * theDeck.length;
  player1Deck.push(theDeck.splice(drawIndex, 1)[0]);

  drawIndex = Math.random() * theDeck.length;
  player2Deck.push(theDeck.splice(drawIndex.cpu, 1)[0]);
}
// console.log(player1Deck);
// console.log(player2Deck);

//-------------------GamePlay-------------------\\
const warPlay = (p1, p2, recursive=false) => {
  
  console.log(p1,"work1")
  console.log(p2,"work2")
  if (! recursive) {
    warPile=[];
    warPile.push(p1, p2);
  }
  

  let warPile1 = player1Deck.splice(0, 3);
  let warPile2 = player2Deck.splice(0, 3);

  warPile = [...warPile, ...warPile1, ...warPile2];
  // if(warPile1.length && warPile2.length) {
  // console.log(warPile1[0].number, warPile2[0].number)}; //Testing
  console.log(warPile, "Warpile stuff")
  // If player 1 has more cards they win
  if (warPile1[0].number > warPile2[0].number) {
    player1Deck.push(...warPile);
    console.log(warPile1[0], warPile2[0])
    console.log("Player 1 Wins This Round");
    console.log(player1Deck.length, player2Deck.length)
  }
  // If player 2 has more cards they win
  else if (warPile2[0].number > warPile1[0].number) {
    player2Deck.push(...warPile);
    console.log(warPile1[0], warPile2[0])
    console.log("Player 2 Wins This Round");
    console.log(player1Deck.length, player2Deck.length)
  } else {
    warPlay(0, 0, true);
  }

  console.log(warPile);
  
};

const roundPlay = () => {
  // console.log(player1Deck.length, player2Deck.length)
  let player1Card = player1Deck.shift();
  let player2Card = player2Deck.shift();
  // If player 1 has more cards they win
  if (player1Card.number > player2Card.number) {
    player1Deck.push(player1Card)
    player1Deck.push(player2Card)
    console.log(player1Card, player2Card)
    console.log("Player 1 Wins This Round");
    console.log(player1Deck.length, player2Deck.length)
    // console.log(player1Deck)
  }
  // If player 1 has more cards they win
  else if (player1Card.number < player2Card.number) {
    player2Deck.push(player1Card)
    player2Deck.push(player2Card)
    console.log(player1Card, player2Card)
    console.log("Player 2 Wins This Round");
    console.log(player1Deck.length, player2Deck.length)
    // console.log(player2Deck)
  }
  // If players tie they go to war
  else {
    console.log("War");

    warPlay(player1Card, player2Card);
  }
};

let game = true
while (game){
  if( player1Deck.length >= 52  ){
    game = false;
    console.log("Player 1 Wins This Game")
  }
  else if(player2Deck.length >= 52){
    game = false;
    console.log("Player 2 Wins This Game")
  }
  else { roundPlay();
  
  }
}
