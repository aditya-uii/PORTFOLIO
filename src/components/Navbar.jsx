import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Menu, X, Shield, Zap, Target, Mail } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null);
    const linksRef = useRef([]);

    const navLinks = [
        { name: 'About', href: '#about', icon: <Shield size={18} /> },
        { name: 'Jutsu', href: '#skills', icon: <Zap size={18} /> },
        { name: 'Missions', href: '#projects', icon: <Target size={18} /> },
        { name: 'Contact', href: '#contact', icon: <Mail size={18} /> },
    ];

    useEffect(() => {
        if (isOpen) {
            // Mobile Menu Open Animation (Scroll Unroll)
            gsap.fromTo(menuRef.current,
                { y: '-100%', opacity: 0 },
                { y: '0%', opacity: 1, duration: 0.6, ease: 'expo.out' }
            );

            // Staggered Link Entry
            gsap.fromTo(linksRef.current,
                { x: -20, opacity: 0 },
                { x: 0, opacity: 1, duration: 0.4, stagger: 0.1, delay: 0.2, ease: 'power2.out' }
            );
        }
    }, [isOpen]);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className="fixed top-0 left-0 w-full z-50 transition-all duration-300">
            {/* Desktop & Main Bar */}
            <div className="bg-ninja-black/80 backdrop-blur-md border-b border-white/5 px-6 py-4">
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    {/* Logo Area */}
                    <a href="#" className="flex items-center space-x-2 group">
                        <div className="w-8 h-8 flex items-center justify-center border-2 border-uzumaki-orange rounded-full group-hover:bg-uzumaki-orange transition-all">
                            <span className="text-sm text-uzumaki-orange group-hover:text-white font-black">忍</span>
                        </div>
                        <span className="text-white font-anton tracking-widest text-lg uppercase hidden sm:block">Shinobi<span className="text-uzumaki-orange">Home</span></span>
                    </a>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-gray-400 hover:text-uzumaki-orange uppercase text-xs font-bold tracking-[0.2em] transition-colors relative group"
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-uzumaki-orange transition-all group-hover:w-full"></span>
                            </a>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={toggleMenu}
                        className="md:hidden text-white p-2 hover:bg-white/5 rounded-full transition-colors"
                    >
                        {isOpen ? <X size={24} className="text-uzumaki-orange" /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay (Scroll Style) */}
            {isOpen && (
                <div
                    ref={menuRef}
                    className="fixed inset-0 top-[68px] bg-ninja-black z-40 md:hidden overflow-hidden flex flex-col p-8"
                >
                    {/* Background Decorative Kanji */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15rem] font-black text-white/5 select-none pointer-events-none">
                        忍
                    </div>

                    <div className="relative z-10 flex flex-col space-y-10 mt-10">
                        {navLinks.map((link, index) => (
                            <a
                                key={link.name}
                                href={link.href}
                                ref={el => linksRef.current[index] = el}
                                onClick={() => setIsOpen(false)}
                                className="flex items-center space-x-4 text-3xl font-anton text-white hover:text-uzumaki-orange transition-colors group"
                            >
                                <span className="text-uzumaki-orange opacity-50 group-hover:opacity-100 transition-opacity">
                                    {link.icon}
                                </span>
                                <span>{link.name.toUpperCase()}</span>
                            </a>
                        ))}
                    </div>

                    <div className="mt-auto border-t border-white/5 pt-10 text-center">
                        <p className="text-gray-600 text-[10px] uppercase font-bold tracking-[0.5em]">
                            Sector: Konohagakure
                        </p>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
