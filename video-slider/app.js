let videos = document.querySelectorAll(".video-container video");
let showVideoEl = document.querySelector(".show-video");
let mainVideoEl = document.querySelector(".show-video video");
let timesEl = document.querySelector(".show-video span");

videos.forEach((video) => {
  video.addEventListener("click", showVideo);
});

function showVideo() {
  mainVideoEl.src = this.src;
  showVideoEl.style.display = "block";
}

timesEl.addEventListener("click", hideVideo);
function hideVideo() {
  showVideoEl.style.display = "none";
}
