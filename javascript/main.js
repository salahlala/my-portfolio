let mainCursor = document.getElementById("magicMouseCursor");
let magicCursor = document.querySelectorAll(".magic-hover");

let cardImg = document.querySelector(".img-card ");
let magiCard = document.querySelectorAll(".card-effect");

magiCard.forEach((image) => {
  image.addEventListener("mousemove", (e) => {
    var x = (e.offsetX - 180) / 20;
    var y = (e.offsetY - 120) / 20;
    image.style.transform = "rotateY(" + x + "deg) rotateX(" + -y + "deg)";
  });
  image.addEventListener("mouseout", (e) => {
    image.style.transform = "rotateY(" + 0 + "deg) rotateX(" + 0 + "deg)";
  });
});

// make function for the open btn and animation
let openBtn = document.querySelector(".open-nav");
let allSpanBtn = document.querySelectorAll(".open-nav span");
let secondNav = document.querySelector(".sec-nav");
openBtn.addEventListener("click", () => {
  allSpanBtn[1].classList.toggle("hidden");
  allSpanBtn[0].classList.toggle("move");
  allSpanBtn[2].classList.toggle("move");

  allSpanBtn[0].classList.toggle("rot45");
  allSpanBtn[2].classList.toggle("rot-45");

  // add active class to sec nav
  secondNav.classList.toggle("active");
});

// start animation text in landing page

let mainText = document.querySelector(".text-animation");

let theText = "Front-End Developer";

let idx = 1;
var typewriter = new Typewriter(mainText, {
  loop: true,
});
typewriter
  .pauseFor(1800)
  .typeString("Developer")
  .pauseFor(2500)
  .deleteAll()
  .typeString("Front-End Developer")
  .pauseFor(2500)
  .start();

// make hover on card portfolio

let mainBox = document.querySelector(".portfolio .row .box");
let cardBack = document.querySelector(".portfolio .row .box .hover-div");

// slide setting
let getSlideIndex;
var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  speed: 350,
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: false,
  },
});

// slide setting
let backgroundEffect = document.querySelector(".background-effect");
let mainSlide = document.querySelector(".swiper");
let slidePortfolio = document.querySelectorAll(".swiper .swiper-slide");
let boxexPortfolio = document.querySelectorAll(".portfolio .row .box");
// make loop on boxex and make event on click

boxexPortfolio.forEach((box, index) => {
  box.addEventListener("click", () => {
    mainSlide.classList.add("active");
    backgroundEffect.classList.add("active");
    document.querySelector("html").style.overflowY = "hidden";
    swiper.slideTo(index);
    if (index == 0) slidePortfolio[index].classList.add("active");
  });
});

swiper.on("slideChange", function ({ realIndex: r, previousIndex: p }) {
  slidePortfolio.forEach((slide) => slide.classList.remove("active"));

  slidePortfolio[r].classList.add("active");
});

backgroundEffect.addEventListener("click", () => {
  hideSlide();
});

function hideSlide() {
  backgroundEffect.classList.remove("active");
  mainSlide.classList.remove("active");
  document.querySelector("html").style.overflowY = "auto";
}
// remove slide on click ESC in keyboard

document.addEventListener("keydown", (e) => {
  if (e.key == "Escape") {
    hideSlide();
  }
});

// contact
let contactInputs = document.querySelectorAll("form input");
let contactLabels = document.querySelectorAll("form label");
let textArea = document.querySelector("textarea");
contactInputs.forEach((input, index) => {
  input.addEventListener("focus", function () {
    checkValue(input, index);
  });

  input.addEventListener("focusout", function () {
    checkValue(input, index);
  });
});

function checkValue(text, index) {
  if (text.value == "") {
    text.classList.remove("focus-move");
    contactLabels[index].classList.remove("focus-move");
  } else {
    text.classList.add("focus-move");
    contactLabels[index].classList.add("focus-move");
  }
}
textArea.onfocus = function () {
  if (textArea.value == "") {
    textArea.classList.remove("focus-move");
    document.querySelector(".text-message").classList.remove("focus-move");
  } else {
    textArea.classList.add("focus-move");
    document.querySelector(".text-message").classList.add("focus-move");
  }
};
textArea.addEventListener("focusout", function () {
  if (textArea.value == "") {
    textArea.classList.remove("focus-move");
    document.querySelector(".text-message").classList.remove("focus-move");
  } else {
    textArea.classList.add("focus-move");
    document.querySelector(".text-message").classList.add("focus-move");
  }
});

// contact setting
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");
const mainForm = document.querySelector("form");

mainForm.onsubmit = function (e) {
  e.preventDefault();
};
function sendMail() {
  if (
    nameInput.value == "" ||
    emailInput.value == "" ||
    messageInput.value == ""
  ) {
    return false;
  } else {
    var params = {
      from_name: nameInput.value,
      email_id: emailInput.value,
      message: messageInput.value,
    };
    emailjs
      .send("service_309u28j", "template_ii0ruhg", params, "ui0KWBHsJCibZRDhQ")
      .then(function (res) {
        Swal.fire("Message Sent", `Thanks ${params.from_name}`, "success");
        setTimeout(() => {
          nameInput.value = "";
          emailInput.value = "";
          messageInput.value = "";
        }, 100);
      });
  }
}

// landing animation

// Initialising the canvas
var canvas = document.querySelector("canvas"),
  ctx = canvas.getContext("2d");

// Setting the width and height of the canvas
canvas.width = window.innerWidth;
canvas.height = window.innerHeight + 200;

// Setting up the letters

var letters =
  "01001001 00100111 01101101 00100000 01000110 01110010 01101111 01101110 01110100 00101101 01000101 01101110 01100100 00100000 01000100 01100101 01110110 01100101 01101100 01101111 01110000 01100101 01110010";

letters = letters.split("");

// Setting up the columns
var fontSize = 10,
  columns = canvas.width / fontSize;

// Setting up the drops
var drops = [];
for (var i = 0; i < columns; i++) {
  drops[i] = 1;
}

// Setting up the draw function
let specificColor = "#405de6";
function draw() {
  ctx.fillStyle = "rgba(0, 0, 0, .1)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  for (var i = 0; i < drops.length; i++) {
    var text = letters[Math.floor(Math.random() * letters.length)];
    ctx.fillStyle = specificColor;
    // ctx.fillStyle = "#405de6";
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);
    drops[i]++;
    if (drops[i] * fontSize > canvas.height && Math.random() > 0.95) {
      drops[i] = 0;
    }
  }
}

// Loop the animation
setInterval(draw, 28);

// add active class if scroll == the height of section
let navbarLinks = document.querySelectorAll(".header .links li span");
let secondNavbar = document.querySelectorAll(".sec-nav .links li span");
let aboutSection = document.querySelector("#about");
let portfolioSection = document.querySelector("#portfolio");
let servciesSection = document.querySelector("#services");
let contactSection = document.querySelector("#contact");
let homeNav = document.querySelectorAll(".home");
let aboutNav = document.querySelectorAll(".about-nav");
let servicesNav = document.querySelectorAll(".services-nav");
let portfolioNav = document.querySelectorAll(".portfolio-nav");
let contactNav = document.querySelectorAll(".contact-nav");

window.onscroll = function () {
  activeClasses(navbarLinks);
  if (window.screen.width <= 767) {
    activeClasses(secondNavbar);
  }
};

// make function add active class on scroll
function activeClasses(navBar) {
  if (
    this.scrollY >= aboutSection.offsetTop - 50 &&
    this.scrollY < servciesSection.offsetTop - 50
  ) {
    navBar.forEach((link) => {
      if (link.classList.contains("about-nav")) {
        navBar.forEach((link) => link.classList.remove("active"));
        link.classList.add("active");
      }
    });
  } else if (
    this.scrollY >= servciesSection.offsetTop - 50 &&
    this.scrollY < portfolioSection.offsetTop - 50
  ) {
    navBar.forEach((link) => {
      if (link.classList.contains("services-nav")) {
        navBar.forEach((link) => link.classList.remove("active"));
        link.classList.add("active");
      }
    });
  } else if (
    this.scrollY >= portfolioSection.offsetTop - 50 &&
    this.scrollY < contactSection.offsetTop - 50
  ) {
    navBar.forEach((link) => {
      if (link.classList.contains("portfolio-nav")) {
        navBar.forEach((link) => link.classList.remove("active"));
        link.classList.add("active");
      }
    });
  } else if (this.scrollY >= contactSection.offsetTop - 50) {
    navBar.forEach((link) => {
      if (link.classList.contains("contact-nav")) {
        navBar.forEach((link) => link.classList.remove("active"));
        link.classList.add("active");
      }
    });
  } else {
    navBar.forEach((link) => link.classList.remove("active"));
    navBar[0].classList.add("active");
  }
}

// add active class on click
navbarLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navbarLinks.forEach((link) => link.classList.remove("active"));
    link.classList.add("active");
  });
});
// add active class on second navbar
secondNavbar.forEach((link) => {
  link.addEventListener("click", () => {
    secondNavbar.forEach((link) => link.classList.remove("active"));
    link.classList.add("active");
  });
});

function goTo(section) {
  window.scroll({
    top: section.offsetTop - 50,
    left: 0,
    behavior: "smooth",
  });
}

aboutNav.forEach((about) => {
  about.addEventListener("click", function () {
    goTo(aboutSection);
  });
});

servicesNav.forEach((service) => {
  service.addEventListener("click", function () {
    goTo(servciesSection);
  });
});

portfolioNav.forEach((portfolio) => {
  portfolio.addEventListener("click", function () {
    goTo(portfolioSection);
  });
});

contactNav.forEach((contact) => {
  contact.addEventListener("click", function () {
    goTo(contactSection);
  });
});

homeNav.forEach((home) => {
  home.addEventListener("click", function () {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  });
});

// scroll animation
let scroller = document.querySelector(".scroller");
window.addEventListener("scroll", () => {
  let scrollTop = document.documentElement.scrollTop;
  if (scrollTop > 0) {
    scroller.classList.add("active");
  } else {
    scroller.classList.remove("active");
  }
});
scroller.onclick = function () {
  window.scroll({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
};

// setting of dark mood
let darkBtn = document.querySelector(".switch-btn");
let colorLogo = document.querySelector(".landing .img-card .color-logo");
let darkLogo = document.querySelector(".landing .img-card .dark-logo");
let colorHeadLogo = document.querySelector(".header .logo .color-logo-head");
let darkHeadLogo = document.querySelector(".header .logo .dark-logo-head");
let darkMode = true;
if (localStorage.getItem("darkMode") == "on") {
  document.body.classList.add("dark");
  colorLogo.style.display = "none";
  darkLogo.style.display = "initial";

  colorHeadLogo.style.display = "none";
  darkHeadLogo.style.display = "block";
  specificColor = "#434449";
} else {
  colorLogo.style.display = "initial";
  darkLogo.style.display = "none";

  colorHeadLogo.style.display = "block";
  darkHeadLogo.style.display = "none";
  specificColor = "#405de6";
}

darkBtn.addEventListener("click", function () {
  if (darkMode) {
    document.body.classList.add("dark");
    localStorage.setItem("darkMode", "on");
    colorLogo.style.display = "none";
    darkLogo.style.display = "initial";
    colorHeadLogo.style.display = "none";
    darkHeadLogo.style.display = "block";

    specificColor = "#434449";

    darkMode = false;
  } else {
    document.body.classList.remove("dark");
    localStorage.setItem("darkMode", "off");
    colorLogo.style.display = "initial";
    darkLogo.style.display = "none";

    colorHeadLogo.style.display = "block";
    darkHeadLogo.style.display = "none";

    specificColor = "#405de6";

    darkMode = true;
  }
});

// loading animation setting

let mainAnimation = document.querySelector(".main-background");
document.onreadystatechange = function () {
  if (document.readyState !== "complete") {
    document.querySelector("body").style.visibility = "hidden";
    document.querySelector("html").style.overflowY = "hidden";

    mainAnimation.style.visibility = "visible";
  } else {
    document.querySelector("body").style.visibility = "visible";
    document.querySelector("html").style.overflowY = "visible";

    mainAnimation.style.visibility = "hidden";
  }
};
