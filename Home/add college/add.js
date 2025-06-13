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
 
 
 
 
 // Form Navigation
 function nextStep(currentStep) {
    if (validateStep(currentStep)) {
        document.querySelector(`#step${currentStep}`).classList.remove('active');
        document.querySelector(`#step${currentStep + 1}`).classList.add('active');
        updateProgress(currentStep + 1);
    }
}

function prevStep(currentStep) {
    document.querySelector(`#step${currentStep}`).classList.remove('active');
    document.querySelector(`#step${currentStep - 1}`).classList.add('active');
    updateProgress(currentStep - 1);
}

function updateProgress(step) {
    document.querySelectorAll('.progress-step').forEach((el, index) => {
        if (index + 1 < step) {
            el.classList.add('completed');
            el.classList.remove('active');
        } else if (index + 1 === step) {
            el.classList.add('active');
            el.classList.remove('completed');
        } else {
            el.classList.remove('completed', 'active');
        }
    });
}

// Form Validation
function validateStep(step) {
    const currentStep = document.querySelector(`#step${step}`);
    const requiredFields = currentStep.querySelectorAll('[required]');
    let isValid = true;

    requiredFields.forEach(field => {
        if (!field.value) {
            isValid = false;
            field.classList.add('error');
            showError(field);
        } else {
            field.classList.remove('error');
            removeError(field);
        }
    });

    return isValid;
}

function showError(field) {
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.textContent = 'This field is required';
    field.parentNode.appendChild(errorDiv);
}

function removeError(field) {
    const errorDiv = field.parentNode.querySelector('.error-message');
    if (errorDiv) {
        errorDiv.remove();
    }
}

// File Upload Handling
document.querySelectorAll('.dropzone').forEach(dropzone => {
    const input = dropzone.querySelector('input[type="file"]');
    
    dropzone.addEventListener('click', () => input.click());
    
    dropzone.addEventListener('dragover', (e) => {
        e.preventDefault();
        dropzone.classList.add('dragover');
    });
    
    dropzone.addEventListener('dragleave', () => {
        dropzone.classList.remove('dragover');
    });
    
    dropzone.addEventListener('drop', (e) => {
        e.preventDefault();
        dropzone.classList.remove('dragover');
        input.files = e.dataTransfer.files;
        updateFileInfo(dropzone, e.dataTransfer.files[0]);
    });
    
    input.addEventListener('change', (e) => {
        updateFileInfo(dropzone, e.target.files[0]);
    });
});

function updateFileInfo(dropzone, file) {
    const textDiv = dropzone.querySelector('.upload-text');
    textDiv.textContent = file.name;
}

// Form Submission
function handleSubmit(e) {
    e.preventDefault();
    
    if (validateStep(3)) {
        const form = e.target;
        const formData = new FormData(form);
        
        // Show loading state
        const submitBtn = form.querySelector('.submit-btn');
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Submitting...';
        submitBtn.disabled = true;

        // Simulate form submission
        setTimeout(() => {
            document.getElementById('successModal').style.display = 'flex';
            form.reset();
            submitBtn.innerHTML = 'Submit <i class="fas fa-check"></i>';
            submitBtn.disabled = false;
        }, 2000);
    }
}

// Modal Controls
function closeModal() {
    document.getElementById('successModal').style.display = 'none';
}

// Close modal when clicking outside
window.onclick = function(e) {
    const modal = document.getElementById('successModal');
    if (e.target === modal) {
        modal.style.display = 'none';
    }
}

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
  