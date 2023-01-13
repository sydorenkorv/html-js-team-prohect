import axios from 'axios';

import { cocktailList, getCocktailById } from '../modals/modalAboutCocktail';
import { getCocktailById } from '../modals/modalAboutCocktail';
import { renderGallery, renderButtons } from './renderGallery';

export const STORAGE_KEY = 'cocktailsId';

function addToLocalStorage(key, value) {
  try {
    const serializedState = JSON.stringify(value);
    localStorage.setItem(key, serializedState);
  } catch (error) {
    console.error('Set state error: ', error.message);
  }
}

export function getFromLocalStorage(key) {
  try {
    const serializedState = localStorage.getItem(key);

    return serializedState === null ? [] : JSON.parse(serializedState);
  } catch (error) {
    console.error('Get state error: ', error.message);
  }
}

function removeFromLocalStorage(key) {
  localStorage.removeItem(key);
}

cocktailList.addEventListener('click', toggleToFavoriteCocktail);

export function toggleToFavoriteCocktail(e) {
  const carrentElement = e.target.closest('.js-btn-fav');
  if (
    !carrentElement
    // &&
    // !e.target.classList.contains('btn-text')
  )
    return;
  // console.log(e.target);

  const parentEl = e.target.closest('[data-id]');
  const cocktailId = parentEl.dataset.id;
  changeLocalStorage(cocktailId);
  let textBtn = 'Add to';
  let colorStyleBtn = '#fff';
  if (changeBtnContent(cocktailId)) {
    textBtn = 'Remove';
    colorStyleBtn = '#FD5103';
  }
  carrentElement.firstElementChild.textContent = textBtn;
  carrentElement.lastElementChild.style.fill = colorStyleBtn;
}

export function changeLocalStorage(cocktailId) {
  let cardsId = [];

  if (!getFromLocalStorage(STORAGE_KEY)) {
    cardsId.push(cocktailId);
    addToLocalStorage(STORAGE_KEY, cardsId);
  } else {
    cardsId = getFromLocalStorage(STORAGE_KEY);
    const index = cardsId.indexOf(cocktailId);
    if (index !== -1) {
      cardsId.splice(index, 1);
      addToLocalStorage(STORAGE_KEY, cardsId);
    } else {
      cardsId.push(cocktailId);
      // console.log(cardsId);
      addToLocalStorage(STORAGE_KEY, cardsId);
    }
  }
}

export function changeBtnContent(cardId) {
  return getFromLocalStorage(STORAGE_KEY).includes(cardId);
}

export async function getCocktailCards() {
  const cocktailIds = getFromLocalStorage(STORAGE_KEY);
  const cocktailCardsInfo = [];

  for (const id of cocktailIds) {
    const { drinks } = await getCocktailById(id);
    cocktailCardsInfo.push(drinks[0]);
  }

  // console.log(cocktailCardsInfo);
  return cocktailCardsInfo;
}

export function removeCard(elem) {
  elem.remove();
}
