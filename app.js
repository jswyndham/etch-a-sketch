const mainContainer = document.getElementById("container-div");
const rowDiv = document.getElementById("row-div");

function container(row, col) {
    document.documentElement.style.setProperty('--grid-row', row);
    document.documentElement.style.setProperty('--grid-col', col);
    for(let i = 0; i < (row * col); i++) {
        const elementRow = document.createElement("div");
        elementRow.classList.add("row");
        elementRow.setAttribute("id", "row-div");
        mainContainer.appendChild(elementRow);
        
    }
    rowDiv.addEventListener("mouseover", function(e) {
        e.setAttribute("style", "color: red");
    })
    }

container(16, 16);

