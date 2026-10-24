/*** REACT COMPONENTS ***/
import React from 'react';
import { createRoot } from 'react-dom/client';

import GlowCursor from './Components/GlowCursor.jsx';
import LightRays from './Components/LightRays.jsx';
import Particles from './Components/Particles';

const container = document.getElementById('react-root');
const root = createRoot(container);

root.render(
  <>
    <div className="glow-layer" style={{ position: 'relative', width: '100%', height: '100%' }}>
      <GlowCursor
        color="ffffff"
        intensity={1.3}
        trailWidth={3}
        linger={1.4}
        glow={1.2}
        clickBurst
        theme="dark"
      >

      </GlowCursor>
    </div>

    {/*Stagelight thing but did not fit so no*/}
    {/*<div className="light-rays-layer">
        <LightRays
            raysOrigin="top-center"
            raysColor="#ffffff"
            raysSpeed={1}
            lightSpread={0.5}
            rayLength={3}
            glow={0.6}
            haze={0.25}
            followMouse
            mouseInfluence={0.1}
            rayDensity={1}
            tilt={0}
            raySharpness={0.35}
            atmosphere={1}
            intensity={0.7}
            fadeDistance={1}
            saturation={1}
            noiseAmount={0}
            distortion={0}
            pulsating={false}
            cursorShadow
            clickPulse
            intro
            lightMode={false}
        />
    </div>*/}

    <div class="light-particles-layer">
      <Particles
        particleColors={["#ffffff","#ffffff","#ffffff"]}
        particleCount={200}
        particleSpread={10}
        speed={0.1}
        particleBaseSize={100}
        glow={0.5}
        twinkle={0.3}
        moveParticlesOnHover
        hoverEffect="parallax"
        sizeRandomness={1}
        shape="circle"
        depthOfField={0}
        connections={false}
        connectionDistance={110}
        particleHoverFactor={1}
        hoverRadius={140}
        drift="none"
        driftSpeed={1}
        alphaParticles={false}
        disableRotation={false}
        cameraDistance={20}
        variation={0}
        opacity={1}
        clickBurst
        intro
        lightMode={false}
      />
    </div>

  </>
);

if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}

window.scrollTo(0, 0);

window.addEventListener('load', () => {
    window.scrollTo(0, 0);
});

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

/* Homepage Animations */
const titleButton = document.querySelector('.shutter-title h1');
const title = document.querySelector('.flashlight-title');
const clickMeButton = document.querySelector('.click-hint');

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
  titleButton.classList.add('animate-fadeOut');
  clickMeButton.classList.add('animate-fadeOut')
  background.classList.add('animate-fullOpacity');

  const items = document.querySelectorAll('.shutter');
  const topHalf = 5;
  let count = 0;

  root.unmount();

  items.forEach((item, index) => { 
    const shutterClass = index < topHalf ? 'top' : 'bot';
    item.classList.add(shutterClass);

    item.addEventListener('transitionend', () => {
      count++;

      if(count >= topHalf) {
        document.body.classList.remove('lock-scroll');
        titleButton.classList.add('move-to-back');
        navigation.classList.remove('hidden');
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