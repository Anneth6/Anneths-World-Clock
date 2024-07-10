function changeTheme() {
  let body = document.querySelector("body");
  body.classList.toggle("dark");
}

function homePage() {
  window.location.href = "index.html";

  if (changeTheme === ".dark") {
    body.classList.toggle("dark");
  }
}

// set page theme
let themeButton = document.querySelector(".themeButton");
themeButton.addEventListener("click", changeTheme);

// set return home button
let returnButton = document.querySelector(".returnButton");
returnButton.addEventListener("click", homePage);
