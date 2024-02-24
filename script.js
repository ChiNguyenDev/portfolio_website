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



// Start the typing effect
typeRole();

