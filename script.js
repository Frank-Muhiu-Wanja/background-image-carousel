const imgs = document.querySelectorAll(".img");
const arrowBtns = document.querySelectorAll(".arrow-btn");

let activeImg = 0;

function showActiveImage() {
  imgs.forEach((img, i) => {
    img.classList.toggle("active", i === activeImg);
  });
}

arrowBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.classList.contains("right-arrow")) {
      activeImg++;
      if (activeImg > imgs.length - 1) activeImg = 0;
    } else {
      activeImg--;
      if (activeImg < 0) activeImg = imgs.length - 1;
    }
    showActiveImage();
  });
});

// optional auto-slide
setInterval(() => {
  activeImg = (activeImg + 1) % imgs.length;
  showActiveImage();
}, 5000);
