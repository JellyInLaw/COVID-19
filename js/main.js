const burger = document.querySelector(".burger");
const headerNav = document.querySelector(".header__nav");
burger.onclick = function () {
  burger.classList.toggle("is-active");
  headerNav.classList.toggle("is-active");
};
