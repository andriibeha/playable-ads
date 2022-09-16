const startBtn = document.querySelector("#startBtn");
const bubbleOne = document.querySelector("#bubbleOne");
const screenTwo = document.querySelector("#screen-two");
const dressList = document.querySelector("#dressList");
const outfit = document.querySelector("#outfit");
const shadow = document.querySelector("#shadow");
const cursor = document.querySelector("#cursor");
const dress1 = document.querySelector("#dress1");
const dress2 = document.querySelector("#dress2");
const dress3 = document.querySelector("#dress3");
const dress4 = document.querySelector("#dress4");
const dress5 = document.querySelector("#dress5");
const emoji = document.querySelector("#emoji");
const okBtn = document.querySelector("#okBtn");
const screenThree = document.querySelector("#screen-three");
const secondBg = document.querySelector("#secondBg");



//Screen One
startBtn.addEventListener("click", startBtnHandler);

function startBtnHandler(e) { 
    e.preventDefault();

    bubbleOne.style.display = "none";
    startBtn.style.display = "none";
    screenTwo.style.display = "block";

    startBtn.removeEventListener("click", startBtnHandler)
};

//Screen Two
dressList.addEventListener("click", dressListHandler);

let dressId = null;

function dressListHandler(e) { 
    if (e.target.nodeName !== "BUTTON") {
        return;
    };

    dressId = e.target.id;
    outfit.style.backgroundImage = `url(../../1080x1920/dress${dressId}.png)`;
    
    let currentActiveBtn = document.querySelector('.screen-two__button--active');
    
    if (currentActiveBtn) { 
        currentActiveBtn.classList.remove("screen-two__button--active")
    };

    e.target.classList.add("screen-two__button--active");

    emoji.style.backgroundImage = `url(../../1080x1920/emoji${dressId}.png)`;
    emoji.style.display = "block";

    setTimeout(() => {
        emoji.style.display = "none";
    }, 500);

    okBtn.classList.add("screen-two__okBtn--active");
    
    shadow.style.display = "none";
    cursor.style.display = "none";
};

okBtn.addEventListener("click", okBtnHandler);

function okBtnHandler(e) { 
    console.log(dressId);

    screenTwo.style.display = "none";
    secondBg.style.backgroundImage = `url(../../1080x1920/bg2-${dressId}.jpg)`;
    screenThree.style.display = "block";

    dressList.removeEventListener("click", dressListHandler);

}