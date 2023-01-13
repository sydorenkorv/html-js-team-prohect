import Notiflix from 'notiflix';

import { renderButtons } from '../render/renderGallery';
import { getByName} from '../api';
import { renderGallery } from '../render/renderGallery';
const searchForm = document.querySelector('.header__form');
const input = document.querySelector('.header__search');
const submitButton = document.querySelector('.searchButton');

submitButton.addEventListener('click', async function (e) {
  e.preventDefault();
  const name = input.value.trim();
  const dataCocktail = await getByName(name);

  if (name === '') {
    alertNoEmptySearch();
    return;
  }

  else if (dataCocktail === null) {
    alertNoImagesFound() 


  }
  else {
      await renderGallery(dataCocktail);
  await renderButtons(dataCocktail);
  }

  searchForm.reset();
  // console.log(input.value);
});

export function alertNoEmptySearch() {
  Notiflix.Notify.failure(
    'The search string cannot be empty. Please specify your search query.'
  );
}

export function alertNoImagesFound() {
  Notiflix.Notify.failure(
    'sorry for incorrect cocktail name input. please try again.'
  );
}
