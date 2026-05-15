document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Thank you! Your inquiry has been submitted.");
});


// Scroll reveal for Vision & Mission cards
  document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".vm-card");
    
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target); // animate once
        }
      });
    }, { threshold: 0.2 });

    cards.forEach(card => observer.observe(card));
  });


function openLightbox(img) {
  document.getElementById("lightbox").style.display = "block";
  document.getElementById("lightbox-img").src = img.src;
}

function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}


