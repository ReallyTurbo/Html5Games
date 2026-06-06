const search =
document.getElementById("search");

search.addEventListener("input",()=>{

const value =
search.value.toLowerCase();

document
.querySelectorAll(".game-card")
.forEach(card=>{

const title =
card.querySelector("h3")
.textContent
.toLowerCase();

card.style.display =
title.includes(value)
? "block"
: "none";

});

});
