
// make a reference to main container
const container = document.querySelector("#container");

// add button on top of the screen to modify grid
const buttonContainer = document.createElement("div");
buttonContainer.classList.add("button-container");
document.body.prepend(buttonContainer);

const button = document.createElement("button");
button.textContent = "Modify Grid";
button.addEventListener("click", () => {
    const squares = getNumberOfSquares();

    if (squares != null) {
        createGrid(squares);
    }
});

buttonContainer.appendChild(button);

// prompt user for number, validate input, return integer.
function getNumberOfSquares() {
    const input = prompt("Enter number of squares per side for new grid", 16);
    const number = Number(input);

    if (Number.isInteger(number) && number > 0 && number < 100) {
        return number;
    } else {
        alert("Invalid input. Please enter a positive integer less than 100.");
        return null;
    }
}


function clearContainer() {
    while (container.lastChild) {
        container.removeChild(container.lastChild);
    }
}


function createGrid(num) {
    const NUMBER_OF_SQUARES = num;
    const CONTAINER_WIDTH = container.offsetWidth;

    // make sure container is clear
    clearContainer();
    
    for (let i = 0; i < NUMBER_OF_SQUARES * NUMBER_OF_SQUARES; i++) {
        const square = document.createElement("div");

        // assign class
        square.classList.add("grid-item")
        
        // give square dimensions
        square.style.height = `${(CONTAINER_WIDTH / NUMBER_OF_SQUARES)}px`;
        square.style.width = `${(CONTAINER_WIDTH / NUMBER_OF_SQUARES)}px`;

        // set up event listeners for hovering
        square.addEventListener("mouseenter", () => {
            // square.classList.add("grid-item-hover");
            interatcion(square);

        });


        container.appendChild(square);
    }
}


// WORK FOR EXTRA CREDIT
// Create function that will be called every time there is a mouse interaction
// it should assign a random rgb color to the grid item. With every new interaction, it should darken
// that color by 10%. After 10 interactions it should be full x color.
function interatcion(square) {

    // get three random values for rgb color
    let val1 = Math.floor(Math.random() * 255) + 1;
    let val2 = Math.floor(Math.random() * 255) + 1;
    let val3 = Math.floor(Math.random() * 255) + 1;

    // check that background color is not already set.
    if (!square.style.background) {
        square.style.background = `rgb(${val1}, ${val2}, ${val3})`;
        square.style.opacity = '0.1';
    }

    // increase opacity if it hasn't been maxed out
    if (+square.style.opacity < 1) {
        square.style.opacity = `${+square.style.opacity + 0.1}`;
    }


}



// create initial grid
createGrid(16);