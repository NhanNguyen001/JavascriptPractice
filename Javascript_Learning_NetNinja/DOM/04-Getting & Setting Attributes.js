const link = document.querySelector("a");

console.log(link.getAttribute("href"));
link.setAttribute("href", "https://www.facebook.com");
link.innerText = "facebook";

const mssg = document.querySelector("p");
console.log(mssg.getAttribute("class"));
mssg.setAttribute("class", "success");
mssg.setAttribute("style", "color: yellow");
