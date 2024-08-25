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


  