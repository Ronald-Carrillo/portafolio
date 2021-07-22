const menu = document.querySelector(".menu");
const navOpen = document.querySelector(".hamburger");
const navClose = document.querySelector(".close");
const navBar = document.querySelector(".nav");
// navbar
const navLeft = menu.getBoundingClientRect().left;
navOpen.addEventListener("click", () => {
  if (navLeft < 0) {
    menu.classList.add("show");
    document.body.classList.add("show");
    navBar.classList.add("show");
  }
});

navClose.addEventListener("click", () => {
  if (navLeft < 0) {
    menu.classList.remove("show");
    document.body.classList.remove("show");
    navBar.classList.remove("show");
  }
});
// type1
new TypeIt("#type1", {
  speed: 120,
  loop: true,
  waitUntilVisible: true,
})
  .type(" Mechatronic Engineer", { delay: 400 })
  .pause(500)
  .delete(20)
  .type("Front-end Developer", { delay: 400 })
  .pause(500)
  .delete(9)
  .go();

// fix nav

const navHeight = navBar.getBoundingClientRect().height;
window.addEventListener("scroll", () => {
  const scrollHeight = window.pageYOffset;
  if (scrollHeight > navHeight) {
    navBar.classList.add("fix-nav");
  } else {
    navBar.classList.remove("fix-nav");
  }
});

// contact

VanillaTilt.init(document.querySelectorAll(".sci li a"), {
  max: 30,
  speed: 400,
  glare: true,
  "max-glare": 1,
});
let list = document.querySelectorAll(".sci li");
let bg = document.querySelector(".social-media ");
let title = document.querySelector("title-contact");
list.forEach((elements) => {
  elements.addEventListener("mouseenter", function (event) {
    let color = event.target.getAttribute("data-color");
    bg.style.backgroundColor = color;
    title.style.backgroundColor = color;
  });
  elements.addEventListener("mouseleave", function (event) {
    let color = event.target.getAttribute("data-color");
    bg.style.backgroundColor = "#fff";
  });
});
