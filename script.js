const canvas = document.querySelector("#canvas");
const button_reset = document.querySelector("#reset");
const button_new = document.querySelector("#new-canvas");
let canvasMatrix = [];
let canvasRowMatrix = [];
let gridSize = 16;

matrixInitialize(gridSize);


function onHover(target) {
    target.style.background = "green";
}

function matrixInitialize(gridSize) {
    for (let x = 0; x < gridSize; x++) {
        //create row div give it a class, append to canvas and store it in canvasRowMatrix 
        let row = document.createElement("div");
        row.classList.add("canvasRow");
        canvas.appendChild(row);
        canvasRowMatrix.push(row);

        for (let y = 0; y < gridSize; y++) {
            //create cell div give it a class, append to canvasRow and store it in canvasMatrix
            let cell = document.createElement("div");
            cell.classList.add("canvasCell");
            canvasRowMatrix[x].appendChild(cell);
            canvasMatrix.push(cell);

            cell.addEventListener("mouseenter", function (e) { onHover(e.target) });

        }
    }
}

function matrixDelete() {
    for (let x = 0; x < gridSize; x++) {
        for (let y = 0; y < gridSize; y++) {
            let cell = canvasMatrix.pop();
            cell.remove();
        }
        let row = canvasRowMatrix.pop();
        row.remove();
    }
}

function matrixReset() {
    for (let x = 0; x < gridSize; x++) {
        for (let y = 0; y < gridSize; y++) {
            let cell = canvasMatrix[(x * gridSize) + y];
            cell.style.background = "white";

        }
    }
}

function newMatrix() {
    let newGridSize = Number(prompt("Enter new canvas grid size: ", "16"));
    if(newGridSize ==0)
        return
    matrixDelete();
    gridSize = newGridSize;
    matrixInitialize(gridSize);
}

button_reset.addEventListener("click", matrixReset);
button_new.addEventListener("click", newMatrix);