document.addEventListener('DOMContentLoaded', () => {
    const scrollSection = document.querySelector('.scroll-section');
    const banners = document.querySelectorAll('.banner-section');
    const scrollDuration = 5000; // Time in milliseconds for each scroll
    let currentIndex = 0;
  
    function scrollToNextBanner() {
      currentIndex = (currentIndex + 1) % banners.length;
      const nextBanner = banners[currentIndex];
      scrollSection.scrollTo({
        top: nextBanner.offsetTop,
        behavior: 'smooth'
      });
    }
  
    setInterval(scrollToNextBanner, scrollDuration);
  });


  function toggleMenu() {
    const classTag = document.querySelector('.nav-links-main');
    if (classTag.style.display === 'none' || classTag.style.display === '') {
      classTag.style.display = 'block'; 
      classTag.classList.toggle('active');// Show the menu
    } else {
      classTag.style.display = 'none'; // Hide the menu
    }
  }
  
  


  