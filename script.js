
document.getElementById("year").textContent = new Date().getFullYear();


document.querySelectorAll('nav a[href^="#"]').forEach(function(link) {
    link.addEventListener("click", function(event) {
        event.preventDefault();

        const sectionId = this.getAttribute("href");
        const section = document.querySelector(sectionId);

        if (section) {
            section.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});


document.querySelectorAll(".btn, .project-btn").forEach(function(button) {
    button.addEventListener("mouseenter", function() {
        button.style.transition = "0.3s";
    });
});

const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, {
    threshold: 0.15
});

sections.forEach(function(section) {
    observer.observe(section);
});


window.addEventListener("scroll", function() {
    let currentSection = "";

    document.querySelectorAll("section[id]").forEach(function(section) {
        const sectionTop = section.offsetTop - 120;

        if (window.scrollY >= sectionTop) {
            currentSection = section.getAttribute("id");
        }
    });

    document.querySelectorAll("nav a").forEach(function(link) {
        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + currentSection) {
            link.classList.add("active");
        }
    });
});

