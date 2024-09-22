let container = document.querySelector("#container")
container.style.cssText = "display: flex;"

for (let i = 0; i < 16; i++) {
    let col = document.createElement("div");
    col.style.cssText = "display: flex; flex-direction: column"
    for (let j = 0; j < 16; j++) {
        let square = document.createElement("div");
        square.style.cssText = "width: 40px; height: 40px; border: 1px solid black; flex: 1 1 1";
        col.appendChild(square)
    }
    container.appendChild(col)
}