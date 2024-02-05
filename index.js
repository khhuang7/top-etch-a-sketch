const container = document.querySelector(".container");

// Create a webpage with a 16x16 grid of square divs
for (let i = 0; i < 16; i++) {
  const row = document.createElement("div");
  row.setAttribute("display", "flex");

  for (let j = 0; j < 16; j++) {
    const div = document.createElement("div");
    div.style.width = `${90 / 16}vw`;
    div.style.height = div.style.width;
    div.style.backgroundColor = "black";
    row.appendChild(div);
  }

  container.appendChild(row);  
}