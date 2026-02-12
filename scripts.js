document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const formStatus = document.getElementById('formStatus');
    formStatus.textContent = 'Sending...';

    // Simulate form submission with a timeout
    setTimeout(() => {
        formStatus.textContent = 'Message sent successfully!';
        document.getElementById('contactForm').reset();
    }, 2000);
});
