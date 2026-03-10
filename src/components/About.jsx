import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const sectionRef = useRef(null);
    const scrollRef = useRef(null);
    const contentRef = useRef(null);

    useEffect(() => {
        const section = sectionRef.current;
        const scroll = scrollRef.current;

        // Scroll unrolling animation
        gsap.fromTo(scroll,
            { scaleX: 0, opacity: 0 },
            {
                scaleX: 1,
                opacity: 1,
                duration: 1.5,
                ease: 'power2.inOut',
                scrollTrigger: {
                    trigger: section,
                    start: 'top 80%',
                    end: 'top 30%',
                    scrub: 1,
                }
            }
        );

        // Content fade in
        gsap.fromTo(contentRef.current,
            { opacity: 0, y: 30 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                delay: 0.5,
                scrollTrigger: {
                    trigger: section,
                    start: 'top 60%',
                }
            }
        );
    }, []);

    return (
        <section id="about" ref={sectionRef} className="relative min-h-screen py-20 bg-ninja-black flex items-center justify-center overflow-hidden">
            {/* Decorative Smoke Background */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-uzumaki-orange/10 to-transparent pointer-events-none"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl md:text-6xl text-hokage-gold mb-12 flex items-center justify-center space-x-4">
                        <span className="w-12 h-[2px] bg-hokage-gold"></span>
                        <span>THE NINJA WAY</span>
                        <span className="w-12 h-[2px] bg-hokage-gold"></span>
                    </h2>

                    <div className="relative pt-8 pb-12">
                        {/* Scroll Background Img Placeholder */}
                        <div
                            ref={scrollRef}
                            className="absolute inset-0 bg-[#e6d5b8] shadow-2xl rounded-sm border-x-8 border-ninja-gray origin-center"
                            style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/natural-paper.png")' }}
                        ></div>

                        <div ref={contentRef} className="relative px-8 md:px-16 text-ninja-black">
                            <p className="text-xl md:text-2xl font-bold leading-relaxed mb-8 font-inter italic">
                                "I'm not gonna run away, I never go back on my word! That's my nindo: my ninja way!"
                            </p>
                            <div className="space-y-6 text-lg md:text-xl font-medium">
                                <p>
                                    Just as a shinobi trains relentlessly to master their chakra, I have dedicated myself to mastering the arts of modern web development. My journey is one of continuous growth, tackling every challenge with determination and a "never give up" attitude.
                                </p>
                                <p>
                                    With a background in building dynamic, high-performance applications, I specialize in crafting digital experiences that are as sharp and precise as a kunai. Whether it's React, Node.js, or complex animations - I approach every line of code as a mission to be accomplished.
                                </p>
                            </div>

                            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                                <div className="p-4 border-2 border-ninja-black/20 rounded-sm">
                                    <h4 className="font-bold text-uzumaki-orange uppercase mb-2">Determination</h4>
                                    <p className="text-sm">Never backing down from complex architectural challenges.</p>
                                </div>
                                <div className="p-4 border-2 border-ninja-black/20 rounded-sm">
                                    <h4 className="font-bold text-uzumaki-orange uppercase mb-2">Precision</h4>
                                    <p className="text-sm">Writing clean, efficient, and well-structured codebases.</p>
                                </div>
                                <div className="p-4 border-2 border-ninja-black/20 rounded-sm">
                                    <h4 className="font-bold text-uzumaki-orange uppercase mb-2">Adaptability</h4>
                                    <p className="text-sm">Learning and mastering new "jutsu" in the ever-evolving tech landscape.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
