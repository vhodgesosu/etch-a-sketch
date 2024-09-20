// Function to generate a random color
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Function to create the grid
function createGrid(size) {
    const gridContainer = document.getElementById('gridContainer');
    gridContainer.innerHTML = ''; // Clear any existing grid

    // Set the grid container's size
    gridContainer.style.width = '800px';
    gridContainer.style.height = '800px';

    // Total number of squares in the grid (size * size)
    const totalSquares = size * size;

    // Adjust each square's size based on the new grid size
    const squareSize = 800 / size; // Each square's width and height

    // Loop to create the grid
    for (let i = 0; i < totalSquares; i++) {
        const gridSquare = document.createElement('div');
        gridSquare.classList.add('gridSquare');
        gridSquare.style.width = `${squareSize}px`;
        gridSquare.style.height = `${squareSize}px`;
        gridSquare.style.border = '1px solid black';

        // Add event listener to change color on hover
        gridSquare.addEventListener('mouseover', () => {
            const randomColor = getRandomColor();
            gridSquare.style.backgroundColor = randomColor;
        });

        gridContainer.appendChild(gridSquare);
    }
}

// Function to prompt the user for grid size and create the grid
function setGridSize() {
    let size = parseInt(prompt('Enter grid size (between 1 and 100):'), 10);

    // Validate the input
    if (isNaN(size) || size < 1 || size > 100) {
        alert('Please enter a valid number between 1 and 100.');
        setGridSize(); // Ask again if the input is invalid
    } else {
        createGrid(size);
    }
}

// Initialize the default grid when the page loads
createGrid(16); // Default grid size is 16x16

// Example: Call this function to let the user change the grid size
document.getElementById('inputButton').addEventListener('click', setGridSize);