// Array of random movie image URLs
const movieImages = [
    '1.jpg',
    '2.jpg',
    '3.jpg',
    '4.jpg',
    '5.jpg'
];

// Function to get a random index from the array
function getRandomIndex(max) {
    return Math.floor(Math.random() * max);
}

// Initialize the slideshow with a random image
let currentIndex = getRandomIndex(movieImages.length);
const slideshowElement = document.getElementById('slideshow');
slideshowElement.src = movieImages[currentIndex];

// Function to change the image in the slideshow
function changeImage() {
    currentIndex = (currentIndex + 1) % movieImages.length;
    slideshowElement.src = movieImages[currentIndex];
}

// Set the interval to change the image every 2000ms (2 seconds)
setInterval(changeImage, 2000);
