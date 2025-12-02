import Link from "next/link";
import React from "react";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import { Eye } from "lucide-react";

// Lista de proyectos con URLs a GitHub y descripciones actualizadas

const allProjects = [
  {
    slug: "alcolens",
    title: "Alcolens",
    description: "SaaS platform for patient management and alcoholism auditing. Features secure authentication, user roles, and real-time data visualization.",
    date: "2024-05-15",
    published: true,
    url: "https://github.com/khaosresearch/alcolens", // URL externa
  },
  {
    slug: "neo-biotic",
    title: "Neo-Biotic",
    description: "Advanced analysis of antibiotic resistance patterns and microbiome interactions. A comprehensive R-based study visualized for clinical interpretation.",
    date: "2024-04-10",
    published: true,
    url: "https://github.com/monteero13/Neo-Biotic",
  },
  {
    slug: "aniridia-sysbio",
    title: "Aniridia-SysBio",
    description: "Systems biology approach to Aniridia research. Integrates genomic data to model biological pathways and identify potential therapeutic targets.",
    date: "2024-03-22",
    published: true,
    url: "https://github.com/monteero13/Aniridia-SysBio",
  },
  {
    slug: "kardiaproject",
    title: "KardiaProject",
    description: "Cardiovascular health data analysis platform. Provides statistical modeling and visualization of heart disease risk factors using clinical datasets.",
    date: "2024-02-15",
    published: true,
    url: "https://github.com/monteero13/KardiaProject",
  },
  {
    slug: "semanti-view",
    title: "Semanti-View",
    description: "Semantic web visualization tool designed to explore complex ontologies and knowledge graphs, making linked data accessible and interactive.",
    date: "2024-01-30",
    published: true,
    url: "https://github.com/monteero13/Semanti-View",
  },
  {
    slug: "edowl",
    title: "edowl",
    description: "Ontology engineering project focusing on the alignment and management of OWL files for educational and research data domains.",
    date: "2023-12-10",
    published: true,
    url: "https://github.com/monteero13/edowl",
  },
  {
    slug: "isa2024-healthcalc",
    title: "ISA2024 HealthCalc",
    description: "Interactive clinical calculator developed for the ISA 2024 symposium. Allows health professionals to compute key metrics instantly via a web interface.",
    date: "2023-11-05",
    published: true,
    url: "https://github.com/monteero13/isa2024-healthcalc",
  },
];

export const revalidate = 60;

export default async function ProjectsPage() {
  const views: Record<string, number> = {}; 

  // Featured: El proyecto principal
  const featured = allProjects.find((project) => project.slug === "alcolens")!;
  
  // Top 2 y 3
  const top2 = allProjects.find((project) => project.slug === "neo-biotic")!;
  const top3 = allProjects.find((project) => project.slug === "aniridia-sysbio")!;
  
  // Sorted: El resto de proyectos ordenados por fecha
  const sorted = allProjects
    .filter((p) => p.published)
    .filter(
      (project) =>
        project.slug !== featured.slug &&
        project.slug !== top2.slug &&
        project.slug !== top3.slug,
    )
    .sort(
      (a, b) =>
        new Date(b.date ?? Number.POSITIVE_INFINITY).getTime() -
        new Date(a.date ?? Number.POSITIVE_INFINITY).getTime(),
    );

  // Helper para renderizar la tarjeta del proyecto con enlace externo
  const ProjectCardContent = ({ project, isFeatured = false }: { project: typeof allProjects[0], isFeatured?: boolean }) => (
    // CAMBIO 1: Añadir target="_blank" para abrir en nueva pestaña
    <Link 
        href={project.url} 
        target="_blank" 
        rel="noopener noreferrer"
        className="block w-full h-full"
    >
        <article className={`relative w-full h-full p-4 ${isFeatured ? 'md:p-8' : 'md:p-6'}`}>
        <div className="flex items-center justify-between gap-2">
            {/* CAMBIO 2: Fecha en blanco */}
            <div className="text-xs text-white">
            {project.date ? (
                <time dateTime={new Date(project.date).toISOString()}>
                {Intl.DateTimeFormat("en-US", {
                    dateStyle: "medium",
                }).format(new Date(project.date))}
                </time>
            ) : (
                <span>SOON</span>
            )}
            </div>
            <span className="flex items-center gap-1 text-xs text-zinc-500">
            <Eye className="w-4 h-4" />{" "}
            {Intl.NumberFormat("en-US", { notation: "compact" }).format(
                views[project.slug] ?? 0,
            )}
            </span>
        </div>

        <h2
            // CAMBIO 3: Título destacado con degradado Cyan/Sky
            className={`mt-4 font-bold text-white group-hover:text-sky-300 font-display ${
                isFeatured 
                    ? 'text-3xl sm:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-white' 
                    : 'text-xl'
            }`}
        >
            {project.title}
        </h2>
        {/* CAMBIO 4: Descripción con hover a blanco */}
        <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-white">
            {project.description}
        </p>
        <div className="mt-auto pt-5 bottom-4 md:bottom-8">
            {/* CAMBIO 5: Link de 'Ver Proyecto' en color de acento */}
            <p className="hidden text-sky-400 hover:text-white lg:block">
            View Project <span aria-hidden="true">&rarr;</span>
            </p>
        </div>
        </article>
    </Link>
  );

  return (
    // CAMBIO 6: Fondo a negro puro y padding superior ajustado
    <div className="relative pb-16 bg-transparent"> 
      <Navigation />
      <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        <div className="max-w-2xl mx-auto lg:mx-0">
          {/* CAMBIO 7: Título principal en blanco */}
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl font-display">
            Projects
          </h2>
          {/* CAMBIO 8: Subtítulo con acento cyan */}
          <p className="mt-4 text-cyan-400">
            A selection of my work in Bioinformatics, Health Engineering, and Web Development.
          </p>
        </div>
        
        {/* CAMBIO 9: Separador con color de acento */}
        <div className="w-full h-px bg-sky-900/50" />

        <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2 ">
          {/* Tarjeta Principal (Featured) */}
          <Card>
             <ProjectCardContent project={featured} isFeatured={true} />
          </Card>

          {/* Top 2 y 3 */}
          <div className="flex flex-col w-full gap-8 mx-auto border-t border-sky-900/50 lg:mx-0 lg:border-t-0 ">
            {[top2, top3].map((project) => (
              <Card key={project.slug}>
                <ProjectCardContent project={project} />
              </Card>
            ))}
          </div>
        </div>
        
        {/* CAMBIO 10: Separador con color de acento */}
        <div className="hidden w-full h-px md:block bg-sky-900/50" />

        {/* Resto de proyectos (Grid de 3 columnas) */}
        <div className="grid grid-cols-1 gap-4 mx-auto lg:mx-0 md:grid-cols-3">
          <div className="grid grid-cols-1 gap-4">
            {sorted
              .filter((_, i) => i % 3 === 0)
              .map((project) => (
                <Card key={project.slug}>
                  <ProjectCardContent project={project} />
                </Card>
              ))}
          </div>
          <div className="grid grid-cols-1 gap-4">
            {sorted
              .filter((_, i) => i % 3 === 1)
              .map((project) => (
                <Card key={project.slug}>
                  <ProjectCardContent project={project} />
                </Card>
              ))}
          </div>
          <div className="grid grid-cols-1 gap-4">
            {sorted
              .filter((_, i) => i % 3 === 2)
              .map((project) => (
                <Card key={project.slug}>
                  <ProjectCardContent project={project} />
                </Card>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}