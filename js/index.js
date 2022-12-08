const sliderItems = document.querySelectorAll(".slider__item");
const descr = document.querySelector(".description");

const sliderMain = new Swiper(".slider-main", {
  freeMode: true,
  centeredSlides: true,
  mousewheel: true,
  parallax: true,
  breakpoints: {
    0: {
      slidesPerView: 2.5,
      spaceBetween: 20,
    },
    680: {
      slidesPerView: 3.5,
      spaceBetween: 60,
    },
  },
});

const sliderBg = new Swiper(".slider-bg", {
  centeredSlides: true,
  parallax: true,
  slidesPerView: 3.5,
  spaceBetween: 60,
});
sliderMain.controller.control = sliderBg;

sliderItems.forEach((item) => {
  item.addEventListener("click", (e) => {
    item.classList.toggle("opened");
  });
});

sliderMain.on("slideChange", (e) => {
  sliderMain.activeIndex > 0
    ? descr.classList.add("hidden")
    : descr.classList.remove("hidden");
});
