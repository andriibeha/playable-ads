import { musicPlay } from "./musicPlay.js";

const outfit = document.querySelector("#outfit");
const shadow = document.querySelector("#shadow");
const cursorTwo = document.querySelector("#cursor");
const emoji = document.querySelector("#emoji");
const okBtn = document.querySelector("#okBtn");

export let dressId = null;

export function dressListHandler(e) { 
    if (e.target.nodeName !== "BUTTON") {
        return;
    };

    musicPlay(2)

    dressId = e.target.id;
    outfit.src = `../1080x1920/dress${dressId}.webp`;
    
    let currentActiveBtn = document.querySelector('.screen-two__button--active');
    
    if (currentActiveBtn) { 
        currentActiveBtn.classList.remove("screen-two__button--active")
    };

    e.target.classList.add("screen-two__button--active");

    emoji.src = `../1080x1920/emoji${dressId}.png`;
    emoji.style.display = "block";

    setTimeout(() => {
        emoji.style.display = "none";
    }, 500);

    okBtn.classList.add("screen-two__okBtn--active");
    
    shadow.style.display = "none";
    cursorTwo.style.display = "none";
};