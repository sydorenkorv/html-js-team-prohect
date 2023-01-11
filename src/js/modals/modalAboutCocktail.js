import axios from 'axios';
import {
  changeLocalStorage,
  changeBtnContent,
} from '../render/favoriteCocktail';

export const cocktailList = document.querySelector('#listing-table');

const cocktailModal = document.querySelector('.js-cocktail-modal');
const cocktailName = document.querySelector('.js-cocktail-title');
const cocktailInstraction = document.querySelector('.js-cocktail-desk');
const cocktailImg = document.querySelector('.js-cocktail-img');
const cocktailAddBtn = document.querySelector('.js-cocktail-add-btn');
export const cocktailIngredientsList = document.querySelector(
  '.js-cocktail-ingredients'
);

const cocktailModalCloseBtn = document.querySelector('.js-cocktail-close-btn');
let cocktailId = '';

cocktailList.addEventListener('click', onCocktailInfoOpen);
cocktailModalCloseBtn.addEventListener('click', onCocktailInfoClose);

export async function getCocktailById(id) {
  try {
    const response = await axios.get(
      `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

async function onCocktailInfoOpen(e) {
  if (!e.target.classList.contains('js-btn-more')) return;

  // if (e.target.nodeName !== 'BUTTON') return;
  toggleModalVisible(cocktailModal.parentNode);
  const parentEl = e.target.closest('[data-id]');
  cocktailId = parentEl.dataset.id;
  const { drinks } = await getCocktailById(cocktailId);
  cocktailName.textContent = drinks[0].strDrink;
  cocktailInstraction.textContent = drinks[0].strInstructions;
  cocktailImg.src = drinks[0].strDrinkThumb;
  cocktailAddBtn.textContent = changeBtnContent(cocktailId)
    ? 'Remove from favorite'
    : 'Add to favorite';

  createMarkup(drinks);
  stopScroll();
}

function onCocktailInfoClose() {
  toggleModalVisible(cocktailModal.parentNode);
  startScroll();
}

function createMarkup(drinks = []) {
  let markup = '';
  for (let i = 1; i <= 15; i += 1) {
    let ingredient = 'strIngredient' + i;
    let measure = 'strMeasure' + i;

    if (drinks[0][measure] && drinks[0][ingredient]) {
      markup += `<li><a data-name="${drinks[0][ingredient]}">${drinks[0][measure]} ${drinks[0][ingredient]}</a></li>`;
    }
  }
  cocktailIngredientsList.innerHTML = markup;
}

function toggleModalVisible(elem) {
  elem.classList.toggle('is-hidden');
}

cocktailModal.parentNode.addEventListener('click', closeModalByClick);

function closeModalByClick(e) {
  if (e.currentTarget === e.target) {
    toggleModalVisible(cocktailModal.parentNode);
    startScroll();
  }
}

// import { ingredientModal } from './modalAboutIngredient';
const ingredientModal = document.querySelector('.js-ingredient-modal');
document.addEventListener('keydown', closeModalByEsc);

function closeModalByEsc(e) {
  if (
    e.code === 'Escape' &&
    !cocktailModal.parentNode.classList.contains('is-hidden') &&
    ingredientModal.parentNode.classList.contains('is-hidden')
  ) {
    toggleModalVisible(cocktailModal.parentNode);
    startScroll();
  }
}

function stopScroll() {
  document.body.style.overflow = 'hidden';
}

function startScroll() {
  document.body.style.overflow = 'visible';
}

cocktailAddBtn.addEventListener('click', addTofavorite);

function addTofavorite(e) {
  changeLocalStorage(cocktailId);
  const cardRef = document.querySelector(`[data-id="${cocktailId}"]`);
  const favBtnRef = cardRef.querySelector('.js-btn-fav');

  if (changeBtnContent(cocktailId)) {
    e.target.textContent = 'Remove from favorite';
    favBtnRef.firstElementChild.textContent = 'Remove';
    favBtnRef.lastElementChild.style.fill = '#FD5103';
  } else {
    e.target.textContent = 'Add to favorite';
    favBtnRef.firstElementChild.textContent = 'Add to';
    favBtnRef.lastElementChild.style.fill = '#fff';
  }
}
