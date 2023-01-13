import { STORAGE_KEY } from '../render/favoriteCocktail';
import { getById } from '../api';
console.log(STORAGE_KEY);
import { renderGallery } from '../render/renderGallery';




async function searchById(e) {
  e.preventDefault();
}
let storage = localStorage;
console.log(localStorage);

const idData = storage.getItem('idData');
console.log('idData', idData);

const parsedSettings = JSON.parse(idData);
console.log(parsedSettings);
for (const idCocteil of parsedSettings) {
  console.log(Number(idCocteil));
  const id = Number(idCocteil);
  getById(id);
  renderGallery();
}

// // Перебирающий forEach
// theme.forEach(function (number) {
//   console.log(number);
// });

// storage.find(option => option.idData === '16958'); // { label: 'blue', color: '#2196F3' }

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
