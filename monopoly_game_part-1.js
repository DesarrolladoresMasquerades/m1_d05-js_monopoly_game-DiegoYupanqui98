// Monopoly Game part 1

// Example of a VERY simple Monopoly game simulation

// Each square represents the cash earned when a player is on it. For example:
// - If a user is at position 0, the cash will increase by 100€
// - If a user is at position 4, the cash will decrease by 40€
const squares = [100, -10, 0, 0, -40, -10, -10, 5, 0, -10, -50, -10, 0, 0, -50, -10];

// --- Initialization ---
var dice;

var player1 = {
  name: 'Carol',
  color: 'red',
  position: 0,
  cash: 1000
};

var player2 = {
  name: 'Carlos',
  color: 'blue',
  position: 0,
  cash: 1000
};

var player3 = {
  name: 'Marco',
  color: 'black',
  position: 0,
  cash: 1000
};


// --------------------- Step 1 -------------------------------
 
// --- Turn of Player 1 ---
// The dice is a random integer between 1 and 6
dice = 

// The position is always between 0 and 15 (the numbers of squares - 1)
player1.position = 

// The cash is updated based on the values of squares and player1.position
player1.cash += squares[player1.position];

// If the player doesn't have anymore cash, player is out of game
if (player1.cash < 0) {
  console.log(`Game over for ${player1.name}.`);
}

// --- Turn of Player 2 ---


// --- Turn of Player 3 ---


// --- Display info  ---
console.log(player1);
console.log(player2);
console.log(player3);


// ---------------- STEP 2 --------------------

// --- Initialization with methods ---

var player1 = {
  name: 'Carol',
  color: 'red',
  position: 0,
  cash: 1000,
  move() {},
  displayInfo (){},
};

let player2 = {
  name: 'Carlos',
  color: 'blue',
  position: 0,
  cash: 1000,
  move() {},
  displayInfo () {},
};

let player3 = {
  name: 'Marco',
  color: 'black',
  position: 0,
  cash: 1000,
  move() {},
  displayInfo () {},
};

// --- Turn 1  ---
player1.move();
player2.move();
player3.move();

// --- Turn 2  ---
player1.move();
player2.move();
player3.move();

// --- Display info  ---
player1.displayInfo();
player2.displayInfo();
player3.displayInfo();


