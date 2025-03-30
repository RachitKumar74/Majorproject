// Email Subscription Form
document.addEventListener('DOMContentLoaded', function() {
    const emailForm = document.getElementById('email-subscription-form');
    if (emailForm) {
        emailForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = document.getElementById('subscriber-email').value;
            const messageDiv = document.getElementById('subscription-message');
            
            // Simple validation
            if (!email || !email.includes('@')) {
                messageDiv.textContent = 'Please enter a valid email address.';
                messageDiv.style.color = 'red';
                return;
            }
            
            // Here you would typically send the data to your server or Google Sheets
            // For demo purposes, we'll just show a success message
            messageDiv.textContent = 'Thank you for subscribing!';
            messageDiv.style.color = 'white';
            emailForm.reset();
            
            // In a real implementation, you would use something like:
            // fetch('YOUR_GOOGLE_APPS_SCRIPT_URL', {
            //     method: 'POST',
            //     body: JSON.stringify({email: email}),
            //     headers: {
            //         'Content-Type': 'application/json'
            //     }
            // })
            // .then(response => response.json())
            // .then(data => {
            //     messageDiv.textContent = 'Thank you for subscribing!';
            //     messageDiv.style.color = 'white';
            //     emailForm.reset();
            // })
            // .catch(error => {
            //     messageDiv.textContent = 'There was an error. Please try again.';
            //     messageDiv.style.color = 'red';
            // });
        });
    }
    
    // Contact Form
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const service = document.getElementById('service').value;
            const message = document.getElementById('message').value;
            const messageDiv = document.getElementById('form-message');
            
            // Simple validation
            if (!name || !email || !service || !message) {
                messageDiv.textContent = 'Please fill in all required fields.';
                messageDiv.style.color = 'red';
                return;
            }
            
            // Here you would typically send the data to your server or Google Sheets
            // For demo purposes, we'll just show a success message
            messageDiv.textContent = 'Thank you for your message! We will get back to you soon.';
            messageDiv.style.color = 'green';
            contactForm.reset();
            
            // In a real implementation, you would use something like:
            // fetch('YOUR_GOOGLE_APPS_SCRIPT_URL', {
            //     method: 'POST',
            //     body: JSON.stringify({
            //         name: name,
            //         email: email,
            //         phone: phone,
            //         service: service,
            //         message: message
            //     }),
            //     headers: {
            //         'Content-Type': 'application/json'
            //     }
            // })
            // .then(response => response.json())
            // .then(data => {
            //     messageDiv.textContent = 'Thank you for your message! We will get back to you soon.';
            //     messageDiv.style.color = 'green';
            //     contactForm.reset();
            // })
            // .catch(error => {
            //     messageDiv.textContent = 'There was an error. Please try again.';
            //     messageDiv.style.color = 'red';
            // });
        });
    }
});