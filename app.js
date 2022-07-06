const mainContainer = document.getElementById("container-div");
const rowDiv = document.querySelector("#row-div");
const btnOne = document.getElementById("btn-1");

function container(row, col) {
    document.documentElement.style.setProperty('--grid-row', row);
    document.documentElement.style.setProperty('--grid-col', col);
    for(let i = 0; i < (row * col); i++) {
        //Firstly, created the dynamic div grid.
        const elementRow = document.createElement("div");
        elementRow.classList.add("row");
        elementRow.setAttribute("id", "row-div");
        mainContainer.appendChild(elementRow);

        //Secondly, create a button that turns on the pen feature.
        btnOne.addEventListener('click', (e)=> {
            elementRow.addEventListener("mouseover", ()=> {
        elementRow.style.backgroundColor = "red";
        console.log(elementRow);
        })
    });
    }
}

container(64, 64)








