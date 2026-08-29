// ================= MENU =================

const menuBtn = document.getElementById("menuBtn");
const navbar = document.getElementById("navbar");

menuBtn.addEventListener("click", () => {

    navbar.classList.toggle("active");

    const icon = menuBtn.querySelector("i");

    if (navbar.classList.contains("active")) {

        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");

    } else {

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    }

});


// ================= CLOSE MENU =================

document.querySelectorAll(".navbar a").forEach(link => {

    link.addEventListener("click", () => {

        navbar.classList.remove("active");

        const icon = menuBtn.querySelector("i");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    });

});


// ================= CURRENT YEAR =================

document.getElementById("year").textContent =
    new Date().getFullYear();


// ================= SCROLL EFFECT =================

window.addEventListener("scroll", () => {

    const header = document.querySelector(".header");

    if (window.scrollY > 50) {

        header.style.boxShadow =
            "0 10px 30px rgba(0,0,0,0.25)";

    } else {

        header.style.boxShadow = "none";

    }

});


// ================= IMAGE ERROR CHECK =================

const profileImage =
    document.querySelector(".profile-image");

profileImage.addEventListener("error", () => {

    console.log(
        "Profile image could not be loaded."
    );

});
