document.addEventListener("DOMContentLoaded", () => {
    const speedControl = document.getElementById("speedControl");
    const resetButton = document.getElementById("resetButton");
    const applyButton = document.getElementById("applyButton");
    const darkModeToggle = document.getElementById("darkMode");
    const video = document.querySelector("video");
if (video) video.requestPictureInPicture();

  
    
    applyButton.addEventListener("click", async () => {
      const speed = speedControl.value;
      const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
      chrome.scripting.executeScript({
        target: { tabId: tab.id },
        func: (speed) => {
          const video = document.querySelector("video");
          if (video) video.playbackRate = speed;
        },
        args: [speed],
      });
    });
  
   
    resetButton.addEventListener("click", async () => {
      const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
      chrome.scripting.executeScript({
        target: { tabId: tab.id },
        func: () => {
          const video = document.querySelector("video");
          if (video) video.playbackRate = 1;
        },
      });
      speedControl.value = 1;
    });
  
    
    darkModeToggle.addEventListener("change", (e) => {
      document.body.style.backgroundColor = e.target.checked ? "#333" : "#f9f9f9";
    });
  });
  