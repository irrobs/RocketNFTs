const btnUp = document.querySelector(".footer__button-up");
const btnMobile = document.querySelector(".header__btn-mobile");
const btnMobileIcon = document.querySelector(".header__btn-mobile-icon");
const mobileNav = document.querySelector(".header__nav");

// Scroll to top
btnUp.addEventListener("click", () => window.scrollTo(0, 0));

// Mobile Navigation
btnMobile.addEventListener("click", () => {
  mobileNav.classList.toggle("visibleFlex");
  btnMobileIcon.classList.toggle("header__btn-mobile-icon--open");
  btnMobileIcon.classList.toggle("header__btn-mobile-icon--close");
});
