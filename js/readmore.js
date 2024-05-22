'use strict';

// Når DOM'en er indlæst, udføres følgende:
document.addEventListener("DOMContentLoaded", function() {
  var foldReplyElements = document.querySelectorAll(".fold_reply");

 // For hvert "fold_reply" element, tilføj en klikhændelse
  foldReplyElements.forEach(function(foldReply) {
      foldReply.addEventListener("click", function() {

            // Hent værdien af "data-target" attributten for det klikkede element
            var targetClass = foldReply.getAttribute("data-target");

            // Find det element, der har klassen, der er angivet i "data-target"
            var targetElement = document.querySelector(targetClass);

            // Gem alle andre svarsektioner ved at fjerne klassen "visible"
            document.querySelectorAll(".reply").forEach(function(reply) {
              if (reply !== targetElement) {
                  reply.classList.remove("visible");
              }
          });

          targetElement.classList.toggle("visible");
      });
  });
});

// Ekstra CSS til styling
const style = document.createElement('style');
style.innerHTML = `
    .reply {
        display: none;
    }
    .reply.visible {
        display: block;
    }
`;
document.head.appendChild(style);
