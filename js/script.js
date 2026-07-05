/* ===========================================================
   CACHEWORKS
   Main Script
   Part 1
=========================================================== */

/* ===========================
   Loading Screen
=========================== */

window.addEventListener("load", () => {

    const loader = document.getElementById("loading-screen");

    if (!loader) return;

    setTimeout(() => {

        loader.style.opacity = "0";
        loader.style.pointerEvents = "none";

        setTimeout(() => {
            loader.remove();
        }, 700);

    }, 900);

});

/* ===========================
   Mouse Glow
=========================== */

const mouseGlow = document.getElementById("mouse-glow");

if (mouseGlow) {

    document.addEventListener("mousemove", (event) => {

        mouseGlow.style.left = event.clientX + "px";
        mouseGlow.style.top = event.clientY + "px";

    });

}

/* ===========================
   Scroll Reveal
=========================== */

const revealElements = document.querySelectorAll(

    ".section, .glass-panel, .project-card, .blog-card"

);

const revealObserver = new IntersectionObserver(

    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("active");

            }

        });

    },

    {

        threshold: 0.15

    }

);

revealElements.forEach((element) => {

    element.classList.add("reveal");

    revealObserver.observe(element);

});

/* ===========================
   Navbar Scroll Effect
=========================== */

const navbar = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (!navbar) return;

    if (window.scrollY > 40) {

        navbar.style.background = "rgba(5,7,11,.82)";
        navbar.style.backdropFilter = "blur(24px)";
        navbar.style.boxShadow =
            "0 10px 35px rgba(0,0,0,.35)";

    } else {

        navbar.style.background = "rgba(5,7,11,.45)";
        navbar.style.boxShadow = "none";

    }

});

/* ===========================
   Hero Logo Tilt
=========================== */

const heroLogo = document.querySelector(".hero-logo-card");

if (heroLogo) {

    heroLogo.addEventListener("mousemove", (event) => {

        const rect = heroLogo.getBoundingClientRect();

        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        const rotateY =
            ((x / rect.width) - 0.5) * 14;

        const rotateX =
            ((y / rect.height) - 0.5) * -14;

        heroLogo.style.transform =
            `perspective(900px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             translateY(-10px)`;

    });

    heroLogo.addEventListener("mouseleave", () => {

        heroLogo.style.transform =
            "perspective(900px) rotateX(0deg) rotateY(0deg)";

    });

}

/* ===========================
   Smooth Anchor Scrolling
=========================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e) {

        const target = document.querySelector(

            this.getAttribute("href")

        );

        if (!target) return;

        e.preventDefault();

        target.scrollIntoView({

            behavior: "smooth",
            block: "start"

        });

    });

});

/* ===========================================================
   Hero Parallax
=========================================================== */

const hero = document.querySelector(".hero");

window.addEventListener("mousemove", (e) => {

    if (!hero) return;

    const x = (e.clientX / window.innerWidth - 0.5) * 20;
    const y = (e.clientY / window.innerHeight - 0.5) * 20;

    hero.style.backgroundPosition = `${50 + x}% ${50 + y}%`;

});

/* ===========================================================
   Floating Hero Logo
=========================================================== */

if (heroLogo) {

    let angle = 0;

    setInterval(() => {

        angle += 0.02;

        heroLogo.style.transform +=
            ` translateY(${Math.sin(angle) * 3}px)`;

    }, 16);

}

/* ===========================================================
   Scroll To Top Button
=========================================================== */

const scrollButton = document.createElement("button");

scrollButton.innerHTML = "↑";

scrollButton.id = "scroll-top";

document.body.appendChild(scrollButton);

Object.assign(scrollButton.style, {

    position: "fixed",
    right: "30px",
    bottom: "30px",

    width: "55px",
    height: "55px",

    border: "none",
    borderRadius: "50%",

    cursor: "pointer",

    background: "#31b6ff",

    color: "white",

    fontSize: "22px",

    display: "none",

    zIndex: "999"

});

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        scrollButton.style.display = "block";

    } else {

        scrollButton.style.display = "none";

    }

});

scrollButton.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

/* ===========================================================
   Active Navigation
=========================================================== */

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const top = section.offsetTop - 120;

        if (window.scrollY >= top) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            current &&
            link.getAttribute("href") === "#" + current
        ) {

            link.classList.add("active");

        }

    });

});

/* ===========================================================
   Keyboard Shortcuts
=========================================================== */

document.addEventListener("keydown", (e) => {

    if (
        document.activeElement.tagName === "INPUT" ||
        document.activeElement.tagName === "TEXTAREA"
    ) return;

    switch (e.key.toLowerCase()) {

        case "g":

            window.location.href = "#";

            break;

        case "p":

            window.location.href = "projects.html";

            break;

        case "b":

            window.location.href = "blog.html";

            break;

        case "s":

            window.location.href = "socials.html";

            break;

    }

});

/* ===========================================================
   Card Hover Glow
=========================================================== */

document.querySelectorAll(".project-card,.blog-card").forEach(card => {

    card.addEventListener("mousemove", e => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;

        const y = e.clientY - rect.top;

        card.style.setProperty("--mouse-x", x + "px");

        card.style.setProperty("--mouse-y", y + "px");

    });

});

/* ===========================================================
   Console Greeting
=========================================================== */

console.log(
`%cCacheWorks
Performance Through Code`,
`
color:#31b6ff;
font-size:20px;
font-weight:bold;
`
);

/* ===========================================================
   CACHEWORKS
   Main Script
   Part 3
=========================================================== */

/* ===========================
   Button Ripple Effect
=========================== */

document.querySelectorAll(".primary-button, .secondary-button").forEach(button => {

    button.addEventListener("click", function(e){

        const ripple = document.createElement("span");

        const rect = this.getBoundingClientRect();

        const size = Math.max(rect.width, rect.height);

        ripple.style.width = ripple.style.height = size + "px";

        ripple.style.left = (e.clientX - rect.left - size / 2) + "px";

        ripple.style.top = (e.clientY - rect.top - size / 2) + "px";

        ripple.className = "ripple";

        this.appendChild(ripple);

        setTimeout(() => ripple.remove(), 700);

    });

});

/* ===========================
   Fade Hero Content
=========================== */

const heroContent = document.querySelector(".hero-left");

window.addEventListener("scroll", () => {

    if (!heroContent) return;

    const opacity = Math.max(0, 1 - window.scrollY / 500);

    heroContent.style.opacity = opacity;

    heroContent.style.transform =
        `translateY(${window.scrollY * 0.15}px)`;

});

/* ===========================
   Random Floating Animation
=========================== */

document.querySelectorAll(".glass-panel").forEach(panel => {

    panel.style.animationDuration =
        (5 + Math.random() * 5) + "s";

});

/* ===========================
   Copy Email
=========================== */

document.querySelectorAll("a[href^='mailto:']").forEach(email => {

    email.addEventListener("click", e => {

        e.preventDefault();

        navigator.clipboard.writeText(

            email.textContent.trim()

        ).then(() => {

            email.textContent = "Copied!";

            setTimeout(() => {

                email.textContent = "contact@cacheworks.dev";

            }, 2000);

        });

    });

});

/* ===========================
   Lazy Images
=========================== */

document.querySelectorAll("img").forEach(img => {

    img.loading = "lazy";

});

/* ===========================
   Disable Right Click On Logo
=========================== */

document.querySelectorAll(".brand img,.footer-logo").forEach(img => {

    img.addEventListener("contextmenu", e => {

        e.preventDefault();

    });

});

/* ===========================
   Reveal Cards One By One
=========================== */

const cards = document.querySelectorAll(

".project-card,.blog-card,.glass-panel"

);

cards.forEach((card,index)=>{

    card.style.transitionDelay = `${index * 0.08}s`;

});

/* ===========================
   Performance FPS Counter
   (disabled by default)
=========================== */

/*

let last = performance.now();

let frames = 0;

function fpsCounter(){

frames++;

const now = performance.now();

if(now-last>=1000){

console.log("FPS:",frames);

frames=0;

last=now;

}

requestAnimationFrame(fpsCounter);

}

fpsCounter();

*/

/* ===========================
   Footer Year
=========================== */

const yearElement = document.querySelector(".footer-bottom p");

if(yearElement){

yearElement.innerHTML =
`© ${new Date().getFullYear()} CacheWorks. All rights reserved.`;

}

/* ===========================
   Easter Egg
=========================== */

let typed = "";

document.addEventListener("keydown", e=>{

typed += e.key.toLowerCase();

typed = typed.slice(-10);

if(typed.includes("cache")){

console.log("%c⚡ Cache unlocked.","color:#31b6ff;font-size:24px;");

document.body.animate(

[
{filter:"brightness(1)"},

{filter:"brightness(1.2)"},

{filter:"brightness(1)"}

],

{

duration:700

}

);

}

});

/* ===========================
   Initialization
=========================== */

console.log(

"%cCacheWorks Website Initialized",

"background:#31b6ff;color:white;padding:8px 14px;border-radius:6px;font-size:14px;font-weight:bold;"

);

console.log(

"%cPerformance Through Code",

"color:#31b6ff;font-size:16px;"

);

document.body.classList.add("fade-in");
