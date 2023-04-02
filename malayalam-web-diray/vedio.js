// File NO: 19
let playButton = document.getElementById('play-btn');
let video = document.querySelector('.video');
let isPlaying = false;
let progressBar = document.querySelector('.progress-bar');
let progressRange = document.querySelector('.progress-range');

// Play or pause video
let playOrPuseVideo = (event) => {
    if (!isPlaying) {
        video.play();
        isPlaying = true;
        playButton.classList.replace('fa-play', 'fa-pause');
    } else {
        video.pause()
        isPlaying = false;
        playButton.classList.replace('fa-pause', 'fa-play');
    }
}

// Update progress bar
let updateProgressBar = (event) => {
    let videoCurrentTime = event.target.currentTime;
    let videoDuration = event.target.duration;
    let timeCalculations = (videoCurrentTime / videoDuration) * 100;
    progressBar.style.cssText = `width: ${timeCalculations}%`;
}

// Update Seek Bar
function updateSeekbar(event) {
    let currentPoint = event.offsetX;
    let progressBarWidth = progressRange.getBoundingClientRect().width;
    let currentRange = (currentPoint / progressBarWidth) * video.duration;
    video.currentTime = currentRange;
}



// Play button Action
playButton.addEventListener('click', playOrPuseVideo);
video.addEventListener('click', playOrPuseVideo);

document.addEventListener('keydown', function (event) {
    if (event.which === 32 || event.key === " ") {
        playOrPuseVideo();
    }
});

video.addEventListener('timeupdate', updateProgressBar);
progressRange.addEventListener('click', updateSeekbar);