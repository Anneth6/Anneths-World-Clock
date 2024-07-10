function changeTheme() {
  let body = document.querySelector("body");
  body.classList.toggle("dark");
}

function homePage() {
  window.location.href = "index.html";
}

let themeButton = document.querySelector(".themeButton");
themeButton.addEventListener("click", changeTheme);

let returnButton = document.querySelector(".returnButton");
returnButton.addEventListener("click", homePage);
