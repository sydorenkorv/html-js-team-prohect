import Notiflix from 'notiflix';

import { getByName, drinksData } from '../api';
import { renderGallery } from '../render/renderGallery';
const searchForm = document.querySelector('.header__form');
const input = document.querySelector('.header__search');
const submitButton = document.querySelector('.searchButton');

submitButton.addEventListener('click', async function (e) {
  e.preventDefault();
  const name = input.value.trim();

  if (name === '') {
    alertNoEmptySearch();
    return;
  }

    // getByName(name)
    //   .then(({ test }) => {
    //     if (data.strDrinks === 0) {
    //       alertNoImagesFound();
    //     } else {
    //       renderGallery();
    //     }
    //   })
    //   .catch(error => console.log(error))
    //   .finally(() => {
    //     searchForm.reset();
    //   });
  // else if (!name) {
  //   alertNoImagesFound();
  // }
  else {
    await getByName(name);
    if (drinksData === null) {
      alertNoImagesFound();
    }
    else{
    await renderGallery();}
  }

  searchForm.reset();
  console.log(input.value);
});

function alertNoEmptySearch() {
  Notiflix.Notify.failure(
    'The search string cannot be empty. Please specify your search query.'
  );
}

function alertNoImagesFound() {
  Notiflix.Notify.failure(
    'Sorry, there are no images matching your search query. Please try again.'
  );
}
