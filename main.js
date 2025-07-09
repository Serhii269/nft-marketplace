const btn1 = document.querySelector(".btn-primary");
const btn2 = document.querySelector(".btn-secondary");

btn2.addEventListener("mouseenter", () => {
  btn1.classList.remove("active");
  btn2.classList.add("active");
});

btn2.addEventListener("mouseleave", () => {
  btn1.classList.add("active");
  btn2.classList.remove("active");
});
