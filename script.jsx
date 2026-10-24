/*** REACT COMPONENTS ***/
import React from 'react';
import { createRoot } from 'react-dom/client';
import GlowCursor from './GlowCursor.jsx';

const container = document.getElementById('react-root');
const root = createRoot(container);

root.render(
  <GlowCursor
      color="#FFCD00"
      secondaryColor="#182B49"
      intensity={2}
      trailWidth={5}
      glow={1.5}
      quality="medium"
      followSpeed={0.2}
  />

);

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

const title = document.querySelector('.flashlight-title');

window.addEventListener('pointermove', (event) => {
    const rect = title.getBoundingClientRect();

    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    title.style.setProperty('--mouse-x', `${x}px`);
    title.style.setProperty('--mouse-y', `${y}px`);
});

const shutter = document.querySelector('.shutter-container');
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

      if(count >= topHalf) {
        document.body.classList.remove('lock-scroll');
        titleButton.classList.add('move-to-back');
        navigation.classList.remove('hidden');

        root.unmount();
      }

      if(count === (2*topHalf)) {
        shutter.classList.add('move-to-back');
      }
    }, { once: true });
  });
}, {once: true} );

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