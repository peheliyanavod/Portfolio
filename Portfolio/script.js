function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }

// /*===== SCROLL REVEAL ANIMATION =====*/
// const sr = ScrollReveal({
//   origin: 'bottom',
//   distance: '60px',
//   duration: 2000,
//   delay: 200,
// //     reset: true
// });

// sr.reveal('.home_data, .aboutimg, .skillssubtitle, .skills_text',{}); 
// sr.reveal('.home_img, .aboutsubtitle, .abouttext, .skills_img',{delay: 400}); 
// sr.reveal('.home__social-icon',{ interval: 200}); 
// sr.reveal('.skills_data, .workimg, .contact_input',{interval: 200});