// import './alphabet'
const apiURL = 'https://thecocktaildb.com/api/json/v1/1';
import { drinksData } from '../api';
import { changeBtnContent } from './favoriteCocktail';
import sprite from '../../images/svg/icons-sprite.svg';

// function clearAll() {
//   while (galleryList.firstChild) {
//     galleryList.firstChild.remove();
//   }
// }

const w = window.innerWidth;
const h = window.innerHeight;

let pageSize = 3;

let currentPage = 1;

if (w > 768 && w < 1199) {
  pageSize = 6;
} else if (w > 1199) {
  pageSize = 9;
} else {
  pageSize = 3;
}

const paginationNumber = document.getElementById('pagination-numbers');

function clearAll() {
  while (paginationNumber.firstChild) {
    paginationNumber.firstChild.remove();
  }
}

export async function renderGallery() {
  let cardDrink = '';
  drinksData
    .filter((row, index) => {
      let start = (currentPage - 1) * pageSize;
      let end = currentPage * pageSize;
      // console.log(drinksData);

      if (index >= start && index < end) return true;
    })
    .forEach(drink => {
      const isFavorite = changeBtnContent(drink.idDrink);
      cardDrink += `<li class="cocktails__list-item">
    <div class="cocktail-card" data-id="${drink.idDrink}" data-name="${
        drink.strDrink
      }">
        <div class="cocktail-card__img-wrapper">
            <img class="cocktail-card__img" src="${
              drink.strDrinkThumb
            }" alt="cocktail" class="cocktails__img" />
        </div>
        <p class="cocktail-card__name">${drink.strDrink}</p>
        <div class="cocktail-card__btns-block">
            <button class="button cocktail-card__btn cocktail-card__btn--accent js-btn-more">
                Learn more
            </button>
            <button class="button cocktail-card__btn cocktail-card__btn--transp cocktail-card__btn--centered js-btn-fav">
                <span class="">${isFavorite ? 'Remove' : 'Add to'}</span>
                <svg style="${
                  isFavorite ? 'fill: #FD5103' : 'fill: #fff'
                }" class="cocktail-card__heart-icon" width="21" height="19">
                    <use href="${sprite}#heart"></use>
                </svg>
            </button>
        </div>
    </div>
</li>`;
    });
  document.getElementById('listing-table').innerHTML = cardDrink;
}

function previousPage() {
  if (currentPage > 1) currentPage--;
  renderGallery();
}

function nextPage() {
  if (currentPage * pageSize < drinksData.length) currentPage++;
  renderGallery();
}

export async function renderButtons() {
  clearAll();
  let buttonCount = Math.ceil(drinksData.length / pageSize);
  console.log(buttonCount);

  for (let i = 1; i <= buttonCount; i++) {
    var button = document.createElement('button');
    button.classList.add('selector', 'button', 'pagination__button');
    button.innerHTML = i;
    paginationNumber.appendChild(button);
  }
  const buttnNumbers = document.querySelectorAll('.selector');

  for (let i = 0; i < buttnNumbers.length; i++) {
    buttnNumbers[i].addEventListener('click', function () {
      currentPage = i + 1;
      renderGallery();
    });
  }
  console.log(buttnNumbers);
}

document
  .querySelector('#prevButton')
  .addEventListener('click', previousPage, false);

document
  .querySelector('#nextButton')
  .addEventListener('click', nextPage, false);
