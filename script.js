// ================= MENU =================

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("active");

    if (navMenu.classList.contains("active")) {
        menuBtn.textContent = "✕";
    } else {
        menuBtn.textContent = "☰";
    }
});


// Close menu after clicking a link

document.querySelectorAll("nav a").forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");

        menuBtn.textContent = "☰";

    });

});


// ================= DARK / LIGHT MODE =================

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("light");

    if (document.body.classList.contains("light")) {

        themeBtn.textContent = "☀️";

        localStorage.setItem("theme", "light");

    } else {

        themeBtn.textContent = "🌙";

        localStorage.setItem("theme", "dark");

    }

});


// Load saved theme

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {

    document.body.classList.add("light");

    themeBtn.textContent = "☀️";

}


// ================= CONTACT FORM =================

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", (event) => {

    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (!name || !email || !message) {

        alert("Please fill in all fields.");

        return;

    }

    const subject = encodeURIComponent(
        "Portfolio Contact from " + name
    );

    const body = encodeURIComponent(
        "Name: " + name +
        "\nEmail: " + email +
        "\n\nMessage:\n" + message
    );

    window.location.href =
        "mailto:your-email@example.com?subject=" +
        subject +
        "&body=" +
        body;

});


// ================= SCROLL ANIMATION =================

const cards = document.querySelectorAll(
    ".skill-card, .project-card, .about-text, .about-box"
);

const observer = new IntersectionObserver(

    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

            }

        });

    },

    {
        threshold: 0.12
    }

);


cards.forEach(card => {

    card.style.opacity = "0";
    card.style.transform = "translateY(25px)";
    card.style.transition = "opacity 0.7s ease, transform 0.7s ease";

    observer.observe(card);

});


// ================= CURRENT YEAR =================

const year = new Date().getFullYear();

const footerText = document.querySelector("footer p");

if (footerText) {

    footerText.textContent =
        `© ${year} Jatin Tanchangya. All Rights Reserved.`;

}
