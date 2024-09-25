let container = document.querySelector(".container")

for (let i = 0; i < 16; i++) {
    let col = document.createElement("div");
    col.classList.add("col");
    for (let j = 0; j < 16; j++) {
        let square = document.createElement("div");
        square.classList.add("square")

        square.addEventListener("mouseover", () => {square.style.background = ("black")})

        col.appendChild(square)
    }
    console.log(container)
    container.appendChild(col)
}