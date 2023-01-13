import axios from 'axios';
// import { cocktailIngredientsList } from './modalAboutCocktail';

function toggleModalVisible(elem) {
  elem.classList.toggle('is-hidden');
}

export const ingredientModal = document.querySelector('.js-ingredient-modal');
const ingredientModalCloseBtn = document.querySelector(
  '.js-ingredient-close-btn'
);
const cocktailIngredientsList = document.querySelector(
  '.js-cocktail-ingredients'
);

const ingredientName = document.querySelector('.js-ingredient-title');
const ingredientType = document.querySelector('.js-ingredient-type');
const ingredientDesc = document.querySelector('.js-ingredient-desk');
const ingredientInfo = document.querySelector('.js-ingredient-info');
const ingredientAddBtn = document.querySelector('.js-ingredient-add-btn');
const ingredientCardList = document.querySelector('.favorite__list-ingredient');

const INGREDIENT_KEY = 'ingredientsId';

cocktailIngredientsList.addEventListener('click', onIngredientlInfoOpen);
ingredientModalCloseBtn.addEventListener('click', onIngredientlInfoClose);
ingredientAddBtn.addEventListener('click', onIngredientAddToFavorite);

export async function getIngredientByName(name) {
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
  toggleModalVisible(ingredientModal.parentNode);
  const targetIngredient = e.target.dataset.name.toLowerCase();
  const { ingredients } = await getIngredientByName(targetIngredient);
  createMarkup(ingredients);
}

export async function onIngredientlInfoOpenInFavorite(e) {
  const cardElement = e.target.closest('[data-id]');

  if (!cardElement) return;
  toggleModalVisible(ingredientModal.parentNode);
  const targetIngredientId = cardElement.dataset.id;
  const { ingredients } = await getIngredientById(targetIngredientId);
  // console.log(ingredients);
  createMarkup(ingredients);
}

function onIngredientlInfoClose() {
  toggleModalVisible(ingredientModal.parentNode);
}

function createMarkup(ingredients = []) {
  ingredientModal.setAttribute('data-id', ingredients[0].idIngredient);
  ingredientName.textContent = ingredients[0].strIngredient;
  ingredientType.textContent = ingredients[0].strType;
  ingredientDesc.textContent = ingredients[0].strDescription;

  // console.log(changeBtnContent(ingredientId));
  ingredientAddBtn.textContent = changeBtnContent(ingredients[0].idIngredient)
    ? 'Remove from favorite'
    : 'Add to favorite';

  const markup = `<li>Type: ${ingredients[0].strType}</li>`;
  ingredientInfo.innerHTML = markup;
}

ingredientModal.parentNode.addEventListener('click', closeModalByClick);

function closeModalByClick(e) {
  if (e.currentTarget === e.target) {
    toggleModalVisible(ingredientModal.parentNode);
  }
}

document.addEventListener('keydown', closeModalByButton);

function closeModalByButton(e) {
  if (
    e.code === 'Escape' &&
    !ingredientModal.parentNode.classList.contains('is-hidden')
  ) {
    toggleModalVisible(ingredientModal.parentNode);
  }
}

let ingredientId = '';

function onIngredientAddToFavorite(e) {
  const parentEl = e.target.closest('[data-id]');
  ingredientId = parentEl.dataset.id;
  changeLocalStorage(ingredientId);
  // console.log(changeBtnContent(ingredientId));

  ingredientAddBtn.textContent = changeBtnContent(ingredientId)
    ? 'Remove from favorite'
    : 'Add to favorite';
}

export function onIngredientRemoveFromFavoriteCard(e) {
  const parentEl = e.target.closest('[data-id]');
  if (!parentEl) return;
  ingredientId = parentEl.dataset.id;
  changeLocalStorage(ingredientId);
  // console.log(changeBtnContent(ingredientId));
}

function changeBtnContent(cardId) {
  return getFromLocalStorage(INGREDIENT_KEY).includes(cardId);
}

function changeLocalStorage(Id) {
  let cardsId = [];

  if (!getFromLocalStorage(INGREDIENT_KEY)) {
    cardsId.push(ingredientId);
    addToLocalStorage(INGREDIENT_KEY, cardsId);
  } else {
    cardsId = getFromLocalStorage(INGREDIENT_KEY);
    const index = cardsId.indexOf(ingredientId);
    if (index !== -1) {
      cardsId.splice(index, 1);
      addToLocalStorage(INGREDIENT_KEY, cardsId);
    } else {
      cardsId.push(ingredientId);
      // console.log(cardsId);

      addToLocalStorage(INGREDIENT_KEY, cardsId);
    }
  }
}

async function getIngredientById(id) {
  try {
    const response = await axios.get(
      `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?iid=${id}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

function addToLocalStorage(key, value) {
  try {
    const serializedState = JSON.stringify(value);
    localStorage.setItem(key, serializedState);
  } catch (error) {
    console.error('Set state error: ', error.message);
  }
}

export function getFromLocalStorage(key) {
  try {
    const serializedState = localStorage.getItem(key);

    return serializedState === null ? [] : JSON.parse(serializedState);
  } catch (error) {
    console.error('Get state error: ', error.message);
  }
}

// async function createCardIngredient(id) {
//   const { ingredients } = await getIngredientById(id);
//   const markup = `<li class="favorite__item">
//         <div class="ingredient-card" data-id="${ingredients[0].idIngredient}">
//           <h2 class="ingredient-card__title">${ingredients[0].strIngredient}</h2>
//           <p class="ingredient-card__text">${ingredients[0].strType}</p>
//           <div class="buttons-wrap">
//             <button
//               class="button cocktail-card__btn cocktail-card__btn--accent"
//               type="button"
//             >
//               Learn more
//             </button>
//             <button
//               class="button cocktail-card__btn cocktail-card__btn--transp cocktail-card__btn--centered"
//               type="button"
//             >
//               <span class="">Add to</span>
//               <svg class="cocktail-card__heart-icon" width="21" height="19">
//                 <use href="./images/svg/icons-sprite.svg#heart"></use>
//               </svg>
//             </button>
//           </div>
//         </div>
//       </li>`;

//   ingredientCardList.insertAdjacentHTML('beforeend', markup);
// }
