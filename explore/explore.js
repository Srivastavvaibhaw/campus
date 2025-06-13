/*navbar*/
 // Mobile Menu Toggle
 const mobileToggle = document.querySelector('.citrus-mobile-toggle');
 const menu = document.querySelector('.citrus-menu');
 const dropdowns = document.querySelectorAll('.citrus-dropdown');

 mobileToggle.addEventListener('click', () => {
     menu.classList.toggle('active');
 });

 // Dropdown Toggle for Mobile
 dropdowns.forEach(dropdown => {
     dropdown.addEventListener('click', (e) => {
         if (window.innerWidth <= 768) {
             e.preventDefault();
             dropdown.classList.toggle('active');
         }
     });
 });

 // Scroll Effect
 window.addEventListener('scroll', () => {
     const nav = document.querySelector('.citrus-nav');
     if (window.scrollY > 100) {
         nav.style.boxShadow = 'var(--shadow-strong)';
     } else {
         nav.style.boxShadow = 'var(--shadow-soft)';
     }
 });

 // Close menu when clicking outside
 document.addEventListener('click', (e) => {
     if (!e.target.closest('.citrus-menu') && 
         !e.target.closest('.citrus-mobile-toggle')) {
         menu.classList.remove('active');
         dropdowns.forEach(dropdown => dropdown.classList.remove('active'));
     }
 });



/*hero*/


// Sample Data: 12 Colleges
const colleges = [
    {
      id: 1,
      name: 'IIT Delhi',
      location: 'New Delhi',
      image: 'https://home.iitd.ac.in/public/storage/uploads/Picture1_30Apr24_1714472685.jpg',
      courses: ['B.Tech', 'M.Tech', 'PhD'],
      fees: '250000',
      rating: 4.8,
      reviews: 1250,
      category: 'engineering'
    },
    {
      id: 2,
      name: 'IIM Ahmedabad',
      location: 'Ahmedabad',
      image: 'https://iitb-wustl.org/images/banner-2.jpg',
      courses: ['MBA', 'PGDM', 'Executive MBA'],
      fees: '2300000',
      rating: 4.9,
      reviews: 980,
      category: 'business'
    },
    {
      id: 3,
      name: 'NIT Trichy',
      location: 'Trichy',
      image: 'https://via.placeholder.com/300x150?text=NIT+Trichy',
      courses: ['B.Tech', 'M.Tech', 'PhD'],
      fees: '180000',
      rating: 4.5,
      reviews: 950,
      category: 'engineering'
    },
    {
      id: 4,
      name: 'VIT Vellore',
      location: 'Vellore',
      image: 'https://via.placeholder.com/300x150?text=VIT+Vellore',
      courses: ['B.Tech', 'MBA', 'M.Tech'],
      fees: '200000',
      rating: 4.3,
      reviews: 850,
      category: 'engineering'
    },
    {
      id: 5,
      name: 'Amity University',
      location: 'Noida',
      image: 'https://via.placeholder.com/300x150?text=Amity+University',
      courses: ['B.Tech', 'MBA', 'Law'],
      fees: '300000',
      rating: 4.0,
      reviews: 420,
      category: 'business'
    },
    {
      id: 6,
      name: 'Manipal University',
      location: 'Manipal',
      image: 'https://via.placeholder.com/300x150?text=Manipal+University',
      courses: ['B.Tech', 'MBBS', 'MBA'],
      fees: '450000',
      rating: 4.6,
      reviews: 670,
      category: 'medical'
    },
    {
      id: 7,
      name: 'JNU',
      location: 'New Delhi',
      image: 'https://via.placeholder.com/300x150?text=JNU',
      courses: ['BA', 'MA', 'PhD'],
      fees: '50000',
      rating: 4.2,
      reviews: 500,
      category: 'arts'
    },
    {
      id: 8,
      name: 'Delhi University',
      location: 'New Delhi',
      image: 'https://via.placeholder.com/300x150?text=Delhi+University',
      courses: ['BA', 'BSc', 'MA'],
      fees: '60000',
      rating: 4.1,
      reviews: 480,
      category: 'arts'
    },
    {
      id: 9,
      name: 'Symbiosis Institute',
      location: 'Pune',
      image: 'https://via.placeholder.com/300x150?text=Symbiosis+Institute',
      courses: ['MBA', 'LLB', 'BBA'],
      fees: '500000',
      rating: 4.7,
      reviews: 730,
      category: 'law'
    },
    {
      id: 10,
      name: 'Christ University',
      location: 'Bangalore',
      image: 'https://via.placeholder.com/300x150?text=Christ+University',
      courses: ['BA', 'BSc', 'B.Com'],
      fees: '120000',
      rating: 4.3,
      reviews: 310,
      category: 'arts'
    },
    {
      id: 11,
      name: 'SRM University',
      location: 'Chennai',
      image: 'https://via.placeholder.com/300x150?text=SRM+University',
      courses: ['B.Tech', 'MBA', 'MCA'],
      fees: '230000',
      rating: 4.4,
      reviews: 540,
      category: 'engineering'
    },
    {
      id: 12,
      name: 'BITS Pilani',
      location: 'Pilani',
      image: 'https://via.placeholder.com/300x150?text=BITS+Pilani',
      courses: ['B.Tech', 'M.Tech', 'MBA'],
      fees: '350000',
      rating: 4.8,
      reviews: 880,
      category: 'engineering'
    }
  ];

  let currentDisplayCount = 10;
  const collegeGrid = document.getElementById('collegeGrid');
  const categoryFilter = document.getElementById('categoryFilter');
  const locationFilter = document.getElementById('locationFilter');
  const feeFilter = document.getElementById('feeFilter');
  const searchInput = document.getElementById('searchInput');
  const suggestionBox = document.getElementById('suggestionBox');

  // Render Colleges with Pagination & Clickable Links
  function renderColleges(collegeList) {
    collegeGrid.innerHTML = '';
    const collegesToDisplay = collegeList.slice(0, currentDisplayCount);

    collegesToDisplay.forEach(college => {
      const card = document.createElement('div');
      card.className = 'college-card';
      card.innerHTML = `
        <div class="college-image">
          <img src="${college.image}" alt="${college.name}">
        </div>
        <div class="college-info">
          <h3 class="college-name">
            <a href="/explore/college detail/a.html?id=${college.id}" target="_blank" class="college-link">
              ${college.name}
            </a>
          </h3>
          <div class="college-location">
            <span>${college.location}</span>
          </div>
          <div class="college-stats">
            <div class="stat">
              <div class="stat-value">${college.rating}</div>
              <div class="stat-label">Rating</div>
            </div>
            <div class="stat">
              <div class="stat-value">${college.reviews}</div>
              <div class="stat-label">Reviews</div>
            </div>
          </div>
          <div class="college-courses">
            <small>Courses: ${college.courses.join(', ')}</small>
          </div>
          <p class="college-fees">Fees: ₹${college.fees}/year</p>
          <div class="college-actions">
            <a href="/explore/college detail/a.html?id=${college.id}" target="_blank" class="action-btn primary-btn">
              Apply Now
            </a>
            <button class="action-btn secondary-btn">Learn More</button>
          </div>
        </div>
      `;
      collegeGrid.appendChild(card);
    });

    // "More College" Button if additional colleges exist
    if (collegeList.length > currentDisplayCount) {
      const showMoreBtn = document.createElement('button');
      showMoreBtn.textContent = 'More College';
      showMoreBtn.className = 'show-more-btn';
      showMoreBtn.addEventListener('click', () => {
        currentDisplayCount += 10;
        renderColleges(collegeList);
      });
      collegeGrid.appendChild(showMoreBtn);
    }
  }

  // Filter Functionality with Search Suggestions
  function filterColleges() {
    currentDisplayCount = 10; // reset on filter change
    const searchTerm = searchInput.value.toLowerCase();
    const category = categoryFilter.value;
    const location = locationFilter.value;
    const feeRange = feeFilter.value;

    // Filter colleges based on search and select filters
    const filtered = colleges.filter(college => {
      const searchMatch = college.name.toLowerCase().includes(searchTerm) ||
        college.courses.some(course => course.toLowerCase().includes(searchTerm));
      const categoryMatch = !category || college.category === category;
      const locationMatch = !location || college.location.toLowerCase().includes(location);
      let feeMatch = true;
      if (feeRange) {
        const fee = parseInt(college.fees);
        if (feeRange === "0-100000") feeMatch = fee < 100000;
        else if (feeRange === "100000-200000") feeMatch = fee >= 100000 && fee < 200000;
        else if (feeRange === "200000-300000") feeMatch = fee >= 200000 && fee < 300000;
        else if (feeRange === "300000+") feeMatch = fee >= 300000;
      }
      return searchMatch && categoryMatch && locationMatch && feeMatch;
    });
    renderColleges(filtered);
    updateSuggestions(searchTerm);
  }

  // Update suggestion box based on current input text
  function updateSuggestions(term) {
    // Clear suggestions when term is empty
    if (!term) {
      suggestionBox.innerHTML = '';
      return;
    }
    // Suggest college names that include the search term
    const suggestions = colleges.filter(college => 
      college.name.toLowerCase().includes(term)
    ).slice(0, 5);
    
    suggestionBox.innerHTML = suggestions.map(s => `<div class="suggestion-item">${s.name}</div>`).join('');

    // Add event listeners to suggestion items
    document.querySelectorAll('.suggestion-item').forEach(item => {
      item.addEventListener('click', () => {
        searchInput.value = item.textContent;
        suggestionBox.innerHTML = '';
        filterColleges();
      });
    });
  }

  // Event listeners for search & filter options
  searchInput.addEventListener('input', filterColleges);
  categoryFilter.addEventListener('change', filterColleges);
  locationFilter.addEventListener('change', filterColleges);
  feeFilter.addEventListener('change', filterColleges);

  // Initial Render
  renderColleges(colleges);
// FAQ Accordion
faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        
        // Close all FAQ items
        faqItems.forEach(faq => faq.classList.remove('active'));
        
        // Open clicked item if it wasn't active
        if (!isActive) {
            item.classList.add('active');
        }
    });
});

// Contact Float
const contactBtn = contactFloat.querySelector('.contact-btn');
const contactOptions = contactFloat.querySelector('.contact-options');

contactBtn.addEventListener('click', () => {
    contactOptions.style.display = contactOptions.style.display === 'block' ? 'none' : 'block';
});

document.addEventListener('click', (e) => {
    if (!contactFloat.contains(e.target)) {
        contactOptions.style.display = 'none';
    }
});

// Mobile Menu
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navMenu = document.querySelector('.nav-menu');

if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
        navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
    });
}

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderColleges(colleges);
});

// Add animation on scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, {
    threshold: 0.1
});

document.querySelectorAll('.college-card').forEach(card => {
    observer.observe(card);
});


/*strip2*/
document.addEventListener('DOMContentLoaded', function() {
    // Add hover animations for feature cards
    const cards = document.querySelectorAll('.unique-feature-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
        });
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Add click handlers for buttons
    document.querySelector('.unique-primary-btn').addEventListener('click', function() {
        // Add assessment functionality
        alert('Starting assessment...');
    });

    document.querySelector('.unique-secondary-btn').addEventListener('click', function() {
        // Add download functionality
        alert('Downloading brochure...');
    });
});

/*advertise popop*/

function openAdModal() {
    document.getElementById("adModal").style.display = "block";
  }
  function closeAdModal() {
    document.getElementById("adModal").style.display = "none";
  }
  // Optional: Close modal when clicking outside modal content
  window.onclick = function(event) {
    const modal = document.getElementById("adModal");
    if (event.target === modal) {
      modal.style.display = "none";
    }
  }
  