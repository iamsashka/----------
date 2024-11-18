const productImages = document.querySelectorAll('.product');
const fullscreenContainer = document.querySelector('.fullscreen-container');
const fullscreenImage = document.querySelector('.fullscreen-image');
const closeFullscreenButton = document.querySelector('.close-fullscreen');

productImages.forEach(image => {
  image.addEventListener('click', () => {
    const fullscreenSrc = image.getAttribute('data-fullscreen-src');
    fullscreenImage.src = fullscreenSrc;
    fullscreenContainer.style.display = 'block';
  });
});

closeFullscreenButton.addEventListener('click', () => {
  fullscreenContainer.style.display = 'none';
});