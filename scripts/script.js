// const navBtn = document.querySelector('.c-nav-btn')

// navBtn.addEventListener("click", function(){
//   navBtn.classList.toggle("is-active")
//   navBtn.classList.remove("load")
// })


// Get the kebab icon and dropdown content
var kebabIcon = document.querySelector('.kebab-icon');
var dropdownContent = document.querySelector('.dropdown-content');

// Toggle the 'show' class when the kebab icon is clicked
kebabIcon.addEventListener('click', function() {
  dropdownContent.classList.toggle('show');
});

// Close the dropdown if the user clicks outside of it
window.addEventListener('click', function(event) {
  if (!event.target.matches('.kebab-icon')) {
    if (dropdownContent.classList.contains('show')) {
      dropdownContent.classList.remove('show');
    }
  }
});
