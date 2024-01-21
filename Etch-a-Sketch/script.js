function grid(){
    let n = prompt("Enter the number of squares per side (maximum 100):");

    n = parseInt(n);
        if (isNaN(n) || n < 1 || n > 100) {
            alert("Please enter a valid number between 1 and 100.");
            return;
    }

    const gridContainer = document.getElementById("gridContainer");

    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }

    gridContainer.style.gridTemplateColumns = `repeat(${n}, 20px)`;
    
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                const gridItem = document.createElement("div");
                gridItem.classList.add("grid-item");
                gridContainer.appendChild(gridItem);
    
                gridItem.addEventListener("mouseover", function() {
                    gridItem.style.backgroundColor = "#99c2ff"
                })
    
                
            }
        }
}
