// Array of random movie image URLs
const movieImages = [
    '1.jpg',
    '2.jpg',
    '3.jpg',
    '4.jpg',
    '5.jpg'
];

let currentIndex = getRandomIndex(movieImages.length);
const slideshowElement = document.getElementById('slideshow');
let intervalId = setInterval(changeImage, 2000);

slideshowElement.src = movieImages[currentIndex];

function getRandomIndex(max) {
    return Math.floor(Math.random() * max);
}

function changeImage() {
    currentIndex = (currentIndex + 1) % movieImages.length;
    slideshowElement.src = movieImages[currentIndex];
}

function prevImage() {
    currentIndex = (currentIndex - 1 + movieImages.length) % movieImages.length;
    slideshowElement.src = movieImages[currentIndex];
}

function nextImage() {
    changeImage();
}

function togglePlayPause() {
    const playPauseButton = document.getElementById('playPause');
    if (intervalId) {
        clearInterval(intervalId);
        intervalId = null;
        playPauseButton.textContent = 'Play';
    } else {
        intervalId = setInterval(changeImage, 2000);
        playPauseButton.textContent = 'Pause';
    }
}

document.getElementById('prev').addEventListener('click', prevImage);
document.getElementById('next').addEventListener('click', nextImage);
document.getElementById('playPause').addEventListener('click', togglePlayPause);
