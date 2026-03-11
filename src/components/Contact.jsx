import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import emailjs from "@emailjs/browser";
import { Send, Mail, Instagram, Github } from 'lucide-react';

const Contact = () => {
    const containerRef = useRef(null);
    const sealRef = useRef(null);
    const formRef = useRef(null);

    useEffect(() => {
        gsap.to(sealRef.current, {
            scale: 1.1,
            duration: 2,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        });
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

       emailjs.sendForm(
  import.meta.env.VITE_EMAIL_SERVICE_ID,
  import.meta.env.VITE_EMAIL_TEMPLATE_ID,
  formRef.current,
  import.meta.env.VITE_EMAIL_PUBLIC_KEY
).then(() => {
            alert("Mission Request Sent! 🐦 Messenger bird dispatched.");
            formRef.current.reset();
        })
        .catch((error) => {
            console.error(error);
            alert("Mission failed. Try again.");
        });
    };

    return (
        <section id="contact" ref={containerRef} className="py-24 bg-ninja-gray relative overflow-hidden">

            {/* Background Seal */}
            <div ref={sealRef} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
            w-[600px] h-[600px] border-8 border-akatsuki-red/10 rounded-full opacity-20 pointer-events-none flex items-center justify-center">
                <div className="w-[400px] h-[400px] border-4 border-akatsuki-red/10 rounded-full flex items-center justify-center">
                    <div className="text-9xl font-black text-akatsuki-red/10">封</div>
                </div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-5xl mx-auto bg-ninja-black border-2 border-white/5 shadow-[0_0_50px_rgba(0,0,0,0.5)] flex flex-col md:flex-row">

                    {/* Sidebar */}
                    <div className="md:w-1/3 bg-uzumaki-orange p-12 text-white flex flex-col justify-between">
                        <div>
                            <h2 className="text-4xl font-black mb-8 leading-tight">
                                SUMMONING<br/>PORTAL
                            </h2>

                            <p className="text-sm font-bold opacity-90 mb-12 uppercase tracking-widest">
                                Send your message across the Five Great Shinobi Nations.
                            </p>

                            <div className="space-y-8">
                                <div className="flex items-center space-x-4">
                                    <div className="bg-white/20 p-2 rounded-sm">
                                        <Mail size={20}/>
                                    </div>
                                    <span className="text-sm font-bold">
                                        kashyapadi2004@gmail.com
                                    </span>
                                </div>

                                <div className="flex items-center space-x-4">
                                    <div className="bg-white/20 p-2 rounded-sm">
                                        <Github size={20}/>
                                    </div>
                                    <span className="text-sm font-bold">
                                        github.com/aditya-uii
                                    </span>
                                </div>

                                <div className="flex items-center space-x-4">
                                    <div className="bg-white/20 p-2 rounded-sm">
                                        <Instagram size={20}/>
                                    </div>
                                    <span className="text-sm font-bold">
                                        adityakashyap7998
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12 pt-8 border-t border-white/20">
                            <p className="text-[10px] uppercase font-bold tracking-[0.2em] opacity-80 italic">
                                "A ninja must see through deception."
                            </p>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="md:w-2/3 p-12 bg-ninja-black relative">

                        <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                                <div>
                                    <label className="block text-xs font-black text-hokage-gold uppercase tracking-widest mb-2">
                                        Ninja Name
                                    </label>

                                    <input
                                        type="text"
                                        name="name"
                                        className="w-full bg-ninja-gray border border-white/10 p-4 text-white focus:outline-none focus:border-uzumaki-orange"
                                        placeholder="E.g. Kakashi Hatake"
                                        required
                                    />
                                </div>

                                <div>
                                    <label className="block text-xs font-black text-hokage-gold uppercase tracking-widest mb-2">
                                        Village Email
                                    </label>

                                    <input
                                        type="email"
                                        name="email"
                                        className="w-full bg-ninja-gray border border-white/10 p-4 text-white focus:outline-none focus:border-uzumaki-orange"
                                        placeholder="messenger@bird.com"
                                        required
                                    />
                                </div>

                            </div>

                            <div>
                                <label className="block text-xs font-black text-hokage-gold uppercase tracking-widest mb-2">
                                    Mission Subject
                                </label>

                                <input
                                    type="text"
                                    name="subject"
                                    className="w-full bg-ninja-gray border border-white/10 p-4 text-white focus:outline-none focus:border-uzumaki-orange"
                                    placeholder="Rank-S Recruitment"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-black text-hokage-gold uppercase tracking-widest mb-2">
                                    Scroll Content
                                </label>

                                <textarea
                                    name="message"
                                    rows="5"
                                    className="w-full bg-ninja-gray border border-white/10 p-4 text-white focus:outline-none focus:border-uzumaki-orange resize-none"
                                    placeholder="Your message to the shinobi..."
                                    required
                                ></textarea>
                            </div>

                            <div className="pt-4">
                                <button
                                    type="submit"
                                    className="w-full bg-transparent border-2 border-uzumaki-orange py-4 text-uzumaki-orange font-black uppercase tracking-[0.3em] hover:bg-uzumaki-orange hover:text-white transition-all duration-300 flex items-center justify-center space-x-4 group"
                                >
                                    <Send size={18} className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-300"/>
                                    <span>Execute Summoning Jutsu</span>
                                </button>
                            </div>

                        </form>

                        <div className="absolute top-0 right-0 p-4">
                            <div className="text-white/5 font-black text-4xl select-none">火</div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;