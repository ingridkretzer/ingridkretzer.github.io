

const changeTheme = document.getElementById("change-theme");
const body = document.querySelector("body");
const imageButtonChangeTheme = document.querySelector(".image-button");

changeTheme.addEventListener("click", () => {
  const darkModeActive = body.classList.contains("dark-mode");

  body.classList.toggle("dark-mode");

  if (darkModeActive) {
    imageButtonChangeTheme.setAttribute("src", "./src/imagens/sun.png");
  } else {
    imageButtonChangeTheme.setAttribute("src", "./src/imagens/moon.png");
  }
});
