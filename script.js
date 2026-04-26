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
