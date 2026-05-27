import Swiper from "swiper/bundle";
import "swiper/css/bundle";

/* 메인 상단 슬라이드 */
const mainBannerSwiper = new Swiper(".main-banner-swiper", {
  loop: true,
  speed: 800,

  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
});

/* 메인 하단 슬라이드 */
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

/* pc 드롭다운 메뉴 */
const header = document.getElementById("header");
const pcMenuBtns = document.querySelectorAll(".pc-menu-btn");

pcMenuBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.stopPropagation();

    const isOpen = header.classList.contains("lg:max-h-[600px]");

    if (isOpen) {
      header.classList.remove("lg:max-h-[600px]");
      header.classList.add("lg:max-h-[80px]");
    } else {
      header.classList.remove("lg:max-h-[80px]");
      header.classList.add("lg:max-h-[600px]");
    }
  });
});

document.addEventListener("click", (e) => {
  if (!header.contains(e.target) && header.classList.contains("lg:max-h-[600px]")) {
    header.classList.remove("lg:max-h-[600px]");
    header.classList.add("lg:max-h-[80px]");
  }
});

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

/* 모바일 서브 메뉴 */
const mobileTabBtns = document.querySelectorAll(".mobile-tab-btn");
const mobilePanels = document.querySelectorAll(".mobile-panel");

mobileTabBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const targetPanel = btn.nextElementSibling;

    const isActive = btn.classList.contains("bg-white");

    mobileTabBtns.forEach((b) => {
      b.classList.remove("bg-white", "font-semibold");
    });

    mobilePanels.forEach((p) => {
      p.classList.remove("flex");
      p.classList.add("hidden");
    });

    if (!isActive && targetPanel) {
      btn.classList.add("bg-white", "font-semibold");

      targetPanel.classList.remove("hidden");
      targetPanel.classList.add("flex");
    }
  });
});
