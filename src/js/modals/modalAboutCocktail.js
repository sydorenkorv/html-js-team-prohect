import axios from 'axios';

const cocktailList = document.querySelector('#listing-table');

const cocktailModal = document.querySelector('.js-cocktail-modal');
const cocktailName = document.querySelector('.js-cocktail-title');
const cocktailInstraction = document.querySelector('.js-cocktail-desk');
const cocktailImg = document.querySelector('.js-cocktail-img');
export const cocktailIngredientsList = document.querySelector(
  '.js-cocktail-ingredients'
);

const cocktailModalCloseBtn = document.querySelector('.js-cocktail-close-btn');

cocktailList.addEventListener('click', onCocktailInfoOpen);
cocktailModalCloseBtn.addEventListener('click', onCocktailInfoClose);

async function getCocktailById(id) {
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
  if (e.target.nodeName !== 'BUTTON') return;
  showElement(cocktailModal);
  const parentEl = e.target.closest('[data-id]');
  const cocktailId = parentEl.dataset.id;
  const { drinks } = await getCocktailById(cocktailId);
  cocktailName.textContent = drinks[0].strDrink;
  cocktailInstraction.textContent = drinks[0].strInstructions;
  cocktailImg.src = drinks[0].strDrinkThumb;
  createMarkup(drinks);
}

function onCocktailInfoClose() {
  hideElement(cocktailModal);
}

function createMarkup(drinks = []) {
  const markup = drinks
    .map(
      drink => `<li><a data-name="${drink.strIngredient1}">${
        drink.strMeasure1 + drink.strIngredient1
      }</a></li>
      <li><a data-name="${drink.strIngredient2}">${
        drink.strMeasure2 + drink.strIngredient2
      }</a></li>
      <li><a data-name="${drink.strIngredient3}">${
        drink.strMeasure3 + drink.strIngredient3
      }</a></li>
      <li><a data-name="${drink.strIngredient4}">${
        drink.strMeasure4 + drink.strIngredient4
      }</a></li>
      <li><a data-name="${drink.strIngredient5}">${
        drink.strMeasure5 + drink.strIngredient5
      }</a></li>
      <li><a data-name="${drink.strIngredient6}">${
        drink.strMeasure6 + drink.strIngredient6
      }</a></li>
      <li><a data-name="${drink.strIngredient7}">${
        drink.strMeasure7 + drink.strIngredient7
      }</a></li>
        `
    )
    .join('');
  cocktailIngredientsList.innerHTML = markup;
}

function showElement(elem) {
  elem.classList.add('is-active');
}

function hideElement(elem) {
  elem.classList.remove('is-active');
}
