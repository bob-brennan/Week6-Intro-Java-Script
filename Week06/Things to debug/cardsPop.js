/*
		Front End Development Class
		NCC 
		Due Date:  4/24/2021
		Bob Brennan
		Week 6 

		WAR as a simulated card game
*/

// declare card elements
const suits = ["Spades", "Diamonds", "Clubs", "Hearts"];
const names = ["Ace","2","3","4","5","6","7","8","9","10","Jack","Queen","King"];
const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];



function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

function debugIt (template){
		console.log (template);
}	

function introAlert(){
alert(`  Game of WAR - Brennan Family Edition

Single deck of cards shuffled randomly between 1 and 6 times
Cards are dealt to 2 players (P1) and (P2)

Aces are worth 1 point
Number cards worth their value
Jack, Queen King in that order.

Top card from each player gets turned
High value wins
Winner takes cards and adds them to the bottom of their pile.

If tied, we go to WAR.
Both players deal off 3 cards and the top card values are compared
Repeats until a winning hand is played.

Game is won when the opponent has no cards remaining.`)

return;
}


function createDeck (){
	// create a deck of cards
	for (let i = 0; i < suits.length; i++) {
    for (let x = 0; x < values.length; x++) {
        card = {Value: values[x], Suit: suits[i], Name: names[x] };
        deck.push(card);
    }
	}
	return;
}

function shuffleCards(){
	
	// shuffle the cards between 1 and 6 times for randomness
	
	let shuffleLimit = getRandomIntInclusive(1, 6);
	console.log (`Cards Shuffled ${shuffleLimit} times`);
	
	for (let repeat = 0; repeat < shuffleLimit; repeat ++){ 
		for (let i = 0 ; i < deck.length ; i++) {
			let j = getRandomIntInclusive(0, 51);
			let temp = deck[i];
			deck[i] = deck[j];
			deck[j] = temp;
		} 
	} 
	
	
}
function dealCards(){
	// Deal the cards into 2 piles
	for (let i = 0; i < deck.length; i+=2) {
	
			player2.push(deck[i]);
			player1.push(deck[i+1]);
			
	}	
	return;
}

function playWar(){
	//re-initialzie deck to be used to handle card movements in the game
	
	deck.length = 0;
	counter = 0;
	
	
	// Keep playing until one player has no more cards
	while ((player1.length > 0 && player2.length > 0) ) {
		counter ++;
		//console.log (`${counter}  ${player1[0].Value} ${player2[0].Value}`);
		if (player1[0].Value == player2[0].Value){
				console.log (`In Round ${counter} **WAR**          P1:  ${player1[0].Name} of ${player1[0].Suit} TIES     P2: ${player2[0].Name} of ${player2[0].Suit}`);
				numCards = 3;
				if (player2.length < 3){
					numCards = player2.length;
				}
				for (i = 0; i < numCards; i++) {
					deck.push (player2.shift ());  //Peel off 3 or less cards 	
				}
				
				numCards = 3;
				if (player1.length < 3){
					numCards = player1.length;
				}
				for (i = 0; i < numCards; i++){
					deck.push (player1.shift ());  //Peel off 3 or less cards 	
				}
		
				//console.log (deck.length, player1.length, player2.length);
				
		} else if (player1[0].Value > player2[0].Value){
				console.log (`In Round ${counter}  Player1         P1: ${player1[0].Name} of ${player1[0].Suit}  Defeats  P2: ${player2[0].Name} of ${player2[0].Suit}`);	 
				deck.push (player2.shift());  //Peel off losing card 
				deck.push (player1.shift());  //Peel off winning card 
	
				numCards = deck.length;
				for (i = 0; i < numCards; i++){
					player1.push (deck.shift ());  //Load the end of Player 1 queue with cards
				}
	
				//console.log (deck.length, player1.length, player2.length);
				deck.length = 0;
				
		} else if (player1[0].Value < player2[0].Value){
				console.log (`In Round ${counter}  Player2         P1: ${player1[0].Name} of ${player1[0].Suit}  Loses to P2: ${player2[0].Name} of ${player2[0].Suit}`);	 
				deck.push (player1.shift());  //Peel off losing card 
				deck.push (player2.shift());  //Peel off winning card 
	
				numCards = deck.length;
				for (i = 0; i < numCards; i++){
					player2.push (deck.shift ());  //Load the end of Player 1 queue with cards
				}
	
				//console.log (deck.length, player1.length, player2.length);
				deck.length = 0;
		}	 
		    console.log (`War Pile holds ${deck.length} cards           P1 holds ${player1.length} cards               P2 holds ${player2.length} cards`);
	}
	return;
}

function alertWinner(){
	if (player1.length == 0){
			alert (`Player 2 WINS after ${counter} rounds!`)
	} else {
			alert (`Player 1 WINS! after ${counter} rounds!`)
	}
	return;
}


// empty array to contain cards
var deck = [];
var card = [];
var player1 = [];
var player2 = [];
var counter = 0;
var numCards = 0;

introAlert();  			// Splash Screen via alert
createDeck();				// Create an array with 52 cards made up of 4 suits and 13 cards per suit
shuffleCards();			// Ramndomly reorder the deck of cards to simulate shuffling
dealCards();				// Take the deck and break it down into 2 hands, one for each player.  Should be 26 cards per player2
playWar();					// Play the game until one player wins all the other players cards
alertWinner();			// Generate an alert naming the winning player


