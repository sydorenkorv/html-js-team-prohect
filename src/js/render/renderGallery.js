
// import './alphabet'
const apiURL = 'https://thecocktaildb.com/api/json/v1/1'
import { drinksData } from "../api";






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
}
else if (w > 1199) {
    pageSize = 9;
}
else{ pageSize = 3}





const paginationNumber = document.getElementById("pagination-numbers");

function clearAll() {
  while (paginationNumber.firstChild) {
    paginationNumber.firstChild.remove();
  }
}

 export async function renderGallery() {

	let cardDrink = "";
	drinksData.filter((row, index) => {
		let start = (currentPage - 1) * pageSize
        let end = currentPage * pageSize
        console.log(drinksData)
        

		if (index >= start && index < end) return true;
	}).forEach(drink => {
cardDrink += `<li class="cocktails__list-item">
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
</li>`

	})
	document.getElementById("listing-table").innerHTML = cardDrink
}


function previousPage() {
	if (currentPage > 1)
        currentPage--;
    renderGallery()

}

function nextPage() {
	if ((currentPage * pageSize) < drinksData.length)
		currentPage++;
	renderGallery()
}

export async function renderButtons() {
clearAll() 
	let buttonCount = Math.ceil(drinksData.length / pageSize);
	console.log(buttonCount)

    for (let i = 1; i <= buttonCount; i++) {
	var button = document.createElement("button");
	button.classList.add("selector")
        button.innerHTML = i;
        paginationNumber.appendChild(button);
	}
const buttnNumbers  = document.querySelectorAll(".selector")

for (let i = 0; i < buttnNumbers.length; i++) {
	buttnNumbers[i].addEventListener('click', function () {
		currentPage = i + 1
		renderGallery()  
    })
}
	console.log(buttnNumbers)}

	  



document.querySelector('#prevButton').addEventListener('click', previousPage, false)

document.querySelector('#nextButton').addEventListener('click', nextPage, false)