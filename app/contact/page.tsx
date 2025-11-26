"use client";
import { Github, Mail, Linkedin, Send, Loader2 } from "lucide-react";
import Link from "next/link";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import { useState } from "react";

// Social media data
const socials = [
    {
        icon: <Linkedin size={20} />,
        href: "https://linkedin.com/in/albeertomonterosolera",
        label: "LinkedIn",
        handle: "Alberto Montero",
    },
    {
        icon: <Github size={20} />,
        href: "https://github.com/monteero13",
        label: "Github",
        handle: "monteero13",
    },
    {
        icon: <Mail size={20} />,
        href: "mailto:13albertomontero@gmail.com",
        label: "Email",
        handle: "13albertomontero@gmail.com",
    },
];

export default function Contact() {
    // State to handle submission
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    // Function to handle Formspree submission
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        const formData = new FormData(e.currentTarget);

        try {
            // Using your Formspree ID: mblebdrp
            const response = await fetch("https://formspree.io/f/mblebdrp", {
                method: "POST",
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                setIsSubmitted(true);
            } else {
                // CAMBIO: Usar un mensaje en lugar de alert()
                console.error("There was an error sending the message.");
                // Aquí podrías implementar un modal o un mensaje de error visible en la UI
            }
        } catch (error) {
            // CAMBIO: Usar un mensaje en lugar de alert()
            console.error("Connection error.", error);
            // Aquí podrías implementar un modal o un mensaje de error visible en la UI
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        // CAMBIO 1: Fondo a negro puro
        <div className="bg-black min-h-screen">
            <Navigation />
            
            <div className="container px-4 mx-auto pt-20 md:pt-32 pb-10">
                {/* Header */}
                <div className="max-w-2xl mx-auto mb-16 text-center">
                    {/* CAMBIO 2: Título en blanco */}
                    <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl font-display">
                        Contact
                    </h1>
                    {/* CAMBIO 3: Subtítulo con acento Cyan */}
                    <p className="mt-4 text-cyan-400">
                        Got an idea or project in mind? Send me a message and let&apos;s talk.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-12">
                    {/* LEFT COLUMN: FORM */}
                    <div className="lg:col-span-2">
                        <Card>
                            <div className="p-4 md:p-10">
                                {isSubmitted ? (
                                    <div className="flex flex-col items-center justify-center h-full py-20 text-center animate-fade-in">
                                        {/* CAMBIO 4: Icono de éxito con color de acento */}
                                        <div className="p-3 mb-4 rounded-full bg-sky-500/10 text-sky-400 border border-sky-500/20">
                                            <Send size={40} />
                                        </div>
                                        <h3 className="text-2xl font-bold text-white">Message Sent!</h3>
                                        <p className="mt-2 text-zinc-400">Thanks for reaching out. I&apos;ll get back to you as soon as possible.</p>
                                        <button 
                                            onClick={() => setIsSubmitted(false)}
                                            className="mt-8 text-sm text-zinc-500 hover:text-sky-300 underline"
                                        >
                                            Send another message
                                        </button>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        
                                        <input 
                                            type="hidden" 
                                            name="_subject" 
                                            value="[PORTFOLIO] New contact from web" 
                                        />

                                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                                            <div className="space-y-2">
                                                <label htmlFor="name" className="text-sm font-medium text-sky-400"> {/* CAMBIO 5: Color de label */}
                                                    Name
                                                </label>
                                                <input
                                                    required
                                                    type="text"
                                                    name="name"
                                                    id="name"
                                                    placeholder="Your name"
                                                    // CAMBIO 6: Focus ring de color de acento
                                                    className="w-full px-4 py-3 bg-zinc-900/50 border border-zinc-700 rounded-lg focus:ring-2 focus:ring-sky-400 focus:border-sky-400/50 outline-none text-white placeholder-zinc-500 transition-all"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label htmlFor="email" className="text-sm font-medium text-sky-400"> {/* CAMBIO 5: Color de label */}
                                                    Email
                                                </label>
                                                <input
                                                    required
                                                    type="email"
                                                    name="email"
                                                    id="email"
                                                    placeholder="you@email.com"
                                                    // CAMBIO 6: Focus ring de color de acento
                                                    className="w-full px-4 py-3 bg-zinc-900/50 border border-zinc-700 rounded-lg focus:ring-2 focus:ring-sky-400 focus:border-sky-400/50 outline-none text-white placeholder-zinc-500 transition-all"
                                                />
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <label htmlFor="message" className="text-sm font-medium text-sky-400"> {/* CAMBIO 5: Color de label */}
                                                Message
                                            </label>
                                            <textarea
                                                required
                                                name="message"
                                                id="message"
                                                rows={6}
                                                placeholder="Tell me about your project..."
                                                // CAMBIO 6: Focus ring de color de acento
                                                className="w-full px-4 py-3 bg-zinc-900/50 border border-zinc-700 rounded-lg focus:ring-2 focus:ring-sky-400 focus:border-sky-400/50 outline-none text-white placeholder-zinc-500 resize-none transition-all"
                                            />
                                        </div>

                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            // CAMBIO 7: Botón principal con color de acento
                                            className="w-full md:w-auto px-8 py-3 bg-sky-400 text-black font-bold rounded-lg hover:bg-sky-300 transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-sky-500/30"
                                        >
                                            {isSubmitting ? (
                                                <>
                                                    <Loader2 className="animate-spin" size={18} />
                                                    Sending...
                                                </>
                                            ) : (
                                                <>
                                                    Send Message
                                                    <Send size={18} />
                                                </>
                                            )}
                                        </button>
                                    </form>
                                )}
                            </div>
                        </Card>
                    </div>

                    {/* RIGHT COLUMN: SOCIALS */}
                    <div className="flex flex-col gap-4">
                        {socials.map((s) => (
                            <Card key={s.label}>
                                <Link
                                    href={s.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-4 flex flex-row items-center gap-4 group hover:bg-zinc-900/50 transition-colors rounded-xl"
                                >
                                    {/* CAMBIO 8: Icono con hover al color de acento */}
                                    <span className="relative flex items-center justify-center w-10 h-10 text-sm border rounded-full text-white border-zinc-500 bg-zinc-900 group-hover:border-sky-400 group-hover:bg-sky-900/40 transition-all group-hover:text-sky-400">
                                        {s.icon}
                                    </span>
                                    <div className="flex flex-col">
                                        <span className="text-sm font-medium text-white group-hover:text-sky-300">
                                            {s.handle}
                                        </span>
                                        <span className="text-xs text-zinc-500 group-hover:text-sky-400">
                                            {s.label}
                                        </span>
                                    </div>
                                </Link>
                            </Card>
                        ))}
                    </div>

                </div>
            </div>
        </div>
    );
}