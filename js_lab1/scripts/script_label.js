const para = document.querySelector('p');

para.addEventListener('click', updateName);

function updateName() {
  const name = prompt('Введите имя');
  para.textContent = `Игрок 1: ${name}`;
}