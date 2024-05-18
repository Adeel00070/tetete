function insertText(selector, text) {
  const input = document.querySelector(selector);
  if (input) {
      input.focus();
      document.execCommand("insertText", false, text);
  }
}

function saveAndLogin(username, password) {
  insertText("[name='pc-login-username']", username);
  insertText("[name='pc-login-password']", password);

  setTimeout(() => {
      const loginButton = document.querySelector("[name='pc-login-btn']")
      if (loginButton) {
          loginButton.click();
      }
  }, 2000);
}

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "saveAndLogin") {
      saveAndLogin(message.username, message.password);
  }
});


        
