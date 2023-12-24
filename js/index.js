document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelector('.nav-links');
    const burgerMenu = document.querySelector('.burger-menu');
    const header = document.querySelector('header');

    let isIdle = false;
    let idleTimer;

    const setIdle = () => {
        if (window.innerWidth > 768) {
            isIdle = true;
            header.style.opacity = 0;
            header.style.transition = 'opacity 0.5s ease';
        }
    };

    const setActive = () => {
        isIdle = false;
        header.style.opacity = 1;
        header.style.transition = 'opacity 0.5s ease';
        clearTimeout(idleTimer);
        idleTimer = setTimeout(setIdle, 3000);
    };

    // Initial setup
    idleTimer = setTimeout(setIdle, 3000);

    // Toggle navigation links on smaller screens
    const toggleNav = () => {
        navLinks.classList.toggle('show');
    };

    burgerMenu.addEventListener('click', toggleNav);

    // Smooth scrolling for navigation links
    navLinks.addEventListener('click', function (e) {
        if (e.target.tagName === 'A') {
            e.preventDefault();

            const targetId = e.target.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            window.scrollTo({
                top: targetElement.offsetTop - document.querySelector('header').offsetHeight,
                behavior: 'smooth'
            });

            if (window.innerWidth <= 768) {
                toggleNav(); // Close the navigation on small screens
            }

            navLinks.querySelectorAll('a').forEach(link => {
                link.classList.remove('active');
            });

            e.target.classList.add('active');
        }
    });

    // Adjust navigation links on scroll
    window.addEventListener('scroll', function () {
        if (!isIdle) {
            setActive();
        }

        const fromTop = window.scrollY + document.querySelector('header').offsetHeight;

        navLinks.querySelectorAll('a').forEach(link => {
            const section = document.querySelector(link.getAttribute('href'));
            if (section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    });

    // Handle mousemove to detect user activity
    document.addEventListener('mousemove', function () {
        if (isIdle) {
            setActive();
        }
    });
});


function toggleNav() {
    console.log('toggleNav function called');
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('show');

    const header = document.querySelector('header');
    header.style.transition = 'opacity 0.5s ease';

    if (navLinks.classList.contains('show')) {
        header.style.opacity = 1;
    } else {
        setTimeout(() => {
            header.style.opacity = 0;
        }, 300);
    }
}

close_btn = document.getElementById('x-button');
close_btn.addEventListener('click' , ()=>{
    nav_links = document.querySelector('.nav-links');
    nav_links.classList.remove('show')
})