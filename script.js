let container = document.querySelector(".container")
let boardWidth = 16

function squareColor() {
    hue = Math.random()*360
    saturation = Math.random()*100
    lightness = Math.random()*100
    hslVar = "hsl(" + hue + " " + saturation + " " + lightness + ")"

    return hslVar
}

function squareOpacity (square) {
    opacity = square.style.opacity
    if (!opacity) {
        opacity = 0.1
    } else {
        opacity = parseFloat(opacity) + 0.1
    }
    return opacity
}

function createBoard(boardWidth) {
    container.innerHTML = ""
    for (let i = 0; i < boardWidth; i++) {
        let col = document.createElement("div");
        col.classList.add("col");
        for (let j = 0; j < boardWidth; j++) {
            let square = document.createElement("div");
            square.classList.add("square")
    
            square.addEventListener("mouseover", () => {
                square.style.opacity = (squareOpacity(square))
                square.style.background = (squareColor())
            })
    
            col.appendChild(square)
        }
        console.log(container)
        container.appendChild(col)
    }
}

newBoardButton = document.querySelector("#newBoard")
newBoardButton.addEventListener("click", () => {
    boardWidth = prompt("Please specify the amount of squares for each side, max 100.")
    if (boardWidth > 100) boardWidth = 100
    createBoard(boardWidth)
})

createBoard(boardWidth)