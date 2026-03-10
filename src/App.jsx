import React, { useState, useEffect } from 'react'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Preloader from './components/Preloader'
import './index.css'

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <Preloader onComplete={() => setLoading(false)} />}
      <Navbar />
      <main className={`bg-ninja-black selection:bg-uzumaki-orange selection:text-white transition-opacity duration-1000 ${loading ? 'opacity-0' : 'opacity-100'}`}>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />

        <footer className="bg-ninja-black py-12 border-t border-white/5 text-center">
          <div className="container mx-auto px-4">
            <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center border-2 border-uzumaki-orange rounded-full opacity-50">
              <span className="text-2xl text-uzumaki-orange font-black">忍</span>
            </div>
            <p className="text-gray-500 text-sm uppercase tracking-[0.3em] font-bold">
              Built with <span className="text-uzumaki-orange">Chakra</span> and Code | 2026
            </p>
          </div>
        </footer>
      </main>
    </>
  )
}

export default App
