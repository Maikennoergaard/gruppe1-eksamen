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


// Select the required elements
  const menuButton = document.querySelector('.open-btn');
  const popup = document.querySelector('.popup');
  const mainPopup = document.querySelector('.main-popup');
  const popupOverlay = document.querySelector('.popup-overlay');
  const closeButton = document.querySelector('.close-btn');

// Function to show the popup
    function showPopup() {
    popup.style.display = 'flex'; // Display the popup
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

// Add event listener to the close button to hide the popup
  closeButton.addEventListener('click', hidePopup);

//Oprettelse af entri styling
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
             entry.target.classList.remove('show');
         }
    });
  });

const hiddenElemnts = document.querySelectorAll('.hidden');
hiddenElemnts.forEach((el) => observer.observe(el));

const hidden2Elemnts = document.querySelectorAll('.hidden2');
hidden2Elemnts.forEach((el) => observer.observe(el));


// Farveskift på menukort knap
window.onscroll = function () { changeTextColor() };
var button = document.querySelector(".btn");
var stickyPoint = 500; // The scroll posi

function changeTextColor() {
   var rootStyles = getComputedStyle(document.documentElement);
   var darkColor = rootStyles.getPropertyValue('--dark').trim();
   
   if (window.pageYOffset >= stickyPoint) {
      button.style.color = darkColor;
   } else {
      button.style.color = "";
   }
}

//Nav bar og farve skift på menukort
window.onscroll = function () {
  changeTextColor();

  var mainnav = document.querySelector('.mainnav');
  var nav = document.querySelector('.nav');
  var offset = mainnav.offsetTop;

  if (window.pageYOffset > offset) {
      nav.classList.add('nav-top');
      mainnav.style.marginBottom = nav.offsetHeight + 'px';
  } else {
      nav.classList.remove('nav-top');
      mainnav.style.marginBottom = '0'; 
  }

  if (nav.classList.contains('nav-top')) {
      nav.classList.add('nav-transition');
  } else {
      nav.classList.remove('nav-transition');
  }
};

// forside video
document.addEventListener("DOMContentLoaded", function() {
  var video = document.getElementById("forsideVideo");
  video.play();
});

function toggleSidebar() {
  // Select the sidebar element
  var sidebar = document.querySelector('.sidebar');

  // Toggle the 'show' class on the sidebar to show/hide it
  sidebar.classList.toggle('show');
}

// DINGSE DINGSE DING
document.addEventListener("DOMContentLoaded", function() {
  const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1
  };

  const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('visible');
              observer.unobserve(entry.target);
          }
      });
  }, observerOptions);

  const elements = document.querySelectorAll('.firexdingse h3');
  elements.forEach((element, index) => {
      element.style.transitionDelay = `${index * 0.5}s`;
      observer.observe(element);
  });
});
