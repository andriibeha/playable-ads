function musicAutoPlay() { 
        audio.play(); 
};

export function musicPlay(number) { 
    const source = `./1080x1920/music${number}.mp3`;
    const audio = document.createElement("audio");

    audio.autoplay = true;
    audio.load()
    audio.addEventListener("load", musicAutoPlay , true);
    audio.src = source;
}

