import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import adiLogo from '../assets/aditya_logo.png';


const Hero = () => {
  const containerRef = useRef(null);
  const logoRef = useRef(null);
  const textRef = useRef(null);
  const subTextRef = useRef(null);
  const bgRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    tl.fromTo(containerRef.current, { opacity: 0 }, { opacity: 1, duration: 1 })
      .fromTo(logoRef.current, { scale: 0.8, opacity: 0, rotate: -20 }, { scale: 1, opacity: 1, rotate: 0, duration: 1.5, ease: 'back.out(1.7)' }, "-=0.5")
      .fromTo(textRef.current, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1 }, "-=0.8")
      .fromTo(subTextRef.current, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, "-=0.5");

    // Continuous float animation for the logo
    gsap.to(logoRef.current, {
      y: 10,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });

    // Mouse parallax effect
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const xPos = (clientX / window.innerWidth - 0.5) * 20;
      const yPos = (clientY / window.innerHeight - 0.5) * 20;

      if (logoRef.current) {
        gsap.to(logoRef.current, {
          x: xPos,
          y: yPos,
          duration: 1,
          ease: 'power2.out'
        });
      }

      if (bgRef.current) {
        gsap.to(bgRef.current, {
          x: -xPos * 0.5,
          y: -yPos * 0.5,
          duration: 2,
          ease: 'power2.out'
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div ref={containerRef} className="relative h-screen flex flex-col items-center justify-center bg-ninja-black overflow-hidden px-4">
      {/* Cinematic Vignette Overlay */}
      <div className="absolute inset-0 z-10 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,rgba(5,5,5,0.4)_50%,rgba(5,5,5,1)_100%)]"></div>

      {/* Background Decorative Element */}
      <div ref={bgRef} className="absolute inset-0 z-0 opacity-40 scale-110">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-ninja-black/60 to-ninja-black z-10"></div>
        <img
          src="https://www.transparenttextures.com/patterns/dark-matter.png"
          alt="Dark Chakra Texture"
          className="w-full h-full object-repeat"
        />
        {/* Subtle cinematic glow overlay */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-uzumaki-orange/5 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-hokage-gold/5 blur-[120px] rounded-full"></div>
      </div>

      <div className="relative z-20 text-center flex flex-col items-center">
        {/* Hidden Leaf SVG Symbol */}
        <div ref={logoRef} className="sm:mb-6 group cursor-default">
          <svg
            viewBox="0 0 100 100"
            className="w-32 h-32 md:w-40 md:h-40 filter drop-shadow-[0_0_20px_rgba(246,108,45,0.6)] group-hover:drop-shadow-[0_0_30px_rgba(246,108,45,0.9)] transition-all duration-500"
          >
            {/* Outline Spiral */}
            <path
              d="M50 85 C 30 85, 15 70, 15 50 C 15 30, 30 15, 50 15 C 70 15, 85 30, 85 50 L 50 50"
              fill="none"
              stroke="#f66c2d"
              strokeWidth="5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* The Tail */}
            <path d="M85 50 L 95 50" stroke="#f66c2d" strokeWidth="5" strokeLinecap="round" />
            {/* The Triangle Notch */}
            <path d="M15 50 L 5 50" stroke="#f66c2d" strokeWidth="5" strokeLinecap="round" />
            <circle cx="50" cy="50" r="10" fill="none" stroke="#f66c2d" strokeWidth="5" />
          </svg>
        </div>

        <div className="mb-5">
          <img
            src={adiLogo}
            alt="ADI Logo"
            className="h-32 md:h-45 mx-auto drop-shadow-[0_0_15px_rgba(246,108,45,0.4)] hover:scale-105 transition-transform duration-500"
          />
        </div>

        <h1 ref={textRef} className="text-5xl md:text-8xl text-white mb-2 tracking-tighter">
          SHINOBI <span className="text-uzumaki-orange text-stroke-orange font-anton">PORTFOLIO</span>
        </h1>

        <p ref={subTextRef} className="text-lg md:text-2xl text-hokage-gold/80 font-bold tracking-[0.4em] uppercase mb-12">
          Mastering the Art of Code
        </p>

        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
          <button className="px-10 py-4 bg-uzumaki-orange text-white font-black rounded-sm transform hover:scale-105 active:scale-95 transition-all duration-300 border-2 border-transparent hover:border-white chakra-glow uppercase text-xs tracking-[0.2em] shadow-2xl"
          >
            Explore Jutsu
          </button>
          <button className="px-10 py-4 bg-transparent text-white font-black rounded-sm border-2 border-hokage-gold/50 hover:border-hokage-gold hover:bg-hokage-gold hover:text-ninja-black transition-all duration-300 uppercase text-xs tracking-[0.2em]"
            onClick={() => {
    document.getElementById("projects").scrollIntoView({
      behavior: "smooth"
    });
  }}
          >
            See Missions
          </button>
        </div>
      </div>

    </div>
  );
};

export default Hero;
