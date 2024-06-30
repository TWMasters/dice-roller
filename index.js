// Classes

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