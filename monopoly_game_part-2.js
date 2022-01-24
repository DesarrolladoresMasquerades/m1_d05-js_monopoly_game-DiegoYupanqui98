// Monopoly Game Part 2
// Example of a VERY simple Monopoly game simulation

const squares = [
  100, -10, 0, 0, -40, -10, -10, 5, 0, -10, -50, -10, 0, 0, -50, -10,
];

// ----------------------  Step 1  -----------------------
// Creation of the class
class Player {
  // The constructor is the method triggered with the `new` keyword
  constructor(name,color) {
    this.name = name || "anonymus"
    this.color = color || "transparent"
    this.cash = 1000
    this.position = 0
  }

  // Method move
  move() {
    let dice = 1 + Math.floor(6 * Math.random());
    this.position = (this.position + dice) % squares.length;
    this.cash += squares[this.position];
    if (this.cash < 0) {
      console.log(`Game over for ${this.name}.`);
    }
  }

  // Method displayInfo
  displayInfo() {
    console.log(`${this.name} is at position ${this.position} and has ${this.cash}€`);
  }
}

// --- Initialization of players ---
var player1 = new Player("Carol", "blue");
var player2 = new Player("Marco", "green");
var player3 = new Player("Carlos", "red");
/*
// --- Turn 1  ---
player1.move();
player2.move();
player3.move();

// --- Turn 2  ---
player1.move();
player2.move();
player3.move();

player1.displayInfo();
player2.displayInfo();
player3.displayInfo();
*/

// ---------------------  Step 2  --------------------------

class Game {
  constructor() {
    // --- Initialization of players ---
    var player1 = new Player("Carol", "blue");
    var player2 = new Player("Marco", "green");
    var player3 = new Player("Carlos", "red");
    
    // ---- Init of game variables
    this.players = [player1,player2,player3];
    this.turn = 1;

  }

  play() {

    while(this.players.length > 1){
      console.log("\nTURN: " + this.turn + "----------------------------------\n");
      this.players = this.players.filter(x => x.cash>0)
      this.players.forEach(x => x.move())
      this.players.forEach(x => x.displayInfo())
      this.turn++;
    }

    console.log(`Player ${this.players[0].name} has won!`);
  }
}
new Game().play();
