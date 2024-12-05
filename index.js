// Array of image URLs for the hero section
const images = [
    "B1.jpeg",
    "B2.jpeg",
    "B3.jpeg"
];

// Get the image element by its ID
const heroImage = document.getElementById("heroImage");

// Initialize the current image index
let currentIndex = 0;

// Function to change the hero image
function changeHeroImage() {
    // Update the image source to the next image in the array
    heroImage.src = images[currentIndex];

    // Increment the index and reset if it exceeds the array length
    currentIndex = (currentIndex + 1) % images.length;
}

// Change the image every 3 seconds (3000 milliseconds)
setInterval(changeHeroImage, 3000);

// Initial call to set the first image
changeHeroImage();