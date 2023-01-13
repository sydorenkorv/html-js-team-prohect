import {
  getCocktailCards,
  getFromLocalStorage,
  STORAGE_KEY,
  removeCard,
} from './favoriteCocktail';
import { renderGallery, renderButtons } from './renderGallery';

const notFavoriteCocktail = document.querySelector('.favorite__text');
const cocktailsListRef = document.querySelector('.js-cocktails');
export const paginationRef = document.querySelector('.tui-pagination');

cocktailsListRef.addEventListener('click', deleteCard);

addEventListener('load', async () => {
  const data = await getCocktailCards();
  if (getFromLocalStorage(STORAGE_KEY).length === 0) {
    notFavoriteCocktail.classList.remove('is-hidden');
    cocktailsListRef.remove();
    paginationRef.remove();
  } else {
    notFavoriteCocktail.classList.add('is-hidden');
    renderGallery(data);
    if (getFromLocalStorage(STORAGE_KEY).length < 10) return;
    renderButtons(data);
  }
});

function deleteCard(e) {
  if (!e.target.closest('.js-btn-fav')) return;

  const parentEl = e.target.closest('.cocktails__list-item');
  removeCard(parentEl);

  if (getFromLocalStorage(STORAGE_KEY).length === 0) {
    notFavoriteCocktail.classList.remove('is-hidden');
    removeCard(paginationRef);
  }
}
