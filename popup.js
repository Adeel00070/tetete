document.addEventListener("DOMContentLoaded", () => {
    // click on button and send message to content.js
    document.getElementById("saveButton").addEventListener("click", () => {
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            chrome.tabs.sendMessage(tabs[0].id, {
                action: "saveAndLogin",
                username: "myusername",
                password: "mypassword"
            });
        });
    });
})


