
// // hero

// //alphabet
// const selectMobileEl = document.querySelector('#letter');
// const selectWidescreenEl = document.querySelector('#letter-widescreen');

// const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';

// for (let letter of alphabet) {
//   //mobile
//   let optionMobileEl = document.createElement('option');
//   optionMobileEl.value = letter.toLowerCase();
//   optionMobileEl.textContent = letter;
//   selectMobileEl.appendChild(optionMobileEl);
//   optionMobileEl.classList.add('hero__option');
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

import axios from 'axios';
import galleryCard from './hbs/galleryCard.hbs';

const galleryList = document.querySelector('.cocktails__list');


// hero

//alphabet
const selectMobileEl = document.querySelector('.hero__select-list');
const selectValue = document.querySelector('.hero__select-choose');
const selectOptions = document.querySelector('.js-select-options');
const selectWidescreenEl = document.querySelector('#letter-widescreen');

const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';

const optionsMobileElements = [];
const optionsWidescreenElements = [];

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

//   optionWidescreenEl.appendChild(optionWidescreenLink);
//   optionsWidescreenElements.push(optionWidescreenEl);
// }
// selectMobileEl.append(...optionsMobileElements);
// selectWidescreenEl.append(...optionsWidescreenElements);

// selectValue.addEventListener('click', onToggleSelectOptions);

// function onToggleSelectOptions() {
//   selectOptions.classList.toggle('is-hidden');
// }

// selectMobileEl.addEventListener('click', onOptionClick);

// function onOptionClick(e) {
//   selectValue.firstElementChild.textContent = e.target.textContent;
// }

// // function createMarkup() {
// //   const markup = alphabet
// //     .split('')
// //     .map(letter => {
// //       return `<li class="hero__select-option" value="${letter.toLowerCase()}">
// //     ${letter}
// //   </li>`;
// //     })
// //     .join('');
// //   selectMobileEl.insertAdjacentHTML('beforeend', markup);
// // }
// // createMarkup();

  selectWidescreenEl.appendChild(optionWidescreenEl);
  optionWidescreenEl.appendChild(optionWidescreenLink)
  optionWidescreenEl.classList.add("hero__alphabets-item")
  optionWidescreenLink.classList.add("hero__alphabets-button", "button")
}
///////////////////////////////////////////////////////////

// alphabet

const searchAlphabet = document.querySelectorAll(".hero__alphabets-button")




// event on Alphabet click
for (var i = 0; i < searchAlphabet.length; i++) {
  
  searchAlphabet[i].addEventListener('click', function () {
      clearAll()
    selectedButton = this.value
    doGetRequest(selectedButton).then(selectedButton => renderGallery(selectedButton))

  });

  }

// render gallery fx

function renderGallery(val) {
  let renderList = val.drinks.map(drink => drink)
  // if (window.screen.width >= 768) {
  //   renderList = renderList.slice(1, 3)
  // }
  
  const markup = galleryCard(renderList)
  galleryList.insertAdjacentHTML('beforeend', markup);
  console.log(renderList)
  }

 

//fetch cocktails by letter

  async function doGetRequest(val) {

    const URL = `https://www.thecocktaildb.com/api/json/v1`


  let res = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${val}`);

    let data = res.data;
    return data


}

// clear gallery content

function clearAll() {
  while (galleryList.firstChild) {
    galleryList.firstChild.remove();
  }
}

// function renderGallery(name) {
//   const renderList = name.hits.map(hit => hit);


//   const markup = galleryCard(renderList);
//   cardList.insertAdjacentHTML('beforeend', markup);
//   lightbox.refresh();
// }