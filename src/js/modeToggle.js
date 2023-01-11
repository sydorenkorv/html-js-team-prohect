let darkToggle = document.querySelector('#switch');


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
}
 

function lightmode() {
  document.body.classList.remove("dark");
  darkToggle.checked = false;
  sessionStorage.setItem("mode", "light")
}