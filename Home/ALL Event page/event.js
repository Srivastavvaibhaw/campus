 // Event Filtering
 document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-tag');
    const eventCards = document.querySelectorAll('.event-card');
    const searchInput = document.getElementById('eventSearch');

    // Filter functionality
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');

            const filterValue = button.getAttribute('data-filter');

            eventCards.forEach(card => {
                if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // Search functionality
    searchInput.addEventListener('input', () => {
        const searchTerm = searchInput.value.toLowerCase();

        eventCards.forEach(card => {
            const title = card.querySelector('h3').textContent.toLowerCase();
            const description = card.querySelector('.event-details').textContent.toLowerCase();

            if (title.includes(searchTerm) || description.includes(searchTerm)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

// Modal functionality
function openRegistrationModal(eventTitle) {
    const modal = document.getElementById('registrationModal');
    const modalTitle = document.getElementById('modalEventTitle');
    
    modalTitle.textContent = eventTitle;
    modal.style.display = 'block';
}

// Close modal when clicking the close button or outside the modal
document.querySelector('.close-modal').addEventListener('click', () => {
    document.getElementById('registrationModal').style.display = 'none';
});

window.addEventListener('click', (event) => {
    const modal = document.getElementById('registrationModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

// Form submission
document.getElementById('registrationForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Registration submitted successfully!');
    document.getElementById('registrationModal').style.display = 'none';
});