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
    //Firstly, created the dynamic div grid.

    const elementRow = document.createElement("div");
    elementRow.classList.add("row");
    elementRow.setAttribute("id", "row-div");
    elementRow.style.backgroundColor = "white";
    mainContainer.appendChild(elementRow);

    //The variables needed for the rainbow pen.
    let color1 = Math.floor(Math.random() * 256);
    let color2 = Math.floor(Math.random() * 256);
    let color3 = Math.floor(Math.random() * 256);

    //Secondly, buttons that turns on the pen feature, plus clear all.
    btnBlack.addEventListener("click", () => {
      elementRow.addEventListener("mouseover", () => {
        elementRow.style.backgroundColor = "black";
      });
    });

    btnEraser.addEventListener("click", () => {
      elementRow.addEventListener("mouseover", () => {
        elementRow.style.backgroundColor = "white";
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

    btnClearAll.addEventListener("click", () => {
      elementRow.style.backgroundColor = "white";
    });
  }
}

pixelContainer(gridBtnSixteen.value);

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
