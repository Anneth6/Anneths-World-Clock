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

function updateTime() {
  // create for: Lisbon, Melbourne, Timbuktu
  // Lisbon
  let lisbonElement = document.querySelector("#lisbon");
  if (lisbonElement) {
    let lisbonDateElement = lisbonElement.querySelector(".date");
    let lisbonTime24Element = lisbonElement.querySelector(".hour24");
    let lisbonTime12Element = lisbonElement.querySelector(".hour12");
    let lisbonTime = moment().tz("Europe/Lisbon");

    lisbonDateElement.innerHTML = lisbonTime.format("dddd, DD MMMM YYYY");
    lisbonTime24Element.innerHTML = lisbonTime.format("HH:mm:ss");
    lisbonTime12Element.innerHTML = lisbonTime.format(
      "hh:mm:ss [<small>]A[</small>]"
    );
  }
  // Melbourne
  let melbourneElement = document.querySelector("#melbourne");
  if (melbourneElement) {
    let melbourneDateElement = melbourneElement.querySelector(".date");
    let melbourneTime24Element = melbourneElement.querySelector(".hour24");
    let melbourneTime12Element = melbourneElement.querySelector(".hour12");
    let melbourneTime = moment().tz("Australia/Melbourne");

    melbourneDateElement.innerHTML = melbourneTime.format("dddd, DD MMMM YYYY");
    melbourneTime24Element.innerHTML = melbourneTime.format("HH:mm:ss");
    melbourneTime12Element.innerHTML = melbourneTime.format(
      "hh:mm:ss [<small>]A[</small>]"
    );
  }
  // Timbuktu
  let timbuktuElement = document.querySelector("#timbuktu");
  if (timbuktuElement) {
    let timbuktuDateElement = timbuktuElement.querySelector(".date");
    let timbuktuTime24Element = timbuktuElement.querySelector(".hour24");
    let timbuktuTime12Element = timbuktuElement.querySelector(".hour12");
    let timbuktuTime = moment().tz("Africa/Timbuktu");

    timbuktuDateElement.innerHTML = timbuktuTime.format("dddd, DD MMMM YYYY");
    timbuktuTime24Element.innerHTML = timbuktuTime.format("HH:mm:ss");
    timbuktuTime12Element.innerHTML = timbuktuTime.format(
      "hh:mm:ss [<small>]A[</small>]"
    );
  }
}

// initial page loading
updateTime();
setInterval(updateTime, 1000);

// set page theme
let themeButton = document.querySelector(".themeButton");
themeButton.addEventListener("click", changeTheme);

// set return home button
let returnButton = document.querySelector(".returnButton");
returnButton.addEventListener("click", homePage);
