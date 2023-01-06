import { renderGallery } from "./render/renderGallery";
import { renderButtons } from "./render/renderGallery";

const apiURL = 'https://thecocktaildb.com/api/json/v1/1'

async function getRandom(){
	const response = await fetch(`https://www.thecocktaildb.com/api/json/v2/9973533/randomselection.php`);
	const cocktail = await response.json()
    drinksData = cocktail.drinks
    await renderGallery()
}
window.onload = getRandom()

export let drinksData = []
console.log(drinksData)

// render by letter mobile

const selectDdText = document.querySelector('.hero__select-list')
selectDdText.onclick = async function(event) {
    var target = event.target;
    letter = event.target.innerHTML.toLowerCase();
            await getData(letter)
       await renderGallery()
            await renderButtons()
};  


///////////render by letter WS

const searchAlphabet = document.querySelectorAll('.hero__alphabets-button')

    for (var i = 0; i < searchAlphabet.length; i++) {
  
        searchAlphabet[i].addEventListener('click', async function () {
            const letter = this.value 
        await getData(letter)
       await renderGallery()
            await renderButtons()


        });

}


    
async function getData(letter){
	const response = await fetch(`https://thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`);
	const cocktail = await response.json()
	drinksData = cocktail.drinks
}






