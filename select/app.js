let textBox = document.querySelector(".textBox");
let optionText = document.querySelectorAll(".option div");
let dropdown = document.querySelector(".dropdown");

optionText.forEach((option) => {
  option.addEventListener("click", function () {
    textBox.value = option.innerText;
  });
});

dropdown.addEventListener("click", function () {
  dropdown.classList.toggle("active");
});
