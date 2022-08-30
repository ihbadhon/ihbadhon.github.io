const navToggleBtn = document.querySelector('.nav-toggle');
const linksContainer = document.querySelector('.links-container');
const links = document.querySelector('.links');

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
