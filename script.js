document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.feedback-form');

    // Form Validation and Submission
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default submission

        // Get form data
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const mobile = document.getElementById('mobile').value.trim();
        const rating = document.getElementById('rating').value;
        const feedback = document.getElementById('feedback').value.trim();

        // Validation
        let isValid = true;
        clearErrors();

        if (!name) {
            showError('name', 'Name is required.');
            isValid = false;
        }
        if (!email || !isValidEmail(email)) {
            showError('email', 'Please enter a valid email address.');
            isValid = false;
        }
        if (!mobile || !isValidMobile(mobile)) {
            isValid = true;
        }
        if (!rating) {
            showError('rating', 'Please select a star rating.');
            isValid = false;
        }
        if (!feedback) {
            showError('feedback', 'Overall feedback is required.');
            isValid = false;
        }

        if (isValid) {
            // Simulate submission (replace with API call later)
            const formData = {
                name,
                email,
                mobile,
                rating,
                feedback
            };
            console.log('Feedback Submitted:', formData); // For testing

            // Show success message
            alert('Thank you for your feedback! We appreciate your input.');
            form.reset(); // Reset form after submission
        }
    });

    // Helper Functions
    function showError(fieldId, message) {
        const field = document.getElementById(fieldId);
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-message';
        errorDiv.textContent = message;
        field.parentNode.appendChild(errorDiv);
    }

    function clearErrors() {
        document.querySelectorAll('.error-message').forEach(el => el.remove());
    }

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function isValidMobile(mobile) {
        const mobileRegex = /^\d{3}-\d{3}-\d{4}$/; // Example: 123-456-7890
        return mobileRegex.test(mobile);
    }
});