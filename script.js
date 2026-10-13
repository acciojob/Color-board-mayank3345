//your JS code here. If required.
const container = document.getElementById('container');
const SQUARES_COUNT = 800;

// Palette of colors for hover effect
const colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71', '#f1c40f', '#1abc9c'];

function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
}

function setColor(element) {
    const color = getRandomColor();
    element.style.backgroundColor = color;
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(element) {
    element.style.backgroundColor = '#1d1d1d';
    element.style.boxShadow = '0 0 2px #000';
}

// Generate the 800 squares
for (let i = 0; i < SQUARES_COUNT; i++) {
    const square = document.createElement('div');
    square.classList.add('square');

    square.addEventListener('mouseover', () => setColor(square));
    square.addEventListener('mouseout', () => removeColor(square));

    container.appendChild(square);
}