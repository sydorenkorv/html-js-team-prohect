let darkToggle = document.querySelector('#switch');

darkToggle.addEventListener('change', ()=> {
  document.body.classList.toggle('dark');
})