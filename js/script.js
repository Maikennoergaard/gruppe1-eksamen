'use strict';

////////////////////// Burgermenu

// Viser burgermenu
function showSidebar() {
  const sidebar = document.querySelector('.sidebar');
  sidebar.style.display = 'flex';
}

// Skjuler burgermenu
function hideSidebar() {
  const sidebar = document.querySelector('.sidebar');
  sidebar.style.display = 'none';
}

//////////////////// Pil

// Klikfunktion der scroller en vh ned ved klikk på gul pil
document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('.pil').addEventListener('click', function() {
      window.scrollBy(0, window.innerHeight);
  });
});

///////////////////////// Popud Menukort

// Vi definere alle vores variabler
  const menuButton = document.querySelector('.open-btn');
  const popup = document.querySelector('.popup');
  const mainPopup = document.querySelector('.main-popup');
  const popupOverlay = document.querySelector('.popup-overlay');
  const closeButton = document.querySelector('.close-btn');

// Når menukorts knappen bliver klikket sker følgende
menuButton.addEventListener('click', showPopup);

  function showPopup() {
  popup.style.display = 'flex';
  mainPopup.classList.add('slide-in'); 
  mainPopup.classList.remove('slide-out');
  menuButton.style.display = 'none';
}

// Når krydset i menukortet klikkes lukker popup
closeButton.addEventListener('click', hidePopup);

  function hidePopup() {
  mainPopup.classList.add('slide-out');
  mainPopup.classList.remove('slide-in');

// Sætter en timer på luk af popup på 500milisekunder hvorefter popupen forsvinder og menuknappen bliver vist
  setTimeout(() => {
  popup.style.display = 'none';
  menuButton.style.display = 'block';
  }, 500); 
}


// Hvis man klikker på overlayet ville menuen også lukke
  popupOverlay.addEventListener('click', (e) => {
    if (e.target === popupOverlay) {
        hidePopup();
        }
  });

////////////// Menukort animationer

// Her laver vi en intersection observer der fortæller om "sektionen" er synlig
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

// hvis "sektionen" er synlig sker det følgende
// elementer for en class der trikker en animertion når "sektionen scrolles henover"
const hiddenElemnts = document.querySelectorAll('.hidden');
hiddenElemnts.forEach((el) => observer.observe(el));

const hidden2Elemnts = document.querySelectorAll('.hidden2');
hidden2Elemnts.forEach((el) => observer.observe(el));


///////////// Farveskift på menukort knap

// når der scolles fobi 500 skifter menukortknap farve
window.onscroll = function () { changeTextColor() };
var button = document.querySelector(".btn");
var stickyPoint = 500;

function changeTextColor() {

  // henter farven
   var rootStyles = getComputedStyle(document.documentElement);
   var darkColor = rootStyles.getPropertyValue('--dark').trim();
   
  //  Hvis der er scrollet forbi det difineret punkt skifter knap farve hvis ikke fjernes den.
   if (window.pageYOffset >= stickyPoint) {
      button.style.color = darkColor;
   } else {
      button.style.color = "";
   }
}

//////////// Nav bar og farve skift på menukort

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

//////////////////// forside video
document.addEventListener("DOMContentLoaded", function() {
  var video = document.getElementById("forsideVideo");
  video.addEventListener("loadedmetadata", function() {
    video.play();
  });
});



function toggleSidebar() {
  // Select the sidebar element
  var sidebar = document.querySelector('.sidebar');

  // Toggle the 'show' class on the sidebar to show/hide it
  sidebar.classList.toggle('show');
}


////////////// Tekst animation

//Når DOMcontent er loaded starter funktion
document.addEventListener("DOMContentLoaded", function() {
  const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1
  };

  // DINGSE DINGSE DING

  // Her laver vi en intersection observer der fortæller om "sektionen" er synlig
  const observer1 = new IntersectionObserver((entries, observer1) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('visible');
              observer1.unobserve(entry.target);
          }
      });
  }, observerOptions);

  // hvis "sektionen" er synlig sker det følgende
  // Hver h3 transition delay ganges med 0.5s så tekst dukker op en af gangen
  const elements = document.querySelectorAll('.firexdingse h3');
  elements.forEach((element, index) => {
      element.style.transitionDelay = `${index * 0.2}s`;
      observer1.observe(element);
  });

  // RING RING RING

  // Her laver vi en intersection observer der fortæller om "sektionen" er synlig
  const observer2 = new IntersectionObserver((entries, observer2) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('visible');
              observer2.unobserve(entry.target);
          }
      });
  }, observerOptions);

  // hvis "sektionen" er synlig sker det følgende
  // Hver h3 transition delay ganges med 0.5s så tekst dukker op en af gangen
  const elements1 = document.querySelectorAll('.ringx4 h3');
  elements1.forEach((element, index) => {
      element.style.transitionDelay = `${index * 0.2}s`;
      observer2.observe(element);
  });
});



