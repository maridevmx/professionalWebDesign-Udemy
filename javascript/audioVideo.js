'use strict'

// -------------------- SE OBTIENEN LOS ELEMENTOS --------------------

let video = document.getElementById('video'),
    audio = document.getElementById('audio'),
    btnPlay = document.getElementById('play'),
    btnPause = document.getElementById('pause'),
    volumen = document.getElementById('volumen');

// -------------------- EJECUCIÓN DEL VIDEO --------------------   
btnPlay.addEventListener('click', function(){
    video.play();  
})

btnPause.addEventListener('click', function(){
    video.pause();
})

// -------------------- EJECUCIÓN DEL AUDIO --------------------
btnPlay.addEventListener('click', function(){
    audio.play();
})

btnPause.addEventListener('click', function(){
    audio.pause();
})

volumen.addEventListener('change', function(){
    video.volume = volumen.value;
})