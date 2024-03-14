import './styles.css';

let submitForm = document.querySelector('.submit-form');
let chat = document.querySelector('.chat');
let player = document.getElementById('my-video');

player.addEventListener('play', function () {
  // показываем чат
  document.querySelector('.chat-container').style.opacity = '1';
});

window.onload = function () {
  let storedMessages = JSON.parse(localStorage.getItem('chatMessages')) || [];
  storedMessages.forEach(function (messageText) {
    let newMessage = document.createElement('p');
    newMessage.innerHTML = messageText;
    chat.appendChild(newMessage);
  });
  chat.scrollTop = chat.scrollHeight;
}


submitForm.addEventListener('click', sendMessage);

function sendMessage() {
  let messageUser = document.querySelector('.message-input').value;

  if (messageUser.trim() !== '') {
    let newMessage = document.createElement('p');
    newMessage.innerHTML = `<strong>Вы:</strong> ${messageUser}`;
    chat.appendChild(newMessage);
    saveMessageToLocalStorage(newMessage.innerHTML);
    document.querySelector('.message-input').value = '';
    chat.scrollTop = chat.scrollHeight;
  }
}

function saveMessageToLocalStorage(message) {
  let storedMessages = JSON.parse(localStorage.getItem('chatMessages')) || [];
  storedMessages.push(message);
  localStorage.setItem('chatMessages', JSON.stringify(storedMessages));
}