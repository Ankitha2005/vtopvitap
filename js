const topRightButton = document.querySelector('.top-right');
const bottomRightButton = document.querySelector('.bottom-right');
const newImageURL = 'path/to/your/new/image.jpg'; // Replace with actual image path

topRightButton.addEventListener('click', () => {
  window.open(newImageURL, '_blank'); // Opens image in new tab
});

bottomRightButton.addEventListener('click', () => {
  window.open('https://salmon-julieta-65.tiiny.site', '_blank'); // Replace with document path
});
