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


  function maplocation(){
    window.open("https://www.google.com/maps/place/Al+Fattan+Plaza/@25.2542159,55.3338822,13z/data=!3m1!5s0x3e5f69c8fc76ce65:0x94e7dcb4d547dd25!4m6!3m5!1s0x3e5f5d1b81d61725:0xc4c3354de3a5d9eb!8m2!3d25.2512168!4d55.3450721!16s%2Fg%2F11bbwxlx9m?entry=ttu&g_ep=EgoyMDI0MDgyNi4wIKXMDSoASAFQAw%3D%3D");
  }
  
  


  