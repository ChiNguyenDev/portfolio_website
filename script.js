const roles = ["Software Developer", "CompSci Student", "Cloud Enthusiast"];
let currentRole = 0;
let currentChar = 0;
let direction = 'forward';
const typingSpeed = 130; // milliseconds
const roleElement = document.getElementById('role');

function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
function typeRole() {
  roleElement.style.color = "lightSkyBlue"; // Set the color for all roles

  if (direction === 'forward') {
    if (currentChar < roles[currentRole].length) {
      roleElement.textContent += roles[currentRole].charAt(currentChar);
      currentChar++;
      setTimeout(typeRole, typingSpeed);
    } else {
      setTimeout(typeRole, typingSpeed * 3); // Wait a bit at the end of typing
      direction = 'backward';
    }
  } else {
    if (currentChar > 0) {
      roleElement.textContent = roleElement.textContent.substring(0, roleElement.textContent.length - 1);
      currentChar--;
      setTimeout(typeRole, typingSpeed / 2); // Delete faster
    } else {
      currentRole = (currentRole + 1) % roles.length; // Move to the next role
      direction = 'forward';
      setTimeout(typeRole, typingSpeed);
    }
  }
}

// opens modal for project description
// Modified toggleModal function
function adjustSpacingForAllModals() {
  var allModals = document.querySelectorAll('.modal'); // Assuming all your modals have the class 'modal'
  var projectsSection = document.getElementById('projects');
  var anyModalOpen = Array.from(allModals).some(modal => modal.style.display === "block");

  if (anyModalOpen) {
    // Find the tallest open modal to determine the needed spacing
    var maxHeight = 0;
    allModals.forEach(modal => {
      if (modal.style.display === "block" && modal.offsetHeight > maxHeight) {
        maxHeight = modal.offsetHeight;
      }
    });
    // Adjust the '20' value as needed to control the gap
    projectsSection.style.marginBottom = maxHeight + 20 + 'px';
  } else {
    // Reset the margin if all modals are closed
    projectsSection.style.marginBottom = '0px';
  }
}

// Modified toggleModal function
function toggleModal(modalId, btnElement) {
  var modal = document.getElementById(modalId);

  if (modal.style.display === "block") {
    modal.style.display = "none";
    btnElement.classList.remove("btn-active");
  } else {
    modal.style.display = "block";
    btnElement.classList.add("btn-active");
  }

  // Adjust the spacing for all modals after toggling
  adjustSpacingForAllModals();
}



document.addEventListener('DOMContentLoaded', function() {
  // Initialize all slideshows on the page
  initAllSlideshows();

  // Typing effect for roles
  typeRole();
});

function initAllSlideshows() {
  const slideshowContainers = document.querySelectorAll('.slideshow-container');
  slideshowContainers.forEach(container => initSlideshow(container));
}

function initSlideshow(slideshowContainer) {
  let slideIndex = 1;
  showSlides(slideIndex, slideshowContainer);

  // Next/previous controls
  slideshowContainer.querySelector('.prev').addEventListener('click', () => {
    showSlides(slideIndex -= 1, slideshowContainer);
  });

  slideshowContainer.querySelector('.next').addEventListener('click', () => {
    showSlides(slideIndex += 1, slideshowContainer);
  });

  function showSlides(n, container) {
    let slides = container.getElementsByClassName("mySlides");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    Array.from(slides).forEach(slide => slide.style.display = "none");
    slides[slideIndex - 1].style.display = "block";
  }
}


