const container = document.querySelector(".container");
const style = document.createElement('style');

// Create a webpage with a 16x16 grid of square divs
function generateGrid(squares) {
  container.replaceChildren([]);
  style.innerHTML = `.pixel {\n
    width: ${90 / squares}vmin; \n
    }`;
  document.head.appendChild(style);
  
  for (let i = 0; i < squares; i++) {
    const row = document.createElement("div");
  
    for (let j = 0; j < squares; j++) {
      const div = document.createElement('div');
      div.className = 'pixel';
      div.addEventListener('mouseenter', highlight);
      row.appendChild(div);
    }
  
    container.appendChild(row);  
  }  
}

function highlight() {
  if (!this.classList.contains('highlight')) {
    this.classList.toggle('highlight');
  }
}

// Use button to ask user to set the grid size
const setBtn = document.querySelector("button");
setBtn.addEventListener('click', () => {
  let message = "How many squares would you like to generate the grid with? (Please enter an integer between 1-100.)"
  let valid = false;
  let squares = 0;
  while (!valid) {
    let input = prompt(message, 30);
    if (input === null) {
      break;
    } else {
      squares = parseInt(input);
      if (squares >= 1 && squares <= 100) {
        valid = true;
      } else {
        message = "Invalid input - please enter an integer between 1-100. How many squares would you like to generate the grid with?"
      }
    }
  if (valid) generateGrid(squares);
}})