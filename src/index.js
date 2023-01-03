import axios from 'axios';
import galleryCard from './hbs/galleryCard.hbs';

const galleryList = document.querySelector('.cocktails__list');


// hero

//alphabet
const selectMobileEl = document.querySelector("#letter");
const selectWidescreenEl = document.querySelector("#letter-widescreen");

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";

for (let letter of alphabet) {
  //mobile
  let optionMobileEl = document.createElement("option");
  optionMobileEl.value = letter.toLowerCase();
  optionMobileEl.textContent = letter;
    selectMobileEl.appendChild(optionMobileEl);
  optionMobileEl.classList.add("hero__option")
  //other

  let optionWidescreenEl = document.createElement("li");
  let optionWidescreenLink = document.createElement("button");
  optionWidescreenLink.value = letter.toLowerCase();
  optionWidescreenLink.textContent = letter;
  selectWidescreenEl.appendChild(optionWidescreenEl);
  optionWidescreenEl.appendChild(optionWidescreenLink)
  optionWidescreenEl.classList.add("hero__alphabets-item")
  optionWidescreenLink.classList.add("hero__alphabets-button", "button")
}
///////////////////////////////////////////////////////////

// alphabet

const searchAlphabet = document.querySelectorAll(".hero__alphabets-button")
let current_page = 1;
let rows = 10;



// event on Alphabet click
for (var i = 0; i < searchAlphabet.length; i++) {
  
  searchAlphabet[i].addEventListener('click', function () {
      clearAll()
    selectedButton = this.value
    doGetRequest(selectedButton).then(selectedButton => renderGallery(selectedButton))

  });

  }

// render gallery fx

function renderGallery(val) {
  let renderList = val.drinks.map(drink => drink)
  // if (window.screen.width >= 768) { 
  //   renderList = renderList.slice(1, 3)
  // }
  
  const markup = galleryCard(renderList)
  galleryList.insertAdjacentHTML('beforeend', markup);
  console.log(renderList)  
  }
 

//fetch cocktails by letter

  async function doGetRequest(val) {

    const URL = `https://www.thecocktaildb.com/api/json/v1`


  let res = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${val}`);

    let data = res.data;
    return data


}

// clear gallery content

function clearAll() {
  while (galleryList.firstChild) {
    galleryList.firstChild.remove();
  }
}

// function renderGallery(name) {
//   const renderList = name.hits.map(hit => hit);


//   const markup = galleryCard(renderList);
//   cardList.insertAdjacentHTML('beforeend', markup);
//   lightbox.refresh();
// }