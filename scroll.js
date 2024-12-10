/*
=============== 
Fonts
===============
*/
@import url('https://fonts.googleapis.com/css?family=Open+Sans|Roboto:400,700&display=swap');

/*
=============== 
Variables
===============
*/

:root {
  /* dark shades of primary color*/
  --clr-primary-1: hsl(205, 86%, 17%);
  --clr-primary-2: hsl(205, 77%, 27%);
  --clr-primary-3: hsl(205, 72%, 37%);
  --clr-primary-4: hsl(205, 63%, 48%);
  /* primary/main color */
  --clr-primary-5: #49a6e9;
  /* lighter shades of primary color */
  --clr-primary-6: hsl(205, 89%, 70%);
  --clr-primary-7: hsl(205, 90%, 76%);
  --clr-primary-8: hsl(205, 86%, 81%);
  --clr-primary-9: hsl(205, 90%, 88%);
  --clr-primary-10: hsl(205, 100%, 96%);
  /* darkest grey - used for headings */
  --clr-grey-1: hsl(209, 61%, 16%);
  --clr-grey-2: hsl(211, 39%, 23%);
  --clr-grey-3: hsl(209, 34%, 30%);
  --clr-grey-4: hsl(209, 28%, 39%);
  /* grey used for paragraphs */
  --clr-grey-5: hsl(210, 22%, 49%);
  --clr-grey-6: hsl(209, 23%, 60%);
  --clr-grey-7: hsl(211, 27%, 70%);
  --clr-grey-8: hsl(210, 31%, 80%);
  --clr-grey-9: hsl(212, 33%, 89%);
  --clr-grey-10: hsl(210, 36%, 96%);
  --clr-white: #fff;
  --clr-red: #ff2f10;
  --clr-red-dark: hsl(360, 67%, 44%);
  --clr-red-light: hsl(360, 71%, 66%);
  --clr-green-dark: hsl(125, 67%, 44%);
  --clr-green-light: hsl(125, 71%, 66%);
  --clr-secondary: hsla(182, 63%, 54%);
  --clr-black: #222;
  --ff-primary: 'Roboto', sans-serif;
  --ff-secondary: 'Open Sans', sans-serif;
  --transition: all 0.3s linear;
  --spacing: 0.25rem;
  --radius: 0.5rem;
  --light-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  --dark-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  --max-width: 1170px;
  --fixed-width: 620px;
}
/*
=============== 
Global Styles
===============
*/
html {
  scroll-behavior: smooth;
}
*,
::after,
::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: var(--ff-secondary);
  background: var(--clr-grey-10);
  color: var(--clr-grey-1);
  line-height: 1.5;
  font-size: 0.875rem;
}
ul {
  list-style-type: none;
}
a {
  text-decoration: none;
}
img:not(.logo) {
  width: 100%;
}
img {
  display: block;
}

h1,
h2,
h3,
h4 {
  letter-spacing: var(--spacing);
  text-transform: capitalize;
  line-height: 1.25;
  margin-bottom: 0.75rem;
  font-family: var(--ff-primary);
  font-size: 57px;
}
h1 {
  font-size: 3rem;
}
h2 {
  font-size: 20px;
}
h3 {
  font-size: 1.25rem;
}
h4 {
  font-size: 0.875rem;
}
p {
  margin-bottom: 1.25rem;
  color: var(--clr-grey-5);
}
@media screen and (min-width: 800px) {
  h1 {
    font-size: 4rem;
  }
  h2 {
    font-size: 2.5rem;
  }
  h3 {
    font-size: 1.75rem;
  }
  h4 {
    font-size: 1rem;
  }
  body {
    /* font-size: 1rem; */
  }
  h1,
  h2,
  h3,
  h4 {
    line-height: 1;
  }
}
/*  global classes */

.btn {
  text-transform: uppercase;
  background: transparent;
  color: var(--clr-black);
  padding: 0.375rem 0.75rem;
  letter-spacing: var(--spacing);
  display: inline-block;
  transition: var(--transition);
  font-size: 0.875rem;
  border: 2px solid var(--clr-black);
  cursor: pointer;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  border-radius: var(--radius);
}
.btn:hover {
  color: var(--clr-white);
  background: var(--clr-black);
}
.btn-white {
  color: var(--clr-white);
  border-color: var(--clr-white);
  border-radius: 0;
  padding: 0.5rem 1rem;
}
.btn:hover {
  background: var(--clr-red);
  color: var(--clr-white);
}

/* section */
.section {
  padding-bottom: 5rem;
  padding-top: 30px;
}
.mark {
  width: 198px;
  /* color: red; */
  display: block;
  height: 2px;
  background: #ff2f10;
  margin: 0 auto;
}

.section-center {
  width: 90vw;
  margin: 0 auto;
  max-width: 1170px;
}
@media screen and (min-width: 992px) {
  .section-center {
    width: 95vw;
  }
  
}
main {
  min-height: 100vh;
  display: grid;
  place-items: center;
}

/* // scroll */

#home {
  background: linear-gradient(rgb(33 11 14 / 88%), hsl(174deg 85% 14% / 55%)),
    url(./img/5edited.jpg) bottom/cover no-repeat;
  /* background: linear-gradient(rgb(33 19 0 / 100%), hsl(0deg 0% 0% / 62%)),
    url(./img/5edited.jpg) bottom/cover no-repeat; */
  min-height: 100vh;
  background-blend-mode: color;
}

.logo-container {
  /* width: 55px; */
  /* margin: 10px 0px 13px 44px; */
  align-items: center;
  background: transparent;
  display: flex;
  justify-content: space-between;
  text-align: center;
}
.logo h3 {
  font-size: 2rem;
  font-family: 'Audiowide', cursive;
  padding-top: 1rem;
}
.logo {
  color: var(--clr-white);
  text-align: center;
  align-items: center;
}
.show-logo-color {
  color: black;
}
.logo h3 span {
  color: var(--clr-red);
}

.links a {
  margin: 0 1rem;
  text-transform: capitalize;
  font-family: monospace;
  color: rgb(85, 38, 122);
  font-size: 1rem;
  display: block;
  line-height: 2rem;
}
.links span {
  color: var(--clr-red);
}

/* banner */

.banner-container {
  display: grid;
  place-items: self-start;
  min-height: 100vh;
  align-items: center;
  overflow: hidden;
  margin: 0 auto;
  padding-top: 4rem;
}

.banner a {
  color: var(--clr-white);
  font-size: 12px;
  text-transform: uppercase;
  border: 1px solid var(--clr-red);
  border-radius: 20px;
  margin: 8px 1px;
  padding: 14px 20px;
  background: var(--clr-red);
  /* width: 14rem; */
}

.banner a:hover {
  background-color: white;
  color: var(--clr-red);
}

.banner p {
  margin: 0 auto;
  margin-bottom: 1rem;
  color: var(--clr-red);
  margin-left: 0;
  letter-spacing: 0.2rem;
  padding-bottom: 12px;
}
.banner h1 {
  letter-spacing: 0.3rem;
  text-transform: capitalize;
  /* font-family: 'Koh Santepheap', cursive; */
  font-family: 'Cormorant Garamond', serif;
  font-size: 2.5rem;
  color: white;
}

.banner h3 {
  color: white;
  font-weight: 100;
  letter-spacing: 0.3rem;
  margin: 2rem 0rem;
  /* font-family: 'Koh Santepheap', cursive; */
  padding: 1rem 0rem;
}

/* Add your existing styles here */

/* Style for the text animation */
.text-animation {
  font-size: 24px; /* Adjust the font size as needed */
  overflow: hidden; /* Hide overflowing characters */
  white-space: break-spaces; /* Prevent line break */
  position: relative;
}

/* Style for the individual letters */
.text-animation span {
  /* display: inline-block; */
  opacity: 0;
  transform: scale(0.2); /* Start with small size (hidden) */
  animation: scaleIn 3s forwards infinite; /* Apply the animation infinitely */
  animation-delay: var(--animation-delay);
}

/* Keyframes animation for Scale In effect */
@keyframes scaleIn {
  0% {
    transform: scale(0.2); /* Start with small size (hidden) */
    opacity: 0;
  }
  50% {
    transform: scale(1.2); /* Scale up to a larger size */
    opacity: 1; /* Fade in the letter */
  }
  100% {
    transform: scale(1); /* Scale up to normal size */
  }
}

.programmer {
  color: red;
}


.links-container {
  padding-right: 43px;
  height: 0;
  overflow: hidden;
  transition: var(--transition);
  background-color: white;
}

button.nav-toggle {
  background: transparent;
  border: none;
  color: #286d87;
  width: 53px;
  font-size: 25px;
  cursor: pointer;
  margin-right: 12px;
  animation: bounce 2s ease-in-out infinite;
}
button.nav-toggle:hover {
  color: #004299;
}
/* section  */

#about,
#services,
#tours,
#problem-solving,
#experience,
#skills
 {
  min-height: 80vh;
}
#services {
  background: white;
}
.section h2 {
  text-align: center;
}

.section h2 span {
  color: #6c3508;
}

.footer {
  background: #181511;
  text-align: center;
  /* position: relative; */
  /* display: grid; */
  overflow: hidden;
}

.footer p {
  /* padding-top: 101px; */
  padding-bottom: 20px;
  color: white;
  letter-spacing: var(--spacing);
}
p.ihbadhon {
  padding-top: 50px;
  font-weight: bold;
  font-size: 22px;
  padding-bottom: 0;
  margin-bottom: 15px;
}

.top-link {
  position: fixed;
  bottom: 3rem;
  right: 3rem;
  font-size: 24px;
  background: #6c3508;
  width: 2rem;
  height: 2rem;
  text-align: center;
  color: white;
  visibility: hidden;
  animation: bounce 2s ease infinite;
  border-radius: 10px;
}

.show-top-link {
  visibility: visible;
}

.fixed-nav {
  background: white;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  box-shadow: -8px -10px 20px 0px #0f173a;
  padding: 0px 0px 1px 44px;
  z-index: 1000;
}
.fixed-nav .links a {
  color: #153f63;
}

.show-links {
  height: 120px;
}

img.tour-img {
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 9px;
  height: 400px;
  width: -webkit-fill-available;
}

@media screen and (min-width: 768px) {
  .container p {
    max-width: 40rem;
  }
}

/*  About Section */
.bio {
  padding-top: 25px;
}
.edu_bio {
  overflow: hidden;
  width: 100%;
}
.backgroundbio {
  background: #ebeff1;
}
.bioinfo {
  display: flex;
  justify-content: start;
  width: 100%;
  border-bottom: 1px solid #c8d4da;
}

.title_head h2.title {
  text-align: left;
  font-size: 20px;
  border-bottom: 1px solid darkgrey;
  padding-bottom: 8px;
  letter-spacing: var(--spacing);
}

.college {
  display: flex;
  /* justify-content: start; */
  width: 100%;
  margin-bottom: 11px;
  margin: 0 auto;
  text-align: center;
}

.university {
  display: flex;
  justify-content: start;
  width: 100%;
}

.education {
  margin-bottom: 35px;
  margin-top: 24px;
}
span.department {
  text-align: left;
  float: left;
}

/* education  */
/* Style for the education container */
.education {
  display: grid;
  flex-direction: column; /* Place items in separate columns */
   /* Align items to the left */
  align-items: center;
  justify-content: space-between;
  align-content: space-between;
  flex-wrap: wrap;
}

/* Style for each education item (university and college) */
.education .university,
.education .college {
  width: 100%; /* Each item takes up the full width of its column */
  padding: 20px;
  /* border: 1px solid #ccc; */
  margin-bottom: 20px; /* Add some space between items */
  text-align: left; /* Align text to the left */
  display: grid;
  border-bottom: 2px solid #e2e4e5;
}

/* Style for the logo container (you can add specific dimensions and background images) */
.education .logo {
  /* Add your logo styling here */
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 100%;
  margin: 0;
}

/* Style for headings and paragraphs */
.education h2 {
  font-size: 24px;
  margin-top: 10px;
}

.education h3 {
  font-size: 15px;
  margin-top: 5px;
  /* text-align: center; */
}

.education p {
  margin-top: 4px;
  margin-bottom: 0px;
  font-size: 15px;
  text-align: center;
}
.education .logo img {
  width: 20%;
  float: center;
  border-radius: 87px;
  box-shadow: 0px 8px 5px 7px rgba(0, 0, 0, 0.2);
  /* margin: 0 auto; */
  text-align: center;
}
.logo.unilogo {
  /* width: 85%; */
}

.education h2, h3 {
  text-align: center;
  font-size: 20px;
  letter-spacing: .10rem;
  color: #454545;
}

/* end education  */

/*  start skill section  */
.skills-section {
  /* display: flex; */
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  text-align: center;
  justify-content: center;
}

.left-column {
  flex: 1;
  width: 100%;
  overflow: hidden;
  padding: 10px;
  /* You can add more styling here */
  text-align: center;
  margin: 0 auto;
}

.left-column img {
  max-width: 100%;
  height: auto;
  display: block;
}

.right-column {
  /* flex: 1; */
  width: 95%;
  /* padding: 10px; */
  /* You can add more styling here */
  overflow: hidden;
  text-align: left;
  margin: 0 auto;
}

.right-column p {
  margin-bottom: 10px;
  /* You can add more styling here */
}
.left-column svg {
  font-size: 108px;
}
section#skills .container {
  /* display: flex; */
  /* flex-direction: row; */
  /* flex-wrap: wrap; */
  /* align-content: flex-start; */
  justify-content: center;
  overflow: hidden;
  text-align: center;
  margin: 0 auto;
}
.right-column img {
  width: 18px;
  float: left;
  margin-right: 9px;
}
/* end skill section  */
.left {
  width: 180px;
  float: left;
  text-align: left;
  font-size: 15px;
  line-height: 41px;
  margin-right: 110px;
}

.right {
  text-align: left;
  float: left;
  width: 185px;
  line-height: 41px;
}
.line_height {
  line-height: 25px;
}

/* contact section*/
section#subscribe {
  position: relative;
  margin-bottom: -159px;
}

.subBoxsingle {
  /* float: left; */
  width: 330px;
  /* margin-left: 41px; */
  text-align: center;
  margin-bottom: 25px;
}

.subBoxsingle h2 {
  letter-spacing: -1px;
  padding-bottom: 1px;
  color: #9f9fab;
  font-size: 25px;
}

.inputboxes input:first-child {
  border-radius: 50px;
  padding: 7px 10px;
  /* border: 1px solid #ff5200; */
  letter-spacing: 1px;
  border: 0;
  outline: none;
  background: #d1d1d7;
}

.inputboxes {
  overflow: hidden; /* border-radius: 73px; */
}

.inputboxes input:last-child {
  padding: 7px 10px;
  border-radius: 50px;
  margin-left: -41px;
  background: #181511;
  color: white;
  font-weight: 600;
  border: 1px solid #181511;
  cursor: pointer;
}

.subBoxsingle p {
  line-height: 0;
  color: #9b9292;
}

.subfollowicons a {
  color: white;
  border: 1px solid white;
  border-radius: 50px;
  padding: 6px;
  margin-right: 8px;
  transition: 0.3s ease;
}

.subfollowicons a i {
  height: 10px;
  width: 20px;
  text-align: center;
}
section#subscribe {
  position: relative;
  margin: 0 auto;
  overflow: hidden;
  background: #6c3508;
  width: 90%;
  justify-content: center;
  justify-items: center;
  text-align: center;
  margin-bottom: -35px;
}

.subfollowicons a:hover {
  background: white;
  color: black;
}
.subfollowicons {
  padding-top: 8px;
}
.subBoxeswrapper {
  padding-top: 14px;
  text-align: center;
  justify-content: center;
  justify-items: center;
  display: grid;
}

/* services section*/

/*..services section..*/

#services {
  background: #f5f6f6;
}
.singlebox {
  width: 99%;
  text-align: center;
  border: 1px solid #f3e9e9;
  background: white;
  float: left;
  /* margin-right: 30px; */
  transition: 0.3s ease;
  border-radius: 5px;
  margin-bottom: 5px;
  flex: 0 calc(50% - 10px);
}
.singlebox:nth-child(4) {
  margin-right: 0;
}
.singlebox:hover {
/* background: #ff5200; */
  /* background: #6c3508; */
  box-shadow: 0 20px 30px -10px rgba(0,0,0,.2);
}

.singlebox:hover .sboxicon i,
.singlebox:hover .sboxdesc p,
.singlebox:hover .sboxlink a,
.singlebox:hover .sboxlink i,
.singlebox:hover .sboxtitle h2 {
  /* color: white; */
}
.sboxwrapper {
  overflow: hidden;
  margin-top: 30px;
}
.active {
  background: #6c3508;
  color: white;
}
.active i {
  color: white !important;
}
.active p {
  color: white !important;
}
.active a {
  color: white !important;
}
.sboxicon i {
  color: #6c3508;
  font-size: 55px;
  padding: 38px;
}

.sboxtitle h2 {
  font-size: 22px;
  padding-bottom: 30px;
  letter-spacing: 0px;
  transition: none !important;
  text-transform: uppercase;
  cursor: pointer;
  line-height: 25px;
}

.sboxdesc p {
  padding: 0px 20px;
  color: #7b7474e3;
  margin-bottom: 22px;
  line-height: 25px;
}

.sboxlink a {
  color: #6c3508;
  font-size: 18px;
  font-weight: 500;
}

.sboxlink {
  padding-bottom: 38px;
}
.sboxlink i {
  color: #6c3508;
  padding: 0px 12px;
  cursor: pointer;
}
/*..end of services section..*/

/* Activities section*/

/* Style for the problem-solving section */
#problem-solving {
  margin-top: 20px;
}
p.activities-head {font-family: revert;font-size: large;padding-top: 14px;text-align: center;}

/* Style for the image boxes */
.image-boxes {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  text-align: center;
  border: 1px solid #eaecee;
}

.image-box {
  /* width: calc(33.33% - 20px); */
  margin-bottom: 20px;
  text-align: center;
  width: 97%;
  align-items: center;
  align-content: center;
  height: 53%;
}

.image-box img {
  max-width: 85%;
  /* border: 2px solid #ccc; */
  border-radius: 5px;
  text-align: center;
  align-self: center;
  background-position: center;
  margin: 0 auto;
  /* padding: 14px; */
  margin-left: 24px;
  height: 300px;
}


.card-title {
    color: #000;
    font-size: 22px;
    line-height: 24px;
    font-weight: 700;
    margin: 15px 0 0;
}
.image-box p {
  margin: 10px 0;
}
img.toph {
  padding: 19px;
}
/* Style for the Codeforces handle link */
.image-box a {
  color: #007BFF;
  text-decoration: none;
  font-weight: bold;
}

/* end activities section */

/* for desktop */
@media screen and (min-width: 800px) {
  nav {
    background: transparent;
  }
  .sboxwrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .nav-center {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
  }
  .links {
    display: flex;
    justify-content: space-between;
    background: transparent;
  }

  .links-container {
    height: auto !important;
  }
  .nav-toggle {
    visibility: hidden;
  }
  .logo-toggle {
    background: transparent;
  }
  .links a {
    color: white;
    background: transparent;
  }
  .links-container {
    background: transparent;
  }
  .banner p {
    max-width: 40rem;
  }
  .banner-container {
    padding-top: 10rem;
    align-items: flex-start;
  }
  .banner h1 {
    text-transform: capitalize;
    font-family: 'Cormorant Garamond', serif;
    font-size: 6rem;
    color: white;
  }

  .banner h3 {
    color: white;
    font-weight: 400;
    letter-spacing: 0.3rem;
    margin: 2rem 0rem;
  }

  /* id */
  #feature_img {
    margin-top: 40px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    align-items: flex-start;
    overflow: hidden;
  }

  img.tour-img {
    width: 19.5%;
    margin-right: auto;
    margin-left: auto;
    height: 200px;
    margin-bottom: 4px;
    cursor: pointer;
    display: block;
    overflow: hidden;
    background-size: cover;
    transition: 0.3s ease transform;
  }

  .subBoxeswrapper {
    display: flex;
    justify-content: space-around;
    padding-top: 15px;
  }
  p.activities-head {
    text-align: left;
}

/* education section  */
/* Style for the education container */
.education {
  display: grid;
  flex-direction: column; /* Place items in separate columns */
   /* Align items to the left */
  align-items: left;
  justify-content: space-between;
  align-content: space-between;
  flex-wrap: wrap;
}

/* Style for each education item (university and college) */
.education .university,
.education .college {
  width: 100%; /* Each item takes up the full width of its column */
  padding: 20px;
  /* border: 1px solid #ccc; */
  margin-bottom: 20px; /* Add some space between items */
  text-align: left; /* Align text to the left */
  display: grid;
  border-bottom: 2px solid #e2e4e5;
}

/* Style for the logo container (you can add specific dimensions and background images) */
.education .logo {
  /* Add your logo styling here */
  width: 65%;
  text-align: lec;
  display: flex;
  flex-direction: row;
  padding-bottom: 9px;
}

/* Style for headings and paragraphs */
.education h2 {
  font-size: 24px;
  margin-top: 10px;
}

.education h3 {
  font-size: 18px;
  margin-top: 5px;
}

.education p {
  margin-top: 4px;
  margin-bottom: 0px;
  font-size: 15px;
  float: left;
  text-align: left;
}
.education .logo img {
  /* width: 20%; */
  float: left;
  border-radius: 87px;
  box-shadow: 0px 8px 5px 7px rgba(0, 0, 0, 0.2);
  margin: 0;
  text-align: left;
}
.logo.unilogo {
}

.education h2, h3 {
  text-align: left;
  /* font-size: 20px; */
  letter-spacing: .10rem;
  color: #454545;
}

.right-column {
  flex: 1;
  width: 95%;
  /* padding: 10px; */
  /* You can add more styling here */
  overflow: hidden;
  text-align: left;
  margin: 0 auto;
}
section#skills .container {
  display: flex;
  padding-top: 20px;
}
.right-column .lan {
  color: #1454c2;
}

/* education section  */
}

/* Add your existing styles here */

/* Style for the modal */
.modal {
  display:none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgb(0 0 0 / 90%);;
  z-index: 1;
}

/* Style for the modal content */
.modal-content {
  display: block;
  margin: auto;
  top: 15%;
  max-width: fit-content;
  max-height: 100%;
  position: relative;
}

/* Style for the close button */
.close {
  position: absolute;
  top: 15px;
  right: 15px;
  font-size: 25px;
  color: white;
  cursor: pointer;
}

img.tour-img:hover {
  transform: scale(1.1);
}
.social {
  font-size: 30px;
  color: white;
  margin-bottom: 15px;
}

.icon {
  font-size: 20px;
  margin-right: 15px;
  border: 1px solid white;
  border-radius: 100%;
  padding: 9px;
  width: 39px;
  color: #6c3508;
}
span.ih_prev {
  color: #6c3508;
  margin-right: 0;
}

span.ih_next {
  color: #6c3508;
  margin-left: 0;
  padding-left: 0;
}
/* end desktop size */

/* contianer */

.container {
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}

@media screen and(min-width:576px) {
  .container {
    max-width: 540px;
  }
  img.toph {
    padding: 25px;
  }
  
}

@media screen and (min-width: 768px) {
  .container {
    max-width: 720px;
  }
}
@media screen and (min-width: 992px) {
  .container {
    max-width: 960px;
  }
  .banner {
    padding-left: 0rem;
    margin-left: 0;
  }
  img.toph {
    padding: 90px;
  }
}

@media screen and (min-width: 1200px) {
  .container {
    max-width: 1200px;
  }
}

/* animation */
@keyframes bounce {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.3);
  }
  100% {
    transform: scale(1);
  }
}
