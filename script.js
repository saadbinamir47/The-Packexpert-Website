console.log("Hello World!");

const btnmobilenav = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnmobilenav.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

console.log("Hello World!");
