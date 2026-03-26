
// make a reference to main container
const container = document.querySelector("#container");


// create grid of divs and place them inside container
const NUMBER_OF_COLUMNS = 16;
const CONTAINER_WIDTH = container.offsetWidth;
console.log(CONTAINER_WIDTH)

for (let i = 0; i < NUMBER_OF_COLUMNS * NUMBER_OF_COLUMNS; i++) {
    const square = document.createElement("div");

    // assign class
    square.classList.add("grid-item")
    
    // give square dimensions
    square.style.height = `${(CONTAINER_WIDTH / NUMBER_OF_COLUMNS)}px`;
    square.style.width = `${(CONTAINER_WIDTH / NUMBER_OF_COLUMNS)}px`;

    // set up event listeners for hovering
    square.addEventListener("mouseenter", () => {square.classList.add("grid-item-hover")});


    container.appendChild(square);
}



