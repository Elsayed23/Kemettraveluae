AOS.init();
AOS.init({
  once: true,
});

let bars = document.querySelector(".hamburger svg")
let X_color = document.querySelector(".line")
let cenC = document.querySelector(".hamburger svg .C")
let line_top = document.querySelector(".line-top-bottom")
let Svg = document.querySelector(".hamburger input + svg")
let nav = document.querySelector("nav");

// Burger Menu
bars.addEventListener("click", () => {
  console.log("elsayed");
  nav.classList.toggle("showNav");
  X_color.classList.toggle("X-color")
  Svg.classList.toggle("rotSVG")
  line_top.classList.toggle("line_T")
  cenC.classList.toggle("cen")
})

// Fixed Header
let fixedHeader = document.querySelector("header")
let toTop = document.querySelector(".toTop")

window.addEventListener("scroll", () => {
  if (window.scrollY >= 400) {
    fixedHeader.classList.add("fixedHeader")
    toTop.classList.add("toTopShow")
  } else {
    fixedHeader.classList.remove("fixedHeader")
    toTop.classList.add("toTopShow")
    toTop.classList.remove("toTopShow")
  }
})

toTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
  })
})

/* SPEED DIAL */
const speedDialButton = document.querySelector('.speed-dial');
const speedDialPopup = document.querySelector('.speed-dial-popup');
const speedDialOptions = document.querySelectorAll('.speed-dial-option');

speedDialButton.addEventListener('click', function () {
  speedDialPopup.classList.toggle('show');
  speedDialOptions.forEach(function (option, index) {
    setTimeout(function () {
      option.classList.toggle('show');
    }, index * 100);
  });
});

speedDialOptions.forEach(function (option) {
  option.addEventListener('click', function (event) {
    event.preventDefault();
    const mediaType = option.querySelector('i').parentElement.href;

    window.open(mediaType)
    speedDialOptions.forEach(function (option) {
      option.classList.remove('show');
    });
    speedDialPopup.classList.remove('show');
  });
});

document.addEventListener('contextmenu', function (e) {
  e.preventDefault();
});

// Disable inspect element //
document.addEventListener('contextmenu', function (e) {
  e.preventDefault();
});

document.onkeydown = (e) => {
  if (e.keyCode == 123) {
    e.preventDefault();
  }
  if (e.ctrlKey && e.shiftKey && e.key == 'I') {
    e.preventDefault();
  }
  if (e.ctrlKey && e.shiftKey && e.key == 'C') {
    e.preventDefault();
  }
  if (e.ctrlKey && e.shiftKey && e.key == 'J') {
    e.preventDefault();
  }
  if (e.ctrlKey && e.key == 'U') {
    e.preventDefault();
  }
};
