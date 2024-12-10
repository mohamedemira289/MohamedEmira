// Toggle sidebar
const menu = document.querySelector('.menu');
const toggleButton = document.querySelector('.toggle-button');

toggleButton.addEventListener('click', () => {
    menu.classList.toggle('collapsed');
});