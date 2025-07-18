const burger = document.getElementById("burgerBtn");
const nav = document.getElementById("mainNav");

burger.addEventListener("click", () => {
  nav.classList.toggle("active");
  burger.classList.toggle("open");
});

document.addEventListener("click", (e) => {
  if (!burger.contains(e.target) && !nav.contains(e.target)) {
    nav.classList.remove("active");
    burger.classList.remove("open");
  }
});
