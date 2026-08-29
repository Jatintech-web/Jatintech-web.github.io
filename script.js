/* ================= PRELOADER ================= */

window.addEventListener("load", function () {

    const preloader = document.getElementById("preloader");

    setTimeout(() => {
        preloader.style.opacity = "0";

        setTimeout(() => {
            preloader.style.display = "none";
        }, 400);

    }, 500);

});


/* ================= MOBILE MENU ================= */

const menuBtn = document.getElementById("menuBtn");
const navbar = document.getElementById("navbar");

menuBtn.addEventListener("click", function () {

    navbar.classList.toggle("show");

    const icon = menuBtn.querySelector("i");

    if (navbar.classList.contains("show")) {

        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");

    } else {

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    }

});


/* Close menu after clicking link */

document.querySelectorAll(".navbar a").forEach(link => {

    link.addEventListener("click", function () {

        navbar.classList.remove("show");

        const icon = menuBtn.querySelector("i");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    });

});


/* ================= TYPING EFFECT ================= */

const typingElement = document.getElementById("typing");

const words = [
    "Web Developer",
    "Web Designer",
    "JavaScript Developer",
    "Firebase Developer",
    "Programmer"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;


function typeEffect() {

    const currentWord = words[wordIndex];

    if (!deleting) {

        typingElement.textContent =
            currentWord.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentWord.length) {

            deleting = true;

            setTimeout(typeEffect, 1500);

            return;

        }

    } else {

        typingElement.textContent =
            currentWord.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex >= words.length) {
                wordIndex = 0;
            }

        }

    }

    setTimeout(
        typeEffect,
        deleting ? 60 : 100
    );

}

typeEffect();


/* ================= ACTIVE NAV ================= */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar a");


window.addEventListener("scroll", function () {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });


    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") === "#" + current
        ) {
            link.classList.add("active");
        }

    });

});


/* ================= BACK TO TOP ================= */

const topBtn = document.getElementById("topBtn");


window.addEventListener("scroll", function () {

    if (window.scrollY > 500) {

        topBtn.classList.add("show");

    } else {

        topBtn.classList.remove("show");

    }

});


topBtn.addEventListener("click", function () {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


/* ================= CURRENT YEAR ================= */

document.getElementById("year").textContent =
    new Date().getFullYear();
