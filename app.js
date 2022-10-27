const sliderCityPanel = document.querySelector('.city-panel__slider');
const sliderCityPanelArrowUp = sliderCityPanel.firstElementChild;
const sliderCityPanelArrowDown = sliderCityPanel.lastElementChild;
const user = {
  name: 'JavaScript',
  hello: () => this.name,
  bye: () => this.hello()
}
const newPost = (post, addedAt = Date()) => {
  return { ...post, addedAt }
}
const user1 = {
  id: 1,
  name: 'max'
}
console.log(newPost(user1));

// let answer = 42;
// answer += 20;
// console.log(answer);

// console.log(typeof user.hello.name, user.hello.name)
// console.log(typeof user.hello, user.hello)
// console.log(typeof user.hello(), user.hello())
// console.log('end-------');

// console.log(sliderCityPanel);
// console.log(sliderCityPanelArrowDown);
const cardsCityNamesOfCities = document.querySelectorAll(".card-city__city-name");
const cardsCityNamesOfCountries = document.querySelectorAll(".card-city__country");

const cardsCity = document.querySelectorAll(".card-city");
const cardsInSlider = cardsCity.length;
let currentCard = Math.floor(cardsInSlider / 2);

const wrapperSlaider = document.querySelector('.card-city__inner-wrapper-slaider')
let sliderMovedPX = 0;
const bigStep = 106;
const smallStep = 80;


const cityData = {
  Ankara: {
    images: ['https://media.istockphoto.com/photos/panoramic-ankara-view-with-the-sogutozu-district-picture-id1158503480?k=20&m=1158503480&s=612x612&w=0&h=v6VNuUdpimuAtrP82qzJ4gOVNHqYEXs3Mskz-PAjEFw=', 'https://www.iyipara.org/wp-content/uploads/2022/07/ankara-kalesi.jpg', 'https://a.travel-assets.com/findyours-php/viewfinder/images/res70/75000/75741-Ankara-And-Vicinity.jpg?impolicy=fcrop&w=360&h=224&q=mediumLow'],
    description: `Serving as the capital of the ancient Celtic state of Galatia (280–64 BC), and later of the Roman province with the same name (25 BC–7th century), the city is very old, with various Hattian, Hittite, Lydian, Phrygian, Galatian, Greek, Persian, Roman, Byzantine, and Ottoman archeological sites. The Ottomans made the city the capital first of the Anatolia Eyalet (1393 – late 15th century) and then the Angora Vilayet (1867–1922). The historical center of Ankara is a rocky hill rising 150 m (500 ft) over the left bank of the Ankara River, a tributary of the Sakarya River. The hill remains crowned by the ruins of Ankara Castle.`
  },
  Oslo: {
    images: ['https://d3dqioy2sca31t.cloudfront.net/Projects/cms/production/000/024/400/slideshow/513e398bb6cf9b46edd61cb8547db338/norway-oslo-opera-house-harbor.jpg', 'https://i.pinimg.com/736x/3b/03/41/3b03410d9c789918ab05167fe102b158.jpg', 'https://qtxasset.com/cdn-cgi/image/w=384,h=216,f=auto,fit=crop,g=0.5x0.5/https://qtxasset.com/quartz/qcloud1/media/image/travelagentcentral/1530647031/OsloNorwayBaiaziStockGettyImagesPlusGettyImages.jpg?VersionId=WGUi5R84q8KPmWO9di_z1zrOYutBMWGs'],
    description: `Oslo was founded as a city at the end of the Viking Age in 1040 under the name Ánslo, and established as a kaupstad or trading place in 1048 by Harald Hardrada. The city was elevated to a bishopric in 1070 and a capital under Haakon V of Norway around 1300. Personal unions with Denmark from 1397 to 1523 and again from 1536 to 1814 reduced its influence. After being destroyed by a fire in 1624, during the reign of King Christian IV, a new city was built closer to Akershus Fortress and named Christiania in honour of the king. It became a municipality (formannskapsdistrikt) on 1 January 1838. `
  },
  // 'New York': ['https://upload.wikimedia.org/wikipedia/commons/0/0e/Spiderweb_BB_jeh.jpg', 'https://upload.wikimedia.org/wikipedia/commons/a/a7/Grand_Central_Station_long_exposure.jpg', 'https://upload.wikimedia.org/wikipedia/commons/3/35/Lower_Central_Park_Shot_5_%28cropped%29.JPG'],
  'New York': {
    images: ['https://image.newyorkcity.ca/wp-content/uploads/2020/03/New-York-Helicopter-Tour-2.eric_both.bottom_right.jpg.webp', 'https://img2.10bestmedia.com/Images/Photos/317133/7405647102-8f053b5d08-k_55_660x440.jpg', 'https://www.telegraph.co.uk/content/dam/Travel/Destinations/North%20America/USA/New%20York/new-york-central-park-aerial.jpg?imwidth=680'],
    description: `New York City comprises 5 boroughs sitting where the Hudson River meets the Atlantic Ocean. At its core is Manhattan, a densely populated borough that’s among the world’s major commercial, financial and cultural centers. Its iconic sites include skyscrapers such as the Empire State Building and sprawling Central Park. Broadway theater is staged in neon-lit Times Square.`
  },
  London: {
    images: ['./images/london.jpg', 'https://st.depositphotos.com/1004061/3547/i/450/depositphotos_35477409-stock-photo-london-england-the-uk-skyline.jpg', 'https://londonlovesproperty.com/wp-content/uploads/2019/02/London-2.jpg'],
    description: `London is the capital and largest city of England and the United Kingdom, with a population of just under 9 million. It stands on the River Thames in south-east England at the head of a 50-mile (80 km) estuary down to the North Sea, and has been a major settlement for two millennia. The City of London, its ancient core and financial centre, was founded by the Romans as Londinium and retains boundaries close to its medieval ones. The City of Westminster, to the west of the City of London, has for centuries hosted the national government and parliament.`
  },
  Cairo: {
    images: ['./images/cairo.jpg', './images/Baron_Palace.jpg', './images/cairo2.jpg'],
    description: `Cairo is associated with ancient Egypt, as the Giza pyramid complex and the ancient cities of Memphis and Heliopolis are located in its geographical area. Located near the Nile Delta, the city first developed as Fustat, a settlement founded after the Muslim conquest of Egypt in 640 next to an existing ancient Roman fortress, Babylon. Today, Cairo has the oldest and largest cinema and music industry in the Arab World, as well as the world's second-oldest institution of higher learning, Al-Azhar University. Many international media, businesses, and organizations have regional headquarters in the city; the Arab League has had its headquarters in Cairo for most of its existence.`
  }
}
// C:\Users\yanag\dev\Cities(NY)\images
function getTemplateBottomLeft(temp, parent) {
  const tempCopy = temp.content.cloneNode(true)
  const cityName = parent.querySelector(".card-city__city-name").textContent;
  const country = parent.querySelector(".card-city__country").textContent;
  const date = parent.querySelector(".card-city__date").textContent;
  const price = parent.querySelector(".card-city__price").textContent;
  // const hotelText = tempCopy.querySelector('.city-page__hotel-text').textContent;
  tempCopy.querySelector('.city-page__name-city').textContent = cityName;
  tempCopy.querySelector('.city-page__name-country').textContent = country;
  tempCopy.querySelector('.city-page__date').textContent = date;
  tempCopy.querySelector('.city-page__price').textContent = price;
  tempCopy.querySelector('.city-page__description-city').textContent = cityData[cityName]['description'];
  console.log(tempCopy);

  // const imageInTemplate = tempCopy.querySelectorAll('.city-page__photo')
  // imageInTemplate.forEach((img, i) => {
  // img.src = images[cityName]['images'][i]
  // })
  return tempCopy
}
function getTemplateBottomRight(temp, parent) {
  const tempCopy = temp.content.cloneNode(true)
  const cityName = parent.querySelector('.city-page__name-city').textContent;
  const hotelText = tempCopy.querySelector('.city-page__hotel-text').textContent;
  tempCopy.querySelector('.city-page__hotel-text').innerHTML = `${hotelText} ${cityName} <span class="city-page__nights">(7 nights)</span>`
  const imageInTemplate = tempCopy.querySelectorAll('.city-page__photo')
  imageInTemplate.forEach((img, i) => {
    img.src = cityData[cityName]['images'][i]
  })
  return tempCopy
}
function getTemplateTop(temp, parent) {
  const tempCopy = temp.content.cloneNode(true)
  const cityName = parent.querySelector('.city-page__name-city').textContent;
  const imageInTemplate = tempCopy.querySelectorAll('.city-page__photo-big')
  imageInTemplate.forEach((img, i) => {
    img.src = cityData[cityName]['images'][i]
  })
  // console.log(tempCopy.querySelector('.city-page__hotel-text').textContent);
  // console.log(tempCopy);
  return tempCopy
}

const containerCityPage = document.querySelector(".container-city-page")
const cityPages = document.querySelectorAll('.city-page')
const templateBottomRight = document.querySelector('#template-bottom-right');
const templateBottomLeft = document.querySelector('#template-bottom-left');
const templateTop = document.querySelector('#template-top');
for (let i = 0; i < cityPages.length; i++) {
  const cityPage = cityPages[i];
  const cardCityFromSlider = cardsCity[i];
  const tempBottomLeft = getTemplateBottomLeft(templateBottomLeft, cardCityFromSlider);
  cityPage.querySelector('.city-page__content-bottom').append(tempBottomLeft);
  const tempBottomRight = getTemplateBottomRight(templateBottomRight, cityPage)
  cityPage.querySelector('.city-page__content-bottom').append(tempBottomRight);

  const tempTop = getTemplateTop(templateTop, cityPage)
  cityPage.querySelector('.city-page__content-top').append(tempTop);

  cityPage.style.backgroundImage = `url(${cardCityFromSlider.querySelector(".card-city__photo").src})`;
}


const cityPageWidth = cityPages[0].clientWidth;
let containerCityPagePosition = cityPageWidth * 2;
containerCityPage.style.transform = `translateX(-${containerCityPagePosition}px)`;

function switchSliderUp() {
  console.log(`Нажал на стрелку вниз  текущая карточка ${currentCard}`);
  if (currentCard != cardsInSlider - 1 && currentCard != 0 && currentCard != 1 && currentCard != cardsInSlider - 2) {
    // console.log(`Самое общее условие(вход), текущая карточка = ${currentCard}`);
    containerCityPagePosition -= cityPageWidth
    containerCityPage.style.transform = `translateX(-${containerCityPagePosition}px)`;
    sliderMovedPX = sliderMovedPX + smallStep
    wrapperSlaider.style.transform = `translateY(${sliderMovedPX}px)`;
    makeLargeBeMedium(cardsCity[currentCard])
    makeMediumBeLarge(cardsCity[currentCard - 1])
    // console.log(cardsCity[currentCard - 1])
    makeSmallBeMedium(cardsCity[currentCard - 2])
    makeMediumBeSmall(cardsCity[currentCard + 1])
    hideSmall(cardsCity[currentCard + 2])
    currentCard--
    console.log(`Самое общее условие(выход), текущая карточка = ${currentCard}`);
  } else if (currentCard == cardsInSlider - 1) {
    // console.log(`Вошел в условие с ПОСЛЕДНЕЙ Карточкой, для проверки текущая карточка = ${currentCard}`);
    containerCityPagePosition -= cityPageWidth
    containerCityPage.style.transform = `translateX(-${containerCityPagePosition}px)`;
    sliderMovedPX = sliderMovedPX + bigStep
    wrapperSlaider.style.transform = `translateY(${sliderMovedPX}px)`;
    makeLargeBeMedium(cardsCity[currentCard])
    makeMediumBeLarge(cardsCity[currentCard - 1])
    makeSmallBeMedium(cardsCity[currentCard - 2])
    showSmall(cardsCity[currentCard - 3])
    currentCard--
    console.log(`Вышел из  условия с ПОСЛЕДНЕЙ Карточкой, для проверки текущая карточка = ${currentCard}`);

  } else if (currentCard == cardsInSlider - 2) {
    // console.log(`Вошел в условие с ПОСЛЕДНЕЙ Карточкой, для проверки текущая карточка = ${currentCard}`);
    containerCityPagePosition -= cityPageWidth
    containerCityPage.style.transform = `translateX(-${containerCityPagePosition}px)`;
    sliderMovedPX = sliderMovedPX + smallStep
    wrapperSlaider.style.transform = `translateY(${sliderMovedPX}px)`;
    makeLargeBeMedium(cardsCity[currentCard])
    makeMediumBeSmall(cardsCity[currentCard + 1])
    makeMediumBeLarge(cardsCity[currentCard - 1])
    makeSmallBeMedium(cardsCity[currentCard - 2])
    showSmall(cardsCity[currentCard - 3])
    currentCard--
    console.log(`Вышел из  условия с ПОСЛЕДНЕЙ Карточкой, для проверки текущая карточка = ${currentCard}`);

  } else if (currentCard == 1) {
    // console.log(`Вошел в условие с текущей карточкой = ${currentCard}`);
    containerCityPagePosition -= cityPageWidth
    containerCityPage.style.transform = `translateX(-${containerCityPagePosition}px)`;
    sliderMovedPX = sliderMovedPX + bigStep
    wrapperSlaider.style.transform = `translateY(${sliderMovedPX}px)`;
    makeLargeBeMedium(cardsCity[currentCard])
    makeMediumBeLarge(cardsCity[currentCard - 1])
    makeMediumBeSmall(cardsCity[currentCard + 1])
    hideSmall(cardsCity[currentCard + 2])
    currentCard--
    console.log(`Вышел из условия, теперь текущая карточкая = ${currentCard}`);

  } else {
    console.log(`Вошел в условие с НУЛЕВОЙ Карточкой, для проверки текущая карточка = ${currentCard}`);
  }
}

function switchSliderDown() {
  console.log(wrapperSlaider.clientWidth);
  console.log(`Нажал на стрелку вверх  текущая карточка ${currentCard}`);
  if (currentCard != cardsInSlider - 1 && currentCard != 0 && currentCard != 1 && currentCard != cardsInSlider - 2) {
    // console.log(`ВВЕРХ: Самое общее условие(вход), текущая карточка = ${currentCard}`);
    containerCityPagePosition += cityPageWidth
    containerCityPage.style.transform = `translateX(-${containerCityPagePosition}px)`;
    sliderMovedPX = sliderMovedPX - smallStep
    wrapperSlaider.style.transform = `translateY(${sliderMovedPX}px)`;
    makeLargeBeMedium(cardsCity[currentCard])
    makeMediumBeLarge(cardsCity[currentCard + 1])
    makeSmallBeMedium(cardsCity[currentCard + 2])
    makeMediumBeSmall(cardsCity[currentCard - 1])
    hideSmall(cardsCity[currentCard - 2])
    currentCard++
    console.log(`ВВЕРХ: Самое общее условие(выход), текущая карточка = ${currentCard}`);
  } else if (currentCard == 0) {
    // console.log(`ВВЕРХ: Вошел в условие с ПОСЛЕДНЕЙ НУЛЕВОЙ Карточкой, для проверки текущая карточка = ${currentCard}`);
    containerCityPagePosition += cityPageWidth
    containerCityPage.style.transform = `translateX(-${containerCityPagePosition}px)`;
    sliderMovedPX = sliderMovedPX - bigStep
    wrapperSlaider.style.transform = `translateY(${sliderMovedPX}px)`;
    makeLargeBeMedium(cardsCity[currentCard])
    makeMediumBeLarge(cardsCity[currentCard + 1])
    makeSmallBeMedium(cardsCity[currentCard + 2])
    showSmall(cardsCity[currentCard + 3])
    currentCard++
    console.log(`ВВЕРХ: Вышел из  условия с ПОСЛЕДНЕЙ Карточкой, для проверки текущая карточка = ${currentCard}`);

  } else if (currentCard == 1) {
    // console.log(`ВВЕРХ: Вошел в условие с ПРЕДПОСЛЕДНЕЙ 1 Карточкой, для проверки текущая карточка = ${currentCard}`);
    containerCityPagePosition += cityPageWidth
    containerCityPage.style.transform = `translateX(-${containerCityPagePosition}px)`;
    sliderMovedPX = sliderMovedPX - smallStep
    wrapperSlaider.style.transform = `translateY(${sliderMovedPX}px)`;
    makeLargeBeMedium(cardsCity[currentCard])
    makeMediumBeSmall(cardsCity[currentCard - 1])
    makeMediumBeLarge(cardsCity[currentCard + 1])
    makeSmallBeMedium(cardsCity[currentCard + 2])
    showSmall(cardsCity[currentCard + 3])
    currentCard++
    console.log(`ВВЕРХ: Вышел из  условия с ПОСЛЕДНЕЙ Карточкой, для проверки текущая карточка = ${currentCard}`);

  } else if (currentCard == cardsInSlider - 2) {
    // console.log(`ВВЕРХ: Вошел в условие с ПРЕДПОСЛЕДНЕЙ ${cardsInSlider - 2} Карточкой, для проверки текущая карточка = ${currentCard}`);
    containerCityPagePosition += cityPageWidth
    containerCityPage.style.transform = `translateX(-${containerCityPagePosition}px)`;
    sliderMovedPX = sliderMovedPX - bigStep
    wrapperSlaider.style.transform = `translateY(${sliderMovedPX}px)`;
    makeLargeBeMedium(cardsCity[currentCard])
    makeMediumBeLarge(cardsCity[currentCard + 1])
    makeMediumBeSmall(cardsCity[currentCard - 1])
    hideSmall(cardsCity[currentCard - 2])
    currentCard++
    console.log(`ВВЕРХ: Вышел из  условия. ПРЕДПОСЛЕДНЯЯ => ПОСЛЕДНЯЯ, для проверки текущая карточка = ${currentCard}`);

  } else {
    console.log(`А все это последняя карточка`);
  }
}

sliderCityPanelArrowUp.addEventListener('click', switchSliderUp)
sliderCityPanelArrowDown.addEventListener('click', switchSliderDown)


function makeLargeBeMedium(largeCard) {
  changeBackgroundWrapper(largeCard)
  largeCard.classList.remove('card-city_type_main')
  largeCard.classList.remove('makeMediumBeLarge')
  largeCard.classList.add('makeLargeBeMedium')
  largeCard.classList.add('card-city_type_secondary')
}

function makeMediumBeLarge(mediumCard) {
  changeBackgroundWrapper(mediumCard);
  mediumCard.classList.remove('card-city_type_secondary')
  mediumCard.classList.remove('makeLargeBeMedium')
  mediumCard.classList.remove('makeSmallBeMedium')
  mediumCard.classList.add('makeMediumBeLarge')
  mediumCard.classList.add('card-city_type_main')
}

function makeMediumBeSmall(mediumCard) {
  makeSmallTexts(mediumCard)
  makeSmallIcon(mediumCard)
  mediumCard.classList.remove('card-city_type_secondary')
  mediumCard.classList.remove('makeLargeBeMedium')
  mediumCard.classList.remove('makeSmallBeMedium')
  mediumCard.classList.add('makeMediumBeSmall')
  mediumCard.classList.add('card-city_type_third')
}

function makeSmallBeMedium(smallCard) {
  makeNormalTexts(smallCard)
  makeNormalIcon(smallCard)
  smallCard.classList.remove('card-city_type_third')
  smallCard.classList.remove('makeMediumBeSmall')
  smallCard.classList.remove('showSmall')
  smallCard.classList.add('makeSmallBeMedium')
  // largeCard.classList.remove('card-city_type_main')
  smallCard.classList.add('card-city_type_secondary')
}




function hideSmall(smallCard) {
  smallCard.classList.add('hideSmall')
  smallCard.classList.remove('showSmall')
}

function showSmall(smallCard) {
  smallCard.classList.add('showSmall')
  smallCard.classList.remove('hideSmall')
}

function makeSmallTexts(parent) {
  parent.querySelector(".card-city__city-name").classList.add('toSmallFromMediumCityName');
  parent.querySelector(".card-city__country").classList.add('toSmallFromMediumCountryName');
  parent.querySelector(".card-city__date").classList.add('toSmallFromMediumDate');
  parent.querySelector(".card-city__price").classList.add('toSmallFromMediumPrice');
  parent.querySelector(".card-city__city-name").classList.remove('toMediumFromSmallCityName');
  parent.querySelector(".card-city__country").classList.remove('toMediumFromSmallCountryName');
  parent.querySelector(".card-city__date").classList.remove('toMediumFromSmallDate');
  parent.querySelector(".card-city__price").classList.remove('toMediumFromSmallPrice');
}

function makeNormalTexts(parent) {
  parent.querySelector(".card-city__city-name").classList.add('toMediumFromSmallCityName');
  parent.querySelector(".card-city__country").classList.add('toMediumFromSmallCountryName');
  parent.querySelector(".card-city__date").classList.add('toMediumFromSmallDate');
  parent.querySelector(".card-city__price").classList.add('toMediumFromSmallPrice');
  parent.querySelector(".card-city__city-name").classList.remove('toSmallFromMediumCityName');
  parent.querySelector(".card-city__country").classList.remove('toSmallFromMediumCountryName');
  parent.querySelector(".card-city__date").classList.remove('toSmallFromMediumDate');
  parent.querySelector(".card-city__price").classList.remove('toSmallFromMediumPrice');
}

function makeSmallIcon(parent) {
  parent.querySelector(".card-city__icon").classList.remove('makeNormalIcon');
  parent.querySelector(".card-city__icon").classList.add('makeSmallIcon');
}

function makeNormalIcon(parent) {
  parent.querySelector(".card-city__icon").classList.remove('makeSmallIcon');
  parent.querySelector(".card-city__icon").classList.add('makeNormalIcon');
}

function changeBackgroundWrapper(card) {
  card.querySelector('.card-city__wrapper').classList.toggle('card-city__wrapper_main-card')
}