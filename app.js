const sliderCityPanel = document.querySelector('.city-panel__slider');
const sliderCityPanelArrowUp = sliderCityPanel.firstElementChild;
const sliderCityPanelArrowDown = sliderCityPanel.lastElementChild;

console.log(sliderCityPanel);
console.log(sliderCityPanelArrowDown);
const cardsCityNamesOfCities = document.querySelectorAll(".card-city__city-name");
const cardsCityNamesOfCountries = document.querySelectorAll(".card-city__country");

const cardsCity = document.querySelectorAll(".card-city");
let currentCard = Math.floor(cardsCity.length / 2);
console.log(currentCard);

sliderCityPanelArrowDown.addEventListener('click', () => {

  moveLargeToBottom(cardsCity[currentCard])
  // cardsCity[currentCard - 1].moveMediumFromTopToLarge()
  // cardsCity[currentCard - 2].moveSmallFromTopToMedium()
  cardsCityNamesOfCities.forEach((i) => i.classList.toggle('toSmallFromMediumCityName'));
  cardsCityNamesOfCountries.forEach((i) => i.classList.toggle('toSmallFromMediumCountryName'));
  // console.log('sdlfksdjflaskjfdklfjs');

})
sliderCityPanelArrowUp.addEventListener('click', () => {
  cardsCity.forEach((i) => i.classList.toggle('toLarge'));
  // console.log('sdlfksdjflaskjfdklfjs');
})

function moveLargeToBottom(largeCard) {
  largeCard.classList.add('moveLargeToBottom')
}