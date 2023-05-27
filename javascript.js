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
        newPiece.addEventListener('click', changeGridColor);
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
    if (e.type === 'mouseover' && !mouseDown) return;
    e.target.style.backgroundColor = currentColor;
}
function activeBtn() {
    rainbowBtn.style.removeProperty('background-color');
    colorBtn.style.removeProperty('background-color');
    eraseBtn.style.removeProperty('background-color');
}


// Event Listeners
document.addEventListener('click', () => {
    if (mouseDown) {
        currentColor = colorWheel.value;
    }
});
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
    activeBtn();
    colorBtn.style.backgroundColor = 'grey';
});
eraseBtn.addEventListener('click', () => {
    currentColor = '#FFFFFF';
    activeBtn();
    eraseBtn.style.backgroundColor = 'grey';
});
rainbowBtn.addEventListener('click', () => {
    activeBtn();
    rainbowBtn.style.backgroundColor = 'grey';
});
colorBtn.addEventListener('click', () => {
    activeBtn();
    colorBtn.style.backgroundColor = 'grey';
    currentColor = colorWheel.value;
});

// when loaded on page
gridSize.textContent = `${sizeSlider.value}x${sizeSlider.value}`;
changeGridSize(sizeSlider.value);