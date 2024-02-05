const container = document.querySelector(".container");

// Create CSS class for each square div
var style = document.createElement('style');
style.innerHTML = `.pixel {\n
  width: ${90 / 16}vw; \n
  }`;
document.head.appendChild(style);

// Create a webpage with a 16x16 grid of square divs
for (let i = 0; i < 16; i++) {
  const row = document.createElement("div");

  for (let j = 0; j < 16; j++) {
    const div = document.createElement('div');
    div.className = 'pixel';
    div.addEventListener('mouseenter', highlight);
    row.appendChild(div);
  }

  container.appendChild(row);  
}

function highlight() {
  if (!this.classList.contains('highlight')) {
    this.classList.toggle('highlight');
  }
}

