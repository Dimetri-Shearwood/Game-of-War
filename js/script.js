console.log("hello!");

let allSuits = ["spades", "clubs", "hearts", "diamonds"];
let allFaces = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
let allNumbers = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
class Card {
  constructor(number, face, suit) {
    this.number = number;
    this.face = face;
    this.suit = suit;
  }
}

//make a for loop, use heartDeck as variable, push into empty array , start with hearts and then loop through all values for hearts 2-Ace

const theDeck = [];
for (let k = 0; k < allSuits.length; k++) {
  for (let i = 0; i < allNumbers.length; i++) {
    let myCard = new Card(allNumbers[i], allFaces[i], allSuits[k]);
    theDeck.push(myCard);
    // console.log(myCard)
  }
}
//Shuffles the deck
let shuffleDeck = theDeck.sort(() => Math.random() - 0.5);
// console.log(shuffleDeck);

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
const warPlay = (p1, p2) => {
  warPile.push(p1, p2);

  let warPile1 = player1Deck.splice(0, 3);
  let warPile2 = player2Deck.splice(0, 3);

  warPile = [...warPile, ...warPile1, ...warPile2];
  if(warPile1.length && warPile2.length) {
  console.log(warPile1[0].number, warPile2[0].number)}; //Testing
  if (warPile1[0].number > warPile2[0].number) {
    player1Deck.push(...warPile);
    console.log("Player 1 Wins This Round");
    console.log(warPile1[0], warPile2[0])
    console.log(player1Deck.length, player2Deck.length)
  }
  // If player 1 has more cards they win
  else if (warPile1[0].number < warPile2[0].number) {
    player2Deck.push(...warPile);
    console.log("Player 2 Wins This Round");
    console.log(warPile1[0], warPile2[0])
    console.log(player1Deck.length, player2Deck.length)
  } else {
    warPlay();
  }

  console.log(warPile);
};

const roundPlay = () => {
  let player1Card = player1Deck.shift();
  let player2Card = player2Deck.shift();
  // If player 1 has more cards they win
  if (player1Card.number > player2Card.number) {
    console.log("Player 1 Wins This Round");
    console.log(player1Card, player2Card)
    console.log(player1Deck.length, player2Deck.length)
  }
  // If player 1 has more cards they win
  else if (player1Card.number < player2Card.number) {
    console.log("Player 2 Wins This Round");
    console.log(player1Card, player2Card)
    console.log(player1Deck.length, player2Deck.length)
  }
  // If players tie they go to war
  else {
    console.log("War");

    warPlay(player1Card, player2Card);
  }
};
 console.log("hello")
let game = true
while (game){
  if( player1Deck.length == 0 ){
    game = false;
    console.log("Player 2 Wins This Game")
  }
  else if(player2Deck.length == 0){
    game = false;
    console.log("Player 1 Wins This Game")
  }
  else { roundPlay();
  
  }
}
//add a for loop and run the game 3x

//then add a while loop for roundPlay