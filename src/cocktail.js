import './js/render/renderGallery';
import './js/render/favoriteCocktail';
import './js/modals/burger-menu';
import './js/modals/modalAboutCocktail';
import './js/modals/modalAboutIngredient';
import './js/modeToggle';
import './js/render/favoriteCocktailRender';
import './js/getCocktails/searchInFavCoc'

// import './js/api';

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

// import axios from 'axios';
// import galleryCard from './hbs/galleryCard.hbs';

// const galleryList = document.querySelector('.cocktails__list');

// hero

//alphabet

///////////////////////////////////////////////////////////

// alphabet

const searchAlphabet = document.querySelectorAll('.hero__alphabets-button');

// event on Alphabet click

// render gallery fx

// function renderGallery(val) {
//   let renderList = val.drinks.map(drink => drink)
//   // if (window.screen.width >= 768) {
//   //   renderList = renderList.slice(1, 3)
//   // }

//   const markup = galleryCard(renderList)
//   galleryList.insertAdjacentHTML('beforeend', markup);
//   console.log(renderList)
//   }

// //fetch cocktails by letter

//   async function doGetRequest(val) {

//     const URL = `https://www.thecocktaildb.com/api/json/v1`

//   let res = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${val}`);

//     let data = res.data;
//     return data

// }

// // clear gallery content

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
