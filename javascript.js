//section 1 js
let currentSlide = 0;

function moveSlide(direction) {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    const totalSlides = slides.length;

    slides[currentSlide].classList.remove('active');
    dots[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
}


//******************************************************************************************

//section 2 js
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
document.querySelectorAll('.top-selling-card').forEach(handleGradient);

// Apply to all card-review elements
document.querySelectorAll('.card-review').forEach(handleGradient);

//******************************************************************************************
//section3
const contents = [
    {
        title: "We Have Small And Best O2 Plants Collection's",
        description: "Plants produce oxygen, absorb carbon dioxide, and provide food, shelter, and medicine. They are essential for life on Earth.",
        image: "Rose Gold Feminine Calligraphy Monogram Logo(15) 2.png"
    },
    {
        title: "Explore Exotic Plant Species",
        description: "Discover a variety of rare and exotic plant species that thrive in different climates.",
        image: "Rose Gold Feminine Calligraphy Monogram Logo(15) 2-4.png"
    },
    {
        title: "Boost Your Mood With Indoor Plants",
        description: "Indoor plants have been shown to improve mood and mental health.",
        image: "Rose Gold Feminine Calligraphy Monogram Logo(15) 2.png"
    },
    {
        title: "Best Oxygen-Producing Plants",
        description: "Learn about the best oxygen-producing plants that can improve air quality.",
        image: "Rose Gold Feminine Calligraphy Monogram Logo(15) 2-2.png"
    }
];

let currentPage = 0;

function updateContent(pageIndex) {
    const content = contents[pageIndex];
    document.getElementById('card-title').innerText = content.title;
    document.getElementById('card-description').innerText = content.description;
    document.querySelector('.plant-image').src = content.image;
    document.querySelector('.current-page').innerText = `0${pageIndex + 1}`;

    // Update active dot
    document.querySelectorAll('.dot').forEach((dot, index) => {
        dot.classList.toggle('active', index === pageIndex);
    });
}

function nextContent() {
    currentPage = (currentPage + 1) % contents.length;
    updateContent(currentPage);
}

function prevContent() {
    currentPage = (currentPage - 1 + contents.length) % contents.length;
    updateContent(currentPage);
}

function goToPage(pageIndex) {
    currentPage = pageIndex;
    updateContent(pageIndex);
}

// Initialize content
updateContent(currentPage);

//********************************************************************************************
