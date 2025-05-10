import React, { use } from 'react'
import gsap from 'gsap'
import {useGSAP} from '@gsap/react'
import { useState } from 'react'


const App = () => {

  let [showContent , setShowContent] = useState(false);

  //Animation of VI text
  useGSAP(() => {
    const tl = gsap.timeline({repeat: -1, repeatDelay: 0.5})
    tl.to('.vi-mask-group', {
     rotate: 10,
     ease: 'power4.easeInOut',
     transformOrigin: '50% 50%',
     duration: 2,
    })
    tl.to('.vi-mask-group', {
      scale: 10,
      duration: 2,
      delay: -1.8,
      ease: 'Expo.easeInOut',
      transformOrigin: '50% 50%',
      opacity: 0,
      onUpdate: function() {
        if(this.progress() > .9) {
        document.querySelector('.svg').remove();
        setShowContent(true);
        this.kill();

    }},
  });
  });

  useGSAP(() => {
    if (!showContent) return;

    // gsap.to(".main", {
    //   scale: 1,
    //   rotete: 0,
    //   duration: 2,
    //   delay:"-1",
    //   ease: "Expo.easeInOut",
    // });
    // gsap.to("")
    const main = document.querySelector(".main");

    main?.addEventListener("mousemove", function (e) {
      const xMove = (e.clientX / window.innerWidth - 0.5) * 40;
      gsap.to(".main .text", {
        x: `${xMove * 0.4}%`,
      });
      gsap.to(".sky", {
        x: xMove,
      });
      gsap.to(".bg", {
        x: xMove * 1.7,
      });
    });
  }, [showContent]);
  return (
    <>
    <div className="svg flex items-center justify-center fixed top-0 left-0 z-[100] w-full h-screen overflow-hidden bg-[#000]">
    <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice" className="w-full h-full">
      <defs>
        <mask id="viMask">
          <rect width="100%" height="100%" fill="black" />
          <g className="vi-mask-group">
            <text
              x="50%"
              y="50%"
              fontSize="250"
              textAnchor="middle"
              fill="white"
              dominantBaseline="middle"
              fontFamily="Arial Black"
            >
              VI
            </text>
          </g>
        </mask>
      </defs>
      <image
        href="./bg.png"
        width="100%"
        height="100%"
        preserveAspectRatio="xMidYMid slice"
        mask="url(#viMask)"
      />
    </svg>
  </div>
  {showContent && (
       <div className='main w-full bg-black'>
        <div className='landing w-full h-screen bg-black'>
          {/* Navbar */}
          <div className='navbar w-full py-6 md:py-10 px-4 md:px-10 z-[10] absolute top-0 left-0'>
            <div className='logo flex gap-4 md:gap-7'>
              <div className="lines flex flex-col gap-1">
                <div className="line w-10 md:w-15 h-1 md:h-2 bg-white"></div>
                <div className="line w-6 md:w-8 h-1 md:h-2 bg-white"></div>
                <div className="line w-4 md:w-5 h-1 md:h-2 bg-white"></div>
              </div>
              <h3 className='text-xl md:text-3xl -mt-[4px] md:-mt-[8px] leading-none text-white'>Rockstar</h3>
            </div>
          </div>
          
          {/* background images */}
          <div className="imagesdiv overflow-hidden relative w-full h-screen">
            <img src="./sky.png" alt="background" className='sky absolute scale-[1.2] w-full h-full object-cover' />
            <img src="./bg.png" alt="background" className='bg absolute scale-[1.2] w-full h-full object-cover' />
            <div className="text text-white flex flex-col gap-2 md:gap-3 absolute top-10 md:top-20 left-1/2 -translate-x-1/2 scale-[0.6] md:scale-[1.2]">
                <h1 className="text-[5rem] md:text-[10rem] leading-none -ml-20 md:-ml-40">Grand</h1>
                <h1 className="text-[5rem] md:text-[10rem] leading-none ml-10 md:ml-40">Theft</h1>
                <h1 className="text-[5rem] md:text-[10rem] leading-none -ml-20 md:-ml-40">Auto</h1>
            </div>
            <img src="./girlbg.png" className='absolute character -bottom-[20%] md:-bottom-[40%] left-1/2 -translate-x-1/2 scale-[0.5] md:scale-[0.9]' />
          </div>

          {/* bottom bar */}
          <div className="bottomBar text-white w-full py-8 md:py-15 px-4 md:px-10 bottom-0 left-0 absolute bg-gradient-to-t from-black to-transparent">
            <div className='flex gap-2 md:gap-4 items-center'>
              <i className="text-2xl md:text-4xl text-white ri-arrow-down-line"></i>
              <h3 className='font-[Halevetica] text-sm md:text-xl'>Scroll Down</h3>
            </div>
            <img src="./ps5.png" alt="" className='absolute h-[30px] md:h-[45px] top-1/2 left-1/2 -translate-x-1/2' />
          </div>

          <div className="w-full h-screen flex items-center justify-center bg-black">
            <div className="cntnr mt-[8rem] mb-[8rem] flex flex-col md:flex-row text-white w-full h-[80%] px-4 md:px-0">
              <div className=" relative w-full md:w-1/2 h-[300px] md:h-full">
                <img
                  className="absolute top-1/2 left-1/2 z-50 -translate-x-1/2 -translate-y-1/2 w-full  object-contain"
                  src="/imag.png"
                  alt=""
                />
              </div>
              <div className="rimg text-center mt-6 md:mt-10">
                <h1 className='text-center text-4xl md:text-8xl'>Vice City</h1>
                <h1 className='text-4xl md:text-8xl'>Rule the Streets</h1>
                <div className='flex justify-center mt-6 md:mt-10'>
                  <p className='w-full md:w-[35rem] text-sm md:text-[1rem] font-[Halevetica] px-4 md:px-0'>Vice City is calling—where power is earned, respect is taken, and the streets belong to those daring enough to rule them. A neon-lit metropolis teeming with ambition and danger, every alley whispers secrets, and every high-rise offers a view of conquest. In this city, fortune favors the fearless, and only the strongest will rise above the chaos. Step into the action, own the night, and carve your name into the heart of the criminal underworld. Rule the streets. Rule Vice City.</p>
                </div>
                <button className="bg-yellow-500 px-6 md:px-10 rounded-full text-center h-8 md:h-10 text-black mt-6 md:mt-10 text-lg md:text-2xl">
                  Download Now
                </button>
              </div>
            </div>
          </div>

          <div className="gta6 w-full min-h-screen flex flex-col md:flex-row bg-black">
            <div className="bag w-full md:w-1/2">
              <div className="img relative w-full h-[300px] md:h-full">
                <img src="./GTA-6.jpg" alt="GTA 6 Cover Image" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="trailer relative flex flex-col items-center justify-center w-full md:w-1/2 text-white py-10 md:py-0">
              <h1 className="text-2xl md:text-4xl font-bold">Grand Theft Auto VI</h1>
              <h2 className="text-xl md:text-2xl mt-4">Watch Trailer Now</h2>
              <button className="bg-yellow-500 px-6 md:px-10 py-2 rounded-full text-black mt-4 md:mt-6 text-lg md:text-2xl hover:bg-yellow-600 transition">
                Learn More
              </button>
            </div>
          </div>

          <div className="Games w-full min-h-screen flex flex-col items-center justify-center bg-black px-4 md:px-0">
            <h1 className="text-center text-white text-2xl md:text-4xl font-bold">Featured Games</h1>
            <div className="flex flex-wrap justify-center gap-4 mt-6">
              <div className="card w-[150px] md:w-[15rem]"><img src="./Gta5.jpg" alt="GTA 5" className="w-full h-full object-cover" /></div>
              <div className="card w-[150px] md:w-[15rem]"><img src="./GTAOnline.jpg" alt="GTA Online" className="w-full h-full object-cover" /></div>
              <div className="card w-[150px] md:w-[15rem]"><img src="./RDR2.jpg" alt="Red Dead Redemption 2" className="w-full h-full object-cover" /></div>
              <div className="card w-[150px] md:w-[15rem]"><img src="./RDR.jpg" alt="Red Dead Redemption" className="w-full h-full object-cover" /></div>
            </div>
          </div>

          <footer className="bg-black text-white py-6 px-4 md:px-10 font-[Halevetica]">
            <div className="container mx-auto text-center">
              <h2 className="text-lg md:text-xl font-semibold">Rockstar Games</h2>
              
              <div className="mt-4 md:mt-6">
                <h3 className="text-base md:text-lg font-semibold">Popular Games</h3>
                <ul className="flex flex-wrap justify-center gap-4 md:gap-6 mt-2">
                  <li>Grand Theft Auto VI</li>
                  <li>Red Dead Redemption 2</li>
                  <li>Max Payne 3</li>
                  <li>Bully</li>
                  <li>Midnight Club: Los Angeles</li>
                </ul>
              </div>

              <nav className="mt-4 md:mt-6">
                <h3 className="text-base md:text-lg font-semibold">Quick Links</h3>
                <ul className="flex flex-wrap justify-center gap-4 md:gap-6 mt-2">
                  <li><a href="https://www.rockstargames.com/" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-500">Home</a></li>
                  <li><a href="https://support.rockstargames.com/" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-500">Support</a></li>
                  <li><a href="https://www.rockstargames.com/newswire" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-500">News</a></li>
                  <li><a href="https://socialclub.rockstargames.com/" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-500">Social Club</a></li>
                </ul>
              </nav>

              <div className="mt-4 md:mt-6 flex justify-center gap-4 md:gap-6">
                <a href="https://twitter.com/RockstarGames" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-500">
                  Twitter
                </a>
                <a href="https://www.youtube.com/user/RockstarGames" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-500">
                  YouTube
                </a>
              </div>

              <p className="text-xs mt-4 md:mt-6">© {new Date().getFullYear()} Rockstar Games, Inc. All Rights Reserved.</p>
            </div>
          </footer>
        </div>
       </div>
      )}
  </>
  );
}

export default App

