import {

  getFromLocalStorage,
  INGREDIENT_KEY,
  getIngredientById,
} from '../modals/modalAboutIngredient';

const notFavoriteCocktail = document.querySelector('.favorite__text');
const ingredientCardList = document.querySelector('.favorite__list-ingredient');

addEventListener('load', async () => {
  const data = await getCocktailCards();
  if (getFromLocalStorage(INGREDIENT_KEY).length === 0) {
    notFavoriteCocktail.classList.remove('is-hidden');
  } else {
    notFavoriteCocktail.classList.add('is-hidden');
    createCardIngredient(data);
  }
});

async function getCocktailCards() {
  const cocktailIds = getFromLocalStorage(INGREDIENT_KEY);
  const cocktailCardsInfo = [];

  for (const id of cocktailIds) {
    const { drinks } = await getIngredientById(id);
    cocktailCardsInfo.push(drinks[0]);
  }

  console.log(cocktailCardsInfo);
  return cocktailCardsInfo;
}

export function createCardIngredient(data) {
  let markup = data
    .map(
      ingredient => `<li class="favorite__item">
        <div class="ingredient-card" data-id="${ingredient.idIngredient}">
          <h2 class="ingredient-card__title">${ingredient.strIngredient}</h2>
          <p class="ingredient-card__text">${ingredient.strType}</p>
          <div class="buttons-wrap">
            <button
              class="button cocktail-card__btn cocktail-card__btn--accent"
              type="button"
            >
              Learn more
            </button>
            <button
              class="button cocktail-card__btn cocktail-card__btn--transp cocktail-card__btn--centered"
              type="button"
            >
              <span class="">Add to</span>
              <svg class="cocktail-card__heart-icon" width="21" height="19">
                <use href="./images/svg/icons-sprite.svg#heart"></use>
              </svg>
            </button>
          </div>
        </div>
      </li>`
    )
    .join('');

  // ingredientCardList.insertAdjacentHTML('beforeend', markup);
  ingredientCardList.innerHTML = markup;
  // document.getElementById('listing-table').innerHTML = cocktailCardsMarkup;
}
