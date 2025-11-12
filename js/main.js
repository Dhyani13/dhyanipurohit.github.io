// Dark-mode toggle
const btn = document.getElementById('darkToggle');
btn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  btn.textContent = document.body.classList.contains('dark') ? 'Light Mode' : 'Dark Mode';
});
document.addEventListener("DOMContentLoaded", () => {
  const vibeBtn = document.querySelector("button");
  const colors = ["#ff6b6b", "#4ecdc4", "#45b7d1", "#f9ca24", "#6c5ce7"];
  let i = 0;

  vibeBtn.addEventListener("click", () => {
    document.body.style.background = colors[i];
    i = (i + 1) % colors.length;
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const vibeBtn = document.querySelector("button");
  const colors = ["#ff6b6b", "#4ecdc4", "#45b7d1", "#f9ca24", "#6c5ce7"];
  let i = 0;

  vibeBtn.addEventListener("click", () => {
    document.body.style.background = colors[i];
    i = (i + 1) % colors.length;
  });
});