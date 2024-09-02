//section 1 js

// nav bar code
function toggleDropdown() {
  var menu = document.getElementById("dropdownMenu");
  if (menu.style.display === "block") {
      menu.style.display = "none";
  } else {
      menu.style.display = "block";
  }
}

// JavaScript to handle the "Explore" button click
document.querySelector('.explore_button').addEventListener('click', function() {
  window.location.href = 'explore.html';
});

// slider code
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

const contents2 = [
  {
    title: "Calathea plant",
    image: "reference/Rose Gold Feminine Calligraphy Monogram Logo(15) 2.png",
  },
  {
    title: "Rose Gold",
    image: "reference/Rose Gold Feminine Calligraphy Monogram Logo(15) 2-5.png",
  },
  {
    title: "Monstera Deliciosa",
      image: "reference/Rose Gold Feminine Calligraphy Monogram Logo(15) 2-2.png",
  },
];

let currentPage2 = 0;

function updateContent2(pageIndex2) {
  const content2 = contents2[pageIndex2];
  document.getElementById("top-card-title").innerText = content2.title;
  document.querySelector(".top-card-img").src = content2.image;

  // Update pagination dots
  document.querySelectorAll(".dot").forEach((dot, index2) => {
    if (index2 === pageIndex2) {
      dot.classList.add("active"); // Add active to the correct dot
    } else {
      dot.classList.remove("active"); // Remove active from others
    }
  });
}

function nextContent2() {
  currentPage2 = (currentPage2 + 1) % contents2.length;
  updateContent2(currentPage2);
}

function prevContent2() {
  currentPage2 = (currentPage2 - 1 + contents2.length) % contents.length;
  updateContent2(currentPage2);
}

function goToPage2(pageIndex2) {
  currentPage2 = pageIndex2;
  updateContent2(pageIndex2);
}

// Initialize content
updateContent2(currentPage2);

// Add event listeners to pagination dots
document.querySelectorAll(".dot").forEach((dot2, index2) => {
  dot2.addEventListener("click", () => goToPage(index2));
});


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

document.querySelectorAll('.slider').forEach(handleGradient);

document.querySelectorAll('.glassy_background1').forEach(handleGradient);
document.querySelectorAll('.glassy_background2').forEach(handleGradient);

// Apply to all card-review elements
document.querySelectorAll('.card-review').forEach(handleGradient);

document.querySelectorAll('.card').forEach(handleGradient);

document.querySelectorAll('.review_section1').forEach(handleGradient);




//******************************************************************************************
//section3
const contents = [
  {
    title: "We Have Small And Best O2 Plants ",
    description:
      "Plants are living organisms that produce their own food through photosynthesis. They convert sunlight into energy,using carbon dioxide and water, releasing oxygen as a byproduct.",
    image: "reference/pot-plant/scene.gltf",
  },
  {
    title: "Explore Exotic Plant Species",
    description:
      "Plants play a vital role in ecosystems by providing food, shelter, and oxygen. They form the foundation of food chains and support biodiversity through their complex interactions with other species.",
    image: "reference/model2/scene.gltf",
  },
  {
    title: "Boost Your Mood With Indoor Plants",
    description:
      "Plants are incredibly diverse, ranging from tiny mosses to towering trees. They have evolved various adaptations, like roots for water absorption and leaves for sunlight capture.",
    image: "reference/model/scene.gltf",
  },
  {
    title: "Best Oxygen-Producing Plants",
    description:
      "Human civilization relies on plants for food, medicine, and materials like wood and fibers. Agricultural advancements have allowed us to cultivate and domesticate plants for nourishment and industry.",
    image: "reference/rhyzome_plant/scene.gltf",
  },
];

let currentPage = 0;

function updateContent(pageIndex) {
  const content = contents[pageIndex];
  document.getElementById("card-title").innerText = content.title;
  document.getElementById("card-description").innerText = content.description;
  document.querySelector(".plant-image").src = content.image;
  document.querySelector(".current-page").innerText = `0${pageIndex + 1}`;

  // Update pagination dots
  document.querySelectorAll(".pagination-dot").forEach((dot, index) => {
    if (index === pageIndex) {
      dot.classList.add("active"); // Add active to the correct dot
    } else {
      dot.classList.remove("active"); // Remove active from others
    }
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

// Add event listeners to pagination dots
document.querySelectorAll(".pagination-dot").forEach((dot, index) => {
  dot.addEventListener("click", () => goToPage(index));
});


//********************************************************************************************

//****                 Footer JavaScript Code            ******

document.addEventListener("DOMContentLoaded", function () {
  const subscribeButton = document.getElementById("subscribeButton");

  subscribeButton.addEventListener("click", function () {
    const emailInput = document.getElementById("emailInput").value.trim();

    if (emailInput) {
      subscribeButton.innerHTML = "<b>SUBSCRIBED !!</b>";
      subscribeButton.style.backgroundColor = "grey"; // Black background
      subscribeButton.style.color = "#FFFFFF"; // White text
      subscribeButton.style.border = "1px solid white";
    } else {
      alert("Please enter your email address.");
    }
  });
});
