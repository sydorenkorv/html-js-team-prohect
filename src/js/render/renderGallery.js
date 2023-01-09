// import './alphabet'
const apiURL = 'https://thecocktaildb.com/api/json/v1/1';
import { drinksData } from '../api';

let test;

// Init pagination
let cardsPerPage = calcCardsPerPage();
let currentPage = 1;

const paginationListRef = document.querySelector('.pagination');
paginationListRef.addEventListener('click', event => {
  if (event.target.classList.contains('pagination__button')) {
    console.log(event.target.dataset.page);
    currentPage = +event.target.dataset.page;
    renderGallery();
    renderButtons();
  }
});

export async function renderGallery() {
  let cocktailCardsMarkup = '';

  // temporary variable to check pagination
  test = [...drinksData, ...drinksData, ...drinksData];
  console.log(test);

  test
    .filter((cocktail, index) => {
      let start = (currentPage - 1) * cardsPerPage;
      let end = currentPage * cardsPerPage;
      //   console.log(drinksData);

      if (index >= start && index < end) return true;
    })
    .forEach(drink => {
      cocktailCardsMarkup += `<li class="cocktails__list-item">
    <div class="cocktail-card" data-id="${drink.idDrink}">
        <div class="cocktail-card__img-wrapper">
            <img class="cocktail-card__img" src="${drink.strDrinkThumb}" alt="cocktail" class="cocktails__img" />
        </div>
        <p class="cocktail-card__name">${drink.strDrink}</p>
        <div class="cocktail-card__btns-block">
            <button class="button cocktail-card__btn cocktail-card__btn--accent">
                Learn more
            </button>
            <button class="button cocktail-card__btn cocktail-card__btn--transp cocktail-card__btn--centered">
                <span class="">Add to</span>
                <svg class="cocktail-card__heart-icon" width="21" height="19">
                    <use href="./images/svg/icons-sprite.svg#heart"></use>
                </svg>
            </button>
        </div>
    </div>
</li>`;
    });
  document.getElementById('listing-table').innerHTML = cocktailCardsMarkup;
}

export async function renderButtons() {
  clearAll();

  let paginationMarkup = '';
  let paginationElQuantity = Math.ceil(test.length / cardsPerPage);

  console.log('CurrentPage', currentPage);
  console.log('Amount of Elements:', paginationElQuantity);

  //  Add prev/next btn if number of pages > 1
  if (paginationElQuantity > 1) {
    const arrowMarkup = `<li class="page-item">
      <button class="page-link button pagination__prevNext" id="prevButton">
        <svg width="24" height="24">
            <use href="./images/svg/icons-sprite.svg#arrow"></use>
         </svg>
         prev
      </button>
    </li>
    <li class="page-item">
      <button class="page-link button pagination__prevNext" id="nextButton">
         <svg width="24" height="24">
            <use href="../../images/svg/icons-sprite.svg#arrow"></use>
         </svg>
         next
      </button>
    </li>`;
    paginationListRef.innerHTML = arrowMarkup;
    document
      .querySelector('#prevButton')
      .addEventListener('click', goToPreviousPage, false);

    document
      .querySelector('#nextButton')
      .addEventListener('click', goToNextPage, false);
  }

  //   Add pagination if number of pages < 7
  if (paginationElQuantity <= 6) {
    for (let i = 1; i <= paginationElQuantity; i++) {
      console.log(i, currentPage);
      paginationMarkup += createMarkupForPagination(i);
    }
    paginationListRef.firstChild.insertAdjacentHTML(
      'afterend',
      paginationMarkup
    );
    //   Add pagination if number of pages > 6
  } else {
    for (let i = 1; i <= 3; i++) {
      paginationMarkup += createMarkupForPagination(i);
    }

    paginationMarkup += `<li><span class="pagination__decor">...</span></li>`;

    for (let i = paginationElQuantity - 2; i <= paginationElQuantity; i++) {
      paginationMarkup += createMarkupForPagination(i);
    }

    paginationListRef.firstChild.insertAdjacentHTML(
      'afterend',
      paginationMarkup
    );
  }
}

// Create markup of pagination
function createMarkupForPagination(index) {
  return `<li><button class="selector button pagination__button ${
    index === currentPage ? 'pagination__button--active' : ''
  }" data-page="${index}">${index}</button></li>`;
}

// Calc amount of cards for showing
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

function clearAll() {
  paginationListRef.innerHTML = '';
}

function goToPreviousPage() {
  if (currentPage > 1) currentPage--;
  renderGallery();
  renderButtons();
}

function goToNextPage() {
  if (currentPage * cardsPerPage < test.length) currentPage++;
  renderGallery();
  renderButtons();
}
