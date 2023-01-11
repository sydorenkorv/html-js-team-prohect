import axios from 'axios';

import { cocktailList } from '../modals/modalAboutCocktail';
import { getCocktailById } from '../modals/modalAboutCocktail';

function addToLocalStorage(key, value) {
  try {
    const serializedState = JSON.stringify(value);
    localStorage.setItem(key, serializedState);
  } catch (error) {
    console.error('Set state error: ', error.message);
  }
}

// function getFromLocalStorage(key) {
//   localStorage.getItem(key);
// }

function getFromLocalStorage(key) {
  // return localStorage.getItem(key);
  try {
    const serializedState = localStorage.getItem(key);
    // console.log(JSON.parse(serializedState));

    return serializedState === null ? [] : JSON.parse(serializedState);
  } catch (error) {
    console.error('Get state error: ', error.message);
  }
}

function removeFromLocalStorage(key) {
  localStorage.removeItem(key);
}

cocktailList.addEventListener('click', toggleToFavoriteCocktail);

const STORAGE_KEY = 'idData';

// addToLocalStorage(STORAGE_KEY, arr);
// addToLocalStorage(STORAGE_KEY, Json.stringify(arr));

// const arr = getFromLocalStorage(STORAGE_KEY)
//   ? getFromLocalStorage(STORAGE_KEY)
//   : [];

function toggleToFavoriteCocktail(e) {
  if (!e.target.classList.contains('js-btn-fav')) return;
  // console.log(e.target);

  const parentEl = e.target.closest('[data-id]');
  const cocktailId = parentEl.dataset.id;
  changeLocalStorage(cocktailId);
  if (changeBtnContent(cocktailId)) {
    e.target.firstElementChild.textContent = 'Remove';
    e.target.lastElementChild.style.fill = '#FD5103';
  } else {
    e.target.firstElementChild.textContent = 'Add to';
    e.target.lastElementChild.style.fill = '#fff';
  }
}

export function changeLocalStorage(cocktailId) {
  let cardsId = [];

  if (!getFromLocalStorage(STORAGE_KEY)) {
    cardsId.push(cocktailId);
    addToLocalStorage(STORAGE_KEY, cardsId);
  } else {
    cardsId = getFromLocalStorage(STORAGE_KEY);
    const index = cardsId.indexOf(cocktailId);
    if (index !== -1) {
      cardsId.splice(index, 1);
      addToLocalStorage(STORAGE_KEY, cardsId);
    } else {
      cardsId.push(cocktailId);
      console.log(cardsId);
      addToLocalStorage(STORAGE_KEY, cardsId);
    }
  }
}

export function changeBtnContent(cardId) {
  // console.log(getFromLocalStorage(STORAGE_KEY));
  return getFromLocalStorage(STORAGE_KEY).includes(cardId);
}
// console.log(arr);

//-----------------------------------------------
//------------------------------------------------
// function addToLocalStorage(key, value) {
//   localStorage.setItem(key, value);
// }

// // function getFromLocalStorage(key) {
// //   localStorage.getItem(key);
// // }

// function getFromLocalStorage(key) {
//   return localStorage.getItem(key);
// }

// function removeFromLocalStorage(key) {
//   localStorage.removeItem(key);
// }

// const arr = getFromLocalStorage('arr') ? getFromLocalStorage('arr') : [];

// function toggleToFavoriteCocktail(e) {
//   if (e.target.nodeName !== 'BUTTON') return;

//   const parentEl = e.target.closest('[data-id]');
//   const cocktailId = parentEl.dataset.id;
//   const cocktailName = parentEl.dataset.name;

//   if (!localStorage.getItem(cocktailName)) {
//     addToLocalStorage(cocktailName, cocktailId);
//     arr.push(cocktailId);
//     addToLocalStorage('arr', arr);
//     console.log(arr);

//     // e.target.textContent = 'REMOVE';
//   } else {
//     removeFromLocalStorage(cocktailName);
//     const index = arr.indexOf(cocktailId);
//     arr.splice(index, 1);
//     console.log(arr);
//   }
// }

// console.log(arr);
//---------------------------------------
//-----------------------------------
//-------------------------------

// async function markup(arr = []) {
//   arr.map(cocktailId => {
//     const { drinks } = await getCocktailById(cocktailId);
//     `<li class="cocktails__list-item">
//     <div class="cocktail-card" data-id="${drinks[0].idDrink}" data-name="${drinks[0].strDrink}">
//         <div class="cocktail-card__img-wrapper">
//             <img class="cocktail-card__img" src="${drinks[0].strDrinkThumb}" alt="cocktail" class="cocktails__img" />
//         </div>
//         <p class="cocktail-card__name">${drinks[0].strDrink}</p>
//         <div class="cocktail-card__btns-block">
//             <button class="button cocktail-card__btn cocktail-card__btn--accent">
//                 Learn more
//             </button>
//             <button class="button cocktail-card__btn cocktail-card__btn--transp cocktail-card__btn--centered">
//                 <span class="">Add to</span>
//                 <svg class="cocktail-card__heart-icon" width="21" height="19">
//                     <use href="./images/svg/icons-sprite.svg#heart"></use>
//                 </svg>
//             </button>
//         </div>
//     </div>
// </li>`
//   }).join("")
// }
