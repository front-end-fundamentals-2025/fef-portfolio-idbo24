//toggle button and body element
const toggle = document.getElementById('toggleDark');
const body = document.querySelector('body');

//localStorage for dark mode preference
let isDarkMode = localStorage.getItem('darkMode') === 'true';

//apply saved mode on page load
applyMode(isDarkMode);

//toggle dark mode on button click
toggle.addEventListener('click', function () {
  isDarkMode = !isDarkMode; 
  applyMode(isDarkMode); 
  localStorage.setItem('darkMode', isDarkMode);
});

//function to apply the mode
function applyMode(isDarkMode) {
  if (isDarkMode) {
    body.style.background = 'black';
    body.style.color = 'white';
    toggle.classList.remove('bi-brightness-high-fill');
    toggle.classList.add('bi-moon');
  } else {
    body.style.background = 'white';
    body.style.color = 'black';
    toggle.classList.remove('bi-moon');
    toggle.classList.add('bi-brightness-high-fill');
  }
  body.style.transition = '1s';
}