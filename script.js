const navbar = document.querySelector(".header");
let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
  const currentScrollY = window.scrollY;

  if (currentScrollY > lastScrollY && currentScrollY > 70) {
    navbar.classList.add("transition-disappear");
  } else {
    navbar.classList.remove("transition-disappear");
  }

  lastScrollY = currentScrollY;
});


const titleButton = document.querySelector('.shutter-title h1');
document.body.classList.add('lock-scroll');

titleButton.addEventListener('click', () => {
  titleButton.classList.add('animate-fadeOut');

  const items = document.querySelectorAll('.shutter');
  const topHalf = 5;

  items.forEach((item, index) => { 
    const shutterClass = index < topHalf ? 'top' : 'bot';
    item.classList.add(shutterClass);

    item.addEventListener('animationend', () => {
      item.classList.remove(shutterClass); 
    }, { once: true });

    item.addEventListener('transitionend', () => {
      document.body.classList.remove('lock-scroll');
    }, { once: true });
  });

  titleButton.addEventListener('animationend', () => {
    titleButton.classList.remove('animate-fadeOut'); 
  }, { once: true });
});

// NOTES:
/***
 * ADD A BACKGROUND IMAGE TO THE CONTENTS PAGE
 * OVERLAY IT WITH A COVER AND MAKE IT LIKE GLOSSY SAME AS NAVBAR OR NOT IF IT LOOKS BAD
 * HAVE THE IMAGE MOVING LIKE SIDE TO SIDE.
 * MAYBE ADD ROCKET ANIMATION MOVING FROM ONE END TO THE OTHER TOO?
 * 
 * MAKE THE ABOUT US PAGE CENTERED THEN DIP OUTWARDS TO EXPAND A BOX THAT BRINGS UP THE MISSION STATEMENT
 * 
 * HAVE A VIDEO BACKGROUND NOT PHOTO BACKGROUND AT THE START
**/