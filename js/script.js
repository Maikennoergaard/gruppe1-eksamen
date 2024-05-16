'use strict';

// Burgermenu
function showSidebar() {
  const sidebar = document.querySelector('.sidebar');
  sidebar.style.display = 'flex';
}

function hideSidebar() {
  const sidebar = document.querySelector('.sidebar');
  sidebar.style.display = 'none';
}

// Popud menu
// Select the required elements
const menuButton = document.querySelector('.open-btn');
const popup = document.querySelector('.popup');
const mainPopup = document.querySelector('.main-popup');
const popupOverlay = document.querySelector('.popup-overlay');
const closeBtn = document.querySelector('.close-btn');

// Function to show the popup
function showPopup() {
  popup.style.display = 'flex'; // Ensure the popup is displayed
  mainPopup.classList.add('slide-in'); // Add slide-in animation class
  mainPopup.classList.remove('slide-out'); // Ensure slide-out class is removed
  menuButton.style.display = 'none'; // Hide the menu button
}

// Function to hide the popup
function hidePopup() {
  mainPopup.classList.add('slide-out'); // Add slide-out animation class
  mainPopup.classList.remove('slide-in'); // Ensure slide-in class is removed

  // Set a timeout to match the animation duration
  setTimeout(() => {
    popup.style.display = 'none'; // Hide the popup
    menuButton.style.display = 'block'; // Show the menu button
  }, 500); // Match the duration of the slide-out animation
}

// Add event listener to the menu button to show the popup
menuButton.addEventListener('click', showPopup);

// Add event listener to the popup overlay to hide the popup
popupOverlay.addEventListener('click', (e) => {
  if (e.target === popupOverlay) {
    hidePopup();
  }
});

document.querySelector('.popup-overlay').addEventListener('click', (e) => {
  if (e.target === document.querySelector('.popup-overlay')) {
    mainPopup.style.animation = 'slide-out .5s ease';
    popup.style.display = 'none';
    menuButton.style.display = 'block'; // Vis menukortknappen igen
  }
});

// Add event listener to the close button to hide the popup
closeButton.addEventListener('click', hidePopup);


  