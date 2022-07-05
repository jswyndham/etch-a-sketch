const mainContainer = document.getElementById("container-div");

function container(row, col) {
    document.documentElement.style.setProperty('--grid-row', row);
    document.documentElement.style.setProperty('--grid-col', col);
    for(let i = 0; i < (row * col); i++) {
        const elementRow = document.createElement("div");
        elementRow.classList.add("row");
        mainContainer.appendChild(elementRow);
        
    }
    }

container(16, 16);