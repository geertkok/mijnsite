document.addEventListener("DOMContentLoaded", () => {
  // Restore theme
  const saved = localStorage.getItem("zurafa_alt");
  if (saved === "1") document.documentElement.dataset.alt = "1";

  // Button
  const btn = document.getElementById("toggle-contrast");
  if (btn) {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      window.toggleTheme?.();
    });
  }

  // Date pill
  const d = new Date();
  const fmt = new Intl.DateTimeFormat("nl-NL", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const today = document.getElementById("today");
  if (today) today.textContent = fmt.format(d);

  const year = document.getElementById("year");
  if (year) year.textContent = String(d.getFullYear());
});

// Keyboard shortcut: G -> scroll to links
window.addEventListener("keydown", (e) => {
  if (e.key.toLowerCase() === "g" && !e.ctrlKey && !e.metaKey && !e.altKey) {
    document.getElementById("links")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }
});

// Contrast toggle (CSP-safe: only flips data-alt; CSS defines variables)
window.toggleTheme = function toggleTheme() {
  const root = document.documentElement;
  const isAlt = root.dataset.alt === "1";
  const next = isAlt ? "0" : "1";
  root.dataset.alt = next;
  localStorage.setItem("zurafa_alt", next);
};
