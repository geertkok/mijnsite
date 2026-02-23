document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("toggle-contrast");
  if (btn) {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      window.toggleTheme?.();
    });
  }
});

// Date pill
const d = new Date();
const fmt = new Intl.DateTimeFormat("nl-NL", { weekday:"long", year:"numeric", month:"long", day:"numeric" });
document.getElementById("today").textContent = fmt.format(d);
document.getElementById("year").textContent = String(d.getFullYear());

// Keyboard shortcut: G -> scroll to links
window.addEventListener("keydown", (e) => {
  if (e.key.toLowerCase() === "g" && !e.ctrlKey && !e.metaKey && !e.altKey) {
    document.getElementById("links")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }
});

// Contrast toggle
window.toggleTheme = function toggleTheme() {
  const root = document.documentElement;
  const isAlt = root.dataset.alt === "1";
  root.dataset.alt = isAlt ? "0" : "1";

  if (!isAlt) {
    document.documentElement.style.setProperty("--bg", "#070a0e");
    document.documentElement.style.setProperty("--panel", "rgba(255,255,255,.08)");
    document.documentElement.style.setProperty("--line", "rgba(255,255,255,.20)");
  } else {
    document.documentElement.style.setProperty("--bg", "#0b0f17");
    document.documentElement.style.setProperty("--panel", "rgba(255,255,255,.06)");
    document.documentElement.style.setProperty("--line", "rgba(255,255,255,.14)");
  }
};
