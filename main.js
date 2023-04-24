document.querySelector('#play').onclick = play;
document.querySelector('#stop').onclick = stop;
document.querySelector('#pause').onclick = pause;
document.querySelector('#muted').onclick = muted;
document.querySelector('#volume').oninput = videoVolume;

let video;
let display;
let progress;

video = document.querySelector('#video-player')
progress = document.querySelector('#progress')
progress.onclick = videoskroll;

document.addEventListener('DOMContentLoaded', () => {
    video.volume = 0.1;
}, false);

video.ontimeupdate = progressUpdate;

function play() {
    video.play();
}

function muted() {
    if(video.muted != true) {
        video.muted = true;  
    } else {
        video.muted = false;
    }
}

function stop() {
    video.pause();
    video.currentTime = 0
}

function pause() {
    video.pause();
}

function videoVolume() {
    let v = this.value;
    console.log(v);
    video.volume = v/100;
}

function progressUpdate() {
    console.log(video.duration);
    console.log(video.currentTime)
    let d = video.duration;
    let c = video.currentTime
    progress.value = 100*c/d
}

function videoskroll() {
    let w = this.offsetWidth;
    let o = event.offsetX;
    this.value = 100*o/w;
    video.pause();
    video.currentTime = video.duration*o/w;
    video.play();
}