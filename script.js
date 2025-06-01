const canvas = document.querySelector("#canvas");
let canvasMatrix = [];
let canvasRowMatrix = [];

matrixInitialize(16);


function onHover(target)
{
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

            cell.addEventListener("mouseenter",function(e){onHover(e.target)});

        }
    }
}