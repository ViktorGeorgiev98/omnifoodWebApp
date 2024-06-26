// /////////////////////////////////////////////
// Make mobile navigation work

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", (e) => {
    headerEl.classList.toggle("nav-open");
});

//////////////////////////////////////////////



//////////////////////////////////////////////
// Smooth scrolling animation
const allLinks = document.querySelectorAll("a:link");
allLinks.forEach(function(link) {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        const href = link.getAttribute("href");
        if (href === '#') window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
        // Scroll to other links
        if (href !== '#' && href.startsWith('#')) {
            const sectionEl = document.querySelector(href)
            sectionEl.scrollIntoView({
                behavior: "smooth"
            });
        }

        // Close mobile navigation
        if (link.classList.contains("main-nav-link")) {
            headerEl.classList.toggle("nav-open");
        }
    })
}) 
////////////////////////////////////////////////

//////////////////////////////////////////////
// Sticky navigation
const obs = new IntersectionObserver(function(entries) {
    const ent = entries[0];
    if (!ent.isIntersecting) {
        document.body.classList.add('sticky');
    } else {
        document.body.classList.remove('sticky');
    }

},
 {
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: "-80px"
});
const sectionHeroEl = document.querySelector(".section-hero");
obs.observe(sectionHeroEl);

// end of sticky navigation
/////////////////////////////////////////////////