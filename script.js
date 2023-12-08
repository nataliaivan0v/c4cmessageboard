document.getElementById('inputBox').addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    sendMessage();
  }
});

function sendMessage() {
  var message = document.getElementById('inputBox').value;

  if (message.length > 128) {
    alert('Message is too long. Maximum length is 128 characters.');
    return;
  }

  if (message.trim() !== '') {
    var timestamp = new Date().toLocaleString();
    var messageBox = document.createElement('div');
    messageBox.className = 'messageBox';

    var messageText = document.createElement('div');
    messageText.className = 'messageText';
    messageText.textContent = message;

    var dateTime = document.createElement('div');
    dateTime.className = 'dateTime';
    dateTime.textContent = timestamp;

    messageBox.appendChild(messageText);
    messageBox.appendChild(dateTime);

    var messageBoard = document.getElementById('messageBoard');
    messageBoard.insertBefore(messageBox, messageBoard.firstChild);

    document.getElementById('inputBox').value = '';
  }
}