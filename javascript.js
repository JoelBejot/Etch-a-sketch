var gridx = 16;
var square = "";
var resetButton = "";

function createCell() {
    square = document.createElement("div");
    square.setAttribute('class', 'cell'); 
    document.getElementById("container").appendChild(square);
    draw();
};

function createGrid() {
    for(i = 0; i < (gridx * gridx); i++) {
        createCell();
    };
   var cellStyle = document.querySelector('#container');
   cellStyle.style.width = `800px`;
   cellStyle.style.height = `800px`;
   cellStyle.style.gridTemplateColumns = `repeat(${gridx}, minmax(2px, 1fr))`;
   cellStyle.style.gridTemplateRows = `repeat(${gridx}, minmax(2px, 1fr))`;
};

function draw () {
    square.addEventListener('mouseover', (event) => {
        if (event.target.classList.contains('cell')) {
            var black = `rgb(0, 0, 0)`;
            event.target.style.backgroundColor = `${black}`;
        };
    }); 
};

function resetGrid() {
    var container = document.getElementById("container");
    while (container.hasChildNodes()) {
        container.removeChild(container.firstChild);
    }
    createGrid(gridx);
};

resetButton = document.getElementById("resetButton");
resetButton.onclick = function() {
    gridx = prompt("How long would you like each side to be? Please enter a number");
    resetGrid();
};

createGrid();