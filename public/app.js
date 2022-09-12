// const hamburger = document.querySelector("#hamburger");
// const menu = document.querySelector("#menu");
// const hLinks = document.querySelectorAll("#hLink");
// const hams = document.querySelector("#hams");
// const body = document.querySelector("body");

// // body.addEventListener("click", () => {
// //     menu.classList.toggle("hidden");

// // })

// hamburger.addEventListener("click", () => {
//     menu.classList.toggle("hidden");
//     hamburger.classList.toggle("bg-white");
//     hams.classList.toggle("bg-white");

// })

// hLinks.forEach(link=> {
//     hLinks.addEventListener("click", () => {
//         menu.classList.toggle("hidden");
//         hamburger.classList.toggle("bg-white");
//     })
// })

const hamburger = document.querySelector("#hamburger")
const menu = document.querySelector("#menu")
const moon = document.querySelector("#moon")
const body = document.querySelector("body")
const hLinks = document.querySelectorAll("#hLink")

hamburger.addEventListener("click", () => {
    menu.classList.toggle("hidden")
    // hamburger.classList.toggle("bg-white")
})

hLinks.forEach(link => {
    link.addEventListener("click", () => {
        menu.classList.toggle("hidden")
        hamburger.classList.toggle("bg-white")
    })
})

moon.addEventListener("click", () => {
    body.classList.toggle("dark")
    // moon.setAttribute(src, 'https://www.svgrepo.com/show/15601/sun.svg')
})