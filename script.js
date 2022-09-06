const menu = document.querySelector(".nav-list");
const menuWrapper = document.querySelector(".nav-wrapper");
const hamburger = document.querySelector(".nav-toggle");
const closeBtn = document.querySelector(".close");

const showMenu = () => {
  hamburger.style.display = "none";
  closeBtn.style.transform = "translateY(0)";
  menu.style.display = "block";
  menu.classList.add("mobile-list");
  menu.style.transform = "translateX(0)";
  menuWrapper.style.transform = "translateX(0)";
};

const hideMenu = () => {
  closeBtn.style.transform = "translateY(-20rem)";
  hamburger.style.display = "block";
  menu.style.transform = "translateX(200%)";
  menuWrapper.style.transform = "translateX(200%)";
};

hamburger.addEventListener("click", showMenu);
closeBtn.addEventListener("click", hideMenu);
menuWrapper.addEventListener("click", hideMenu);

// Slider

const slides = document.querySelectorAll(".slide");

slides.forEach((slide, index) => {
  slide.style.transform = `translateX(${index * 100}%)`;
});

let curSlide = 0;
const nextSlide = document.querySelector(".btn-next");
let maxSlide = slides.length - 1;

nextSlide.addEventListener("click", () => {
  if (curSlide === maxSlide) {
    curSlide = 0;
  } else {
    curSlide++;
  }

  slides.forEach((slide, index) => {
    slide.style.transform = `translateX(${100 * (index - curSlide)}%)`;
  });
});

const prevSlide = document.querySelector(".btn-prev");

prevSlide.addEventListener("click", () => {
  if (curSlide === 0) {
    curSlide = maxSlide;
  } else {
    curSlide--;
  }

  slides.forEach((slide, index) => {
    slide.style.transform = `translateX(${100 * (index - curSlide)}%)`;
  });
});
