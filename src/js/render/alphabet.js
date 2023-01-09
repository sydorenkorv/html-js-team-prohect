// import './renderGallery'
// import { getData } from '../api';
// import { renderGallery } from './renderGallery';

// import { renderGallery } from "./renderGallery";

const selectMobileEl = document.querySelector('.hero__select-list');
const selectValue = document.querySelector('.hero__select-choose');
const selectOptions = document.querySelector('.js-select-options');
const selectWidescreenEl = document.querySelector('#letter-widescreen');

const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';

const optionsMobileElements = [];
const optionsWidescreenElements = [];

// // hero

// //alphabet
// const selectMobileEl = document.querySelector('#letter');
// const selectWidescreenEl = document.querySelector('#letter-widescreen');

// const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';

// for (let letter of alphabet) {
//   //mobile
//   let optionMobileEl = document.createElement('li');
//   optionMobileEl.classList.add('hero__select-option');
//   optionMobileEl.setAttribute('value', letter.toLowerCase());
//   optionMobileEl.textContent = letter;
//   optionsMobileElements.push(optionMobileEl);
//   //other

//   let optionWidescreenEl = document.createElement('li');
//   let optionWidescreenLink = document.createElement('button');
//   optionWidescreenLink.value = letter.toLowerCase();
//   optionWidescreenLink.textContent = letter;
//   selectWidescreenEl.appendChild(optionWidescreenEl);
//   optionWidescreenEl.appendChild(optionWidescreenLink);
//   optionWidescreenEl.classList.add('hero__alphabets-item');
//   optionWidescreenLink.classList.add('hero__alphabets-button', 'button');

//   // optionWidescreenLink.setAttribute('type', 'button');
// }

for (let letter of alphabet) {
  //mobile
  let optionMobileEl = document.createElement('li');
  optionMobileEl.classList.add('hero__select-option');
  optionMobileEl.setAttribute('value', letter.toLowerCase());
  optionMobileEl.textContent = letter;
  optionsMobileElements.push(optionMobileEl);

  //other

  let optionWidescreenEl = document.createElement('li');
  let optionWidescreenLink = document.createElement('button');
  optionWidescreenEl.classList.add('hero__alphabets-item');
  optionWidescreenLink.classList.add('hero__alphabets-button', 'button');
  // optionWidescreenLink.setAttribute('type', 'button');
  optionWidescreenLink.value = letter.toLowerCase();
  optionWidescreenLink.textContent = letter;

  optionWidescreenEl.appendChild(optionWidescreenLink);
  optionsWidescreenElements.push(optionWidescreenEl);
}
selectMobileEl.append(...optionsMobileElements);
selectWidescreenEl.append(...optionsWidescreenElements);

selectValue.addEventListener('click', onToggleSelectOptions);
selectMobileEl.addEventListener('click', onOptionClick);

function onToggleSelectOptions() {
  selectOptions.classList.toggle('is-hidden');
}

function onOptionClick(e) {
  selectValue.firstElementChild.textContent = e.target.textContent;
  onToggleSelectOptions();
  activeFill();
}

// function createMarkup() {
//   const markup = alphabet
//     .split('')
//     .map(letter => {
//       return `<li class="hero__select-option" value="${letter.toLowerCase()}">
//     ${letter}
//   </li>`;
//     })
//     .join('');
//   selectMobileEl.insertAdjacentHTML('beforeend', markup);
// }
// createMarkup();

//render

// const apiURL = 'https://thecocktaildb.com/api/json/v1/1';

// export async function getData(letter){
// 	const response = await fetch(`https://thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`);
// 	const cocktail = await response.json()
// 	drinksData = cocktail.drinks
// }

// const searchAlphabet = document.querySelectorAll('.hero__alphabets-button')

//     for (var i = 0; i < searchAlphabet.length; i++) {

//         searchAlphabet[i].addEventListener('click', function () {
// const letter = this.value
// getData(letter)
// renderGallery()

//         });

//     }

function activeFill() {
  selectValue.classList.add('active-letter');
  selectValue.childNodes[3].classList.add('active-icon');
}
