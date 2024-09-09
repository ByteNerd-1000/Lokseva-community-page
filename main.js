// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // Fade in elements on page load
  fadeInOnLoad();

  // Slide in sections on scroll
  window.addEventListener("scroll", slideInOnScroll);

  // Add button hover effect
  const buttons = document.querySelectorAll(".cta-btn");
  buttons.forEach((button) => {
    button.addEventListener("mouseenter", addHoverEffect);
    button.addEventListener("mouseleave", removeHoverEffect);
  });
});

// Function to fade in elements on page load
function fadeInOnLoad() {
  const fadeElements = document.querySelectorAll(".fade-in");
  fadeElements.forEach((element, index) => {
    setTimeout(() => {
      element.style.opacity = 1;
      element.style.transform = "translateY(0)";
    }, 200 * index); // Delay for staggered effect
  });
}

// Function to slide in elements on scroll
function slideInOnScroll() {
  const slideElements = document.querySelectorAll(".slide-in");
  slideElements.forEach((element) => {
    const rect = element.getBoundingClientRect();
    if (rect.top < window.innerHeight - 150) {
      element.style.opacity = 1;
      element.style.transform = "translateX(0)";
    }
  });
}

// Button hover effect using JavaScript
function addHoverEffect(event) {
  const button = event.target;
  button.style.backgroundColor = "#ff9800";
  button.style.transform = "scale(1.05)";
}

function removeHoverEffect(event) {
  const button = event.target;
  button.style.backgroundColor = "";
  button.style.transform = "scale(1)";
}
