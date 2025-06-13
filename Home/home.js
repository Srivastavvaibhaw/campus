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

 // Show modal when Sign In button is clicked
document.querySelector('.citrus-signin').addEventListener('click', function() {
    document.getElementById('authModal').style.display = 'flex';
});

// Close modal when clicking close button or outside
document.querySelector('.auth-close').addEventListener('click', function() {
    document.getElementById('authModal').style.display = 'none';
});

document.getElementById('authModal').addEventListener('click', function(e) {
    if (e.target === this) {
        this.style.display = 'none';
    }
});

// Switch between login and register forms
function switchForm(type) {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    
    if (type === 'register') {
        loginForm.classList.add('hidden');
        registerForm.classList.remove('hidden');
    } else {
        registerForm.classList.add('hidden');
        loginForm.classList.remove('hidden');
    }
}

// Optional: Testimonial Slider
const dots = document.querySelectorAll('.dot');
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        dots.forEach(d => d.classList.remove('active'));
        dot.classList.add('active');
        // Add your slider logic here
    });
});


/*hero*/

document.addEventListener('DOMContentLoaded', function() {
    // Typewriter effect
    const phrases = [
        "Search BE/B.Tech Colleges",
        "Find Top Engineering Colleges",
        "Discover Your Dream College",
        "Explore Education Options"
    ];
    
    const typewriter = document.getElementById('typewriter');
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    
    function type() {
        const currentPhrase = phrases[phraseIndex];
        
        if (isDeleting) {
            typewriter.textContent = currentPhrase.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typewriter.textContent = currentPhrase.substring(0, charIndex + 1);
            charIndex++;
        }
        
        let typeSpeed = isDeleting ? 50 : 100;
        
        if (!isDeleting && charIndex === currentPhrase.length) {
            typeSpeed = 2000;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            typeSpeed = 500;
        }
        
        setTimeout(type, typeSpeed);
    }
    
    type();

    // Slider functionality
    const slides = document.querySelectorAll('.typewriter-slide');
    let currentSlide = 0;

    function nextSlide() {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
    }

    setInterval(nextSlide, 5000);

    // Search functionality
    const searchInput = document.querySelector('.typewriter-search-input');
    const searchBtn = document.querySelector('.typewriter-search-btn');

    function performSearch() {
        const query = searchInput.value.trim();
        if (query) {
            console.log('Searching for:', query);
        }
    }

    searchBtn.addEventListener('click', performSearch);
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            performSearch();
        }
    });
});

/*suggestion*/
document.addEventListener('DOMContentLoaded', function() {
    // Typewriter effect
    const phrases = [
        "Search BE/B.Tech Colleges",
        "Find Top Engineering Colleges",
        "Discover Your Dream College",
        "Explore Education Options"
    ];
    
    const typewriter = document.getElementById('typewriter');
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    
    function type() {
        const currentPhrase = phrases[phraseIndex];
        
        if (isDeleting) {
            typewriter.textContent = currentPhrase.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typewriter.textContent = currentPhrase.substring(0, charIndex + 1);
            charIndex++;
        }
        
        let typeSpeed = isDeleting ? 50 : 100;
        
        if (!isDeleting && charIndex === currentPhrase.length) {
            typeSpeed = 2000;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            typeSpeed = 500;
        }
        
        setTimeout(type, typeSpeed);
    }
    
    type();
    
    // Slider functionality
    const slides = document.querySelectorAll('.typewriter-slide');
    let currentSlide = 0;
    
    function nextSlide() {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
    }
    
    setInterval(nextSlide, 5000);
    
    // Search functionality
    const searchInput = document.getElementById("collegeSearch");
    const searchBtn = document.querySelector('.typewriter-search-btn');
    
    function performSearch() {
        const query = searchInput.value.trim();
        if (query) {
            console.log('Searching for:', query);
            // Implement actual search functionality as needed.
        }
    }
    
    searchBtn.addEventListener('click', performSearch);
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            performSearch();
        }
    });
    
    // Search Suggestion Functionality
    const suggestionsBox = document.getElementById("searchSuggestions");
    
    // Sample college names – replace with dynamic data if needed.
    const collegeList = [
        "Harvard University",
        "Stanford University",
        "Massachusetts Institute of Technology",
        "University of Oxford",
        "California Institute of Technology",
        "Princeton University",
        "Yale University",
        "University of Cambridge",
        "Columbia University",
        "University of California, Berkeley"
    ];
    
    // Listen to input events to filter suggestions
    searchInput.addEventListener("input", function() {
        const query = this.value.trim().toLowerCase();
        if (!query) {
            suggestionsBox.style.display = "none";
            suggestionsBox.innerHTML = "";
            return;
        }
        
        const filteredColleges = collegeList.filter(college => 
            college.toLowerCase().includes(query)
        );
        
        if (filteredColleges.length > 0) {
            suggestionsBox.innerHTML = filteredColleges
                .map(college => `<li>${college}</li>`)
                .join("");
            suggestionsBox.style.display = "block";
        } else {
            suggestionsBox.innerHTML = `<li>No results found</li>`;
            suggestionsBox.style.display = "block";
        }
    });
    
    // Add click event for suggestions
    suggestionsBox.addEventListener("click", function(e) {
        if(e.target && e.target.nodeName === "LI") {
            searchInput.value = e.target.textContent;
            suggestionsBox.style.display = "none";
        }
    });
    
    // Hide suggestions when clicking outside
    document.addEventListener("click", function(e) {
        if (!searchInput.contains(e.target) && !suggestionsBox.contains(e.target)) {
            suggestionsBox.style.display = "none";
        }
    });
});


/*banner popop*/

  // Open modal on button click
  document.getElementById('openModal').addEventListener('click', function () {
    document.getElementById('eligibilityModal').classList.add('active');
  });

  // Close modal on close button click
  document.getElementById('closeModal').addEventListener('click', function () {
    document.getElementById('eligibilityModal').classList.remove('active');
  });

  // Optional: Close modal when clicking outside of modal content
  document.getElementById('eligibilityModal').addEventListener('click', function (e) {
    if (e.target === this) {
      this.classList.remove('active');
    }
  });




/*progress bar*/
class ApplicationTracker {
    constructor() {
        this.steps = [
            {
                icon: 'fa-solid fa-file-lines',
                label: 'Initial Application',
                details: 'Complete your basic information and academic history',
                tasks: ['Personal Information', 'Academic History', 'Test Scores'],
                status: 'complete'
            },
            {
                icon: 'fa-solid fa-folder-open',
                label: 'Document Upload',
                details: 'Submit required documents and transcripts',
                tasks: ['Transcripts', 'Recommendation Letters', 'Essays'],
                status: 'complete'
            },
            {
                icon: 'fa-solid fa-money-check-dollar',
                label: 'Financial Aid',
                details: 'Complete financial aid applications and forms',
                tasks: ['FAFSA', 'Scholarship Applications', 'Financial Documents'],
                status: 'pending'
            },
            {
                icon: 'fa-solid fa-user-check',
                label: 'Review',
                details: 'Application review and verification process',
                tasks: ['Document Verification', 'Background Check', 'Final Review'],
                status: 'pending'
            },
            {
                icon: 'fa-solid fa-graduation-cap',
                label: 'Decision',
                details: 'Admission decision and next steps',
                tasks: ['Decision Letter', 'Acceptance Package', 'Next Steps'],
                status: 'pending'
            }
        ];
        this.currentStep = 1;
        this.init();
    }

    init() {
        this.createSteps();
        this.updateProgress();
        this.showStepDetails(0);
        this.startAutoProgress();
    }

    createSteps() {
        const timeline = document.querySelector('.progress-timeline');
        
        this.steps.forEach((step, index) => {
            const stepElement = document.createElement('div');
            stepElement.className = `progress-step ${index === 0 ? 'progress-step--active' : ''}`;
            stepElement.innerHTML = `
                <i class="progress-step__icon ${step.icon}"></i>
                <span class="progress-step__label">${step.label}</span>
            `;
            
            stepElement.addEventListener('click', () => {
                this.currentStep = index + 1;
                this.updateProgress();
                this.showStepDetails(index);
            });
            
            timeline.appendChild(stepElement);
        });
    }

    updateProgress() {
        const steps = document.querySelectorAll('.progress-step');
        const progressBar = document.querySelector('.progress-timeline__bar-fill');
        
        steps.forEach((step, index) => {
            step.classList.toggle('progress-step--active', index < this.currentStep);
        });

        const progress = ((this.currentStep - 1) / (steps.length - 1)) * 100;
        progressBar.style.width = `${progress}%`;
    }

    showStepDetails(index) {
        const detailsContainer = document.querySelector('.step-details');
        const step = this.steps[index];
        
        detailsContainer.innerHTML = `
            <span class="status-badge status-badge--${step.status}">
                ${step.status.toUpperCase()}
            </span>
            <h3>${step.label}</h3>
            <p>${step.details}</p>
            <ul class="tasks-list">
                ${step.tasks.map(task => `
                    <li class="tasks-list__item">
                        <i class="tasks-list__icon fas fa-check-circle"></i>
                        ${task}
                    </li>
                `).join('')}
            </ul>
        `;
        
        detailsContainer.classList.add('step-details--active');
    }

    startAutoProgress() {
        let demoStep = 1;
        setInterval(() => {
            demoStep = demoStep < this.steps.length ? demoStep + 1 : 1;
            this.currentStep = demoStep;
            this.updateProgress();
            this.showStepDetails(demoStep - 1);
        }, 1000);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new ApplicationTracker();
});





/*testimonial*/
document.addEventListener('DOMContentLoaded', () => {
    class SparkleReviewTestimonials {
      constructor() {
        this.slider = document.querySelector('.sparkle-review-slider');
        this.cards = document.querySelectorAll('.sparkle-review-card');
        this.prevBtn = document.querySelector('.sparkle-review-prev');
        this.nextBtn = document.querySelector('.sparkle-review-next');
        this.currentIndex = 0;
        this.touchStartX = 0;
        this.touchEndX = 0;
        this.autoPlayInterval = null;
  
        this.init();
      }
  
      init() {
        this.addEventListeners();
        this.startAutoPlay();
      }
  
      addEventListeners() {
        this.prevBtn?.addEventListener('click', () => {
          this.slide('prev');
          this.resetAutoPlay();
        });
        
        this.nextBtn?.addEventListener('click', () => {
          this.slide('next');
          this.resetAutoPlay();
        });
        
        this.slider.addEventListener('touchstart', (e) => {
          this.touchStartX = e.touches[0].clientX;
          this.pauseAutoPlay();
        });
        
        this.slider.addEventListener('touchend', (e) => {
          this.touchEndX = e.changedTouches[0].clientX;
          this.handleSwipe();
          this.startAutoPlay();
        });
  
        this.slider.addEventListener('mouseenter', () => this.pauseAutoPlay());
        this.slider.addEventListener('mouseleave', () => this.startAutoPlay());
  
        document.addEventListener('keydown', (e) => {
          if (e.key === 'ArrowLeft') this.slide('prev');
          if (e.key === 'ArrowRight') this.slide('next');
          this.resetAutoPlay();
        });
      }
  
      handleSwipe() {
        const swipeDistance = this.touchStartX - this.touchEndX;
        if (Math.abs(swipeDistance) > 50) {
          if (swipeDistance > 0) {
            this.slide('next');
          } else {
            this.slide('prev');
          }
        }
      }
  
      slide(direction) {
        if (direction === 'next') {
          this.currentIndex = (this.currentIndex + 1) % this.cards.length;
        } else {
          this.currentIndex = (this.currentIndex - 1 + this.cards.length) % this.cards.length;
        }
        this.updateSliderPosition();
      }
  
      updateSliderPosition() {
        const offset = -this.currentIndex * (300 + 32); // card width + gap
        this.slider.style.transform = `translateX(${offset}px)`;
      }
  
      startAutoPlay() {
        if (!this.autoPlayInterval) {
          this.autoPlayInterval = setInterval(() => this.slide('next'), 5000);
        }
      }
  
      pauseAutoPlay() {
        if (this.autoPlayInterval) {
          clearInterval(this.autoPlayInterval);
          this.autoPlayInterval = null;
        }
      }
  
      resetAutoPlay() {
        this.pauseAutoPlay();
        this.startAutoPlay();
      }
    }
  
    // Initialize the testimonials
    new SparkleReviewTestimonials();
  });






  

// Colleges rendering

// College data


const colleges = [
    {
        id: 1,
        name: "ITS Engineering College",
        location: "Delhi",
        courses: ["Computer Science", "Mechanical", "Civil"],
        fees: 150000,
        rating: 4.2,
        reviews: "Great faculty and facilities!",
        category: "engineering"
    },
    {
        id: 2,
        name: "XLRI Business School",
        location: "Mumbai",
        courses: ["MBA", "BBA", "Finance"],
        fees: 200000,
        rating: 4.8,
        reviews: "Top-notch business school!",
        category: "business"
    },
    {
        id: 3,
        name: "Christ University",
        location: "Bangalore",
        courses: ["English", "History", "Sociology"],
        fees: 100000,
        rating: 4.5,
        reviews: "Excellent environment for learning.",
        category: "arts"
    },
    {
        id: 4,
        name: "GL Bajaj",
        location: "Greater Noida",
        courses: ["B.Tech", "MCA", "BCA"],
        fees: 100000,
        rating: 4.5,
        reviews: "Excellent environment for learning.",
        category: "engineering"
    }
    // Add more colleges as needed
];

// Function to create star rating
function getStarRating(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    let stars = '★'.repeat(fullStars);
    if (hasHalfStar) stars += '☆';
    while (stars.length < 5) stars += '☆';
    return stars;
}

// Function to filter colleges based on search query

// Function to render colleges
function renderColleges(filteredColleges) {
    const collegesList = document.getElementById('collegesList');
    collegesList.innerHTML = '';

    filteredColleges.forEach((college, index) => {
        const collegeElement = document.createElement('div');
        collegeElement.className = 'college-item';
        collegeElement.innerHTML = `
            <div class="college-rank">#${index + 1}</div>
            <div class="college-info">
                <div class="college-name">${college.name}</div>
                <div class="college-location">
                    <i class="fas fa-map-marker-alt"></i> ${college.location}
                </div>
                <div class="college-courses">
                    <i class="fas fa-graduation-cap"></i> ${college.courses.join(', ')}
                </div>
            </div>
            <div class="college-details">
                <div class="college-rating">
                    <span class="stars">${getStarRating(college.rating)}</span>
                    <span>(${college.rating})</span>
                </div>
                <div class="college-fees">₹${college.fees.toLocaleString()} per year</div>
                <div class="college-reviews">${college.reviews}</div>
                <button class="read-more-btn" onclick="showCollegeDetails(${college.id})">
                    Read More
                </button>
            </div>
        `;
        collegesList.appendChild(collegeElement);
    });
}

// Filter and sort functionality
document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const sortSelect = document.getElementById('sortOption');
    let currentFilter = 'all';

    function filterAndSortColleges() {
        let filteredColleges = colleges;
        
        // Apply filter
        if (currentFilter !== 'all') {
            filteredColleges = colleges.filter(college => 
                college.category === currentFilter
            );
        }

        // Apply sort
        const sortBy = sortSelect.value;
        filteredColleges.sort((a, b) => {
            switch (sortBy) {
                case 'rating':
                    return b.rating - a.rating;
                case 'fees':
                    return a.fees - b.fees;
                case 'name':
                    return a.name.localeCompare(b.name);
                default:
                    return 0;
            }
        });

        renderColleges(filteredColleges);
    }

    // Filter button click handlers
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            currentFilter = button.dataset.filter;
            filterAndSortColleges();
        });
    });

    // Sort change handler
    sortSelect.addEventListener('change', filterAndSortColleges);

    // Initial render
    filterAndSortColleges();
});

// Function to render colleges with new tab functionality
function renderColleges(filteredColleges) {
    const collegesList = document.getElementById('collegesList');
    collegesList.innerHTML = '';

    filteredColleges.forEach((college, index) => {
        const collegeElement = document.createElement('div');
        collegeElement.className = 'college-item';
        collegeElement.innerHTML = `
            <div class="college-rank">#${index + 1}</div>
            <div class="college-info">
                <div class="college-name">${college.name}</div>
                <div class="college-location">
                    <i class="fas fa-map-marker-alt"></i> ${college.location}
                </div>
                <div class="college-courses">
                    <i class="fas fa-graduation-cap"></i> ${college.courses.join(', ')}
                </div>
            </div>
            <div class="college-details">
                <div class="college-rating">
                    <span class="stars">${getStarRating(college.rating)}</span>
                    <span>(${college.rating})</span>
                </div>
                <div class="college-fees">₹${college.fees.toLocaleString()} per year</div>
                <div class="college-reviews">${college.reviews}</div>
                <a href="college-details.html?id=${college.id}" 
                   class="read-more-btn" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   aria-label="Read more about ${college.name}">
                    Read More
                </a>
            </div>
        `;
        collegesList.appendChild(collegeElement);
    });
}

// Filter and sort functionality remains the same
document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const sortSelect = document.getElementById('sortOption');
    let currentFilter = 'all';

    function filterAndSortColleges() {
        let filteredColleges = colleges;
        
        if (currentFilter !== 'all') {
            filteredColleges = colleges.filter(college => 
                college.category === currentFilter
            );
        }

        const sortBy = sortSelect.value;
        filteredColleges.sort((a, b) => {
            switch (sortBy) {
                case 'rating':
                    return b.rating - a.rating;
                case 'fees':
                    return a.fees - b.fees;
                case 'name':
                    return a.name.localeCompare(b.name);
                default:
                    return 0;
            }
        });

        renderColleges(filteredColleges);
    }

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            currentFilter = button.dataset.filter;
            filterAndSortColleges();
        });
    });

    sortSelect.addEventListener('change', filterAndSortColleges);
    filterAndSortColleges();
});



/*back to top */
const backToTopBtn = document.getElementById("backToTop");

// Show the button after scrolling down 100px
window.addEventListener("scroll", () => {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    backToTopBtn.classList.add("show");
  } else {
    backToTopBtn.classList.remove("show");
  }
});

// Smooth scroll to the top when the button is clicked
backToTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});



  

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(26, 35, 126, 0.95)';
    } else {
        navbar.style.background = '#1a237e';
    }
});

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    populateCollegeTable();
    updateSteps();
});

// Add smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Mobile menu toggle
const mobileMenuBtn = document.querySelector('.mobile-menu');
const navLinks = document.querySelector('.nav-links');

if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}


let currentIndex = 0;
const images = document.querySelectorAll('.slider-image');
const totalImages = images.length;

function showSlide(index) {
    images.forEach((image, i) => {
        image.classList.remove('active');
        if (i === index) {
            image.classList.add('active');
        }
    });
}

document.querySelector('.slider-btn.prev').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalImages) % totalImages;
    showSlide(currentIndex);
});

document.querySelector('.slider-btn.next').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalImages;
    showSlide(currentIndex);
});

setInterval(() => {
    currentIndex = (currentIndex + 1) % totalImages;
    showSlide(currentIndex);
}, 5000);


// JavaScript for Dropdown Menu Toggle
document.addEventListener("DOMContentLoaded", function () {
    const dropdownToggles = document.querySelectorAll(".dropdown-toggle");

    dropdownToggles.forEach((toggle) => {
        toggle.addEventListener("click", function (e) {
            e.preventDefault();
            const parentDropdown = this.parentElement;

            // Close other dropdowns
            document.querySelectorAll(".dropdown").forEach((dropdown) => {
                if (dropdown !== parentDropdown) {
                    dropdown.classList.remove("show");
                }
            });

            // Toggle the clicked dropdown
            parentDropdown.classList.toggle("show");
        });
    });

    // Close dropdowns when clicking outside
    document.addEventListener("click", function (e) {
        if (!e.target.closest(".dropdown")) {
            document.querySelectorAll(".dropdown").forEach((dropdown) => {
                dropdown.classList.remove("show");
            });
        }
    });
});



// JavaScript
let collegesByCategory = {
    engineering: ['IIT Madras', 'IIT Delhi', 'BITS Pilani', 'VIT Vellore'],
    business: ['XLRI', 'IIM Ahmedabad', 'FMS Delhi', 'ISB Hyderabad'],
    arts: ['St. Stephen\'s College', 'Christ University', 'Lady Shri Ram College', 'JNU'],
    medical: ['AIIMS Delhi', 'CMC Vellore', 'JIPMER', 'AFMC Pune']
};

// Open Application Form
function openApplicationForm() {
    document.getElementById('applicationModal').style.display = 'block';
    // Reset form
    document.getElementById('applicationForm').reset();
}

// Open Expert Consultation
function openExpertConsultation() {
    document.getElementById('expertModal').style.display = 'block';
    document.getElementById('scheduleForm').classList.add('hidden');
}

// Close Modal
function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

// Update College Options based on Course Selection
document.getElementById('course').addEventListener('change', function() {
    const collegeSelect = document.getElementById('college');
    const selectedCourse = this.value;
    
    // Clear current options
    collegeSelect.innerHTML = '<option value="">Select College</option>';
    
    // Add new options based on selected course
    if (selectedCourse && collegesByCategory[selectedCourse]) {
        collegesByCategory[selectedCourse].forEach(college => {
            const option = document.createElement('option');
            option.value = college;
            option.textContent = college;
            collegeSelect.appendChild(option);
        });
    }
});

// Submit Application
function submitApplication(event) {
    event.preventDefault();
    
    // Get form data
    const formData = new FormData(event.target);
    const applicationData = Object.fromEntries(formData);
    
    // Here you would typically send this data to your server
    console.log('Application submitted:', applicationData);
    
    // Show success message
    alert('Application submitted successfully! We will contact you soon.');
    
    // Close modal
    closeModal('applicationModal');
}

// Expert Consultation Functions
function initiateCall() {
    window.location.href = 'tel:+1234567890';
}

function startChat() {
    window.open('https://wa.me/1234567890', '_blank');
}

function scheduleCall() {
    document.getElementById('scheduleForm').classList.remove('hidden');
}

function submitSchedule(event) {
    event.preventDefault();
    
    const date = document.getElementById('scheduleDate').value;
    const time = document.getElementById('scheduleTime').value;
    
    // Here you would typically send this data to your server
    console.log('Call scheduled for:', date, time);
    
    // Show success message
    alert('Call scheduled successfully! Our expert will call you at the scheduled time.');
    
    // Close modal
    closeModal('expertModal');
}

// Close modals when clicking outside
window.onclick = function(event) {
    if (event.target.className === 'modal') {
        event.target.style.display = 'none';
    }
}

// Set minimum date for schedule calendar to today
document.addEventListener('DOMContentLoaded', function() {
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('scheduleDate').min = today;
});

// JavaScript for handling counseling functionality
function openCounselingModal(type) {
    const modal = document.getElementById('counselingModal');
    const header = modal.querySelector('.modal-header h2');
    
    // Update modal title based on counseling type
    switch(type) {
        case 'career':
            header.textContent = 'Career Guidance';
            break;
        case 'admission':
            header.textContent = 'Admission Assistance';
            break;
        case 'scholarship':
            header.textContent = 'Scholarship Counseling';
            break;
        case 'financial':
            header.textContent = 'Financial Aid Help';
            break;
        case 'abroad':
            header.textContent = 'Study Abroad Counseling';
            break;
    }
    
    modal.style.display = 'block';
}

function closeCounselingModal() {
    document.getElementById('counselingModal').style.display = 'none';
}

function submitConsultation(event) {
    event.preventDefault();
    
    // Get form data
    const formData = {
        name: document.getElementById('fullName').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        education: document.getElementById('education').value,
        interests: Array.from(document.querySelectorAll('input[name="interest"]:checked'))
            .map(cb => cb.value),
        preferredTime: document.getElementById('preferred-time').value,
        message: document.getElementById('message').value
    };
    
    // Here you would typically send this data to your server
    console.log('Consultation request:', formData);
    
    // Show success message
    alert('Thank you! Your consultation request has been submitted. We will contact you shortly.');
    
    // Close modal and reset form
    closeCounselingModal();
    document.getElementById('consultationForm').reset();
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('counselingModal');
    if (event.target === modal) {
        closeCounselingModal();
    }
}




  
  function handleSubmit(event) {
    event.preventDefault()
  
    // Get form values
    const email = document.getElementById("email").value
    const mobile = document.getElementById("mobile").value
    const course = document.getElementById("course").value
  
    // Basic validation
    if (!validateEmail(email)) {
      showNotification("Please enter a valid email address", "error")
      return false
    }
  
    if (!validateMobile(mobile)) {
      showNotification("Please enter a valid mobile number", "error")
      return false
    }
  
    // Simulate form submission
    showNotification("Successfully subscribed!", "success")
    event.target.reset()
    return false
  }
  
  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return re.test(email)
  }
  
  function validateMobile(mobile) {
    const re = /^[0-9]{10}$/
    return re.test(mobile)
  }
  
  function showNotification(message, type) {
    const notification = document.getElementById("notification")
    notification.textContent = message
    notification.className = `notification ${type}`
  
    // Hide notification after 3 seconds
    setTimeout(() => {
      notification.className = "notification"
    }, 3000)
  }
  
  // Add input validation on blur
  document.getElementById("email").addEventListener("blur", function () {
    if (this.value && !validateEmail(this.value)) {
      showNotification("Please enter a valid email address", "error")
    }
  })
  
  document.getElementById("mobile").addEventListener("blur", function () {
    if (this.value && !validateMobile(this.value)) {
      showNotification("Please enter a valid mobile number", "error")
    }
  })
  
  function showForm() {
    document.getElementById('popupForm').style.display = 'block';
}

function closeForm() {
    document.getElementById('popupForm').style.display = 'none';
}

document.getElementById('adForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let company = document.getElementById('company').value;
    let message = document.getElementById('message').value;
    
    let mailtoLink = `mailto:your_email@example.com?subject=Advertisement Inquiry&body=Name: ${name}%0D%0AEmail: ${email}%0D%0APhone: ${phone}%0D%0ACompany: ${company}%0D%0ADetails: ${message}`;
    window.location.href = mailtoLink;
    closeForm();
});  


  


//video review
class UniversityShowcase {
    constructor() {
        this.carousel = document.querySelector('.edu-showcase__carousel');
        this.slides = Array.from(document.querySelectorAll('.edu-showcase__slide'));
        this.navBtns = document.querySelectorAll('.edu-showcase__nav-btn');
        this.title = document.querySelector('.edu-showcase__title');
        this.currentIndex = 0;
        this.totalSlides = this.slides.length;
        this.isTransitioning = false;

        this.init();
    }

    init() {
        this.navBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const direction = e.target.dataset.direction;
                this.navigate(direction);
            });
        });

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') this.navigate('prev');
            if (e.key === 'ArrowRight') this.navigate('next');
        });

        // Touch navigation
        let touchStartX = 0;
        this.carousel.addEventListener('touchstart', (e) => {
            touchStartX = e.touches[0].clientX;
        });

        this.carousel.addEventListener('touchend', (e) => {
            const touchEndX = e.changedTouches[0].clientX;
            const difference = touchStartX - touchEndX;
            
            if (Math.abs(difference) > 50) {
                if (difference > 0) this.navigate('next');
                else this.navigate('prev');
            }
        });
    }

    navigate(direction) {
        if (this.isTransitioning) return;
        this.isTransitioning = true;

        const currentSlide = this.slides[this.currentIndex];
        let nextIndex;

        if (direction === 'next') {
            nextIndex = (this.currentIndex + 1) % this.totalSlides;
        } else {
            nextIndex = (this.currentIndex - 1 + this.totalSlides) % this.totalSlides;
        }

        // Update slides
        currentSlide.classList.remove('active');
        this.slides[nextIndex].classList.add('active');

        // Update title
        this.title.textContent = this.slides[nextIndex].dataset.university;

        this.currentIndex = nextIndex;

        setTimeout(() => {
            this.isTransitioning = false;
        }, 500);
    }
}

// Initialize the showcase
document.addEventListener('DOMContentLoaded', () => {
    new UniversityShowcase();
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
  

/*---strip3---*/
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


/*need counselling buuton*/
// Get modal element
const modal = document.getElementById('counsellingModal');
// Get open modal button
const openModalBtn = document.getElementById('openModal');
// Get close button element
const closeModalBtn = document.getElementById('closeModal');

// Listen for open click
openModalBtn.addEventListener('click', () => {
  modal.style.display = 'flex';
  // Prevent body scrolling when modal is active
  document.body.style.overflow = 'hidden';
});

// Listen for close click
closeModalBtn.addEventListener('click', () => {
  modal.style.display = 'none';
  document.body.style.overflow = 'auto';
});

// Listen for outside click to close
window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
  }
});