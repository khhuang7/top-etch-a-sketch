const container = document.querySelector(".container");

// Create CSS class for each square div
var style = document.createElement('style');
style.innerHTML = `.pixel {\n
  width: ${90 / 16}vw; \n
  aspect-ratio : 1 / 1; \n
  background-color: black;\n
  }`;
document.head.appendChild(style);

// Create a webpage with a 16x16 grid of square divs
for (let i = 0; i < 16; i++) {
  const row = document.createElement("div");

  for (let j = 0; j < 16; j++) {
    const div = document.createElement('div');
    div.className = 'pixel';
    row.appendChild(div);
  }

  container.appendChild(row);  
}

// Set up a “hover” effect so that the grid divs change color when your mouse passes over them, leaving a (pixelated) trail through your grid like a pen would.
// Hint: “Hovering” is what happens when your mouse enters a div and ends when your mouse leaves it. You can set up event listeners for either of those events as a starting point.
// There are multiple ways to change the color of the divs, including:
// adding a new class to the div.
// changing the div’s background color using JavaScript.