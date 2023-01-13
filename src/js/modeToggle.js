let darkToggle = document.querySelector('#switch');
let modalI = document.querySelector(`.modal-ingredient`)
let modalW = document.querySelector(`.modal`)


if (sessionStorage.getItem("mode") == "dark") {
  darkmode();
} else {
  lightmode();
}
 
darkToggle.addEventListener("change", function() {
  if (darkToggle.checked) {
    darkmode();
  } else {
    lightmode();
  }
});
 
function darkmode() {
  document.body.classList.toggle('dark');
  darkToggle.checked = true;
  sessionStorage.setItem("mode", "dark");
  if( modalI.length != 0){
  modalI.style.backgroundColor = "#202025"
  }
if( modalW.length != 0){
  modalW.style.backgroundColor = "#202025"

  }
}
 

function lightmode() {
  document.body.classList.remove("dark");
  darkToggle.checked = false;
  sessionStorage.setItem("mode", "light")
  if( modalI.length != 0){
  modalI.removeAttribute("style")
    }
if( modalW.length != 0){
  modalW.removeAttribute("style")
    }
}