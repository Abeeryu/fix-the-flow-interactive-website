// const navBtn = document.querySelector('.c-nav-btn')

// navBtn.addEventListener("click", function(){
//   navBtn.classList.toggle("is-active")
//   navBtn.classList.remove("load")
// })


// De kebab icon and dropdown Content
var kebabIcon = document.querySelector('.kebab-icon');
var dropdownContent = document.querySelector('.dropdown-content');

// Ik heb toggle (show) gebruikt om de kebab icon te werken als het wordt geklikt.
kebabIcon.addEventListener('click', function() {
  dropdownContent.classList.toggle('show');
});

// Ik heb remove (show) gebruikt to close the dropdown if the gebruiker outside the menu clickt.
window.addEventListener('click', function(event) {
  if (!event.target.matches('.kebab-icon')) {
    if (dropdownContent.classList.contains('show')) {
      dropdownContent.classList.remove('show');
    }
  }
});



const dialog = document.querySelector("dialog");
 
const chat = document.getElementById("chat");
 
chat.addEventListener("click", () => {
  dialog.showModal();
});
