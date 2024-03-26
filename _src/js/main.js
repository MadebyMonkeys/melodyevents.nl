const menu = document.querySelector(".site-nav");
const toggle = document.getElementById("hamburgerMenu");

const toggleMenu = () => {
  menu.classList.toggle("open");
  toggle.classList.toggle("open");
};

toggle.addEventListener("click", toggleMenu);

const accordions = document.querySelectorAll(".accordion");
let activePanel = null;

// Set the first accordion as active by default
if (accordions.length > 0) {
  const firstAccordion = accordions[0];
  firstAccordion.classList.add("active");
  activePanel = firstAccordion.nextElementSibling;
  activePanel.style.maxHeight = activePanel.scrollHeight + "px";
}

accordions.forEach(accordion => {
  accordion.addEventListener("click", function() {
    // Remove active class from all accordions except the clicked one
    accordions.forEach(acc => {
      if (acc !== this) {
        acc.classList.remove("active");
        acc.nextElementSibling.style.maxHeight = null;
      }
    });

    // Toggle active class for clicked accordion
    this.classList.toggle("active");
    const panel = this.nextElementSibling;
    
    if (activePanel && panel !== activePanel) {
      activePanel.style.maxHeight = null;
    }
    
    if (panel !== activePanel) {
      panel.style.maxHeight = panel.scrollHeight + "px";
      activePanel = panel;
    } else {
      activePanel = null;
    }
  });
});