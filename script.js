// Smooth scrolling for anchor links
const navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();

    const target = document.querySelector(link.getAttribute('href'));
    target.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  });
});

// Fade in animation for sections on scroll
const sections = document.querySelectorAll('section');

const fadeIn = (element) => {
  element.style.opacity = '1';
  element.style.transform = 'translateY(0)';
};

const debounce = (fn, delay) => {
  let timeout;
  return function () {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      fn.apply(this, arguments);
    }, delay);
  };
};

const fadeInSections = () => {
  sections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (sectionTop < windowHeight - 100) {
      fadeIn(section);
    }
  });
};

document.addEventListener(
  'scroll',
  debounce(() => {
    fadeInSections();
  }, 10)
);
