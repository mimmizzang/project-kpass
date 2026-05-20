import Swiper from "swiper/bundle";
import "swiper/css/bundle";

const getSwiperOptions = (num) => ({
  slidesPerView: 2,
  spaceBetween: 0,
  centeredSlides: true,
  loop: true,
  loopAdditionalSlides: 1,

  navigation: {
    nextEl: `.swiper-btn-next-${num}`,
    prevEl: `.swiper-btn-prev-${num}`,
  },
  breakpoints: {
    1024: {
      slidesPerView: 3,
      spaceBetween: 0,
    },
  },
});

const swiper1 = new Swiper(".mySwiper-1", getSwiperOptions(1));
const swiper2 = new Swiper(".mySwiper-2", getSwiperOptions(2));
const swiper3 = new Swiper(".mySwiper-3", getSwiperOptions(3));

/* 모바일 메뉴 */
const menuOpenBtn = document.getElementById("menu-open-btn");
const menuCloseBtn = document.getElementById("menu-close-btn");
const mobileMenu = document.getElementById("mobile-menu");

function openMenu() {
  mobileMenu.classList.remove("hidden");
  document.body.style.overflow = "hidden";
}

function closeMenu() {
  mobileMenu.classList.add("hidden");
  document.body.style.overflow = "";
}

if (menuOpenBtn) menuOpenBtn.addEventListener("click", openMenu);
if (menuCloseBtn) menuCloseBtn.addEventListener("click", closeMenu);
