import { projects, skills } from "./data.js";

document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelector(".nav-links");
  const burgerMenu = document.querySelector(".burger-menu");
  const header = document.querySelector("header");

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
   
  });
});

let close_btn = document.getElementById("x-button");
close_btn.addEventListener("click", () => {
  let nav_links = document.querySelector(".nav-links");
  nav_links.classList.remove("show");
});

// create skill box and render
function renderSkills() {
  let aboutContent = document.querySelector(".about-content");
  let ul = document.createElement("ul");
  ul.classList.add("skill-list-container");
  for (let i = 0; i < skills.length; i++) {
    let li = document.createElement("li");
    li.classList.add("skill-list");
    let img = document.createElement("img");
    img.setAttribute("src", skills[i].icon);
    li.appendChild(img);
    ul.appendChild(li);
  }
  aboutContent.appendChild(ul);
}
renderSkills();



// create project card and render


function renderProjects() {
  const projectCardsContainer = document.getElementById("project-cards");
  projects.forEach((project) => {
      // Create project card
      const projectCard = document.createElement("div");
      projectCard.classList.add("project-card");

      // Add project image
      const projectImage = document.createElement("img");
      projectImage.src = project.img;
      projectImage.alt = project.title;
      projectCard.appendChild(projectImage);

      // Create project content div
      const projectContent = document.createElement("div");
      projectContent.classList.add("project-content");

      // Add project title
      const projectTitle = document.createElement("h3");
      projectTitle.classList.add("project-title");
      projectTitle.textContent = project.title;
      projectContent.appendChild(projectTitle);

      // Add project description
      const projectDescription = document.createElement("p");
      projectDescription.classList.add("project-description");
      projectDescription.textContent = project.description;
      projectContent.appendChild(projectDescription);

      // Add project technologies
      const projectTechnologies = document.createElement("p");
      projectTechnologies.classList.add("project-technologies");
      projectTechnologies.textContent = `Technologies: ${project.technologies.join(", ")}`;
      projectContent.appendChild(projectTechnologies);

      // Add buttons
      let buttonGroup = document.createElement('div');
      buttonGroup.classList.add("button-group")
      project.buttons.forEach((button) => {
          const projectLink = document.createElement("a");
          projectLink.classList.add("btn");
          projectLink.href = button.link;
          projectLink.textContent = button.name;
          projectLink.target = "_blank"; // Open in new tab
          buttonGroup.appendChild(projectLink);
      });
      projectContent.appendChild(buttonGroup)

      // Append project content to project card
      projectCard.appendChild(projectContent);

      // Append project card to project cards container
      projectCardsContainer.appendChild(projectCard);
  });
}


renderProjects();

