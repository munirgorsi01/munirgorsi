
const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

// Mobile navigation
if (menuButton && nav) {
  menuButton.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");

    menuButton.setAttribute("aria-expanded", String(isOpen));
    menuButton.setAttribute(
      "aria-label",
      isOpen ? "Close navigation" : "Open navigation"
    );
  });

  nav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");

      menuButton.setAttribute("aria-expanded", "false");
      menuButton.setAttribute("aria-label", "Open navigation");
    });
  });
}

// Automatic copyright year
const yearElement = document.getElementById("year");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}
// Clickable card highlight effect

const cards = document.querySelectorAll(
  ".skill-card, .project-card, .education-card"
);

cards.forEach(card => {

  card.addEventListener("click", () => {

    // Remove highlight from all cards
    cards.forEach(item => {
      item.classList.remove("card-selected");
    });

    // Highlight clicked card
    card.classList.add("card-selected");

  });

});
// Floating cards click highlight effect

const floatingCards = document.querySelectorAll(".float-card");

floatingCards.forEach(card => {

    card.addEventListener("click", () => {

        // Remove previous selection
        floatingCards.forEach(item => {
            item.classList.remove("float-selected");
        });

        // Highlight clicked card
        card.classList.add("float-selected");

    });

});