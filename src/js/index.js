import "../../src/styles.css";


// MAXIMIZE FUNCTIONALITY
// ----------------------
const fullScreenImg = document.querySelectorAll(".fullscreen-image");
const maximizeBtn = document.querySelectorAll(".maximize-image-button");

maximizeBtn.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    event.preventDefault(); // prevents immediate reloads
    const idValue = btn.id;
    let idNumber = idValue.match(/\d+/g);
    fullScreenImg[idNumber].classList.add("active");
  });
});

fullScreenImg.forEach((img) => {
  img.addEventListener("click", () => {
    const idValue = img.id;
    let idNumber = idValue.match(/\d+/g);
    fullScreenImg[idNumber].classList.remove("active");
  });
});
