// import './alphabet'
import Pagination from 'tui-pagination';
import { drinksData } from '../api';
import { changeBtnContent } from './favoriteCocktail';
import sprite from '../../images/svg/icons-sprite.svg';

let test;

const container = document.getElementById('tui-pagination-container');

// Init pagination

let cardsPerPage = calcCardsPerPage();

let currentPage = 1;

export async function renderGallery() {

  let cocktailCardsMarkup = '';

  // temporary variable to check pagination
  test = [...drinksData];
  console.log('data', test);

  test
    .filter((cocktail, index) => {
      let start = (currentPage - 1) * cardsPerPage;
      let end = currentPage * cardsPerPage;
      // console.log(drinksData);

      if (index >= start && index < end) return true;
    })
    .forEach(drink => {
      const isFavorite = changeBtnContent(drink.idDrink);
      cocktailCardsMarkup += `<li class="cocktails__list-item">
    <div class="cocktail-card" data-id="${drink.idDrink}">
        <div class="cocktail-card__img-wrapper">
            <img class="cocktail-card__img" src="${
              drink.strDrinkThumb
            }" alt="cocktail" class="cocktails__img" />
        </div>
        <div class="cocktail-card__box">
                <p class="cocktail-card__name">${drink.strDrink}</p>
</div>
        <div class="cocktail-card__btns-block">
            <button class="button cocktail-card__btn cocktail-card__btn--accent js-btn-more">
                Learn more
            </button>
            <button class="button cocktail-card__btn cocktail-card__btn--transp cocktail-card__btn--centered js-btn-fav">
                <span class="">${isFavorite ? 'Remove' : 'Add to'}</span>
                <svg style="${
                  isFavorite ? 'fill: #FD5103' : 'fill: inherit'
                }" class="cocktail-card__heart-icon" width="21" height="19">
                    <use href="${sprite}#heart"></use>
                </svg>
            </button>
        </div>
    </div>
</li>`;
    });
  document.getElementById('listing-table').innerHTML = cocktailCardsMarkup;
}

export async function renderButtons() {
  currentPage = 1;

  const options = {
    totalItems: test.length,
    itemsPerPage: cardsPerPage,
    visiblePages: 3,
    page: 1,
    centerAlign: false,
    firstItemClassName: 'tui-first-child',
    lastItemClassName: 'tui-last-child',
  };
  const pagination = new Pagination(container, options);

  pagination.on('afterMove', event => {
    currentPage = event.page;
    renderGallery();
  });
}

function calcCardsPerPage() {
  const width = window.innerWidth;

  if (width > 768 && width < 1199) {
    return 6;
  } else if (width > 1199) {
    return 9;
  } else {
    return 3;
  }
}
