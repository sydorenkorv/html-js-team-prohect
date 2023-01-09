import Notiflix from 'notiflix';
import { renderGallery } from '../render/renderGallery';

const searchForm = document.querySelector('.header__form');
const input = document.querySelector('.header__search');
console.log(input.value);

let page = 1;
let query = '';

async function getCocteil(name) {
  const response = await fetch(
    `https://thecocktaildb.com/api/json/v1/1/search.php?s=${name}`
  );
  const cocktail = await response.json();
  drinksData = cocktail.drinks;
}

searchForm.addEventListener('submit', onSearchForm);

function onSearchForm(e) {
  e.preventDefault();

  page = 1;
  query = input.value.trim();

  //   console.log(input.value.trim());

  if (query === '') {
    alertNoEmptySearch();
    return;
  }

  getCocteil(query)
    .then(({ name }) => {
      if (name === 0) {
        alertNoImagesFound();
      } else {
        renderGallery();
      }
    })
    .catch(error => console.log(error))
    .finally(() => {
      searchForm.reset();
    });

  //   searchForm.reset();
}

function alertNoEmptySearch() {
  Notiflix.Notify.failure(
    'The search string cannot be empty. Please specify your search query.'
  );
}
