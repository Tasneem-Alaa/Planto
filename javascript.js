// Function to update gradient angle
function handleGradient(element) {
    element.onmousemove = (e) => {
        const rect = element.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const angle = Math.atan2(y - rect.height / 2, x - rect.width / 2) * (180 / Math.PI) + 180;

        element.style.setProperty('--gradient-angle', `${angle}deg`);
    };

    element.onmouseleave = () => {
        element.style.setProperty('--gradient-angle', '55deg');
    };
}

// Apply to all card elements
document.querySelectorAll('.card').forEach(handleGradient);

// Apply to all card-review elements
document.querySelectorAll('.card-review').forEach(handleGradient);
