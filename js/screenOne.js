import { musicPlay } from "./musicPlay.js";

const startBtn = document.querySelector("#startBtn");
const bubbleOne = document.querySelector("#bubbleOne");
const cursorOne = document.querySelector("#cursor-one");
const screenTwo = document.querySelector("#screen-two");

export function startBtnHandler(e) { 
    e.preventDefault();

    musicPlay(1)

    bubbleOne.style.display = "none";
    startBtn.style.display = "none";
    cursorOne.style.display = "none";
    screenTwo.style.display = "block";

    startBtn.removeEventListener("click", startBtnHandler)
};