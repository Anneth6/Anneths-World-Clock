function changeTheme() {
  let body = document.querySelector("body");
  body.classList.toggle("dark");
  isDarkTheme = !isDarkTheme; // Update theme state
}

function homePage() {
  // Simulate navigating back to the initial state without reloading
  window.location.href = "/";
  // Reset the theme state
  if (isDarkTheme) {
    document.querySelector("body").classList.add(".dark");
  } else {
    document.querySelector("body").classList.remove(".dark");
  }
  // Here you can add more logic to reset other parts of your page if necessary
}

function updateTime() {
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
  // Paris
  let parisElement = document.querySelector("#paris");
  if (parisElement) {
    let parisDateElement = parisElement.querySelector(".date");
    let parisTime24Element = parisElement.querySelector(".hour24");
    let parisTime12Element = parisElement.querySelector(".hour12");
    let parisTime = moment().tz("Europe/Paris");

    parisDateElement.innerHTML = parisTime.format("dddd, DD MMMM YYYY");
    parisTime24Element.innerHTML = parisTime.format("HH:mm:ss");
    parisTime12Element.innerHTML = parisTime.format(
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

function updateCity(event) {
  setInterval(function () {
    let cityTimeZone = event.target.value;
    if (cityTimeZone === "currentLocalTime") {
      cityTimeZone = moment.tz.guess();
    }
    let cityName = cityTimeZone.replace("_", " ").split("/")[1];
    let cityTime = moment().tz(cityTimeZone);
    let cityElement = document.querySelector("#displayed-cities");
    cityElement.innerHTML = `
           <div class="city-display">
          <div>
           <h2>${cityName}</h2>
            <div class="date">${cityTime.format("dddd, DD MMMM YYYY")}</div>
          </div>
          <div class="time">
            <div>
              <span class="hour24">${cityTime.format(
                "HH:mm:ss"
              )}</span> <span class="small-or">or</span>
            </div>
            <span class="hour12">${cityTime.format(
              "hh:mm:ss"
            )} <small>${cityTime.format("A")}</small></span>
          </div>`;
  }, 1000);
}

// initial page loading
updateTime();
setInterval(updateTime, 1000);

// Global variable to track theme state
let isDarkTheme = false;

// select city from dropdown
let citySelectElement = document.querySelector("#city-select");
citySelectElement.addEventListener("change", updateCity);

// set page theme
let themeButton = document.querySelector(".themeButton");
themeButton.addEventListener("click", changeTheme);

// set return home button
let returnButton = document.querySelector(".returnButton");
returnButton.addEventListener("click", homePage);
