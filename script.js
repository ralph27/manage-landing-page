let navigations = document.querySelector(".navigations");
let burger = document.querySelector(".burger");

function toggleNav() {
  navigations.classList.toggle('active');
}


 burger.addEventListener("click", toggleNav);
