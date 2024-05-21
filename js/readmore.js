'use strict';

document.addEventListener("DOMContentLoaded", function() {
  var foldReplyElements = document.querySelectorAll(".fold_reply");

  foldReplyElements.forEach(function(foldReply) {
      foldReply.addEventListener("click", function() {
          var targetClass = foldReply.getAttribute("data-target");
          var targetElement = document.querySelector(targetClass);

          // gemmer de andre reply sektioner
          document.querySelectorAll(".reply").forEach(function(reply) {
              if (reply !== targetElement) {
                  reply.classList.remove("visible");
              }
          });

          
          targetElement.classList.toggle("visible");
      });
  });
});

// Ekstar CSS til styling
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
