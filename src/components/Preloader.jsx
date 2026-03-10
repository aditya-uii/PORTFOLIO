import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Preloader = ({ onComplete }) => {
    const containerRef = useRef(null);
    const eyeRef = useRef(null);
    const tomoeRef = useRef([]);
    const textRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline({
            onComplete: () => {
                // Exit animation
                gsap.to(containerRef.current, {
                    yPercent: -100,
                    duration: 1.2,
                    ease: "power4.inOut",
                    onComplete: onComplete
                });
            }
        });

        // 1. Initial fade in
        tl.fromTo(containerRef.current, { opacity: 0 }, { opacity: 1, duration: 0.5 })

            // 2. Eye wake up (Red flash)
            .fromTo(eyeRef.current,
                { scale: 0, opacity: 0, filter: 'brightness(1)' },
                { scale: 1, opacity: 1, filter: 'brightness(1.5)', duration: 0.8, ease: "back.out(1.7)" }
            )

            // 3. Tomoe awakening (one by one)
            .fromTo(tomoeRef.current,
                { scale: 0, opacity: 0, rotate: -180 },
                { scale: 1, opacity: 1, rotate: 0, stagger: 0.2, duration: 0.6, ease: "power2.out" },
                "-=0.3"
            )

            // 4. Spin and evolve
            .to(eyeRef.current, {
                rotate: 360,
                duration: 1.5,
                ease: "power2.inOut"
            })

            // 5. Final pulse and fade text
            .fromTo(textRef.current, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5 }, "-=0.5")
            .to(containerRef.current, { backgroundColor: '#000', duration: 0.3 }, "+=0.5");

    }, [onComplete]);

    return (
        <div
            ref={containerRef}
            className="fixed inset-0 z-[9999] bg-ninja-black flex flex-col items-center justify-center overflow-hidden"
        >
            <div className="relative w-48 h-48 flex items-center justify-center">
                {/* The Red Eye Circle */}
                <div
                    ref={eyeRef}
                    className="absolute w-32 h-32 rounded-full border-4 border-akatsuki-red/50 bg-[#8b0000] shadow-[0_0_50px_rgba(255,0,0,0.4)] flex items-center justify-center overflow-hidden"
                >
                    {/* Pupil */}
                    <div className="w-8 h-8 bg-black rounded-full z-10"></div>

                    {/* Tomoe - Represented as stylized dots/shapes */}
                    {[0, 120, 240].map((angle, i) => (
                        <div
                            key={i}
                            ref={el => tomoeRef.current[i] = el}
                            className="absolute w-6 h-6"
                            style={{
                                transform: `rotate(${angle}deg) translate(0, -35px)`
                            }}
                        >
                            <div className="w-full h-full bg-black rounded-full relative">
                                <div className="absolute top-1/2 left-full -translate-y-1/2 w-4 h-2 bg-black rounded-full -rotate-45 origin-left"></div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Outer Glow Ring */}
                <div className="absolute inset-0 rounded-full border border-white/5 animate-ping opacity-20"></div>
            </div>

            <div ref={textRef} className="mt-8 text-center">
                <h2 className="text-white text-2xl font-anton tracking-[0.5em] uppercase">Shinobi Access</h2>
                <div className="mt-2 flex justify-center space-x-1">
                    {[1, 2, 3].map(i => (
                        <div key={i} className="w-1 h-1 bg-uzumaki-orange animate-pulse" style={{ animationDelay: `${i * 0.2}s` }}></div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Preloader;
