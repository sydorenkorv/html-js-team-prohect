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