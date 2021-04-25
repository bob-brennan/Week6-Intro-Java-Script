// program to shuffle the deck of cards

// declare card elements
const suits = ["Spades", "Diamonds", "Club", "Heart"];
const names = [
  "Ace",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "Jack",
  "Queen",
  "King"
];

const values = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13
];

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

function debugIt (template){
		console.log (template);
}	

// empty array to contain cards
var deck = [];
var card = [];
var player1 = [];
var player2 = [];
var counter = 0;

// create a deck of cards
for (let i = 0; i < suits.length; i++) {
    for (let x = 0; x < values.length; x++) {
        card = {Value: values[x], Suit: suits[i], Name: names[x] };
        deck.push(card);
    }
}


// shuffle the cards   ** Increase value once done testing **
let shuffleLimit = getRandomIntInclusive(1, 2);
console.log (`ShuffleLimit = ${shuffleLimit}`);

for (let repeat = 0; repeat < shuffleLimit; repeat ++){ 
	for (let i = 0 ; i < deck.length ; i++) {
		let j = getRandomIntInclusive(0, 51);
		// debugIt (`Repeat ${repeat}   Counter : ${i} returns Random ${j}`);
		let temp = deck[i];
		deck[i] = deck[j];
		deck[j] = temp;
	} 
} 

// Deal the cards into 2 piles
for (let i = 0; i < deck.length; i+=2) {

		player2.push(deck[i]);
		player1.push(deck[i+1]);
		
		//console.log (i, deck[i], deck [i+1]);
}	
/* for (let i = 0; i < player1.length; i++) {


		console.log (i, player1[i], player2[i]);
}	
 */
//re-initialzie deck to be used to handle card movements in the game

deck.length = 0;
counter = 0;
console.log (deck.length, player1.length, player2.length );


// Keep playing until one player has no more cards
while ((player1.length > 0 && player2.length > 0) ) {
	counter ++;
	//console.log (`${counter}  ${player1[0].Value} ${player2[0].Value}`);
	if (player1[0].Value == player2[0].Value){
			console.log (`${counter} **WAR** Player1:  ${player1[0].Value} Player2: ${player2[0].Value}`);
			let numCards = 3;
			if (player2.length < 3){
				numCards = player2.length;
			}
			deck.push (player2.splice (0, numCards));  //Peel off 3 or less cards 
			
			numCards = 3;
			if (player1.length < 3){
				numCards = player1.length;
			}
			deck.push (player1.splice (0, numCards));  //Peel off 3 or less cards    
			
			console.log (deck.length, player1.length, player2.length);
			
	} else if (player1[0].Value > player2[0].Value){
			console.log (`${counter}  Player1 P1: ${player1[0].Value} P2: ${player2[0].Value}`);	 
			deck.push (player2.splice(0,1));  //Peel off losing card 
			deck.push (player1.splice(0,1));  //Peel off winning card 
			player1.push (deck);
			deck.length = 0;
			
	} else if (player1[0].Value < player2[0].Value){
			console.log (`${counter}  Player2 P1: ${player1[0].Value} P2: ${player2[0].Value}`);	 
			deck.push (player1.splice(0,1));  //Peel off losing card 
			deck.push (player2.splice(0,1));  //Peel off winning card 
			player2.push (deck);
			deck.length = 0;
	}	 
	console.log (deck.length, player1.length, player2.length);
}
