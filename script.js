/* =========================================================
   JATIN TANCHANGYA PORTFOLIO
   Fast • Lightweight • Error Free
   ========================================================= */

"use strict";


/* ================= DOM READY ================= */

document.addEventListener("DOMContentLoaded", () => {

    /* ================= ELEMENTS ================= */

    const preloader = document.getElementById("preloader");
    const menuBtn = document.getElementById("menuBtn");
    const navbar = document.getElementById("navbar");
    const typing = document.getElementById("typing");
    const topBtn = document.getElementById("topBtn");
    const year = document.getElementById("year");

    const navLinks = document.querySelectorAll(".navbar a");
    const sections = document.querySelectorAll("main section[id]");


    /* ================= CURRENT YEAR ================= */

    if (year) {
        year.textContent = new Date().getFullYear();
    }


    /* ================= PRELOADER ================= */

    window.addEventListener("load", () => {

        if (!preloader) return;

        preloader.style.opacity = "0";
        preloader.style.visibility = "hidden";

        setTimeout(() => {
            preloader.remove();
        }, 450);

    });


    /* ================= MOBILE MENU ================= */

    if (menuBtn && navbar) {

        menuBtn.addEventListener("click", () => {

            const isOpen = navbar.classList.toggle("show");

            menuBtn.setAttribute(
                "aria-expanded",
                isOpen ? "true" : "false"
            );

            menuBtn.setAttribute(
                "aria-label",
                isOpen ? "Close Menu" : "Open Menu"
            );


            /* Change hamburger icon */

            const icon = menuBtn.querySelector("i");

            if (icon) {

                icon.classList.toggle(
                    "fa-bars",
                    !isOpen
                );

                icon.classList.toggle(
                    "fa-xmark",
                    isOpen
                );

            }

        });


        /* Close menu after clicking a link */

        navLinks.forEach(link => {

            link.addEventListener("click", () => {

                navbar.classList.remove("show");

                menuBtn.setAttribute(
                    "aria-expanded",
                    "false"
                );

                menuBtn.setAttribute(
                    "aria-label",
                    "Open Menu"
                );

                const icon = menuBtn.querySelector("i");

                if (icon) {

                    icon.classList.remove("fa-xmark");

                    icon.classList.add("fa-bars");

                }

            });

        });

    }


    /* ================= TYPING EFFECT ================= */

    if (typing) {

        const words = [
            "Web Developer",
            "Android App Developer",
            "SEO Specialist",
            "WordPress Specialist"
        ];

        let wordIndex = 0;
        let charIndex = 0;
        let deleting = false;

        const typingSpeed = 85;
        const deletingSpeed = 45;
        const pauseAfterWord = 1400;


        function typeEffect() {

            const currentWord = words[wordIndex];

            if (!deleting) {

                typing.textContent =
                    currentWord.substring(
                        0,
                        charIndex + 1
                    );

                charIndex++;


                /* Word completed */

                if (charIndex === currentWord.length) {

                    deleting = true;

                    setTimeout(
                        typeEffect,
                        pauseAfterWord
                    );

                    return;
                }

            } else {

                typing.textContent =
                    currentWord.substring(
                        0,
                        charIndex - 1
                    );

                charIndex--;


                /* Word deleted */

                if (charIndex === 0) {

                    deleting = false;

                    wordIndex =
                        (wordIndex + 1) % words.length;

                }

            }


            setTimeout(
                typeEffect,
                deleting
                    ? deletingSpeed
                    : typingSpeed
            );

        }


        /* Start after page is ready */

        setTimeout(
            typeEffect,
            500
        );

    }


    /* ================= ACTIVE NAVIGATION ================= */

    function updateActiveNav() {

        const scrollPosition =
            window.scrollY + 150;


        sections.forEach(section => {

            const sectionTop =
                section.offsetTop;

            const sectionHeight =
                section.offsetHeight;

            const sectionId =
                section.getAttribute("id");


            if (
                scrollPosition >= sectionTop &&
                scrollPosition < sectionTop + sectionHeight
            ) {

                navLinks.forEach(link => {

                    link.classList.remove("active");

                    const href =
                        link.getAttribute("href");

                    if (href === `#${sectionId}`) {

                        link.classList.add("active");

                    }

                });

            }

        });

    }


    /* ================= BACK TO TOP ================= */

    function updateTopButton() {

        if (!topBtn) return;

        if (window.scrollY > 450) {

            topBtn.classList.add("show");

        } else {

            topBtn.classList.remove("show");

        }

    }


    if (topBtn) {

        topBtn.addEventListener("click", () => {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        });

    }


    /* ================= OPTIMIZED SCROLL ================= */

    let ticking = false;

    window.addEventListener(
        "scroll",
        () => {

            if (!ticking) {

                window.requestAnimationFrame(() => {

                    updateActiveNav();

                    updateTopButton();

                    ticking = false;

                });

                ticking = true;

            }

        },
        {
            passive: true
        }
    );


    /* ================= INITIAL STATE ================= */

    updateActiveNav();

    updateTopButton();


    /* ================= CLOSE MENU OUTSIDE ================= */

    document.addEventListener("click", event => {

        if (!navbar || !menuBtn) return;

        const clickedInsideMenu =
            navbar.contains(event.target);

        const clickedButton =
            menuBtn.contains(event.target);


        if (
            !clickedInsideMenu &&
            !clickedButton
        ) {

            navbar.classList.remove("show");

            menuBtn.setAttribute(
                "aria-expanded",
                "false"
            );

            menuBtn.setAttribute(
                "aria-label",
                "Open Menu"
            );

            const icon =
                menuBtn.querySelector("i");

            if (icon) {

                icon.classList.remove("fa-xmark");

                icon.classList.add("fa-bars");

            }

        }

    });


    /* ================= ESC KEY ================= */

    document.addEventListener(
        "keydown",
        event => {

            if (event.key === "Escape") {

                if (!navbar || !menuBtn) return;

                navbar.classList.remove("show");

                menuBtn.setAttribute(
                    "aria-expanded",
                    "false"
                );

                menuBtn.setAttribute(
                    "aria-label",
                    "Open Menu"
                );

                const icon =
                    menuBtn.querySelector("i");

                if (icon) {

                    icon.classList.remove("fa-xmark");

                    icon.classList.add("fa-bars");

                }

            }

        }
    );

});
