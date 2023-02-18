function discord() {
  alert('Discord: edward.#0001')
}

let value = document.getElementById("music").className;
var audio = document.getElementById('audio');
var MusicButon = document.getElementById('music');
var count = 0;

function Music() {
    if(count == 0){
        audio.play();
        count = 1;
        MusicButon.innerHTML = 'OFF';
    }else if(count == 1){
        count = 0;
        audio.pause();
        MusicButon.innerHTML = 'ON';
    }
}

audio.addEventListener('ended', function() {
  this.currentTime = 0;
  this.play();
}, false);

function MusicAlert() {
  alert("PRESS ON THE BUTTON");
}