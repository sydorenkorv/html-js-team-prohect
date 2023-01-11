let darkToggle = document.querySelector('#switch');


if (sessionStorage.getItem("mode") == "dark") {
  darkmode();
} else {
  nodark();
}
 
darkToggle.addEventListener("change", function() {
  if (darkToggle.checked) {
    darkmode();
  } else {
    nodark();
  }
});
 
function darkmode() {
  document.body.classList.toggle('dark');
  darkToggle.checked = true;
  sessionStorage.setItem("mode", "dark");
}
 

function nodark() {
  document.body.classList.remove("dark");
  darkToggle.checked = false;
  sessionStorage.setItem("mode", "light")
}