AOS.init({
    duration: 2000,
});

VanillaTilt.init(document.querySelectorAll('[data-tilt]'), {
    max: 25,
    speed: 400,
    glare: true,
    "max-glare": 0.5
});


// Function to show the details of the selected item
function showDetail(id) {
    // Hide all text-boxes
    document.querySelectorAll('.text-box').forEach(function(textBox) {
        textBox.classList.remove('active');
    });

    // Show the selected text-box
    document.getElementById(id).classList.add('active');
}

// Show default detail
document.addEventListener('DOMContentLoaded', function() {
    showDetail('html-details'); // Default to HTML details
});
