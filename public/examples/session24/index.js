const $ = (e) => document.querySelector(e);
const $$ = (e) => document.querySelectorAll(e);

const card = $("#b.card");

card.addEventListener("click", (e) => {
  // console.log(e.target.id);
  card.classList.toggle("expanded");
});

card.querySelector("button").addEventListener("click", (e) => {
  console.log("button");
  e.stopImmediatePropagation();
});

card.querySelectorAll("input, button, label").forEach((element) => {
  element.addEventListener("click", (e) => {
    console.log("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX");
    e.stopPropagation();
  });
});
