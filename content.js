(function () {
    const videos = document.querySelectorAll("video");
    if (videos.length === 0) {
      alert("No videos found on this page.");
      return;
    }
  
    videos.forEach((video) => {
      video.playbackRate = 4.0; 
    });
  
    alert("Video speed set to 4x!");
  })();
  