window.addEventListener('scroll', function () {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 60) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    // Active nav highlight on scroll
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    let curr = '';
    sections.forEach(sec => {
        const secTop = sec.offsetTop - 75;
        const secHeight = sec.offsetHeight;
        if (window.scrollY >= secTop && window.scrollY < secTop + secHeight) {
            curr = sec.getAttribute('id');
        }
    });
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + curr) {
            link.classList.add('active');
        }
    });
});
