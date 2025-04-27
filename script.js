// JavaScript for form submission
document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    // Get form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Validate fields
    if (name && email && message) {
        document.getElementById("responseMessage").innerHTML = `<p>Thank you, ${name}. Your message has been sent!</p>`;
        document.getElementById("contactForm").reset();
    } else {
        document.getElementById("responseMessage").innerHTML = `<p style="color: red;">Please fill all fields.</p>`;
    }
});
