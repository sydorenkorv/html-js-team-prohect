import {
  getCocktailCards,
  getFromLocalStorage,
  STORAGE_KEY,
  removeCard,
} from '../render/favoriteCocktail';
import { cocktailList, getCocktailById } from '../modals/modalAboutCocktail';
import { getById } from '../api';
console.log(STORAGE_KEY);
import { renderGallery } from '../render/renderGallery';



const searchForm = document.querySelector('.header__form');
const input = document.querySelector('.header__search');
const submitButton = document.querySelector('.searchButton');




const cocktailIds = getFromLocalStorage(STORAGE_KEY);
console.log(cocktailIds)



submitButton.addEventListener('click',  async function (e) {
    e.preventDefault();
    const xxxx = [];
              const name = input.value.trim();
for (const id of cocktailIds) {

    const {drinks} = await getCocktailById(id);
      xxxx.push(drinks[0]);
  }

    console.log(xxxx.length)
const promises = []
    for (let i = 0; i < xxxx.length; i++) {

          console.log(name)
            let drink = xxxx[i];
    if (drink.strDrink.includes(name)){ 
            id = drink.idDrink
            promises.push(getById(id));
        console.log(promises)
    
        const pppp = (await Promise.all(promises).then(r => {
            return r.map(v => v[0])
        }))
renderGallery(pppp)
}

    }
})

// function getIngredientDate(data = []) {
//   const promises = [];

//   data.forEach(id => {
//     promises.push(getData(id));
//   });
//   return Promise.all(promises).then(r => {
//     return r.map(v => v.ingredients[0]);
//   });



// async function searchById(e) {
//   e.preventDefault();
// }
// let storage = localStorage;
// console.log(localStorage);

// const idData = storage.getItem('cocktailsId');
// console.log('cocktailsId', idData);

// const parsedSettings = JSON.parse(idData);
// console.log('parsed', parsedSettings);


// for (const idCocteil of parsedSettings) {

// console.log('get', getById(idCocteil))

// }

// submitButton.addEventListener('click', async function (e) {
//   e.preventDefault();
//     const name = input.value.trim();
    

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
