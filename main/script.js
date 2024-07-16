import { petsInfo } from '../main/src/pets.js';

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

function randomNum() {
  return Math.floor(Math.random() * 8);
}

function unique3Num() {
  let uniqueNum = new Set();
  while (uniqueNum.size !== 3) {
    uniqueNum.add(randomNum());
  }
  return uniqueNum;
}

//slider

const slidesList = document.querySelector('.slider__slides-list');
unique3Num().forEach((el) => {
  createCard(el);
});
unique3Num().forEach((el) => {
  createCard(el);
});

const slides = document.querySelectorAll('.slider__card');
const nextSlideButton = document.querySelector('.slider__arrow-right');
const previousSlideButton = document.querySelector('.slider__arrow-left');
let slideWidth = slides[0].clientWidth;
let currentSlide = 0;
slideWidth += 70;
nextSlideButton.addEventListener('click', () => {
  currentSlide = currentSlide + 3;
  if (slidesList.childNodes.length == currentSlide + 1) {
    unique3Num().forEach((el) => {
      createCard(el);
    });
  }

  let offset = currentSlide * -slideWidth + 'px';
  slidesList.style.transform = `translateX(${offset})`;
});

previousSlideButton.addEventListener('click', () => {
  if (currentSlide == 0) currentSlide = slidesList.childNodes.length - 1;
  currentSlide = currentSlide - 3;
  let offset = currentSlide * -slideWidth + 'px';
  slidesList.style.transform = `translateX(${offset})`;
});

function createCard(number) {
  let slideCard = document.createElement('div');
  slidesList.appendChild(slideCard);
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

// pop-up
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
    let petName = el.childNodes[1].lastChild.textContent;
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
