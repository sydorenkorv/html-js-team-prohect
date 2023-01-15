import { renderButtons } from '../render/renderGallery';
import { getByName } from '../api';
import { renderGallery } from '../render/renderGallery';
import { alertNoEmptySearch, alertNoImagesFound } from '../../notifyAlert';
import { getEmptycocteils } from '../render/renderEmptySearch';
const searchForm = document.querySelector('.header__form');
const input = document.querySelector('.header__search');
const submitButton = document.querySelector('.searchButton');
const hren = document.querySelector('.cocktails__title');
const hrenList = document.getElementById('listing-table');
const paginationList = document.querySelector('.tui-pagination')

submitButton.addEventListener('click', async function (e) {
  e.preventDefault();
  const name = input.value.trim();
  const dataCocktail = await getByName(name);
  console.log(dataCocktail);
  if (name === '') {
    // hren.textContent = `Sorry, we didn't find any cocktail for you`;
    // getEmptycocteils();
    alertNoEmptySearch();
    return;
  } else if (dataCocktail === null) {
    hren.textContent = `Sorry, we didn't find any cocktail for you`;
    clearAll();
    clearButtons();
    getEmptycocteils();

    alertNoImagesFound();
  } else {
    hren.textContent = `Cocktails`;
    await renderGallery(dataCocktail);
    await renderButtons(dataCocktail);
  }

  searchForm.reset();
  // console.log(input.value);
});


function clearAll() {
  while (hrenList.firstChild) {
    hrenList.firstChild.remove();
  }
}


function clearButtons() {
  while (paginationList.firstChild) {
    paginationList.firstChild.remove();
  }
}