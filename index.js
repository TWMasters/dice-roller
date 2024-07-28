// Classes
class DiceSet {
  constructor(sides,numberOfDice = 1) {
    this.sides = sides;
  }

  rollDice() {
    
  }
}

// Functions
function test_function() {
  alert('Test Message');
}

// Assign functions
window.onload = () => {
  document
    .getElementById('test_button')
    .addEventListener('click',test_function); 
}