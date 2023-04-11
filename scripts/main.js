const title = document.querySelector("h1");
title.addEventListener("click", function () {
  alert("Ouch! Stop poking me!");
});  

const image = document.querySelector("img");
image.addEventListener("click", function () {
  const src = image.getAttribute("src");
  if (src === "images/logo.png") {
    image.setAttribute("src", "images/firefox.png");
  }
  else 
    image.setAttribute("src", "images/logo.png");
});

let button = document.querySelector("button");
let h2 = document.querySelector("h2");
let p_name = document.querySelector("h2 > em"); 
function setUserName() {
  let myName = prompt("Please enter your name.");
  localStorage.setItem("name", myName);
  p_name.innerHTML = myName;
}
button.onclick = setUserName;
if (!localStorage.getItem("name")) {
  setUserName();
} else {
  let storedName = localStorage.getItem("name");
  p_name.innerHTML = storedName;
}