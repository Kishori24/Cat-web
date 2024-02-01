const toggleButton = document.getElementById('toggleButton');
const catContainer = document.getElementById('catContainer');
const catImage = document.getElementById('catImage');
const catSound = document.getElementById('catSound');

let isCatDisplayed = false;

toggleButton.addEventListener('click', () => {
    if (isCatDisplayed) {
        catContainer.style.display = 'none';
        catSound.pause();
        catSound.currentTime = 0;
    } else {
        catContainer.style.display = 'block';
        catSound.play();
    }
    isCatDisplayed = !isCatDisplayed;
});