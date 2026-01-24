import "../../src/styles.css";

const fullScreenImg = document.querySelectorAll(".fullscreen-image");
const maximizeBtn = document.querySelectorAll(".maximize-image-button");

maximizeBtn.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    event.preventDefault();
    const idValue = btn.id;
    fullScreenImg[idValue].classList.add("active");
  });
});

fullScreenImg.forEach((img) => {
  img.addEventListener("click", () => {
    const idValue = img.id;
    console.log(idValue);
    fullScreenImg[idValue].classList.remove("active");
  });
});

console.log(maximizeBtn);
