import { projects, skills } from "./data.js";

document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelector(".nav-links");
  const burgerMenu = document.querySelector(".burger-menu");
  const header = document.querySelector("header");

  let isIdle = false;
  let idleTimer;

  const setIdle = () => {
    if (window.innerWidth > 768) {
      isIdle = true;
      header.style.opacity = 0;
      header.style.transition = "opacity 0.5s ease";
    }
  };

  const setActive = () => {
    isIdle = false;
    header.style.opacity = 1;
    header.style.transition = "opacity 0.5s ease";
    clearTimeout(idleTimer);
    idleTimer = setTimeout(setIdle, 3000);
  };

  // Initial setup
  idleTimer = setTimeout(setIdle, 3000);

  // Toggle navigation links on smaller screens
  const toggleNav = () => {
    navLinks.classList.toggle("show");
  };

  burgerMenu.addEventListener("click", toggleNav);

  // Smooth scrolling for navigation links
  navLinks.addEventListener("click", function (e) {
    if (e.target.tagName === "A") {
      e.preventDefault();

      const targetId = e.target.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);

      window.scrollTo({
        top:
          targetElement.offsetTop -
          document.querySelector("header").offsetHeight,
        behavior: "smooth",
      });

      if (window.innerWidth <= 768) {
        toggleNav(); // Close the navigation on small screens
      }

      navLinks.querySelectorAll("a").forEach((link) => {
        link.classList.remove("active");
      });

      e.target.classList.add("active");
    }
  });

  // Adjust navigation links on scroll
  window.addEventListener("scroll", function () {
    if (!isIdle) {
      setActive();
    }

    const fromTop =
      window.scrollY + document.querySelector("header").offsetHeight;

    navLinks.querySelectorAll("a").forEach((link) => {
      const section = document.querySelector(link.getAttribute("href"));
      if (
        section.offsetTop <= fromTop &&
        section.offsetTop + section.offsetHeight > fromTop
      ) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  });

  // Handle mousemove to detect user activity
  document.addEventListener("mousemove", function () {
    if (isIdle) {
      setActive();
    }
  });
});

function toggleNav() {
  console.log("toggleNav function called");
  const navLinks = document.querySelector(".nav-links");
  navLinks.classList.toggle("show");

  const header = document.querySelector("header");
  header.style.transition = "opacity 0.5s ease";

  if (navLinks.classList.contains("show")) {
    header.style.opacity = 1;
  } else {
    setTimeout(() => {
      header.style.opacity = 0;
    }, 300);
  }
}

let close_btn = document.getElementById("x-button");
close_btn.addEventListener("click", () => {
  nav_links = document.querySelector(".nav-links");
  nav_links.classList.remove("show");
});

function renderSkills() {
  let aboutContent = document.querySelector(".about-content");
  let ul = document.createElement("ul");
  ul.classList.add("skill-list-container");
  for (let i = 0; i < skills.length; i++) {
    let li = document.createElement('li');
    li.classList.add('skill-list');
    let img  = document.createElement('img');
    img.setAttribute('src', skills[i].icon);
    li.appendChild(img)
    ul.appendChild(li)
}
aboutContent.appendChild(ul)
}
renderSkills()


function renderProjects(){
let projectCards = document.querySelector('.project-cards');

for(let i=0 ; i<projects.length;i++){
  let card =  document.createElement('div');
  card.classList.add('card');
  let cardImg = document.createElement('div');
  cardImg.classList.add('card-image');
  let img = document.createElement('img');
  img.setAttribute('src', projects[i].img);
  cardImg.appendChild(img);
  card.appendChild(cardImg)

  let cardContent = document.createElement('div')
  cardContent.classList.add('card-content')
  let title = document.createElement('h2');
  let technologies = document.createElement('p')
    technologies.innerText = "Technologies Used: ";
    for(let j =0 ; j<projects[i].technologies.length; j++){
        technologies.innerText = technologies.innerText + " "+ projects[i].technologies[j]
    }
    cardContent.appendChild(title);
    cardContent.appendChild(technologies);
card.appendChild(cardContent)
    let cardButtons = document.createElement('div')
    cardButtons.classList.add('card-buttons')
    for(let j=0; j<projects[i].buttons.length;j++){
        // buttons
        let button =  document.createElement('button')
        button.classList.add('btn');
        let btnLink = document.createElement('a')
        btnLink.href = projects[i].buttons[j].link;
        btnLink.target='_blank';
        btnLink.innerText = projects[i].buttons[j].name;
        button.appendChild(btnLink);
        cardButtons.appendChild(button)
    }
 card.appendChild(cardButtons)
    projectCards.appendChild(card)

}

}
renderProjects()