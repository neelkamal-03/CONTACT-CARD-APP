const chatForm = document.getElementById("chat-form");
const chatBox = document.getElementById("chat-box");
const messageInput = document.getElementById("message-input");

chatForm.addEventListener("submit", function(e) {
  e.preventDefault();
  const message = messageInput.value.trim();
  if (message) {
    const time = new Date().toLocaleTimeString();
    const msgElement = document.createElement("div");
    msgElement.classList.add("message");
    msgElement.innerHTML = `<span>${message}</span><small>${time}</small>`;
    chatBox.appendChild(msgElement);
    chatBox.scrollTop = chatBox.scrollHeight;
    messageInput.value = "";
  }
});