/ Dark-mode toggle
const btn = document.getElementById('darkToggle');
btn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  btn.textContent = document.body.classList.contains('dark') ? 'Light Mode' : 'Dark Mode';
});