import { startBtnHandler } from "./screenOne.js";
import { dressListHandler } from "./screenTwo.js";
import { okBtnHandler } from "./screenThree.js";

const startBtn = document.querySelector("#startBtn");
const dressList = document.querySelector("#dressList");
const okBtn = document.querySelector("#okBtn");



//Screen One
startBtn.addEventListener("click", startBtnHandler);

//Screen Two
dressList.addEventListener("click", dressListHandler);

//Screnn Three
okBtn.addEventListener("click", okBtnHandler);

