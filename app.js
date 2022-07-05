const mainContainer = document.getElementById("container-div");
const rowDiv = document.querySelector("#row-div");
const btnOne = document.getElementById("btn-1");

function container(row, col) {
    document.documentElement.style.setProperty('--grid-row', row);
    document.documentElement.style.setProperty('--grid-col', col);
    for(let i = 0; i < (row * col); i++) {
        const elementRow = document.createElement("div");
        elementRow.classList.add("row");
        elementRow.setAttribute("id", "row-div");
        mainContainer.appendChild(elementRow);
        
    }
    
}

container(32, 32)







