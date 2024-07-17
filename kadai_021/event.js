const txt = document.getElementById('text');
const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
  setTimeout(() => {
    txt.textContent = 'ボタンをクリックしました';
  },2000);
});