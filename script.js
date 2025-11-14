// Tahun di footer
document.getElementById("year").textContent = new Date().getFullYear();

// Theme toggle (dark / light) dengan localStorage
const body = document.body;
const themeToggle = document.getElementById("themeToggle");

if (window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches) {
  if (!localStorage.getItem("theme")) {
    body.classList.add("theme-light");
  }
}

const savedTheme = localStorage.getItem("theme");
if (savedTheme === "light") body.classList.add("theme-light");
if (savedTheme === "dark") body.classList.remove("theme-light");

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    body.classList.toggle("theme-light");
    localStorage.setItem("theme", body.classList.contains("theme-light") ? "light" : "dark");
  });
}

// Mobile nav
const navBurger = document.getElementById("navBurger");
const navLinks = document.getElementById("navLinks");

if (navBurger && navLinks) {
  navBurger.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });

  // close when click link
  navLinks.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => navLinks.classList.remove("show"));
  });
}

// Scroll animation (Intersection Observer)
const animatedElements = document.querySelectorAll(".animate-up, .animate-up-delayed");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

animatedElements.forEach((el) => observer.observe(el));

// Project filters
const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const filter = btn.dataset.filter;

    filterButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    projectCards.forEach((card) => {
      const type = card.dataset.type || "";
      if (filter === "all" || type.includes(filter)) {
        card.style.display = "";
      } else {
        card.style.display = "none";
      }
    });
  });
});

// Contact form -> mailto
function openMailForm(e) {
  e.preventDefault();

  const name = document.getElementById("formName").value.trim();
  const role = document.getElementById("formRole").value.trim();
  const email = document.getElementById("formEmail").value.trim();
  const need = document.getElementById("formNeed").value.trim();

  const subject = encodeURIComponent("Kolaborasi / Sistem Operasional - dari " + name);
  const body = encodeURIComponent(
    `Halo Priandana,\n\n` +
      `Saya ${name} (${role}).\n` +
      `Email saya: ${email}\n\n` +
      `Kebutuhan utama saya:\n${need}\n\n` +
      `Dikirim dari form portofolio.`
  );

  window.location.href = `mailto:emailkamu@example.com?subject=${subject}&body=${body}`;
  return false;
}

window.openMailForm = openMailForm;
