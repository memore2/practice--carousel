const slideImg = document.querySelector(".imgs");
const imgs = slideImg.querySelectorAll(".slideImg-img");
const imgWidth = imgs[0].getBoundingClientRect().width;
const filed = document.querySelector(".slideImg");
const location = document.querySelector(".location");

let standard = 0;
let timer = false;
filed.addEventListener("click", (e) => {
  if (e.target.nodeName !== "BUTTON") return;
  locationBtnColor("aquamarine");
  if (e.target.parentNode.className === "direction") {
    direction(e.target);
  } else {
    locationBtn(e.target);
  }
});

function direction(target) {
  if (target.className === "direction-left") {
    standard--;
    move();
  } else {
    standard++;
    move();
  }
}

function move() {
  if (standard > imgs.length - 1) standard = 0;
  if (standard < 0) standard = imgs.length - 1;
  locationBtnColor("black");
  timePasses();
  slideImg.style.transform = `translate(${-imgWidth * standard}px)`;
}
function locationBtnColor(color) {
  let s = document.querySelector(`.location button[data-btn="${standard}"]`);
  s.style.backgroundColor = color;
}

function locationBtn(target) {
  let select = target.dataset.btn;
  standard = select;
  move();
}

let count = 0;
function init() {
  for (let i = 0; i < imgs.length; i++) {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    btn.setAttribute("data-btn", `${count++}`);
    li.appendChild(btn);
    location.appendChild(li);
  }
  timePasses();
}
function timePasses() {
  clearInterval(timer);
  timer = setInterval(() => {
    locationBtnColor("aquamarine");
    standard++;
    move();
  }, 2000);
}

init();
