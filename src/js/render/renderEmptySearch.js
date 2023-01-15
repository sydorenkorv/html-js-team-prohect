// import '../../images/regret/regret-desktop.png';
import imagesD1 from '../../images/regret/regret-desktop.png';
import imagesD2 from '../../images/regret/regret-desktop@2x.png';
import imagesT1 from '../../images/regret/regret-tablet.png';
import imagesT2 from '../../images/regret/regret-tablet.png';
import imagesM1 from '../../images/regret/regret-mobile.png';
import imagesM2 from '../../images/regret/regret-mobile@2x.png';
export let emptyImg = document.createElement('IMG');

const listIngredientEl = document.querySelector('.favorite__list-ingredient');

export function getEmpty() {
  listIngredientEl.innerHTML = `<li><img src="${imagesD1}" srcset=" ${imagesM1}  280w, ${imagesM2}  336w,
        ${imagesT1}  560w,
        ${imagesT2}  672w,
        ${imagesD1}  501w,
        ${imagesD2} 1002w"
        sizes="(min-width: 1280px) 501px, (min-width: 768px) 336px, (min-width: 480px) 280px, 100vw"
              alt="delicious-sangria-cocktail-held-in-hand-mobile"
>
</li>`;
}

export function getEmptycocteils() {
  const hrenList = document.getElementById('listing-table');
  hrenList.innerHTML = `<li><img src="${imagesD1}" srcset=" ${imagesM1}  280w, ${imagesM2}  336w,
        ${imagesT1}  560w,
        ${imagesT2}  672w,
        ${imagesD1}  501w,
        ${imagesD2} 1002w"
        sizes="(min-width: 1280px) 501px, (min-width: 768px) 336px, (min-width: 480px) 280px, 100vw"
              alt="delicious-sangria-cocktail-held-in-hand-mobile"
>
</li>`;
}
// const emptyIngred = `<li class="empty">
// <p class="favorite__text">This ingredient has not been added to Favorite Ingredients yet.</p>
// <div class="emptyBox">

//         </div>
//       </li>`;
// emptyBox.innerHTML = emptyImg;

// //   <img
//   class=""
//   src = "../../images/regret/regret-desktop@2x.png"

//   sizes="(min-width: 1280px) 501px, (min-width: 768px) 336px, (min-width: 480px) 280px, 100vw"
//   src="./images/hero/hero-img-m1x.png"
//   alt="delicious-sangria-cocktail-held-in-hand-mobile"
// />
