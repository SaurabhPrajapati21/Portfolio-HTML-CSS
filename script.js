const m = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");

m.onclick = () => {
  m.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

