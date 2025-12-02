import Link from "next/link";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import { ExternalLink, Github } from "lucide-react";

// DATA: Real Projects
// Note: For RStudio HTML deployments, the best free option is enabling GitHub Pages 
// in each repository settings. The URL pattern usually is: https://monteero13.github.io/repo-name
const demos = [
  {
    title: "Neo-Biotic",
    description: "Advanced analysis of antibiotic resistance patterns and microbiome interactions. A comprehensive R-based study visualized for clinical interpretation.",
    // If you enable GitHub Pages, the URL would be: https://monteero13.github.io/Neo-Biotic
    url: "https://monteero13.github.io/Neo-Biotic",
    repo: "https://github.com/monteero13/Neo-Biotic",
    tech: ["R", "Bioinformatics", "RMarkdown"],
  },
  {
    title: "KardiaProject",
    description: "Cardiovascular health data analysis platform. Provides statistical modeling and visualization of heart disease risk factors using clinical datasets.",
    url: "https://monteero13.github.io/KardiaProject",
    repo: "https://github.com/monteero13/KardiaProject",
    tech: ["R", "Shiny", "Data Viz"],
  },
  {
    title: "Alcolens",
    description: "SaaS platform for patient management and alcoholism auditing. Features secure authentication, user roles, and real-time data visualization.",
    url: "https://alcolens-demo.vercel.app",
    repo: "https://github.com/monteero13/alcolens",
    tech: ["Next.js", "MongoDB", "NextAuth", "Tailwind"],
  },
];

export default function Demos() {
  return (
    // CAMBIO 1: Fondo a negro puro
    <div className="relative min-h-screen bg-transparent">
      <Navigation />

      <div className="container px-4 mx-auto pt-20 md:pt-32 pb-16">
        <div className="max-w-2xl mx-auto mb-16 text-center">
          {/* CAMBIO 2: Título en blanco */}
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl font-display">
            Live Demos
          </h1>
          {/* CAMBIO 3: Subtítulo con acento cyan */}
          <p className="mt-4 text-cyan-400">
            Explore my deployed applications and technical reports.
            From full-stack web apps to bioinformatics analysis and RStudio visualizations.
          </p>
        </div>

        <div className="grid w-full grid-cols-1 gap-8 mx-auto lg:grid-cols-2 lg:gap-8 max-w-5xl">
          {demos.map((demo) => (
            <Card key={demo.title}>
              <div className="flex flex-col h-full p-6 md:p-8">
                {/* Card Header */}
                <div className="flex items-center justify-between gap-4 mb-4">
                  {/* CAMBIO 4: Título de demo en blanco */}
                  <h2 className="text-xl font-bold text-white font-display">
                    {demo.title}
                  </h2>
                  <div className="flex gap-2">
                    {demo.repo && (
                      <Link
                        href={demo.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        // CAMBIO 5: Icono con hover a blanco
                        className="text-zinc-400 hover:text-white transition-colors"
                      >
                        <Github size={20} />
                      </Link>
                    )}
                    <Link
                      href={demo.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      // CAMBIO 5: Icono con hover a blanco
                      className="text-zinc-400 hover:text-white transition-colors"
                    >
                      <ExternalLink size={20} />
                    </Link>
                  </div>
                </div>

                {/* Description */}
                {/* CAMBIO 6: Descripción en gris más claro */}
                <p className="text-zinc-300 leading-relaxed mb-6 flex-grow text-sm">
                  {demo.description}
                </p>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-sky-900/50"> {/* CAMBIO 7: Borde con acento sutil */}
                  {demo.tech.map((t) => (
                    <span
                      key={t}
                      // CAMBIO 8: Tags con fondo de acento y texto claro
                      className="px-2 py-1 text-xs font-medium text-sky-300 bg-sky-900/40 rounded-full border border-sky-700/50"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Main Action Button */}
                <Link
                  href={demo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  // CAMBIO 9: Botón principal con color de acento
                  className="mt-6 w-full py-2 flex items-center justify-center gap-2 bg-sky-400 hover:bg-sky-300 text-black font-bold rounded-md transition-colors text-sm shadow-lg shadow-sky-500/30"
                >
                  View Demo <ExternalLink size={14} />
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}