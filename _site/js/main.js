//
//
//

const menu = document.querySelector(".site-nav");
const toggle = document.getElementById("hamburgerMenu");

function toggleMenu() {
  menu.classList.toggle("open");
  toggle.classList.toggle("open");
}

toggle.addEventListener("click", toggleMenu);


//
//
//

var acc = document.querySelectorAll(".accordion");
var active = null;

// Set the first accordion as active by default
if (acc.length > 0) {
  acc[0].classList.add("active");
  active = acc[0].nextElementSibling;
  active.style.maxHeight = active.scrollHeight + "px";
}

acc.forEach((item, i) => {
  item.addEventListener("click", function () {
    // Remove active class from all accordions except the clicked one
    acc.forEach((accordion) => {
      if (accordion !== this) {
        accordion.classList.remove("active");
        accordion.nextElementSibling.style.maxHeight = null;
      }
    });

    // Toggle active class for clicked accordion
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    
    if (active && panel !== active) {
      active.style.maxHeight = null;
    }
    
    if (panel !== active) {
      panel.style.maxHeight = panel.scrollHeight + "px";
      active = panel;
    } else {
      active = null;
    }
  });
});