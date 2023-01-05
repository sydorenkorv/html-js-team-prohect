
const apiURL = 'https://thecocktaildb.com/api/json/v1/1'


export async function getData(){
	const response = await fetch(`${apiURL}/search.php?f=a`);
	const cocktail = await response.json()
	drinksData = cocktail.drinks
}

let pageSize = 10;
let currentPage = 1;
let drinksData = []

const paginationNumber = document.getElementById("pagination-numbers");



export async function renderGallery() {
	await getData();
	let cardDrink = "";
	drinksData.filter((row, index) => {
		let start = (currentPage - 1) * pageSize
		let end = currentPage * pageSize

		if (index >= start && index < end) return true;
	}).forEach(drink => {
cardDrink += `<li class="cocktails__list-item">
    <div class="cocktail-card">
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
renderGallery()


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

async function renderButtons() {
	await getData('a');
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
renderButtons() 
	  



document.querySelector('#prevButton').addEventListener('click', previousPage, false)

document.querySelector('#nextButton').addEventListener('click', nextPage, false)