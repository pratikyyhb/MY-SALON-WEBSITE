
let slideIndex = 0;  // Starting index
const slides = document.querySelectorAll('.gallery-images img');  // Get all images in the gallery

const totalImages = slides.length;  // Total number of images in the gallery
const visibleImages = 6;  // Max number of images visible at once

function moveSlide(step) {
    // Calculate the new index
    slideIndex += step;

    // Ensure that slideIndex stays within valid bounds (0 to totalImages - visibleImages)
    if (slideIndex < 0) slideIndex = totalImages - visibleImages;
    if (slideIndex > totalImages - visibleImages) slideIndex = 0;

    // Update the transform to slide the gallery
    document.getElementById('gallerySlider').style.transform = `translateX(${-slideIndex * (100 / visibleImages)}%)`;
}// Handle success and display message to the user
function showSuccessMessage() {
    const successMessage = document.createElement("div");
    successMessage.classList.add("success-message");
    successMessage.innerHTML = "Your appointment has been booked successfully!";
    document.body.appendChild(successMessage);

    // Hide the success message after 3 seconds
    setTimeout(function() {
        successMessage.remove();
    }, 3000);
}


// Optionally, make it auto-slide every 5 seconds (you can remove this part if not needed)
setInterval(function() {
    moveSlide(1);  // Automatically move the slide forward by one
}, 5000);  // 5000ms = 5 seconds

