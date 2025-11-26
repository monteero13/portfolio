import Link from "next/link";
import React from "react";
import Particles from "./components/particles";
import { Github, Linkedin, ArrowRight, Instagram, FileDown } from "lucide-react";

const navigation = [
  { name: "Projects", href: "/projects" },
  { name: "Live Demos", href: "/demos" },
  { name: "Contact", href: "/contact" },
];

export default function Home() {
  return (
    <div className="relative flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-900 to-black">
      
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={100}
        staticity={50}
        ease={50}
      />

      {/* Main Content Container */}
      <div className="z-10 flex flex-col items-center px-4 text-center max-w-4xl mx-auto">
        
        {/* Top Tagline */}
        <div className="mb-8 animate-fade-in flex items-center gap-2 px-3 py-1 text-xs font-medium text-zinc-400 bg-zinc-800/50 rounded-full border border-zinc-700/50 backdrop-blur-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          Open to work & collaborations
        </div>

        {/* Name with Gradient - Tamaño ajustado para móvil */}
        <h1 className="z-10 pb-4 text-4xl sm:text-6xl md:text-8xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-zinc-200 via-zinc-100 to-zinc-400 animate-fade-in duration-1000 font-display selection:bg-zinc-800">
          Alberto Montero
        </h1>

        {/* Subtitle / Role */}
        <h2 className="text-lg sm:text-xl text-zinc-400 animate-fade-in font-light tracking-wide mb-8 delay-150 duration-1000">
          Health Engineering Student & <span className="text-zinc-200 font-normal">Bioinformatics Specialist</span>
        </h2>

        {/* Bio Description */}
        <div className="my-4 max-w-2xl animate-fade-in space-y-4 delay-300 duration-1000">
          <p className="text-zinc-500 leading-relaxed text-sm sm:text-base">
            I bridge the gap between biology and technology. Passionate about 
            <span className="text-zinc-300"> Artificial Intelligence</span>, 
            <span className="text-zinc-300"> LLMs</span>, and building scalable web applications with 
            <span className="text-zinc-300"> Python</span> and <span className="text-zinc-300">Next.js</span>.
          </p>
        </div>

        {/* Resume Button */}
        <div className="mt-8 animate-fade-in delay-500 duration-1000">
          <Link
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 px-5 py-2.5 bg-zinc-100 text-zinc-900 rounded-full font-medium hover:bg-white transition-all duration-300 hover:scale-105 shadow-lg shadow-zinc-900/20"
            download="Alberto_Montero_CV.pdf"
          >
            <FileDown className="w-4 h-4" />
            Download Resume
          </Link>
        </div>

        {/* Navigation Links & Socials (Restaurado para diseño limpio en móvil) */}
        <nav className="mt-12 animate-fade-in delay-700 duration-1000">
          {/* Main Links */}
          <ul className="flex flex-wrap items-center justify-center gap-6 mb-12">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group relative text-sm font-medium text-zinc-400 transition-colors hover:text-white flex items-center gap-1"
              >
                {item.name}
                <ArrowRight className="w-3 h-3 transition-transform group-hover:-rotate-45" />
              </Link>
            ))}
          </ul>

          {/* Social Icons */}
          <div className="flex items-center justify-center gap-8 pt-8 border-t border-zinc-800 w-full">
            <Link 
              href="https://github.com/monteero13" 
              target="_blank"
              className="text-zinc-500 hover:text-white transition-colors duration-300 hover:scale-110"
            >
              <Github className="w-6 h-6" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link 
              href="https://linkedin.com/in/albeertomonterosolera" 
              target="_blank"
              className="text-zinc-500 hover:text-blue-400 transition-colors duration-300 hover:scale-110"
            >
              <Linkedin className="w-6 h-6" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link 
              href="https://www.instagram.com/albeertomontero_/" 
              target="_blank"
              className="text-zinc-500 hover:text-emerald-400 transition-colors duration-300 hover:scale-110"
            >
              <Instagram className="w-6 h-6" />
              <span className="sr-only">Instagram</span>
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
}