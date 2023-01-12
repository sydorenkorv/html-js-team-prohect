import { STORAGE_KEY } from '../render/favoriteCocktail';
import { getById } from '../api';
console.log(STORAGE_KEY);
console.log(localStorage);

async function searchById(e) {
  e.preventDefault();
}

// export async function renderGalleryFovFav() {
//   let cocktailCardsMarkup = '';

//   // temporary variable to check pagination
//   test = [...drinksData, ...drinksData, ...drinksData];
//   console.log('data', test);

//   test
//     .filter((cocktail, index) => {
//       let start = (currentPage - 1) * cardsPerPage;
//       let end = currentPage * cardsPerPage;
//       // console.log(drinksData);

//       if (index >= start && index < end) return true;
//     })
//     .forEach(drink => {
//       const isFavorite = changeBtnContent(drink.idDrink);
//       cocktailCardsMarkup += `<li class="cocktails__list-item">
//     <div class="cocktail-card" data-id="${drink.idDrink}">
//         <div class="cocktail-card__img-wrapper">
//             <img class="cocktail-card__img" src="${
//               drink.strDrinkThumb
//             }" alt="cocktail" class="cocktails__img" />
//         </div>
//         <p class="cocktail-card__name">${drink.strDrink}</p>
//         <div class="cocktail-card__btns-block">
//             <button class="button cocktail-card__btn cocktail-card__btn--accent js-btn-more">
//                 Learn more
//             </button>
//             <button class="button cocktail-card__btn cocktail-card__btn--transp cocktail-card__btn--centered js-btn-fav">
//                 <span class="">${isFavorite ? 'Remove' : 'Add to'}</span>
//                 <svg style="${
//                   isFavorite ? 'fill: #FD5103' : 'fill: #currentColor'
//                 }" class="cocktail-card__heart-icon" width="21" height="19">
//                     <use href="${sprite}#heart"></use>
//                 </svg>
//             </button>
//         </div>
//     </div>
// </li>`;
//     });
//   document.getElementById('listing-table').innerHTML = cocktailCardsMarkup;
// }
