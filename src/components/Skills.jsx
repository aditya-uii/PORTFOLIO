import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Shield, Zap, Target, Cpu, Code, Database } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const skills = [
    { name: 'React & Vite', level: 95, icon: <Cpu />, category: 'Ninjutsu' },
    { name: 'JavaScript / ES6', level: 90, icon: <Zap />, category: 'Ninjutsu' },
    { name: 'Tailwind CSS', level: 85, icon: <Target />, category: 'Taijutsu' },
    { name: 'Node.js & Express', level: 80, icon: <Database />, category: 'Genjutsu' },
    { name: 'Rest Api', level: 75, icon: <Shield />, category: 'Taijutsu' },
    { name: 'GSAP Animations', level: 85, icon: <Code />, category: 'Genjutsu' },
];

const Skills = () => {
    const sectionRef = useRef(null);
    const cardRefs = useRef([]);

    useEffect(() => {
        const section = sectionRef.current;

        // Header animation
        gsap.fromTo(section.querySelector('h2'),
            { opacity: 0, y: -30 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: section,
                    start: 'top 80%',
                }
            }
        );

        // Staggered cards entry
        cardRefs.current.forEach((card, index) => {
            gsap.fromTo(card,
                { opacity: 0, x: index % 2 === 0 ? -50 : 50 },
                {
                    opacity: 1,
                    x: 0,
                    duration: 0.8,
                    ease: 'back.out(1.7)',
                    scrollTrigger: {
                        trigger: card,
                        start: 'top 85%',
                    }
                }
            );

            // Progress bar fill
            const progressBar = card.querySelector('.progress-fill');
            gsap.fromTo(progressBar,
                { width: '0%' },
                {
                    width: progressBar.getAttribute('data-level') + '%',
                    duration: 1.5,
                    ease: 'power2.inOut',
                    scrollTrigger: {
                        trigger: card,
                        start: 'top 85%',
                    }
                }
            );
        });
    }, []);

    return (
        <section id="skills" ref={sectionRef} className="py-24 bg-ninja-gray relative overflow-hidden">
            {/* Background Chakra Aura */}
            <div className="absolute inset-0 z-0 opacity-5 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-uzumaki-orange rounded-full blur-[120px]"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-6xl text-white mb-4">SHINOBI <span className="text-uzumaki-orange">JUTSU</span></h2>
                    <p className="text-hokage-gold uppercase tracking-[0.4em] font-bold">Skills & Techniques</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {skills.map((skill, index) => (
                        <div
                            key={skill.name}
                            ref={el => cardRefs.current[index] = el}
                            className="bg-ninja-black border border-white/10 p-6 rounded-sm group hover:border-uzumaki-orange transition-colors duration-300"
                        >
                            <div className="flex items-center justify-between mb-4">
                                <div className="flex items-center space-x-4">
                                    <div className="p-3 bg-ninja-gray text-uzumaki-orange group-hover:scale-110 transition-transform duration-300">
                                        {skill.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-xl text-white">{skill.name}</h3>
                                        <span className="text-xs text-hokage-gold font-bold uppercase tracking-wider">{skill.category}</span>
                                    </div>
                                </div>
                                <span className="text-2xl font-black text-white/20 italic">{skill.level}%</span>
                            </div>

                            <div className="h-2 bg-ninja-gray rounded-full overflow-hidden">
                                <div
                                    className="progress-fill h-full bg-uzumaki-orange"
                                    data-level={skill.level}
                                ></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
