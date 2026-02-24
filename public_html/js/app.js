document.addEventListener("DOMContentLoaded", () => {
  const saved = localStorage.getItem("zurafa_alt");
  if (saved === "1") document.documentElement.dataset.alt = "1";

  const btn = document.getElementById("toggle-contrast");
  if (btn) {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      toggleTheme();
    });
  }

  const d = new Date();
  const fmt = new Intl.DateTimeFormat("nl-NL", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  document.getElementById("today").textContent = fmt.format(d);
  document.getElementById("year").textContent = d.getFullYear();
});

function toggleTheme() {
  const root = document.documentElement;
  const isAlt = root.dataset.alt === "1";
  const next = isAlt ? "0" : "1";
  root.dataset.alt = next;
  localStorage.setItem("zurafa_alt", next);
}
