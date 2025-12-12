// Interaction FAQ (accordéon) (placeholder)
// src/js/faq.js

document.addEventListener("DOMContentLoaded", () => {
  /* ==========================
     ACCORDÉON HÉBERGEMENTS
  ========================== */
  const hebButtons = document.querySelectorAll(".heb__btn");

  hebButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const expanded = btn.getAttribute("aria-expanded") === "true";
      const newState = !expanded;
      btn.setAttribute("aria-expanded", String(newState));

      const content = btn.nextElementSibling;
      if (!content) return;

      content.hidden = !newState;
    });
  });

  /* ==========================
     ACCORDÉON FAQ
  ========================== */
  const faqButtons = document.querySelectorAll(".faq__question");

  faqButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const expanded = btn.getAttribute("aria-expanded") === "true";
      const newState = !expanded;
      btn.setAttribute("aria-expanded", String(newState));

      const answer = btn.nextElementSibling;
      if (answer) {
        answer.hidden = !newState;
      }

      // changer + en –
      const icon = btn.querySelector(".faq__icon");
      if (icon) {
        icon.textContent = newState ? "–" : "+";
      }
    });
  });
});
