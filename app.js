const mainContainer = document.getElementById("content");
const rowDiv = document.querySelector("#row-div");
const btnOne = document.getElementById("btn-1");
const btnTwo = document.getElementById("btn-2");
const btnThree = document.getElementById("btn-3");

function container(row, col) {
    document.documentElement.style.setProperty('--grid-row', row);
    document.documentElement.style.setProperty('--grid-col', col);
    for(let i = 0; i < (row * col); i++) {
        //Firstly, created the dynamic div grid.
        const elementRow = document.createElement("div");
        elementRow.classList.add("row");
        elementRow.setAttribute("id", "row-div");
        mainContainer.appendChild(elementRow);

        //The variables needed for the rainbow pen.
        let color1 = Math.floor(Math.random() * 256);
        let color2 = Math.floor(Math.random() * 256);
        let color3 = Math.floor(Math.random() * 256);
                
        //Secondly, create a button that turns on the pen feature.
        btnOne.addEventListener('click', (e)=> {
            elementRow.addEventListener("mouseover", ()=> {
        elementRow.style.backgroundColor = "black";
        console.log(elementRow);
        });
        });

        btnTwo.addEventListener('click', (e)=> {
            elementRow.addEventListener("mouseover", ()=> {
        elementRow.style.backgroundColor = "white";
        console.log(elementRow);
        });
        });

        btnThree.addEventListener('click', (e)=> {
            elementRow.addEventListener("mouseover", ()=> {
        elementRow.style.backgroundColor = `rgb(${color1},${color2},${color3})`;
        console.log(elementRow);
        });
    });
    }
}

container(64, 64);