let navigations = document.querySelector(".navigations");
let burger = document.querySelector(".burger");
let body = document.querySelector(".body");

function toggleNav() {
  navigations.classList.toggle("active");
  body.classList.toggle('background')
  burger.classList.toggle("toggle");
}

burger.addEventListener("click", toggleNav);
