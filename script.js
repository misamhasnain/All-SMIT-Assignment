// Fade-in sections on scroll
const sections = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.2 });

sections.forEach(section => observer.observe(section));

// Buttons alert
// document.querySelectorAll(".view-btn").forEach(btn => {
//   btn.onclick = () => alert("Opening assignment view...");
// });

// document.querySelectorAll(".code-btn").forEach(btn => {
//   btn.onclick = () => alert("Opening assignment code...");
// });
