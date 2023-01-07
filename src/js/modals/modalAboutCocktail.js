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
  // showElement(cocktailModal);
  toggleModalVisible(cocktailModal.parentNode);
  const parentEl = e.target.closest('[data-id]');
  const cocktailId = parentEl.dataset.id;
  const { drinks } = await getCocktailById(cocktailId);
  cocktailName.textContent = drinks[0].strDrink;
  cocktailInstraction.textContent = drinks[0].strInstructions;
  cocktailImg.src = drinks[0].strDrinkThumb;
  createMarkup(drinks);
}

function onCocktailInfoClose() {
  // hideElement(cocktailModal);
  toggleModalVisible(cocktailModal.parentNode);
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
  // cocktailIngredientsList.insertAdjacentHTML('beforeend', markup);
  cocktailIngredientsList.innerHTML = markup;
}

// function createMarkup(drinks = []) {
//   let markup = `<p class="cocktail__title js-cocktail-title">${drinks[0].strDrink}</p>

//       <div class="cocktail__desc-wrapper">
//         <p class="cocktail__instruction">Instractions:</p>
//         <p class="cocktail__desc js-cocktail-desk">
//           ${drinks[0].strInstructions}
//         </p>
//       </div>
//       <div class="cocktail__img-wrapper">
//         <img
//           class="cocktail__img js-cocktail-img"
//           src="${drinks[0].strDrinkThumb}"
//           alt="${drinks[0].strDrink}"
//         />
//       </div>

//     `;
//   cocktailModalCloseBtn.innerHTML = markup;
//   for (let i = 1; i <= 15; i += 1) {
//     let ingredient = 'strIngredient' + i;
//     let measure = 'strMeasure' + i;

//     if (drinks[0][measure] && drinks[0][ingredient]) {
//       const markupList = `<li><a data-name="${drinks[0][ingredient]}">${drinks[0][measure]} ${drinks[0][ingredient]}</a></li>`;
//       cocktailIngredientsList.innerHTML = markupList;
//     }
//   }
// }

// function showElement(elem) {
//   elem.classList.add('is-active');
// }

// function hideElement(elem) {
//   elem.classList.remove('is-active');
// }

function toggleModalVisible(elem) {
  elem.classList.toggle('is-hidden');
}
