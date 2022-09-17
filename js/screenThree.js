import { musicPlay } from "./musicPlay.js";
import { dressId } from "./screenTwo.js";

const screenTwo = document.querySelector("#screen-two");
const dressList = document.querySelector("#dressList");
const screenThree = document.querySelector("#screen-three");
const secondBg = document.querySelector("#secondBg");
const fail = document.querySelector("#fail");
const tryAgain = document.querySelector("#tryAgain");

export function okBtnHandler() { 
    setTimeout(() => {
        fail.style.display = "block";
    }, 500);

    setTimeout(() => {
        tryAgain.style.display = "block";
    }, 1000);

    screenTwo.style.display = "none";

    if (dressId !== null) {
        secondBg.style.backgroundImage = `url(../../1080x1920/bg2-${dressId}.jpg)`;
    } else { 
        secondBg.style.backgroundImage = `url(../../1080x1920/bg2-1.jpg)`;
    };

    musicPlay(3)

    screenThree.style.display = "block";
}