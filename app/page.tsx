import Link from "next/link";
import React, { useState, useEffect } from "react";
import { Github, Linkedin, ArrowRight, Instagram, FileDown } from "lucide-react";
import dynamic from "next/dynamic";
import { MouseLight } from "./components/MouseLight";

// Carga dinámica para optimizar rendimiento de la animación pesada
const Particles = dynamic(() => import("./components/particles"), {
  ssr: false,
});

const navigation = [
  { name: "Projects", href: "/projects" },
  { name: "Live Demos", href: "/demos" },
  { name: "Contact", href: "/contact" },
];

export default function Home() {
  return (
    // CAMBIO 1: Añadir MouseLight al contenedor principal
    <div className="relative flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-transparent"> {/* Fondo transparente para ver fireworks */}
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={80}
        staticity={100}
        ease={100}
      />
      <MouseLight />

      {/* Background Effects */}
      {/* CAMBIO 2: Fondo de cuadrícula con color de acento más sutil */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-20"></div>


      {/* Main Content Container */}
      <div className="z-10 flex flex-col items-center px-4 text-center max-w-4xl mx-auto">

        {/* Contenedor Flex para juntar las etiquetas */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {/* Top Tagline 1: Open to work & collaborations */}
          <div className="animate-fade-in flex items-center gap-2 px-3 py-1 text-xs font-medium text-sky-400 bg-sky-900/40 rounded-full border border-sky-700/50 backdrop-blur-sm"> {/* CAMBIO 3: Color Sky/Cyan */}
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
            </span>
            Open to work & collaborations
          </div>

          {/* Top Tagline 2: Currently working at */}
          <div className="animate-fade-in flex items-center gap-2 px-3 py-1 text-xs font-medium text-sky-400 bg-sky-900/40 rounded-full border border-sky-700/50 backdrop-blur-sm"> {/* CAMBIO 3: Color Sky/Cyan */}
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
            </span>
            Currently working at<span className="text-white font-normal">
              <a href="https://khaos.uma.es/" target="_blank" rel="noopener_noreferrer">
                <button className="ml-0 hover:underline ml-1">Khaos Research</button>
              </a>
            </span>
          </div>
        </div>

        {/* Name with Gradient - CAMBIO 4: Degradado más brillante */}
        <h1 className="z-10 pb-4 text-4xl sm:text-6xl md:text-8xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-white to-sky-500 animate-fade-in duration-1000 font-display selection:bg-zinc-800">
          Alberto Montero
        </h1>

        {/* Subtitle / Role - CAMBIO 5: Acento azul/blanco */}
        <h2 className="text-lg sm:text-xl text-sky-400 animate-fade-in font-light tracking-wide mb-8 delay-150 duration-1000">
          Health Engineering Student & <span className="text-white font-medium">Bioinformatics Specialist</span>
        </h2>

        {/* Bio Description - CAMBIO 6: Texto principal en blanco, acentos en cyan */}
        <div className="my-4 max-w-2xl animate-fade-in space-y-4 delay-300 duration-1000">
          <p className="text-zinc-300 leading-relaxed text-sm sm:text-base">
            I bridge the gap between biology and technology. Passionate about
            <span className="text-cyan-400 font-medium"> Artificial Intelligence</span> with <span className="text-cyan-400 font-medium">Python</span>,
            <span className="text-cyan-400 font-medium"> LLMs</span>, and building scalable web applications with
            <span className="text-cyan-400 font-medium"> TypeScript</span> and <span className="text-cyan-400 font-medium">Next.js</span>.
          </p>
        </div>

        {/* Resume Button */}
        <div className="mt-8 animate-fade-in delay-500 duration-1000">
          <Link
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 px-5 py-2.5 bg-sky-400 text-black rounded-full font-bold hover:bg-sky-300 transition-all duration-300 hover:scale-105 shadow-lg shadow-sky-500/30"
            download="Alberto_Montero_CV.pdf"
          >
            <FileDown className="w-4 h-4" />
            Download CV
          </Link>
        </div>

        {/* Navigation Links & Socials */}
        <nav className="mt-12 animate-fade-in delay-700 duration-1000">
          {/* Main Links */}
          <ul className="flex flex-wrap items-center justify-center gap-6 mb-12">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group relative text-sm font-medium text-zinc-400 transition-colors hover:text-sky-300 flex items-center gap-1"
              >
                {item.name}
                <ArrowRight className="w-3 h-3 transition-transform group-hover:-rotate-45" />
              </Link>
            ))}
          </ul>

          {/* Social Icons - CAMBIO 7: Acentos de color en hover */}
          <div className="flex items-center justify-center gap-8 pt-8 border-t border-sky-900/50 w-full">
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
              className="text-zinc-500 hover:text-sky-400 transition-colors duration-300 hover:scale-110"
            >
              <Linkedin className="w-6 h-6" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link
              href="https://www.instagram.com/albeertomontero_/"
              target="_blank"
              className="text-zinc-500 hover:text-cyan-400 transition-colors duration-300 hover:scale-110"
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