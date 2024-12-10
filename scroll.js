const navToggleBtn = document.querySelector('.nav-toggle');
const linksContainer = document.querySelector('.links-container');
const links = document.querySelector('.links');
const da_te = document.getElementById('date');


const d = new Date();
da_te.innerHTML = d.getFullYear();

navToggleBtn.addEventListener('click', function () {
  // linksContainer.classList.toggle('show-links')
  let linksHeight = links.getBoundingClientRect().height;
  let containerHeight = linksContainer.getBoundingClientRect().height;

  if (containerHeight === 0) {
    linksContainer.style.height = `${linksHeight}px`;
  } else {
    linksContainer.style.height = 0;
  }
});

const nav = document.getElementById('nav');
const logo = document.querySelector('.logo');
const topLink = document.querySelector('.top-link');

window.addEventListener('scroll', function () {
  const navHeight = nav.getBoundingClientRect().height;
  //   console.log(navHeight);
  const scrollHeight = window.pageYOffset;
  //   console.log(scrollHeight);
  if (scrollHeight > navHeight) {
    nav.classList.add('fixed-nav');
    logo.style.color = 'black';
  } else {
    nav.classList.remove('fixed-nav');
    logo.style.color = 'white';
  }
  /// top link
  if (scrollHeight > 520) {
    topLink.classList.add('show-top-link');
  } else {
    topLink.classList.remove('show-top-link');
  }
});

const scrollLinks = document.querySelectorAll('.scroll-link');

scrollLinks.forEach((link) => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const getId = e.currentTarget.getAttribute('href').slice(1);
    // console.log(getId);
    const id = document.getElementById(getId);
    const navHeight = nav.getBoundingClientRect().height;
    const containerHeight = links.getBoundingClientRect().height;
    const fixedNav = nav.classList.contains('fixed-nav');
    let sectionPosition = id.offsetTop - navHeight;
    // console.log(sectionPosition);
    if (!fixedNav) {
      sectionPosition = sectionPosition - navHeight;
    }
    if (containerHeight > 83) {
      sectionPosition = sectionPosition + containerHeight;
    }

    window.scrollTo({
      top: sectionPosition,
      left: 0,
    });
    linksContainer.style.height = 0;
  });
});

// Get references to HTML elements
const modal = document.getElementById('imageModal');
const modalImage = document.getElementById('modal-image');
const tourImages = document.querySelectorAll('.tour-img');
const closeButton = document.querySelector('.close');

// Add a click event listener to each tour image
tourImages.forEach((image) => {
  image.addEventListener('click', () => {
    modal.style.display = 'block'; // Display the modal
    modalImage.src = image.src; // Set the modal image source to the clicked image
  });
});

// Close the modal when the close button is clicked
closeButton.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Close the modal when the background is clicked
modal.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});

// Optional: Close the modal when the 'Esc' key is pressed
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    modal.style.display = 'none';
  }
});

// JavaScript to trigger the text animation
const textContainer = document.querySelector('.text-animation');
const text = textContainer.textContent.trim();
textContainer.innerHTML = ''; // Clear the original text

// Loop through each character in the text and wrap it in a span element
for (const char of text) {
  const charElement = document.createElement('span');
  charElement.textContent = char;
  textContainer.appendChild(charElement);
}

// Calculate animation delays for each letter
const letters = textContainer.querySelectorAll('span');
letters.forEach((letter, index) => {
  letter.style.setProperty('--animation-delay', `${index * 0.1}s`);
});

// education section
// Function to check if an element is in the viewport
function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Function to handle scrolling
function handleScroll() {
  var aboutSection = document.querySelector(".section");

  const navHeight = aboutSection.getBoundingClientRect().height;
  //   console.log(navHeight);
  const scrollHeight = window.pageYOffset;
    console.log(scrollHeight);
  /// top link
  if (scrollHeight > 300) {
    aboutSection.classList.add('appear');
  } else {
    topLink.classList.remove('');
  }
}

// Add a scroll event listener to trigger the animation when scrolling
window.addEventListener("scroll", handleScroll);

// Initial check on page load
handleScroll();


///skill section start....
const myLordIcon = document.getElementById("myLordIcon");

// Define a function to restart the animation
function restartAnimation() {
    myLordIcon.load();
    myLordIcon.play();
}

// Start the animation when the page loads
myLordIcon.load();
myLordIcon.play();

// Set an interval to restart the animation periodically (adjust the interval as needed)
setInterval(restartAnimation, 15000); // Restart every 5 seconds
