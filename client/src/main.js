// Import styles
import './style.css'
// Local fallback data (optional, or remove once DB is seeded)
let blogPosts = [];
let portfolioItems = [];

const API_URL = 'http://localhost:3000/api';

async function fetchData() {
  try {
    const blogRes = await fetch(`${API_URL}/blog`);
    blogPosts = await blogRes.json();

    const portfolioRes = await fetch(`${API_URL}/portfolio`);
    portfolioItems = await portfolioRes.json();

    // Re-render components that depend on this data
    renderBlogPosts();
    renderPortfolioItems();
  } catch (error) {
    console.error('Failed to fetch data:', error);
  }
}

// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); } 

// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });

// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// modal toggle function
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}

// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {

  testimonialsItem[i].addEventListener("click", function () {

    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;

    testimonialsModalFunc();

  });

}

// add click event to modal close button
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);

// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { elementToggleFunc(this); });

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase().trim();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);

  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {

  for (let i = 0; i < filterItems.length; i++) {

    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }

  }

}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {

  filterBtn[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase().trim();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;

  });

}

// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
}

// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// details variables
const detailsPage = document.querySelector("[data-page='details']");
const detailsTitle = document.querySelector("[data-details-title]");
const detailsImg = document.querySelector("[data-details-img]");
const detailsCategory = document.querySelector("[data-details-category]");
const detailsDate = document.querySelector("[data-details-date]");
const detailsText = document.querySelector("[data-details-text]");
const backBtn = document.querySelector("[data-back-btn]");

// function to show page
const showPage = function (pageName) {
  // Show/hide pages
  for (let i = 0; i < pages.length; i++) {
    if (pageName === pages[i].dataset.page) {
      pages[i].classList.add("active");
    } else {
      pages[i].classList.remove("active");
    }
  }

  // Manage navigation link active states
  for (let i = 0; i < navigationLinks.length; i++) {
    if (pageName === navigationLinks[i].innerText.toLowerCase().trim()) {
      navigationLinks[i].classList.add("active");
    } else {
      // Don't remove active class if we're on the details page
      // so the back button knows which tab to return to
      if (pageName !== "details") {
        navigationLinks[i].classList.remove("active");
      }
    }
  }
  
  window.scrollTo(0, 0);
}

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {
    showPage(this.innerText.toLowerCase().trim());
  });
}

// function to show details
const showDetails = function (item) {
  detailsTitle.innerText = item.title;
  detailsImg.src = item.image;
  detailsImg.alt = item.title;
  detailsCategory.innerText = item.category;
  
  if (item.date) {
    detailsDate.innerText = item.date;
    detailsDate.parentElement.style.display = "flex";
  } else {
    detailsDate.parentElement.style.display = "none";
  }
  
  detailsText.innerHTML = item.content;
  showPage("details");
}

// add click event to all portfolio items
const portfolioItemElements = document.querySelectorAll(".project-item");
for (let i = 0; i < portfolioItemElements.length; i++) {
  portfolioItemElements[i].addEventListener("click", function (e) {
    e.preventDefault();
    const id = this.dataset.id;
    const item = portfolioItems.find(p => p.id === id);
    if (item) showDetails(item);
  });
}

// Function to render blog posts
function renderBlogPosts() {
  const blogList = document.querySelector(".blog-posts-list");
  if (!blogList) return;
  
  blogList.innerHTML = blogPosts.map(post => `
    <li class="blog-post-item" data-id="${post.id}">
      <a href="#">
        <figure class="blog-banner-box">
          <img src="${post.image}" alt="${post.title}" loading="lazy">
        </figure>
        <div class="blog-content">
          <div class="blog-meta">
            <p class="blog-category">${post.category}</p>
            <span class="dot"></span>
            <time datetime="${post.date}">${post.date}</time>
          </div>
          <h3 class="h3 blog-item-title">${post.title}</h3>
        </div>
      </a>
    </li>
  `).join('');

  // Re-attach listeners
  const blogItemElements = document.querySelectorAll(".blog-post-item");
  for (let i = 0; i < blogItemElements.length; i++) {
    blogItemElements[i].addEventListener("click", function (e) {
      e.preventDefault();
      const id = this.dataset.id;
      const item = blogPosts.find(b => b.id === id);
      if (item) showDetails(item);
    });
  }
}

// Function to render portfolio items
function renderPortfolioItems() {
  const portfolioList = document.querySelector(".project-list");
  if (!portfolioList) return;

  portfolioList.innerHTML = portfolioItems.map(item => `
    <li class="project-item active" data-filter-item data-category="${item.category.toLowerCase()}">
      <a href="#" data-id="${item.id}">
        <figure class="project-img">
          <div class="project-item-icon-box">
            <ion-icon name="eye-outline"></ion-icon>
          </div>
          <img src="${item.image}" alt="${item.title}" loading="lazy">
        </figure>
        <h3 class="project-title">${item.title}</h3>
        <p class="project-category">${item.category}</p>
      </a>
    </li>
  `).join('');

  // Re-attach listeners
  const portfolioItemElements = document.querySelectorAll(".project-item a");
  for (let i = 0; i < portfolioItemElements.length; i++) {
    portfolioItemElements[i].addEventListener("click", function (e) {
      e.preventDefault();
      const id = this.dataset.id;
      const item = portfolioItems.find(p => p.id === id);
      if (item) showDetails(item);
    });
  }
}

// Initial fetch
fetchData();

// back button event
backBtn.addEventListener("click", function () {
  // Go back to the previous page or default to about
  const activeNavItem = document.querySelector(".navbar-link.active");
  if (activeNavItem) {
    showPage(activeNavItem.innerText.toLowerCase().trim());
  } else {
    showPage("about");
  }
});
