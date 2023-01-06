import axios from 'axios';
import { cocktailIngredientsList } from './modalAboutCocktail';

function showElement(elem) {
  elem.classList.add('is-active');
}

function hideElement(elem) {
  elem.classList.remove('is-active');
}

const ingredientModal = document.querySelector('.js-ingredient-modal');
const ingredientModalCloseBtn = document.querySelector(
  '.js-ingredient-close-btn'
);
const ingredientName = document.querySelector('.js-ingredient-title');
const ingredientType = document.querySelector('.js-ingredient-type');
const ingredientDesc = document.querySelector('.js-ingredient-desk');
const ingredientInfo = document.querySelector('.js-ingredient-info');

cocktailIngredientsList.addEventListener('click', onIngredientlInfoOpen);
ingredientModalCloseBtn.addEventListener('click', onIngredientlInfoClose);

async function getIngredientByName(name) {
  try {
    const response = await axios.get(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?i=${name}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

async function onIngredientlInfoOpen(e) {
  if (e.target.nodeName !== 'A') return;
  showElement(ingredientModal);
  const targetIngredient = e.target.dataset.name.toLowerCase();
  const { ingredients } = await getIngredientByName(targetIngredient);
  ingredientName.textContent = ingredients[0].strIngredient;
  ingredientType.textContent = ingredients[0].strType;
  ingredientDesc.textContent = ingredients[0].strDescription;
  createMarkup(ingredients);
}

function onIngredientlInfoClose() {
  hideElement(ingredientModal);
}

// function markup(ingredients = []) {
//   const markup = ingredients
//     .map(ingredient => `<li>Type: ${ingredient.strType}</li>`)
//     .join('');
//   ingredientInfo.innerHTML = markup;
// }

function createMarkup(ingredients = []) {
  const markup = `<li>Type: ${ingredients[0].strType}</li>`;
  ingredientInfo.innerHTML = markup;
}
