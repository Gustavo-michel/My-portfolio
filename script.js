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
