const mainContainer = document.getElementById("content");
const rowDiv = document.querySelector("#row-div");
const btnBlack = document.getElementById("btn-black");
const btnEraser = document.getElementById("btn-eraser");
const btnRainbow = document.getElementById("btn-rainbow");
const btnShadow = document.getElementById("btn-shadow");
const btnClearAll = document.getElementById("btn-clear-all");
const slider = document.getElementById("myRange");
const currentValue = document.getElementById("current-value");


function pixelContainer(num) {
    document.documentElement.style.setProperty('--grid-row', num);
    document.documentElement.style.setProperty('--grid-col', num);
    for(let i = 0; i < num * num; i++) {
        
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
        btnBlack.addEventListener('click', ()=> {
            elementRow.addEventListener("mouseover", ()=> {
                elementRow.style.backgroundColor = "black";
                console.log(btnBlack);
        });
        });

        btnEraser.addEventListener('click', ()=> {
            elementRow.addEventListener("mouseover", ()=> {
                elementRow.style.backgroundColor = "white";
                console.log(elementRow);
        });
        });

        btnRainbow.addEventListener('click', ()=> {
            elementRow.addEventListener("mouseover", ()=> {
                elementRow.style.backgroundColor = `rgba(${color1},${color2},${color3})`;
                console.log(elementRow);
        })});

        btnShadow.addEventListener('click', ()=> {
            elementRow.addEventListener("mouseover", ()=> {
                elementRow.style.backgroundColor = `rgba(0, 0, 0, .2)`;
                console.log(elementRow);
        });
        });

        btnClearAll.addEventListener('click', ()=> {
            elementRow.style.backgroundColor = "white";
            console.log(btnClearAll);
        });
    }
}

slider.addEventListener('input', (e)=> {
    let value = e.target.value;
    currentValue.innerText = value;
    num = parseInt(value);
    console.log(slider.value);
    console.log(num);
    pixelContainer(slider.value);
});
