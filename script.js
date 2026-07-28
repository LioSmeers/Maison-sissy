const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector(".site-nav");
const filterButtons = document.querySelectorAll(".filter-button");
const galleryItems = document.querySelectorAll(".gallery-grid figure");

navToggle?.addEventListener("click", () => {
  const isOpen = siteNav.classList.toggle("is-open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

siteNav?.addEventListener("click", (event) => {
  if (event.target instanceof HTMLAnchorElement) {
    siteNav.classList.remove("is-open");
    navToggle?.setAttribute("aria-expanded", "false");
  }
});

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;

    filterButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");

    galleryItems.forEach((item) => {
      item.classList.toggle(
        "is-hidden",
        filter !== "all" && item.dataset.category !== filter,
      );
    });
  });
});
