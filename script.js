// LIGHT / DARK MODE
const themeToggle = document.getElementById("themeToggle");
const html = document.documentElement;

const savedTheme = localStorage.getItem("theme");

// Default first appearance is light mode.
// If the user already selected a theme before, use that saved theme.
if (savedTheme) {
  html.setAttribute("data-theme", savedTheme);
  updateThemeIcon(savedTheme);
} else {
  html.setAttribute("data-theme", "light");
  updateThemeIcon("light");
}

themeToggle.addEventListener("click", () => {
  const currentTheme = html.getAttribute("data-theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";

  html.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);

  updateThemeIcon(newTheme);
});

function updateThemeIcon(theme) {
  const icon = themeToggle.querySelector("i");

  if (theme === "dark") {
    icon.className = "fa-regular fa-sun";
  } else {
    icon.className = "fa-regular fa-moon";
  }
}

// MOBILE MENU
const menuToggle = document.getElementById("menuToggle");
const navbar = document.getElementById("navbar");

menuToggle.addEventListener("click", () => {
  navbar.classList.toggle("active");

  const icon = menuToggle.querySelector("i");

  if (navbar.classList.contains("active")) {
    icon.className = "fa-solid fa-xmark";
  } else {
    icon.className = "fa-solid fa-bars";
  }
});

// Close mobile menu after clicking a nav link
const navLinks = document.querySelectorAll(".navbar a");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navbar.classList.remove("active");
    menuToggle.querySelector("i").className = "fa-solid fa-bars";
  });
});

// SKILLS TAB FUNCTION
const tabs = document.querySelectorAll(".tab");
const skillContents = document.querySelectorAll(".skills-content");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((item) => item.classList.remove("active"));
    skillContents.forEach((content) => content.classList.remove("active"));

    tab.classList.add("active");

    const target = tab.getAttribute("data-tab");
    document.getElementById(target).classList.add("active");
  });
});

// PROJECT FILTER FUNCTION
const projectFilters = document.querySelectorAll(".project-filter");
const projectCards = document.querySelectorAll(".project-card");

projectFilters.forEach((filter) => {
  filter.addEventListener("click", () => {
    projectFilters.forEach((btn) => btn.classList.remove("active"));
    filter.classList.add("active");

    const category = filter.getAttribute("data-filter");

    projectCards.forEach((card) => {
      const cardCategory = card.getAttribute("data-category");

      if (category === "all" || category === cardCategory) {
        card.style.display = "flex";
      } else {
        card.style.display = "none";
      }
    });
  });
});