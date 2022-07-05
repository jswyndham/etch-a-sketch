const mainContainer = document.getElementById("container-div");

function container(num) {
    let x = num * num;
    mainContainer.style.setProperty('--columns-rows', num);
    for(let i = 0; i < x; i++) {
        const elementRow = document.createElement("div");
        elementRow.classList.add("row");
        mainContainer.appendChild(elementRow);
        
    }
    }

container(16);