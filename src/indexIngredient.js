import './js/modals/burger-menu';
import './js/modeToggle';

import { getFromLocalStorage } from './js/localstorage';
import ingredientCard from './hbs/ingredientCard.hbs';
import {
  onIngredientlInfoOpenInFavorite,
  onIngredientRemoveFromFavoriteCard,
} from './js/modals/modalAboutIngredient';
import { createCardIngredient } from './js/render/favoriteIngredientRender';
// import imagesD1 from './images/regret/regret-desktop.png';
// import imagesD2 from './images/regret/regret-desktop.png';
// import imagesT1 from './images/regret/regret-desktop.png';
// import imagesT2 from './images/regret/regret-desktop.png';
// import imagesM1 from './images/regret/regret-desktop.png';
// import imagesM2 from './images/regret/regret-desktop.png';
import { getEmpty } from './js/render/renderEmptySearch';

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

// seach ingred in favorite

const searchForm = document.querySelector('.header__form');
const input = document.querySelector('.header__search');
const submitButton = document.querySelector('.searchButton');
const INGREDIENT_KEY = 'ingredientsId';
const favIngredsId = getFromLocalStorage(INGREDIENT_KEY);

// console.log(favIngredsId);
// console.log(getData('440'));

submitButton.addEventListener('click', async function (e) {
  e.preventDefault();
  const xxxx = [];
  const name = input.value.toLowerCase().trim();
  for (const idIngred of favIngredsId) {
    const { ingredients } = await getData(idIngred);
    console.log(ingredients);

    xxxx.push(ingredients[0]);
    console.log(xxxx);
  }

  console.log(xxxx.length);
  const promises = [];

  for (let i = 0; i < xxxx.length; i++) {
    console.log(name);
    let drink = xxxx[i];
    console.log(drink.strIngredient.toLowerCase());

    if (drink.strIngredient.toLowerCase() !== name.toLowerCase().trim()) {
      // alertNoEmptySearch();
      textElment.textContent =
        'This ingredient has not been added to Favorite Ingredients yet.';
      listIngredientEl.innerHTML = getData();

      getEmpty();
    } else if (
      drink.strIngredient.toLowerCase() === name.toLowerCase().trim()
    ) {
      textElment.textContent = '';
      const ara = [];
      ara.push(drink);
      searchForm.reset();

      return await createCardIngredient(ara);
    }

    // `    <img
    //       class="imageEmptySearch"
    //       srcset="
    //         ${imagesM1}  280w,
    //         ${imagesM2}  336w,
    //         ${imagesT1}  560w,
    //         ${imagesT2}  672w,
    //         ${imagesD1}  501w,
    //         ${imagesD2} 1002w
    //       "
    //       sizes="(min-width: 1280px) 501px, (min-width: 768px) 336px, (min-width: 480px) 280px, 100vw"
    //       src="${imagesD1}"
    //       alt="delicious-sangria-cocktail-held-in-hand-mobile"
    //     />`;

    // console.log(drink.strIngredient.toLowerCase());
    // if (drink.strIngredient.toLowerCase().trim() === name.toLowerCase()) {
    //   console.log(drink.strIngredient.toLowerCase());
    //   const idIngred = drink.idIngredient;
    //   promises.push(await getData(idIngred));
    //   console.log(promises);

    //   const pppp = await Promise.all(promises).then(r => {
    //     return r.map(v => v.ingredients[0]);
    //   });
    //   console.log(pppp);
    //   await createCardIngredient(pppp);
    // }

    //     if (!drink.strIngredient.toLowerCase().trim().includes(name)) {
    //   alertNoEmptySearch();
    // textElment.textContent =
    //   'This ingredient has not been added to Favorite Ingredients yet.';
    // listIngredientEl.innerHTML = '';

    // let emptyImg = document.createElement('img');
    // emptyImg.src = 'https://placeimg.com/400/200/nature';
    // emptyImg.style.width = '200px';
    // listIngredientEl.appendChild(emptyImg);
    // } else
  }
  searchForm.reset();
});
