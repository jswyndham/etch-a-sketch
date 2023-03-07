const mainContainer = document.getElementById("content");
const rowDiv = document.querySelector("#row-div");
const btnBlack = document.getElementById("btn-black");
const btnEraser = document.getElementById("btn-eraser");
const btnRainbow = document.getElementById("btn-rainbow");
const btnShadow = document.getElementById("btn-shadow");
const btnClearAll = document.getElementById("btn-clear-all");
const gridBtnSixteen = document.getElementById("grid-sixteen");
const gridBtnThirtyTwo = document.getElementById("grid-thirty-two");
const gridBtnFortyEight = document.getElementById("grid-forty-eight");

function pixelContainer(num) {
  document.documentElement.style.setProperty("--grid-row", num);
  document.documentElement.style.setProperty("--grid-col", num);
  for (let i = 0; i < num * num; i++) {
    //Create dynamic div grid.
    const elementRow = document.createElement("div");
    elementRow.classList.add("row");
    elementRow.setAttribute("id", "row-div");
    elementRow.style.backgroundColor = "white";
    mainContainer.appendChild(elementRow);

    //The variables needed for the rainbow pen.
    let color1 = Math.floor(Math.random() * 256);
    let color2 = Math.floor(Math.random() * 256);
    let color3 = Math.floor(Math.random() * 256);

    //Pen features
    btnBlack.addEventListener("click", () => {
      elementRow.addEventListener("mouseover", () => {
        elementRow.style.backgroundColor = "black";
      });
    });

    btnRainbow.addEventListener("click", () => {
      elementRow.addEventListener("mouseover", () => {
        elementRow.style.backgroundColor = `rgba(${color1},${color2},${color3})`;
      });
    });

    btnShadow.addEventListener("click", () => {
      elementRow.addEventListener("mouseover", () => {
        elementRow.style.backgroundColor = `rgba(0, 0, 0, .2)`;
      });
    });

    // Erase buttons
    btnEraser.addEventListener("click", () => {
      elementRow.addEventListener("mouseover", () => {
        elementRow.style.backgroundColor = "white";
      });
    });

    btnClearAll.addEventListener("click", () => {
      elementRow.style.backgroundColor = "white";
    });
  }
}

// Call the function. Grid size, 16 squares, set as default value.
pixelContainer(gridBtnSixteen.value);

// Grid size buttons - wipes the main container of grid (prevents repeatedly multiplying grid numbers), then calls the function with the new value.
gridBtnSixteen.addEventListener("click", (e) => {
  while (mainContainer.lastElementChild) {
    mainContainer.removeChild(mainContainer.lastElementChild);
  }
  pixelContainer(e.target.value);
});

gridBtnThirtyTwo.addEventListener("click", (e) => {
  while (mainContainer.lastElementChild) {
    mainContainer.removeChild(mainContainer.lastElementChild);
  }
  pixelContainer(e.target.value);
});

gridBtnFortyEight.addEventListener("click", (e) => {
  while (mainContainer.lastElementChild) {
    mainContainer.removeChild(mainContainer.lastElementChild);
  }
  pixelContainer(e.target.value);
});
