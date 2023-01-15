import Notiflix from 'notiflix';

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

export function alertIsNoFav() {
  Notiflix.Notify.failure(
    'This ingredient has not yet been added to Favorite Ingredients.'
  );
}
