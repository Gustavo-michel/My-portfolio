const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll(".fade-up").forEach((el) => io.observe(el));

const themeToggle = document.getElementById("themeToggle");
const langToggle = document.getElementById("langToggle");
const root = document.documentElement;

const applyTheme = (theme) => {
  const isLight = theme === "light";

  root.dataset.theme = theme;

  try {
    localStorage.setItem("theme", theme);
  } catch {
    // Theme still changes for the current session when storage is unavailable.
  }

  if (themeToggle) {
    themeToggle.setAttribute(
      "aria-label",
      isLight ? "Alternar para modo escuro" : "Alternar para modo claro"
    );
  }
};

applyTheme(root.dataset.theme === "light" ? "light" : "dark");

themeToggle?.addEventListener("click", () => {
  const nextTheme = root.dataset.theme === "light" ? "dark" : "light";
  applyTheme(nextTheme);
});

const applyLanguage = (language) => {
  const normalizedLanguage = language === "en" ? "en" : "pt";

  root.lang = normalizedLanguage === "en" ? "en" : "pt-BR";

  document.querySelectorAll("[data-lang]").forEach((element) => {
    const text =
      normalizedLanguage === "en"
        ? element.dataset.langEn
        : element.dataset.langPt;

    if (text) {
      element.innerHTML = text;
    }
  });

  if (langToggle) {
    langToggle.innerHTML =
      normalizedLanguage === "en"
        ? '<span class="flag-icon flag-icon--us" aria-hidden="true"></span>'
        : '<span class="flag-icon flag-icon--br" aria-hidden="true"></span>';
    langToggle.setAttribute(
      "aria-label",
      normalizedLanguage === "en"
        ? "Traduzir para portugues"
        : "Traduzir para ingles"
    );
  }

  try {
    localStorage.setItem("language", normalizedLanguage);
  } catch {
    // Language still changes for the current session when storage is unavailable.
  }
};

let savedLanguage = "pt";

try {
  savedLanguage = localStorage.getItem("language") || "pt";
} catch {
  savedLanguage = "pt";
}

applyLanguage(savedLanguage);

langToggle?.addEventListener("click", () => {
  const nextLanguage = root.lang === "en" ? "pt" : "en";
  applyLanguage(nextLanguage);
});

const timeline = document.getElementById("timeline");

const updateTimelineProgress = () => {
  if (!timeline) return;

  const rect = timeline.getBoundingClientRect();
  const viewportAnchor = window.innerHeight * 0.68;
  const progress = (viewportAnchor - rect.top) / rect.height;
  const clampedProgress = Math.min(Math.max(progress, 0), 1);

  timeline.style.setProperty("--timeline-progress", clampedProgress.toFixed(3));
};

updateTimelineProgress();
window.addEventListener("scroll", updateTimelineProgress, { passive: true });
window.addEventListener("resize", updateTimelineProgress);

// Back to top
const toTop = document.getElementById("toTop");
const header = document.querySelector("header");

const updateScrollState = () => {
  const hasScrolled = window.scrollY > 40;

  header.classList.toggle("scrolled", hasScrolled);
  toTop.style.display = window.scrollY > 300 ? "flex" : "none";
};

updateScrollState();
window.addEventListener("scroll", updateScrollState);
toTop.addEventListener("click", () =>
  window.scrollTo({ top: 0, behavior: "smooth" })
);

document.querySelectorAll('a[href^="#"]').forEach((a) => {
  a.addEventListener("click", (e) => {
    e.preventDefault();
    const id = a.getAttribute("href").slice(1);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
  });
});
