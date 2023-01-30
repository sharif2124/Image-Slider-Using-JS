const slideshowEliment = document.querySelectorAll(".slideshow-element");
console.log(slideshowEliment);
let countElement = 1;
setInterval(() => {
    countElement++;
    let currentEliment = document.querySelector(".current")
    currentEliment.classList.remove("current");
    if (countElement > slideshowEliment.length) {
        slideshowEliment[0].classList.add("current")
        countElement = 1;
    }
    else {
        currentEliment.nextElementSibling.classList.add("current");

    }
}, 2000);

















// const slideshowEliment = document.querySelectorAll(".slideshow-element")
// // console.log(slideshowEliment);
// let countElement = 1;
// setInterval(() => {
//     countElement++;
//     let currentEliment = document.querySelector(".current");
//     currentEliment.classList.remove("current");
//     if (countElement > slideshowEliment.length) {
//         slideshowEliment[0].classList.add("current")
//         countElement = 1;
//     }
//     else {
//         currentEliment.nextElementSibling.classList.add("current");
//     }

// }, 2000);