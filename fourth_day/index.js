const selectCountry = document.querySelector("select");
const country = "country";

function changeCountry() {
  localStorage.setItem(country, selectCountry.value);
}

function getCountry() {
  const currentCountry = localStorage.getItem("country");
  if (currentCountry !== null) {
    selectCountry.value = currentCountry;
  }
}

function init() {
  getCountry();
  selectCountry.addEventListener("change", changeCountry);
}

init();
