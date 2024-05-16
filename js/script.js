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
const openBtn = document.querySelector('.open-btn');
const closeBtn = document.querySelector('.close-btn');
const popup = document.querySelector('.popup');
const mainPopup = document.querySelector('.main-popup');
const menuButton = document.querySelector('.btn.open-btn');

openBtn.addEventListener('click', () => {
  popup.style.display = 'flex';
  mainPopup.style.animation = 'slide-in .5s ease';
  menuButton.style.display = 'none'; // Skjul menukortknappen
});

closeBtn.addEventListener('click', () => {
  mainPopup.style.animation = 'slide-out .5s ease';
  popup.style.display = 'none';
  menuButton.style.display = 'block'; // Vis menukortknappen igen
});

// Lyt efter klik på overlay for at skjule popup
document.querySelector('.popup-overlay').addEventListener('click', (e) => {
  if (e.target === document.querySelector('.popup-overlay')) {
    mainPopup.style.animation = 'slide-out .5s ease';
    popup.style.display = 'none';
    menuButton.style.display = 'block'; // Vis menukortknappen igen
  }
});



  