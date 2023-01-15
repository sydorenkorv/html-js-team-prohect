import { renderButtons } from '../render/renderGallery';
import { getByName } from '../api';
import { renderGallery } from '../render/renderGallery';
import { alertNoEmptySearch, alertNoImagesFound } from '../../notifyAlert';
import { getEmptycocteils } from '../render/renderEmptySearch';
const searchForm = document.querySelector('.header__form');
const input = document.querySelector('.header__search');
const submitButton = document.querySelector('.searchButton');
const hren = document.querySelector('.cocktails__title');

submitButton.addEventListener('click', async function (e) {
  e.preventDefault();
  const name = input.value.trim();
  const dataCocktail = await getByName(name);
  console.log(dataCocktail);
  if (name === '') {
    hren.textContent = `Coctails`;
    getEmptycocteils();
    alertNoEmptySearch();
    return;
  } else if (dataCocktail === null) {
    hren.textContent = `Coctails`;
    getEmptycocteils;
    alertNoImagesFound();
  } else {
    hren.textContent = `Coctails`;
    await renderGallery(dataCocktail);
    await renderButtons(dataCocktail);
  }

  searchForm.reset();
  // console.log(input.value);
});
