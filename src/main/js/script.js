// /////////////////////////////////////////////
// Make mobile navigation work

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", (e) => {
    headerEl.classList.toggle("nav-open");
});

//////////////////////////////////////////////