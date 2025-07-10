// Первая секция (Hero)
const heroBtn1 = document.querySelector(".hero-section .btn-primary");
const heroBtn2 = document.querySelector(".hero-section .btn-secondary");

if (heroBtn1 && heroBtn2) {
  heroBtn2.addEventListener("mouseenter", () => {
    heroBtn1.classList.remove("active");
    heroBtn2.classList.add("active");
  });

  heroBtn2.addEventListener("mouseleave", () => {
    heroBtn1.classList.add("active");
    heroBtn2.classList.remove("active");
  });
}

// Вторая секция (Sell NFT)
const sellBtn1 = document.querySelector(".sell-nft-section .btn-primary");
const sellBtn2 = document.querySelector(".sell-nft-section .btn-secondary");

if (sellBtn1 && sellBtn2) {
  sellBtn2.addEventListener("mouseenter", () => {
    sellBtn1.classList.remove("active");
    sellBtn2.classList.add("active");
  });

  sellBtn2.addEventListener("mouseleave", () => {
    sellBtn1.classList.add("active");
    sellBtn2.classList.remove("active");
  });
}
