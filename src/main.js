const hamburger = document.getElementById("hamburger");
const closeButtn = document.getElementById("close");
const navLinks = document.querySelectorAll(".nav__link")

// show the menu list when hamburger is clicked

/* -------------------EXPERIENCING ERRORS------------------------ */

/**
 * THINGS i HAVE TRIED
 * 1. Added a DOMContentLoaded event listener
 * 2. Added the defer attribute on the HTML script tag
 * 3. Confirmed that it is not a duplicate id name
 */

/* -------------------------------------------------------------- */

document.addEventListener("DOMContentLoaded", () => {
    hamburger.addEventListener("click", () => {
    const menu = document.getElementById("menu__div");
    if (menu !== null)
        console.log('value not null')
    menu.classList.remove("hidden")
})
})

/* -------------------------------------------------------------- */

// hide the menu list when close button is clicked

closeButtn.addEventListener("click", () => {
    const menu = document.getElementById("menu");
    menu.classList.add("hidden");
})

// hide the menu list when either of the links is tapped

navLinks.forEach((link) => {
    link.addEventListener("click", () => {
        const menu = document.getElementById("menu");
        menu.classList.add("hidden");
    })
})