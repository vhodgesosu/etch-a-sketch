const gridContainer = document.querySelector("#gridContainer");
const inputButton = document.querySelector("#inputButton");
const gridSize = 16 * 16;

for (let i = 0; i < gridSize; i++) {
    // Create a new div element for each square
    const gridSquare = document.createElement('div');

    // Add a class to style the div
    gridSquare.classList.add('gridSquare');

    // Append each square to the grid container
    gridContainer.appendChild(gridSquare);
}

// Function to generate a random color
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

const gridSquares = document.querySelectorAll('.gridSquare');

gridSquares.forEach(square => {
    square.addEventListener('mouseover', () => {
        const randomColor = getRandomColor();
        square.style.backgroundColor = randomColor; // Change background on hover
    });
    
    // square.addEventListener('mouseout', () => {
    //     square.style.backgroundColor = ''; // Reset background when not hovering
    // });
});

inputButton.addEventListener("click", function(){ 
    let size = parseInt(prompt('Enter grid size (between 1 and 100):'), 10)
    
    if (isNaN(size) || size < 1 || size > 100) {
        alert('Please enter a valid number between 1 and 100.');
        setGridSize(); // Ask again if the input is invalid
    } else {
        console.log(size);
    }
})
