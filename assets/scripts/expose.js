// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
    // get elements
    const hornImg = document.querySelector('main > section > img');
    const selection = document.getElementById('horn-select');
    const slider = document.querySelector("[type='range']");
    const volumeImg = document.querySelector('#volume-controls img');
    const playBtn = document.querySelector('button');
    const audio = document.querySelector('audio');
    const confetti = new JSConfetti();
    // console.log(hornImg);
    // console.log(selection);
    // console.log(slider);
    // console.log(volumeImg);
    // console.log(playBtn);
    // console.log(audio);
    // console.log(confetti);

    // on horn selection change
    selection.addEventListener('change', function() {
        const selectedHorn = selection.value;
        hornImg.src = `assets/images/${selectedHorn}.svg`;
        audio.src = `assets/audio/${selectedHorn}.mp3`
        // console.log(hornImg.src);
        // console.log(audio.src);
    });
}