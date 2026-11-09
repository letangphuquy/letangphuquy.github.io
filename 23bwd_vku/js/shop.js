//Pre-requiste: nav.js and items.js
const main = document.querySelector("main");
const footer = document.querySelector("footer");

const firstSection = "first";

main.style.setProperty("--nav-height", getNavHeight() + "px");
const firstPart = document.querySelector("." + firstSection);
console.log(firstPart);
firstPart.style.height = "calc(100vh - " + getNavHeight() + ")";

const productsElement = document.getElementById("products-list");
console.log(productsList);
// Implement fancy navigation between carousel and products
let currentSection = firstSection;
let oldYOffset = window.scrollY;
productsElement.style.setProperty("display", "none");

let sumYWheel = 0;
const threshold = 305;
const fadeArrow = document.querySelector(".fade-arrow");
const hideArrow = (reset = true) => {
    if (reset) fadeArrow.style.opacity = "0";
    fadeArrow.style.zIndex = "-2";
};
const showArrow = () => {
    fadeArrow.style.zIndex = "3";
};

const skipToProducts = () => {
    sumYWheel = 0;
    hideArrow();
    firstPart.style.setProperty("display", "none");
    currentSection = "products";
    productsElement.style.setProperty("display", "block");
};
const skipToCarousel = () => {
    sumYWheel = 0;
    hideArrow();
    productsElement.style.setProperty("display", "none");
    currentSection = firstSection;
    firstPart.style.setProperty("display", "flex");
}

//TODO: Add support for mobile user swipe down and who drag the scroll bar
let isAlerted = false;
const alertGuide = () => {
    if (isAlerted) return;
    if (currentSection != firstSection) return;
    let scrollY = window.scrollY;
    let limit = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight) - window.innerHeight - 5;
    console.log(scrollY + " vs. " + limit + " at " + currentSection);
    if (scrollY >= limit) {
        alert("Please swipe or roll the mouse wheel to proceed");
        isAlerted = true;
    }
};
// window.scroll
let isHolding = false;
window.addEventListener("mousedown", () => {
    console.log("Mouse down");
    isHolding = true;
});
window.addEventListener("mouseup", () => {
    isHolding = false;
});
window.addEventListener("scroll", () => {
    console.log("Scrolled");
    if (isHolding) alertGuide();
});

const adjustFadeArrow = () => {
    if (nav.dataset.active == "true") return;
    let scrollX = window.scrollX;
    let scrollY = window.scrollY;
    // if (isScrollingDown) return;
    if ((currentSection == firstSection && event.deltaY >= 0) 
    || (currentSection == "products" && scrollY <= 0 && event.deltaY <= 0))
        sumYWheel += event.deltaY;
    if (currentSection == firstSection && sumYWheel < 0) sumYWheel = 0;
    if ((currentSection == "products" && scrollY >= 0 && event.deltaY > 0)
    || (currentSection == firstSection && event.deltaY < 0)) {
        sumYWheel = 0;
        hideArrow();
        console.log("Reset sumYWheel for " + currentSection);
        // hideArrow();
    }
    // if (currentSection == "products" && sumYWheel > 
    // console.log("Moved " + event.deltaY + " at " + currentSection + ", page = " + scrollY + " total = " + sumYWheel);
    
    if ((currentSection == firstSection && sumYWheel >= 0) ||
    (currentSection == "products" && sumYWheel <= 0 && scrollY <= 0)) {
        fadeArrow.style.opacity = "1";
        let icon = fadeArrow.querySelector("i");
        let rate = 1 + 10 * Math.abs(sumYWheel / threshold);
        icon.style.width = icon.style.height = rate * 50 + "px";
        icon.style.fontSize = rate + "rem";
        icon.style.transform = "scale(" + (sumYWheel > 0 ? +1 : -1) + ")";
    }
    if (currentSection == firstSection && event.deltaY <= 0) 
        hideArrow();

    if (currentSection == firstSection) {
        if (sumYWheel < threshold) {
            window.scroll(scrollX, scrollY);
            return;
        }
        console.log("Scrolling down");
        skipToProducts();
        window.scroll(0,0);
        return ;
    } 
    if (sumYWheel <= -threshold) {
        console.log("Scrolling down");
        skipToCarousel();
        window.scroll(0,0);
        return;
    }
};

window.addEventListener("swiped-down", () => {
    adjustFadeArrow();
});

window.addEventListener("swiped-up", () => {
    adjustFadeArrow();
});

window.addEventListener("wheel", (event) => {
    adjustFadeArrow();
});

window.setInterval(() => {
    if (!fadeArrow.style.opacity) {
        fadeArrow.style.opacity = "0";
    } 
    hideArrow(false);
    if (fadeArrow.style.opacity > 0)
        fadeArrow.style.opacity -= 0.06;
    if (fadeArrow.style.opacity > 0)
        fadeArrow.style.zIndex = "3";
}, 100);

// Implement carousel
const carouselItems = document.querySelectorAll(".hot-product");
let curIndex = 0;

const moveLeft = () => {
    carouselItems[curIndex].dataset.active = "false";
    curIndex = (curIndex == 0) ? carouselItems.length-1 : curIndex-1;
    carouselItems[curIndex].dataset.active = "true";
};

const moveRight = () => {
    carouselItems[curIndex].dataset.active = "false";
    curIndex = (curIndex >= carouselItems.length-1) ? 0 : curIndex+1;
    carouselItems[curIndex].dataset.active = "true";
}

const addCarouselItem = (item, index) => {
    carouselItems[index].classList.add("product");
    let temp = item.cloneNode(true);
    temp.removeChild(temp.querySelector("button"));
    carouselItems[index].innerHTML = temp.innerHTML;
}

for (let i = 0; i < hotProducts.length; i++) {
    addCarouselItem(hotProducts[i], i);
}