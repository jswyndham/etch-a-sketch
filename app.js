const mainContainer = document.getElementById("content");
const rowDiv = document.querySelector("#row-div");
const btnBlack = document.getElementById("btn-black");
const btnEraser = document.getElementById("btn-eraser");
const btnRainbow = document.getElementById("btn-rainbow");
const btnShadow = document.getElementById("btn-shadow");
const btnClearAll = document.getElementById("btn-clear-all");

function container(row, col) {
    document.documentElement.style.setProperty('--grid-row', row);
    document.documentElement.style.setProperty('--grid-col', col);
    for(let i = 0; i < (row * col); i++) {
        //Firstly, created the dynamic div grid.
        const elementRow = document.createElement("div");
        elementRow.classList.add("row");
        elementRow.setAttribute("id", "row-div");
        elementRow.style.backgroundColor= "white";
        mainContainer.appendChild(elementRow);

        //The variables needed for the rainbow pen.
        let color1 = Math.floor(Math.random() * 256);
        let color2 = Math.floor(Math.random() * 256);
        let color3 = Math.floor(Math.random() * 256);
                
        //Secondly, buttons that turns on the pen feature, plus clear all.
        btnBlack.addEventListener('click', (e)=> {
            elementRow.addEventListener("mouseover", ()=> {
                elementRow.style.backgroundColor = "black";
                console.log(btnBlack);
        });
        });

        btnEraser.addEventListener('click', (e)=> {
            elementRow.addEventListener("mouseover", ()=> {
                elementRow.style.backgroundColor = "white";
                console.log(elementRow);
        });
        });

        btnRainbow.addEventListener('click', (e)=> {
            elementRow.addEventListener("mouseover", ()=> {
                elementRow.style.backgroundColor = `rgba(${color1},${color2},${color3})`;
                console.log(elementRow);
        })});

        btnShadow.addEventListener('click', (e)=> {
            elementRow.addEventListener("mouseover", ()=> {
                elementRow.style.backgroundColor = `rgba(0, 0, 0, .1)`;
                console.log(elementRow);
        });
        });

        btnClearAll.addEventListener('click', (e)=> {
            elementRow.style.backgroundColor = "white";
            console.log(btnClearAll);
        });
        

    }
}

container(34, 16);

