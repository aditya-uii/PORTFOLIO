import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExternalLink, Github, ShieldAlert, Award } from 'lucide-react';
import chatbot from '../assets/ChatGPT Image Mar 11, 2026, 01_21_06 PM.png';
import youtube from '../assets/yt.png'
import waffle from '../assets/waffle.png'

gsap.registerPlugin(ScrollTrigger);

const projects = [
    {
        title: 'AI chat-bot',
        description: 'AI-ChatBot enables users to speak prompts, send them to an AI API and receive responses—all in a clean, responsive UI.',
        tags: ['React', 'Node.js', 'gemini api'],
        rank: 'S-RANK',
        color: 'text-akatsuki-red',
        bgColor: 'bg-akatsuki-red/10',
        borderColor: 'border-akatsuki-red',
        stamp: 'TOP SECRET',
        image: chatbot,
         github: 'https://github.com/aditya-uii/AI-ChatBot',
        live: 'https://ai-chatbot-frontend-yjj8.onrender.com'
    },
    {
        title: 'Youtube-Clone-Reactjs',
        description: 'A simple and clean YouTube Clone built using React and Vite, featuring video cards, a sidebar layout, a YouTube-style header, and responsive design.',
        tags: ['Node.js', 'Express', 'React'],
        rank: 'A-RANK',
        color: 'text-uzumaki-orange',
        bgColor: 'bg-uzumaki-orange/10',
        borderColor: 'border-uzumaki-orange',
        stamp: 'CLASSIFIED',
        image: youtube,
           github: 'https://github.com/aditya-uii/Youtube-Clone-Reactjs',
        live: ''
    },
    {
        title: 'Fun Waffle Site',
        description: 'Waffle is a [brief description: e.g. “lightweight front-end UI project,” “interactive web app,” “utility for X”] built with HTML, CSS, and JavaScript.',
        tags: ['html', 'css', 'JavaScript'],
        rank: 'B-RANK',
        color: 'text-hokage-gold',
        bgColor: 'bg-hokage-gold/10',
        borderColor: 'border-hokage-gold',
        stamp: 'CONFIDENTIAL',
        image: waffle,
           github: 'https://github.com/aditya-uii/waffle',
        live: 'waffle-fox.netlify.app/'
    }
];

const Projects = () => {
    const sectionRef = useRef(null);
    const cardRefs = useRef([]);

    useEffect(() => {
        const section = sectionRef.current;

        // Header animation
        gsap.fromTo(section.querySelector('.mission-header'),
            { opacity: 0, scale: 0.9, y: 30 },
            {
                opacity: 1, scale: 1, y: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: section,
                    start: 'top 80%',
                }
            }
        );

        // Staggered card entry
        cardRefs.current.forEach((card, index) => {
            gsap.fromTo(card,
                { opacity: 0, y: 50, rotateX: 20 },
                {
                    opacity: 1, y: 0, rotateX: 0,
                    duration: 0.8,
                    delay: index * 0.2,
                    scrollTrigger: {
                        trigger: card,
                        start: 'top 85%',
                    }
                }
            );
        });
    }, []);

    return (
        <section id="projects" ref={sectionRef} className="py-32 bg-ninja-black relative overflow-hidden">
            {/* Background Decorative Kanji */}
            <div className="absolute top-20 left-10 text-[15rem] font-black text-white/2 select-none pointer-events-none -rotate-12 uppercase h-0">Task</div>
            <div className="absolute bottom-20 right-10 text-[15rem] font-black text-white/2 select-none pointer-events-none rotate-12 uppercase h-0">Code</div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="mission-header text-center mb-24">
                    <div className="inline-block px-4 py-1 border border-uzumaki-orange/30 rounded-full mb-6">
                        <span className="text-[10px] uppercase font-bold tracking-[0.5em] text-uzumaki-orange">Operation History</span>
                    </div>
                    <h2 className="text-5xl md:text-7xl font-anton text-white mb-6 uppercase tracking-tighter">
                        MISSION <span className="text-stroke-orange text-transparent">LOGS</span>
                    </h2>
                    <div className="w-24 h-1 bg-uzumaki-orange mx-auto"></div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                    {projects.map((project, index) => (
                        <div
                            key={project.title}
                            ref={el => cardRefs.current[index] = el}
                            className="group relative perspective-1000"
                        >
                            {/* Tactical Folder Design */}
                            <div className="relative bg-[#1a1a1a] rounded-sm p-1 transition-all duration-500 overflow-hidden group-hover:shadow-[0_0_40px_rgba(246,108,45,0.15)] group-hover:-translate-y-2 border border-white/5">

                                {/* Image Section / "File Attachment" */}
                                <div className="relative h-56 overflow-hidden mb-6 bg-black">
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-transparent z-10"></div>
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                                    />

                                    {/* Rank Stamp (Ink Stamp Style) */}
                                    <div className={`absolute top-6 left-6 z-20 transform -rotate-12 border-4 ${project.borderColor} ${project.color} px-4 py-1 font-anton text-2xl opacity-80 mix-blend-screen group-hover:rotate-0 group-hover:scale-110 transition-all duration-500`}>
                                        {project.rank}
                                    </div>

                                    {/* Top Secret Stamp */}
                                    <div className="absolute bottom-4 right-4 z-20 text-[10px] font-black text-white/20 uppercase tracking-[0.3em] border border-white/10 px-2 py-1">
                                        {project.stamp}
                                    </div>
                                </div>

                                {/* Content Section / "Mission Briefing" */}
                                <div className="px-8 pb-10">
                                    <div className="flex items-center space-x-2 mb-4">
                                        <div className={`w-2 h-2 rounded-full ${project.bgColor.replace('/10', '')} animate-pulse`}></div>
                                        <span className="text-[10px] text-gray-500 uppercase font-bold tracking-[0.2em]">Briefing ID: 00{index + 1}</span>
                                    </div>

                                    <h3 className="text-2xl text-white font-anton mb-4 group-hover:text-uzumaki-orange transition-colors duration-300">
                                        {project.title.toUpperCase()}
                                    </h3>

                                    <p className="text-gray-400 text-sm leading-relaxed mb-8 h-25 overflow-hidden">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mb-8">
                                        {project.tags.map(tag => (
                                            <span key={tag} className="text-[9px] uppercase font-bold text-hokage-gold bg-hokage-gold/5 px-2 py-1 border border-hokage-gold/10 hover:bg-hokage-gold/20 transition-colors">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Actions / "Manual Override" */}
                                    <div className="flex items-center justify-between pt-6 border-t border-white/5">
                                        <div className="flex space-x-4">
                                            <a href={project.github}
                                              target="_blank" 
                                              rel="noopener noreferrer"
                                            className="p-2 bg-white/5 hover:bg-uzumaki-orange hover:text-white rounded-full transition-all duration-300 transform hover:scale-110">
                                                <Github size={18} />
                                            </a>
                                            {/* <a href={project.live} 
                                               target="_blank" 
                                            rel="noopener noreferrer"
   className="p-2 bg-white/5 hover:bg-hokage-gold hover:text-ninja-black rounded-full transition-all duration-300 transform hover:scale-110">
                                                <ExternalLink size={18} />
                                            </a> */}
                                        </div>
                                        <div className="text-[10px] text-white/30 font-mono italic">
                      // AUTH_LVL_{index + 1}
                                        </div>
                                    </div>
                                </div>

                                {/* Tactical Corner Accents */}
                                <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-white/5 group-hover:border-uzumaki-orange/30 transition-colors duration-500"></div>
                                <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-white/5 group-hover:border-uzumaki-orange/30 transition-colors duration-500"></div>
                            </div>

                            {/* Back "Folder" Shadow Effect */}
                            <div className="absolute -inset-2 bg-uzumaki-orange/5 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Side Decorative Text */}
            <div className="absolute left-4 top-1/2 -translate-y-1/2 flex flex-col items-center space-y-8 opacity-20 hidden xl:flex">
                <span className="vertical-text text-white text-[10px] uppercase tracking-[1em] font-bold">Confidential</span>
                <div className="w-px h-32 bg-white/20"></div>
                <ShieldAlert size={16} className="text-akatsuki-red" />
            </div>

            <div className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col items-center space-y-8 opacity-20 hidden xl:flex">
                <Award size={16} className="text-hokage-gold" />
                <div className="w-px h-32 bg-white/20"></div>
                <span className="vertical-text text-white text-[10px] uppercase tracking-[1em] font-bold rotate-180">Authorized</span>
            </div>
        </section>
    );
};

export default Projects;
