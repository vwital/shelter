import { petsInfo } from '../pets/src/pets.js';

// Burger-menu

let burgerMenu = document.querySelector('.burger-menu');
let navigation = document.querySelector('.header__navigation');
let closeBtn = document.querySelector('.modal__cross');
const navLinks = document.querySelectorAll('.navigation__link');
const body = document.querySelector('body');
const overlay = document.querySelector('.overlay');

burgerMenu.addEventListener('click', () => {
  burgerMenu.classList.toggle('burger-menu__icon_active');
  navigation.classList.toggle('header__navigation_active');
  body.classList.toggle('scroll-block');
  overlay.classList.toggle('overlay_active');
});

navLinks.forEach((el) => {
  el.addEventListener('click', () => {
    burgerMenu.classList.remove('burger-menu__icon_active');
    navigation.classList.remove('header__navigation_active');
    body.classList.remove('scroll-block');
    overlay.classList.remove('overlay_active');
  });
});

overlay.addEventListener('click', () => {
  burgerMenu.classList.remove('burger-menu__icon_active');
  navigation.classList.remove('header__navigation_active');
  body.classList.remove('scroll-block');
  overlay.classList.remove('overlay_active');
  modal.classList.add('modal_hidden');
});

closeBtn.addEventListener('click', () => {
  burgerMenu.classList.remove('burger-menu__icon_active');
  navigation.classList.remove('header__navigation_active');
  body.classList.remove('scroll-block');
  overlay.classList.remove('overlay_active');
  modal.classList.add('modal_hidden');
});

//pagination

function randomNum() {
  return Math.floor(Math.random() * 8);
}

let slidesList = document.querySelector('.slides-list');

let sliderContainer = document.querySelector('.slider__container');
for (let i = 0; i < 6; i++) {
  let cardsSet = document.createElement('div');
  slidesList.appendChild(cardsSet);
  cardsSet.classList.add('cards-set');
}

let cardsSet = document.querySelectorAll('.cards-set');
function createCard(number, x) {
  let slideCard = document.createElement('div');
  x.appendChild(slideCard);
  slideCard.classList.add('slider__card');
  let slideCardImg = document.createElement('img');
  slideCard.appendChild(slideCardImg);
  slideCardImg.classList.add('slider-card__img');
  slideCardImg.setAttribute('alt', 'slider-img');
  slideCardImg.setAttribute('src', `${petsInfo[number].img}`);
  let cardName = document.createElement('span');
  cardName.innerHTML = `${petsInfo[number].name}`;
  cardName.classList.add('slider-card__text');
  slideCard.appendChild(cardName);
  let cardButton = document.createElement('button');
  cardButton.innerHTML = 'Learn more';
  cardButton.classList.add('button', 'slider-card__button', 'button_bordered');
  slideCard.appendChild(cardButton);
}

function create8Cards(where) {
  let uniqueNum = new Set();
  while (uniqueNum.size !== 8) {
    uniqueNum.add(randomNum());
  }
  uniqueNum.forEach((el) => {
    createCard(el, where);
  });
}

create8Cards(cardsSet[0]);
create8Cards(cardsSet[1]);
create8Cards(cardsSet[2]);
create8Cards(cardsSet[3]);
create8Cards(cardsSet[4]);
create8Cards(cardsSet[5]);

// cardsSet.forEach((el)=>{
//   for (let i=0; i>6; i++){
// createUniqueSet().forEach((el)=>{
//   createCard(el,cardsSet[i])
// })

//   }
// })
// createUniqueSet().forEach((el)=>{
//   createCard(el,cardsSet[0])
// })

let slideNumber = document.querySelector('.slider__button__number');
let buttonEnd = document.querySelector('.slider__button__active-2arrows');
let buttonStart = document.querySelector('.slider__button__inactive-1arrow');
let buttonPrev = document.querySelector('.slider__button__inactive-2arrows');
let buttonNext = document.querySelector('.slider__button__active-1arrow');
let currentSlide = 1;

let offset = 1200;

let slideOffset;
buttonNext.addEventListener('click', () => {
  if (currentSlide < 6) {
    slideOffset = currentSlide * offset;
    sliderContainer.style.transform = `translate(${-slideOffset}px)`;
    currentSlide++;
    checkCurrentSlide();
    slideNumber.textContent = currentSlide;
  }
});

buttonEnd.addEventListener('click', () => {
  currentSlide = 5;
  slideOffset = currentSlide * offset;
  sliderContainer.style.transform = `translate(${-slideOffset}px)`;
  currentSlide++;
  checkCurrentSlide();
  slideNumber.textContent = currentSlide;
});

buttonPrev.addEventListener('click', () => {
  if (currentSlide > 1) {
    slideOffset = slideOffset - 1200;

    sliderContainer.style.transform = `translate(${-slideOffset}px)`;
    currentSlide--;
    checkCurrentSlide();
    slideNumber.textContent = currentSlide;
  }
});

buttonStart.addEventListener('click', () => {
  currentSlide = 1;
  checkCurrentSlide();
  slideOffset = currentSlide * offset;
  sliderContainer.style.transform = `translate(0px)`;
  slideNumber.textContent = currentSlide;
});

function checkCurrentSlide() {
  if (currentSlide == 1) {
    buttonPrev.classList.add('button_inactive');
    buttonPrev.classList.remove('button_active');
    buttonStart.classList.add('button_inactive');
    buttonStart.classList.remove('button_active');
  }
  if (currentSlide > 1) {
    buttonPrev.classList.remove('button_inactive');
    buttonPrev.classList.add('button_active');
    buttonStart.classList.remove('button_inactive');
    buttonStart.classList.add('button_active');
  }
  if (currentSlide < 6) {
    buttonNext.classList.remove('button_inactive');
    buttonNext.classList.add('button_active');
    buttonEnd.classList.remove('button_inactive');
    buttonEnd.classList.add('button_active');
  }

  if (currentSlide == 6) {
    buttonNext.classList.add('button_inactive');
    buttonNext.classList.remove('button_active');
    buttonEnd.classList.add('button_inactive');
    buttonEnd.classList.remove('button_active');
  }
}

// pop-up
let slides = document.querySelectorAll('.slider__card');
let modal = document.querySelector('.modal');
let modalDescription = document.querySelector('.modal__description');
let modalPetInfo = document.getElementById('modal__pet-info');
let modalPetImg = document.getElementById('modal__pet-img');
let modalPetName = document.getElementById('modal__pet-name');
let modalPetBreed = document.getElementById('modal__pet-breed');

let modalPetAge = document.getElementById('modal__pet-age');
let modalPetInoculations = document.getElementById('modal__pet-inoculations');
let modalPetDiseases = document.getElementById('modal__pet-diseases');
let modalPetParasites = document.getElementById('modal__pet-parasites');

slides.forEach((el) => {
  el.addEventListener('click', () => {
    body.classList.toggle('scroll-block');
    overlay.classList.toggle('overlay_active');
    modal.classList.remove('modal_hidden');
    let petName = el.childNodes[1].textContent;
    petsInfo.forEach((el) => {
      if (petName == el.name) {
        modalPetImg.setAttribute('src', el.img);
        modalPetName.textContent = el.name;
        modalPetInfo.textContent = el.description;
        modalPetBreed.textContent = el.breed;
        modalPetAge.textContent = el.age;
        modalPetInoculations.textContent = el.inoculations;
        modalPetDiseases.textContent = el.diseases;
        modalPetParasites.textContent = el.parasites;
      }
    });
  });
});
