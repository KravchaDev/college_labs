//создание параграфа
function createParagraph() {
    const para = document.createElement('p');
    para.textContent = 'Вы нажали на кнопку!';
    document.body.appendChild(para);
  }
 //выбираем все кнопки
  const buttons = document.querySelectorAll('button');
  
  for (const button of buttons) {
    button.addEventListener('click', createParagraph);
  }