// query selectors
const sizeSlider = document.querySelector('#sizeSlider');
const gameGrid = document.querySelector('.game-grid');
const gridSize = document.querySelector('#grid-size');
const clearBtn = document.querySelector('#clearBtn');
const eraseBtn = document.querySelector('#eraserBtn');
const rainbowBtn = document.querySelector('#rainbowBtn');
const colorBtn = document.querySelector('#colorBtn');
const colorWheel = document.querySelector('#colorPicker');

// variable for mouse events
let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

let currentColor = colorWheel.value;


// Functions
function changeGridSize(size) {
    gameGrid.setAttribute('style', 'grid-template-columns: repeat(' + size + ', 1fr);');
    for (let i = 0; i < size * size; i++) {
        const newPiece = document.createElement('div'); 
        newPiece.className = 'grid-piece';
        newPiece.addEventListener('mouseover', changeGridColor);
        newPiece.addEventListener('mousedown', changeGridColor);
        gameGrid.appendChild(newPiece);
    }
}
function clearGrid(parent) {
    while (parent.firstChild) 
    {
        parent.removeChild(parent.firstChild);
    }
}

function changeGridColor(e) {
    if (e.type === 'mouseover' && mouseDown) {
        e.target.style.backgroundColor = currentColor;
    }
}


// Event Listeners
sizeSlider.addEventListener('input', () => {
    clearGrid(gameGrid);
    gridSize.textContent = `${sizeSlider.value}x${sizeSlider.value}`;
    changeGridSize(sizeSlider.value);
});

clearBtn.addEventListener('click', () => {
    clearGrid(gameGrid)
    changeGridSize(sizeSlider.value);
});
colorWheel.addEventListener('input', () => {
    currentColor = colorWheel.value;
});
eraseBtn.addEventListener('click', () => {
    currentColor = '#FFFFFF';
});

// when loaded on page
gridSize.textContent = `${sizeSlider.value}x${sizeSlider.value}`;
changeGridSize(sizeSlider.value);