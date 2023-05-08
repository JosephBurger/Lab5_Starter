// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
    const horntype = document.querySelector('#horn-select');
    const hornIMG = document.querySelector('img[src = "assets/images/no-image.png"]');
    const hornAudio = document.querySelector('audio[src = ""]');
    const hornVolume = document.querySelector('#volume-controls input[type="range"]');
    const soundVolume = document.querySelector('audio');
    const hornVolumeIcon = document.querySelector('#volume-controls img[src = "assets/icons/volume-level-2.svg"]');
    const playButton = document.querySelector('button');
    const jsConfetti = new JSConfetti();
    //used to change the horn IMG and sound file
    horntype.addEventListener('change', (event) => {
        let option = event.target.value;

        switch (option) {
            case 'air-horn':
                hornIMG.src = 'assets/images/air-horn.svg';
                hornAudio.src = 'assets/audio/air-horn.mp3';
                break;
            case 'car-horn':
                hornIMG.src = 'assets/images/car-horn.svg';
                hornAudio.src = 'assets/audio/car-horn.mp3';
                break;
            case 'party-horn':
                hornIMG.src = 'assets/images/party-horn.svg';
                hornAudio.src = 'assets/audio/party-horn.mp3';
                break;
            default:
                hornImg.src = 'assets/images/no-image.png';
                hornAudio.src = '';
        }
    });
    //used to adjust volume
    hornVolume.addEventListener("input", (event) => {
        const volume = event.target.value;
        soundVolume.volume = volume / 100;

        //fix this
        if (volume == '0') {
            hornVolumeIcon.src = 'assets/icons/volume-level-0.svg';
        } else if (volume <= '33') {
            hornVolumeIcon.src = 'assets/icons/volume-level-1.svg';
        } else if (volume <= '66') {
            hornVolumeIcon.src = 'assets/icons/volume-level-2.svg';
        } else if (volume <= '100') {
            hornVolumeIcon.src = 'assets/icons/volume-level-3.svg';
        } else {
            hornVolumeIcon.src = 'assets/icons/volume-level-3.svg';
        }
    });
    playButton.addEventListener('click', () => {
        if (hornAudio.src == 'http://127.0.0.1:5500/assets/audio/party-horn.mp3') {
            jsConfetti.addConfetti({
                emojis: ['🦄'],
                emojiSize: 50,
                confettiNumber: 200,
            });
            soundVolume.play();
        } else {
            soundVolume.play();
        }
    });
}