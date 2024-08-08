//active NavBar
document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.nav-link');

    // Function to remove 'active' class from all nav links
    function removeActiveClasses() {
        navLinks.forEach(link => {
            link.classList.remove('active');
        });
    }

    // Add 'click' event listeners to nav links
    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            removeActiveClasses();
            this.classList.add('active');
        });
    });

    // //Scroll control
    // window.addEventListener('scroll', function () {
    //     let fromTop = window.scrollY;

    //     navLinks.forEach(link => {
    //         let section = document.querySelector(link.hash);

    //         if (
    //             section.offsetTop <= fromTop &&
    //             section.offsetTop + section.offsetHeight > fromTop
    //         ) {
    //             removeActiveClasses();
    //             link.classList.add('active');
    //         }
    //     });
    // });
});


// toggle icon navbar

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
}

//scroll section

let sections = document.querySelectorAll('section');
let navLinks = document.querySelector('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach.apply(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    //Sticky NavBar
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    //remove toggle icon and navbar
    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
};

// Scroll reveal
ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200,
});

ScrollReveal().reveal('.home-content, heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .skills-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-contact h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-contact p, .about-content', { origin: 'right' });

//typed.js
const typed = new Typed('.multiple-text', {
    strings: ['Full Stack Developer', 'Java Developer', 'Angular Developer'],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true,
});

// Mail
(function () {
    emailjs.init('YOUR_USER_ID');
})();

document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();

    // Generate a unique contact number
    this.contact_number.value = Math.random() * 100000 | 0;

    const serviceID = 'YOUR_SERVICE_ID';
    const templateID = 'YOUR_TEMPLATE_ID';

    emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
            alert('Message sent successfully!');
        }, (err) => {
            alert('Failed to send the message, please try again.');
            console.log(JSON.stringify(err));
        });
});