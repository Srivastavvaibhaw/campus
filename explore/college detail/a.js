    window.addEventListener('scroll', function () {
    const actionButtons = document.querySelector('.right-section .action-buttons');
    const collegeImage = document.querySelector('.college-image-container');
    const scrollPosition = window.scrollY;

    // Get the bottom position of the college image container
    const collegeImageBottom = collegeImage.offsetTop + collegeImage.offsetHeight;

    // Debugging: Log scroll position and college image bottom
    console.log("Scroll position:", scrollPosition);

    if (scrollPosition > collegeImageBottom) {
        actionButtons.classList.add('sticky');
    } else {
        actionButtons.classList.remove('sticky');
    }
});

// Function to open the form
function openForm() {
    const form = document.getElementById("downloadForm");
    if (form) form.style.display = "flex";
}

// Function to close the form
function closeForm() {
    const form = document.getElementById("downloadForm");
    if (form) form.style.display = "none";
}

// Attach event listener to the "Download Brochure" button
const brochureBtn = document.querySelector(".brochure-btn");
if (brochureBtn) {
    brochureBtn.addEventListener("click", function(event) {
        event.preventDefault();
        openForm();
    });
}


//contact

document.getElementById('customContactForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const submitBtn = this.querySelector('.custom-submit-btn');
            const successMessage = this.querySelector('.custom-success-message');
            
            // Disable button and show loading state
            submitBtn.disabled = true;
            submitBtn.innerHTML = 'Sending...';
            
            // Simulate form submission
            setTimeout(() => {
                submitBtn.style.background = 'linear-gradient(135deg, #48bb78, #38a169)';
                submitBtn.innerHTML = 'Message Sent!';
                successMessage.style.display = 'block';
                
                // Reset form after delay
                setTimeout(() => {
                    this.reset();
                    submitBtn.disabled = false;
                    submitBtn.innerHTML = 'Send Message';
                    submitBtn.style.background = 'linear-gradient(135deg, #4299e1, #667eea)';
                    successMessage.style.display = 'none';
                }, 3000);
            }, 2000);
        });
        //alumni
        document.addEventListener("DOMContentLoaded", function() {
      const toggleHeaders = document.querySelectorAll('.toggle-header');
      toggleHeaders.forEach(header => {
        header.addEventListener('click', function() {
          // Toggle the content display within the same container.
          const content = header.parentElement.nextElementSibling;
          if (content) {
            content.style.display = (content.style.display === "none" || content.style.display === "") ? "block" : "none";
          }
        });
      });
    });
    //news
     // Open Modal
     function openModal(title, content, image) {
            document.getElementById('newsModal').style.display = 'flex';
            document.getElementById('modalTitle').innerText = title;
            document.getElementById('modalContent').innerText = content;
            document.getElementById('modalImage').src = image;
        }

        // Close Modal
        function closeModal() {
            document.getElementById('newsModal').style.display = 'none';
        }

        // Filter News
        function filterNews(category) {
            const cards = document.querySelectorAll('.news-card');
            cards.forEach(card => {
                if (category === 'all' || card.getAttribute('data-category') === category) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        }
        //event section 
        const events = [
        { title: "Tech Summit 2024", date: "March 20, 2024", location: "Main Hall", category: "Seminar", image: "https://via.placeholder.com/400", description: "A tech conference covering AI and robotics." },
        { title: "AI Workshop", date: "April 10, 2024", location: "Lab 3", category: "Workshop", image: "https://via.placeholder.com/400", description: "Hands-on AI workshop for students." },
        { title: "Cybersecurity Seminar", date: "May 15, 2024", location: "Auditorium", category: "Seminar", image: "https://via.placeholder.com/400", description: "A seminar on the latest in cybersecurity." },
        { title: "Startup Pitch Competition", date: "June 5, 2024", location: "Conference Room", category: "Seminar", image: "https://via.placeholder.com/400", description: "Pitch your startup ideas to investors." },
        { title: "Creative Writing Workshop", date: "July 12, 2024", location: "Room 205", category: "Workshop", image: "https://via.placeholder.com/400", description: "Learn the art of creative writing with experts." },
        { title: "Data Science Bootcamp", date: "August 23, 2024", location: "Lab 4", category: "Workshop", image: "https://via.placeholder.com/400", description: "A 3-day bootcamp for aspiring data scientists." }
    ];

    function loadEvents() {
        const eventList = document.getElementById("eventList");
        eventList.innerHTML = "";
        events.forEach(event => {
            eventList.innerHTML += `
                <div class="event-card" data-title="${event.title}" data-category="${event.category}">
                    <div class="event-title">${event.title}</div>
                    <div class="event-date">📅 ${event.date}</div>
                    <div class="event-category">${event.category}</div>
                    <div class="countdown">⏰ Countdown: 10 Days Left</div>
                    <button class="register-btn" onclick="openModal('${event.title}')">View Details</button>
                </div>
            `;
        });
    }

    function openModal(title) {
        const event = events.find(e => e.title === title);
        document.getElementById('modalEventTitle').innerText = event.title;
        document.getElementById('modalEventDate').innerText = `📅 ${event.date}`;
        document.getElementById('modalEventLocation').innerText = `📍 ${event.location}`;
        document.getElementById('modalEventImage').src = event.image;
        document.getElementById('modalEventDescription').innerText = event.description;
        document.getElementById('eventModal').style.display = 'flex';
    }

    function closeModal() {
        document.getElementById('eventModal').style.display = 'none';
    }

    function openRegisterModal() {
        document.getElementById('eventModal').style.display = 'none';
        document.getElementById('registerModal').style.display = 'flex';
    }

    function closeRegisterModal() {
        document.getElementById('registerModal').style.display = 'none';
    }

    function toggleDarkMode() {
        document.body.classList.toggle("dark-mode");
    }

    function searchEvents() {
        const searchQuery = document.getElementById("search").value.toLowerCase();
        const eventCards = document.querySelectorAll('.event-card');

        eventCards.forEach(card => {
            const title = card.getAttribute("data-title").toLowerCase();
            const category = card.getAttribute("data-category").toLowerCase();

            if (title.includes(searchQuery) || category.includes(searchQuery)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    }

    loadEvents();
    // abou us 
      // Function to open a modal
      function openModal(type) {
        const modal = document.getElementById(`modal${capitalizeFirstLetter(type)}`);
        modal.style.display = 'flex';
    }

    // Function to close a modal
    function closeModal(type) {
        const modal = document.getElementById(`modal${capitalizeFirstLetter(type)}`);
        modal.style.display = 'none';
    }

    // Helper function to capitalize the first letter of the string
    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    // Close the modal if clicked outside of the modal content
    window.onclick = function(event) {
        const modals = document.querySelectorAll('.modal');
        modals.forEach(modal => {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        });
    }

    function animateCounter(id, endValue) {
        let count = 0;
        let interval = setInterval(() => {
            document.getElementById(id).innerText = count;
            if (count >= endValue) {
                clearInterval(interval);
            }
            count += Math.ceil(endValue / 100);
        }, 20);
    }

    window.onload = function() {
        animateCounter("students", 5000);
        animateCounter("faculty", 300);
        animateCounter("awards", 50);
    };
    //apply now strip
    function updateCountdown() {
        const countdownElement = document.getElementById('deadline');
        let hours = 23;
        let minutes = 59;
        let seconds = 59;
    
        const timer = setInterval(() => {
            if(seconds > 0) {
                seconds--;
            } else if(minutes > 0) {
                minutes--;
                seconds = 59;
            } else if(hours > 0) {
                hours--;
                minutes = 59;
                seconds = 59;
            } else {
                clearInterval(timer);
            }
    
            countdownElement.textContent = 
                `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
        }, 1000);
    }
    
    // Application Form
    function showApplicationForm() {
        // Add your form display logic here
        alert('Opening application form...');
    }
    
    // Initialize
    document.addEventListener('DOMContentLoaded', () => {
        updateCountdown();
    });
    //for courses section popup details and apply now 
      // Function to show the popup
      function showPopup() {
        document.getElementById('popupOverlay').style.display = 'flex';
    }

    // Function to close the popup
    function closeForm() {
        document.getElementById('popupOverlay').style.display = 'none';
    }
     // Function to dynamically update the sub-course options based on the selected course
     function updateSubCourses() {
        var course = document.getElementById('course').value;
        var subCoursesContainer = document.getElementById('subCoursesContainer');
        var subCourseSelect = document.getElementById('subCourse');
        subCourseSelect.innerHTML = ''; // Clear the previous options

        if (course === "B Tech") {
            subCoursesContainer.style.display = 'block';
            var options = ["Select Courses","Computer Science", "Electrical", "Mechanical", "Electronics"];
            options.forEach(function(option) {
                var optionElement = document.createElement('option');
                optionElement.value = option;
                optionElement.textContent = option;
                subCourseSelect.appendChild(optionElement);
            });
        }
           else if (course === "Computer Science") {
            subCoursesContainer.style.display = 'block';
            var options = ["AI", "Data Science", "Software Engineering"];
            options.forEach(function(option) {
                var optionElement = document.createElement('option');
                optionElement.value = option;
                optionElement.textContent = option;
                subCourseSelect.appendChild(optionElement);
            });
        } else if (course === "MBA") {
            subCoursesContainer.style.display = 'block';
            var options = ["Marketing", "Finance", "Business Analytics"];
            options.forEach(function(option) {
                var optionElement = document.createElement('option');
                optionElement.value = option;
                optionElement.textContent = option;
                subCourseSelect.appendChild(optionElement);
            });
        } else if (course === "BCA") {
            subCoursesContainer.style.display = 'block';
            var options = ["Computer Applications", "Networking", "Web Development"];
            options.forEach(function(option) {
                var optionElement = document.createElement('option');
                optionElement.value = option;
                optionElement.textContent = option;
                subCourseSelect.appendChild(optionElement);
            });
        } else if (course === "BBA") {
            subCoursesContainer.style.display = 'block';
            var options = ["Management", "Marketing", "Finance"];
            options.forEach(function(option) {
                var optionElement = document.createElement('option');
                optionElement.value = option;
                optionElement.textContent = option;
                subCourseSelect.appendChild(optionElement);
            });
        } else {
            subCoursesContainer.style.display = 'none';
        }
    }
    //gallary section 
    // Gather all images from all sections.
    const images = Array.from(document.querySelectorAll('.gallery-image'));
    const popupModal = document.getElementById('popupModal');
    const popupImage = document.getElementById('popupImage');
    const popupCaption = document.getElementById('popupCaption');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const closeBtn = document.getElementById('closeBtn');
    const popupThumbnails = document.getElementById('popupThumbnails');
    const downloadBtn = document.getElementById('downloadBtn');
    const shareBtn = document.getElementById('shareBtn');

    // Sample captions/descriptions for each image in order.
    const captions = [
      "Campus: Main Entrance", "Campus: Green Quad", "Campus: Library", 
      "Event: Annual Festival", "Event: Sports Day", "Event: Cultural Night",
      "Academic: Lecture Hall", "Academic: Science Lab", "Academic: Art Studio"
    ];

    let currentIndex = 0;

    // Populate Thumbnails for the popup modal.
    function populateThumbnails() {
      popupThumbnails.innerHTML = "";
      images.forEach((img, index) => {
        const thumb = document.createElement('img');
        thumb.src = img.src;
        thumb.alt = "Thumbnail " + (index + 1);
        thumb.addEventListener('click', () => {
          currentIndex = index;
          updatePopup();
        });
        popupThumbnails.appendChild(thumb);
      });
      updateThumbnails();
    }

    function updateThumbnails() {
      const thumbs = popupThumbnails.querySelectorAll('img');
      thumbs.forEach((thumb, index) => {
        thumb.classList.toggle('active', index === currentIndex);
      });
    }

    // Open popup modal when any image is clicked.
    images.forEach((img, index) => {
      img.addEventListener('click', () => {
        currentIndex = index;
        openPopup();
      });
    });

    function openPopup() {
      updatePopup();
      popupModal.classList.add('active');
    }

    function updatePopup() {
      popupImage.src = images[currentIndex].src;
      popupCaption.textContent = captions[currentIndex] || "";
      updateThumbnails();
    }

    nextBtn.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % images.length;
      updatePopup();
    });

    prevBtn.addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      updatePopup();
    });

    closeBtnn.addEventListener('click', () => {
      popupModal.classList.remove('active');
    });

    // Close popup when clicking on the overlay background.
    popupModal.addEventListener('click', (e) => {
      if (e.target === popupModal) {
        popupModal.classList.remove('active');
      }
    });

    // Download button functionality.
    downloadBtn.addEventListener('click', () => {
      const link = document.createElement('a');
      link.href = images[currentIndex].src;
      link.download = "Gallery_Image_" + (currentIndex + 1);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });

    // Dummy share functionality.
    shareBtn.addEventListener('click', () => {
      alert("Share this image: " + images[currentIndex].src);
    });

    // Initialize thumbnails.
    populateThumbnails();
