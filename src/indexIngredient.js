import './js/modals/burger-menu';
import './js/modeToggle';

import { getFromLocalStorage } from './js/localstorage';
import ingredientCard from './hbs/ingredientCard.hbs';
import {
  onIngredientlInfoOpenInFavorite,
  onIngredientRemoveFromFavoriteCard,
} from './js/modals/modalAboutIngredient';

const listIngredientEl = document.querySelector('.favorite__list-ingredient');
const textElment = document.querySelector('.favorite__text');
const ingredientAddBtn = document.querySelector('.js-ingredient-add-btn');

ingredientAddBtn.addEventListener('click', init);

listIngredientEl.addEventListener('click', e => {
  const buttonEl = e.target.closest('button');
  if (!buttonEl) return;
  if (buttonEl.dataset.action === 'more') {
    onIngredientlInfoOpenInFavorite(e);
  }
  if (buttonEl.dataset.action === 'remove') {
    onIngredientRemoveFromFavoriteCard(e);
    init();
  }
});

function addMarkup(markup = '') {
  listIngredientEl.innerHTML = markup;
}

function getData(id) {
  return fetch(
    'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?iid=' + id
  ).then(r => {
    if (r.ok) {
      return r.json();
    }
    throw new Error(r.statusText);
  });
}

function getIngredientDate(data = []) {
  const promises = [];

  data.forEach(id => {
    promises.push(getData(id));
  });
  return Promise.all(promises).then(r => {
    return r.map(v => v.ingredients[0]);
  });
}

async function init() {
  try {
    const data = getFromLocalStorage('ingredientsId');
    if (!data.length) {
      textElment.textContent = "You haven't added any favorite ingridients yet";
      listIngredientEl.innerHTML = '';
      return;
    }
    textElment.textContent = '';
    const response = await getIngredientDate(data);
    const markup = ingredientCard(response);
    // console.log(response);
    addMarkup(markup);
  } catch (error) {
    console.log(error);
  }
}

init();
