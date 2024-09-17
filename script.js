const gridContainer = document.querySelector("#gridContainer");
const gridSize = 16 * 16;

for (let i = 0; i < gridSize; i++) {
    // Create a new div element for each square
    const gridSquare = document.createElement('div');

    // Add a class to style the div
    gridSquare.classList.add('gridSquare');

    // Append each square to the grid container
    gridContainer.appendChild(gridSquare);
}

const gridSquares = document.querySelectorAll('.gridSquare');

gridSquares.forEach(square => {
    square.addEventListener('mouseover', () => {
        square.style.backgroundColor = 'lightblue'; // Change background on hover
    });
    
    // square.addEventListener('mouseout', () => {
    //     square.style.backgroundColor = ''; // Reset background when not hovering
    // });
});
