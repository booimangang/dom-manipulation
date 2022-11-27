const container = document.querySelector("#container");

const para = document.createElement('p');
para.classList.add("content");
para.textContent = "Hey I'm red!";
para.style.color = "red"

container.appendChild(para)

const header = document.createElement("h3");
header.textContent = "I'm blue h3";
header.style.cssText = "color:  blue";

container.appendChild(header);

const div = document.createElement("div");
div.style.cssText = "border: solid 1px black; background: pink;";

const secondHeader = document.createElement("h1")
secondHeader.textContent = "I'm in a div";

const secondPara = document.createElement("p");
secondPara.textContent = "ME TOO!"

div.appendChild(secondHeader)
div.appendChild(secondPara)

container.appendChild(div);


// a <div> with a black border and pink background color with the following elements inside of it:
// another <h1> that says “I’m in a div”
// a <p> that says “ME TOO!”
// Hint for this one: after creating the <div> with createElement, append the <h1> and <p> to it before adding it to the container.
