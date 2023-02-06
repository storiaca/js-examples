let availableKeywords = [
  "HTML",
  "CSS",
  "Easy Tutorials",
  "Web design tutorials",
  "Javaascriipt",
  "Where to learn coding online",
  "Where to learn web design",
  "How to create a website",
];

const resultsBox = document.querySelector(".result-box");
const inputBox = document.getElementById("input-box");

inputBox.onkeyup = function () {
  let result = [];
  let input = inputBox.value;
  if (input.length) {
    result = availableKeywords.filter((keyword) => {
      return keyword.toLowerCase().includes(input.toLowerCase());
    });
  }
  display(result);

  if (!result.length) {
    resultsBox.innerHTML = "";
  }
};

// inputBox.addEventListener("click", function(list) {

// })
function display(result) {
  const content = result.map((list) => {
    return `<li onclick=selectInput(this)>${list}</li>`;
  });
  resultsBox.innerHTML = `
    <ul>${content.join("")}</ul>
  `;
}

function selectInput(list) {
  inputBox.value = list.innerHTML;
  resultsBox.innerHTML = "";
}
