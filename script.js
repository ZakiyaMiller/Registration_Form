document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.querySelector('input[placeholder="Username"]').value;
    const fullName = document.querySelector('input[placeholder="Full Name"]').value;
    const email = document.querySelector('input[placeholder="Email"]').value;
    const phone = document.querySelector('input[placeholder="Phone Number"]').value;
    const password = document.querySelector('input[placeholder="Password"]').value;
    const confirmPassword = document.querySelector('input[placeholder="Confirm Password"]').value;
    const checkbox = document.querySelector('input[type="checkbox"]').checked;

    if (username && fullName && email && phone && password && confirmPassword && checkbox) {
        if (password === confirmPassword) {
            alert('Form submitted successfully!');
            document.getElementById('registration-form').reset(); 
        } else {
            alert('Passwords do not match!');
        }
    } else {
        alert('Please fill in all fields and agree to the declaration.');
    }
});

