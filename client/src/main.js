// Import styles
import './style.css';
import './search.css';
import { blogPosts as dataBlogPosts, portfolioItems as dataPortfolioItems } from './data.js';

// Local variables to hold data
const blogPosts = dataBlogPosts.sort((a, b) => new Date(b.date) - new Date(a.date));
const portfolioItems = dataPortfolioItems;

// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }

// sidebar variables
console.log('Loaded blogPosts:', blogPosts);
console.log('Loaded portfolioItems:', portfolioItems);

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

// State for filtering
let currentCategory = "all";
let currentSearchTerm = "";

// Helper to filter and render
const filterAndRender = () => {
  // Filter Portfolio
  const filteredPortfolio = portfolioItems.filter(item => {
    const matchesCategory = currentCategory === "all" || item.category.toLowerCase() === currentCategory;
    const matchesSearch = item.title.toLowerCase().includes(currentSearchTerm.toLowerCase()) || 
                          item.category.toLowerCase().includes(currentSearchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });
  renderPortfolioItems(filteredPortfolio);

  // Filter Blog (Category 'all' usually applies to everything in simple implementations, 
  // but blog posts also have categories. For now, let's say the category filter is mostly for Portfolio 
  // unless we unify them. The user UI shows filters specifically in the Portfolio section. 
  // So lets only filter Blog by Search Term for now, unless the Mobile Filter is global).
  // The Mobile Filter has chips like "Backend", "Embedded Systems".
  
  const filteredBlog = blogPosts.filter(post => {
    // If currentCategory is one of the Portfolio ones (Web Design etc), it might not match Blog categories (Backend etc).
    // Let's match strictly if specific, or if 'all'.
    // Actually, let's treat the Category filter as Global if it matches.
    const matchesCategory = currentCategory === "all" || post.category.toLowerCase() === currentCategory;
     const matchesSearch = post.title.toLowerCase().includes(currentSearchTerm.toLowerCase()) || 
                           post.category.toLowerCase().includes(currentSearchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });
  renderBlogPosts(filteredBlog);
}

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {
    let selectedValue = this.innerText.toLowerCase().trim();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    
    currentCategory = selectedValue;
    filterAndRender();
  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {
  currentCategory = selectedValue;
  filterAndRender();
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
  for (let i = 0; i < pages.length; i++) {
    if (pageName === pages[i].dataset.page) {
      pages[i].classList.add("active");
    } else {
      pages[i].classList.remove("active");
    }
  }

  for (let i = 0; i < navigationLinks.length; i++) {
    if (pageName === navigationLinks[i].innerText.toLowerCase().trim()) {
      navigationLinks[i].classList.add("active");
    } else {
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

// function to render portfolio items
const portfolioListContainer = document.querySelector(".project-list");

const renderPortfolioItems = function (items) {
  if (!portfolioListContainer) return;

  if (items.length === 0) {
    portfolioListContainer.innerHTML = '<li class="no-results">No projects found.</li>';
    return;
  }

  portfolioListContainer.innerHTML = items.map(item => `
    <li class="project-item active" data-id="${item.id}" data-filter-item data-category="${item.category.toLowerCase()}">
      <a href="#">
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
}

// function to render blog posts
const blogListContainer = document.querySelector(".blog-posts-list");

const renderBlogPosts = function (posts) {
  if (!blogListContainer) return;

  if (posts.length === 0) {
    blogListContainer.innerHTML = '<li class="no-results">No blog posts found.</li>';
    return;
  }

  blogListContainer.innerHTML = posts.map(post => `
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
          <p class="blog-text">
            ${post.content.replace(/<[^>]*>?/gm, '').substring(0, 100)}...
          </p>
        </div>
      </a>
    </li>
  `).join('');
}

// Initial Render
renderPortfolioItems(portfolioItems);
renderBlogPosts(blogPosts);

// Event Delegation for Portfolio Items
if (portfolioListContainer) {
  portfolioListContainer.addEventListener("click", function (e) {
    const itemElement = e.target.closest(".project-item");
    if (itemElement) {
      e.preventDefault();
      const id = itemElement.dataset.id;
      const item = portfolioItems.find(p => p.id === id);
      if (item) showDetails(item);
    }
  });
}

// Event Delegation for Blog Posts
if (blogListContainer) {
  blogListContainer.addEventListener("click", function (e) {
    const itemElement = e.target.closest(".blog-post-item");
    if (itemElement) {
      e.preventDefault();
      const id = itemElement.dataset.id;
      const item = blogPosts.find(b => b.id === id);
      if (item) showDetails(item);
    }
  });
}

// Search Functionality
const searchInputs = document.querySelectorAll("[data-search-input]");
const mobileSearchInput = document.querySelector("[data-mobile-search-input]");

const handleSearch = (e) => {
  currentSearchTerm = e.target.value.trim();
  // Sync all search inputs
  searchInputs.forEach(input => {
     if (input !== e.target) input.value = currentSearchTerm;
  });
  if (mobileSearchInput && mobileSearchInput !== e.target) {
      mobileSearchInput.value = currentSearchTerm;
  }
  
  filterAndRender();
}

searchInputs.forEach(input => {
  input.addEventListener("input", handleSearch);
});

if (mobileSearchInput) {
    mobileSearchInput.addEventListener("input", handleSearch);
}

// Mobile Drawer Functionality
const glassPill = document.querySelector("[data-glass-pill]");
const mobileDrawer = document.querySelector("[data-mobile-drawer]");
const drawerCloseBtn = document.querySelector("[data-drawer-close]");
const mobileFilterChips = document.querySelectorAll("[data-mobile-filter]");

if (glassPill && mobileDrawer) {
    glassPill.addEventListener("click", () => {
        mobileDrawer.classList.add("active");
    });
}

if (drawerCloseBtn && mobileDrawer) {
    drawerCloseBtn.addEventListener("click", () => {
        mobileDrawer.classList.remove("active");
    });
}

// Mobile Filter Chips
mobileFilterChips.forEach(chip => {
    chip.addEventListener("click", function() {
        // Toggle active state
        mobileFilterChips.forEach(c => c.classList.remove("active"));
        this.classList.add("active");
        
        const selectedValue = this.dataset.mobileFilter;
        currentCategory = selectedValue;
        
        // Also update desktop filter buttons/select if possible (optional sync)
        
        filterAndRender();
    });
});

// Back button event
backBtn.addEventListener("click", function () {
  const activeNavItem = document.querySelector(".navbar-link.active");
  if (activeNavItem) {
    showPage(activeNavItem.innerText.toLowerCase().trim());
  } else {
    showPage("about");
  }
});
