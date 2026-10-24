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
const background = document.querySelector('.background-image');
const navigation = document.querySelector('.header');
document.body.classList.add('lock-scroll');

titleButton.addEventListener('click', () => {
  titleButton.classList.add('default-cursor');
  titleButton.classList.add('animate-fadeOut');
  background.classList.add('animate-fullOpacity');

  const items = document.querySelectorAll('.shutter');
  const topHalf = 5;
  let count = 0;

  items.forEach((item, index) => { 
    const shutterClass = index < topHalf ? 'top' : 'bot';
    item.classList.add(shutterClass);

    item.addEventListener('transitionend', () => {
      count++;

      if(count >= topHalf){
        document.body.classList.remove('lock-scroll');
        titleButton.classList.add('move-to-back');
        navigation.classList.remove('hidden');
      }
    });
  });
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