// Reveal sections when scrolling

const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, { threshold: 0.1 });

sections.forEach(section => {
    section.style.opacity = "0";
    section.style.transform = "translateY(30px)";
    section.style.transition = "all 0.8s ease";
    observer.observe(section);
});

// Typing animation

const words = [
    "Web Developer"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {
    const typing = document.getElementById("typing");
    const currentWord = words[wordIndex];

    typing.textContent = currentWord.substring(0, charIndex);

    if (!deleting && charIndex < currentWord.length) {
        charIndex++;
        setTimeout(typeEffect, 100);
    }
    else if (deleting && charIndex > 0) {
        charIndex--;
        setTimeout(typeEffect, 50);
    }
    else {
        deleting = !deleting;

        if (!deleting) {
            wordIndex = (wordIndex + 1) % words.length;
        }

        setTimeout(typeEffect, 800);
    }
}

typeEffect();

// Animated counters

const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {

            const counter = entry.target;
            const target = Number(counter.dataset.target);
            let current = 0;

            const increment = Math.max(1, Math.ceil(target / 50));

            const updateCounter = () => {
                current = Math.min(current + increment, target);
                counter.textContent = current;

                if (current < target) {
                    requestAnimationFrame(updateCounter);
                }
            };

            updateCounter();
            counterObserver.unobserve(counter);
        }
    });
}, { threshold: 0.5 });

counters.forEach(counter => counterObserver.observe(counter));

// Contact form

document.getElementById("contactForm").addEventListener("submit", function (e) {

    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    const yourEmail = "srjn2325@gmail.com";

    const body = `Name: ${name}
Email: ${email}

Message:
${message}`;

    const mailURL = `mailto:${yourEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailURL;

});

// MOBILE MENU

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

document.querySelectorAll("#navLinks a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});


// SCROLL TO TOP

const scrollTop = document.getElementById("scrollTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {
        scrollTop.style.display = "block";
    } else {
        scrollTop.style.display = "none";
    }

});

if (scrollTop) {
    scrollTop.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}


// SCROLL PROGRESS

window.addEventListener("scroll", () => {

    const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;

    const progress = (window.scrollY / totalHeight) * 100;

    document.getElementById("scrollProgress").style.width =
        progress + "%";

});


// CURSOR GLOW

const glow = document.createElement("div");

glow.className = "cursor-glow";

document.body.appendChild(glow);

document.addEventListener("mousemove", (e) => {

    glow.style.left = (e.clientX - 125) + "px";
    glow.style.top = (e.clientY - 125) + "px";

});