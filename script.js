let container = document.querySelector(".container")
let boardWidth = 16

newBoardButton = document.querySelector("#newBoard")
newBoardButton.addEventListener("click", () => {
    boardWidth = prompt("Please specify the amount of squares for each side, max 100.")
    if (boardWidth > 100) boardWidth = 100
    createBoard(boardWidth)
})

function createBoard(boardWidth) {
    container.innerHTML = ""
    for (let i = 0; i < boardWidth; i++) {
        let col = document.createElement("div");
        col.classList.add("col");
        for (let j = 0; j < boardWidth; j++) {
            let square = document.createElement("div");
            square.classList.add("square")
    
            square.addEventListener("mouseover", () => {square.style.background = ("black")})
    
            col.appendChild(square)
        }
        console.log(container)
        container.appendChild(col)
    }
}

createBoard(boardWidth)