// text,btnというidを持ったそれぞれのHTML要素を取得し、定数に代入する
const txt = document.getElementById('text');
const btn = document.getElementById('btn');

// btnというHTML要素がクリックされたときにイベント処理を実行する
btn.addEventListener('click', () => {
  txt.textContent = 'ボタンをクリックしました'
})