
let body = document.getElementsByTagName("body")[0];
let modalbtn = document.createElement("button");
let div = document.createElement("div");
let modalTitle = document.createElement("h3");
let iconX = document.createElement("i");
let khenfoussa = document.querySelector("iconX>i");
let modalText = document.createElement("p");
let hrDiv = document.createElement("hr");
let hrDiv2 = document.createElement("hr");

let topDiv = document.createElement("div");

body.style.backgroundColor = "gainsBoro";

body.style.backgroundColor = "gainsBoro";


let modalButton1 = document.createElement("button");
let modalButton2 = document.createElement("button");
let buttons = document.createElement("div");


modalbtn.innerText = "This a button for the Modal";
modalTitle.innerText = "Modal Title";
modalText.innerText = "Modal body text here";
modalButton2.innerText = "Save changes";
modalButton1.innerText = "Close";
hrDiv.textContent = " ";
hrDiv2.textContent = " ";



body.appendChild(modalbtn);
body.appendChild(div);
div.appendChild(topDiv);
topDiv.appendChild(modalTitle);
topDiv.appendChild(iconX);
div.appendChild(hrDiv);
div.appendChild(modalText);
div.appendChild(hrDiv2);
div.appendChild(buttons);
buttons.appendChild(modalButton1);
buttons.appendChild(modalButton2);

iconX.setAttribute("class", "fa-solid fa-x");
div.setAttribute("class", "modalBox");

div.style.display = "flex";
div.style.flexWrap = "wrap";
div.style.margin = "0 auto";
div.style.width = "40%";
div.style.justifyContent = "space-evenly";
div.style.borderRadius = "8px";
div.style.padding = "25px";


hrDiv.style.width = "100%";
hrDiv2.style.width = "100%";

topDiv.style.display= "flex";
topDiv.style.flexWrap = "wrap";
topDiv.style.margin = "0 auto";
topDiv.style.width = "100%";

modalTitle.style.width = "50%";
iconX.style.width = "50%";
iconX.style.textAlign = "right";
iconX.style.color="gray";

modalText.style.width = "100%";
modalText.style.padding = "30px 0px";
modalText.style.margin = "10px 0px";



modalButton1.style.width = "70px";
modalButton2.style.width = "130px";
modalButton2.style.marginLeft = "10px";
modalButton2.style.backgroundColor = "#196AFF";
modalButton1.style.backgroundColor = "darkGrey";

div.style.backgroundColor = "white";

modalButton1.style.border = "none";
modalButton2.style.border = "none";
modalButton1.style.borderRadius = "8px";
modalButton2.style.borderRadius = "8px";
modalButton1.style.padding = "10px";
modalButton2.style.padding = "10px";
modalButton1.style.color = "white";
modalButton2.style.color = "white";

buttons.style.display = "flex";
buttons.style.width = "100%";
buttons.style.justifyContent = "flex-end";
modalButton2.style.color = "white";

//transition on modal

div.style.display = "none";

modalbtn.addEventListener("click", () => {
    div.style.top = "30px";
    div.style.display = "block";
});

iconX.addEventListener("click", () => {
    div.style.display = "none";
});

modalButton1.addEventListener("click", () => {
    div.style.display = "none";
});



//INPUT 
let popMessage = document.querySelector("h2");
let input = document.querySelector("input");
let btn = document.getElementById("btn");

popMessage.style.display = "none";

//input.value
btn.addEventListener("click", (event) => {
    popMessage.innerText = "Hello " + input.value ;
    popMessage.style.display = "block";
});










