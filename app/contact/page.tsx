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
                alert("There was an error sending the message. Please try again.");
            }
        } catch (error) {
            alert("Connection error.");
        } finally {
            setIsSubmitting(false);
        }
    };

	return (
		<div className="bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0 min-h-screen">
			<Navigation />
			
            <div className="container px-4 mx-auto pt-20 md:pt-32 pb-10">
                {/* Header */}
                <div className="max-w-2xl mx-auto mb-16 text-center">
                    <h1 className="text-4xl font-bold tracking-tight text-zinc-100 sm:text-5xl font-display">
                        Contact
                    </h1>
                    <p className="mt-4 text-zinc-400">
                        Got an idea or project in mind? Send me a message and let&apos;s talk.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-12">
                    {/* LEFT COLUMN: FORM (Takes 2 spaces on desktop) */}
                    <div className="lg:col-span-2">
                        <Card>
                            <div className="p-4 md:p-10">
                                {isSubmitted ? (
                                    <div className="flex flex-col items-center justify-center h-full py-20 text-center animate-fade-in">
                                        <div className="p-3 mb-4 rounded-full bg-green-500/10 text-green-400 border border-green-500/20">
                                            <Send size={40} />
                                        </div>
                                        <h3 className="text-2xl font-bold text-zinc-100">Message Sent!</h3>
                                        <p className="mt-2 text-zinc-400">Thanks for reaching out. I&apos;ll get back to you as soon as possible.</p>
                                        <button 
                                            onClick={() => setIsSubmitted(false)}
                                            className="mt-8 text-sm text-zinc-500 hover:text-zinc-300 underline"
                                        >
                                            Send another message
                                        </button>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        
                                        {/* TRICK: Hidden field for AUTOMATIC SUBJECT */}
                                        <input 
                                            type="hidden" 
                                            name="_subject" 
                                            value="[PORTFOLIO] New contact from web" 
                                        />

                                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                                            <div className="space-y-2">
                                                <label htmlFor="name" className="text-sm font-medium text-zinc-400">
                                                    Name
                                                </label>
                                                <input
                                                    required
                                                    type="text"
                                                    name="name"
                                                    id="name"
                                                    placeholder="Your name"
                                                    className="w-full px-4 py-3 bg-zinc-900/50 border border-zinc-800 rounded-lg focus:ring-2 focus:ring-zinc-700 focus:border-transparent outline-none text-zinc-200 placeholder-zinc-600 transition-all"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label htmlFor="email" className="text-sm font-medium text-zinc-400">
                                                    Email
                                                </label>
                                                <input
                                                    required
                                                    type="email"
                                                    name="email"
                                                    id="email"
                                                    placeholder="you@email.com"
                                                    className="w-full px-4 py-3 bg-zinc-900/50 border border-zinc-800 rounded-lg focus:ring-2 focus:ring-zinc-700 focus:border-transparent outline-none text-zinc-200 placeholder-zinc-600 transition-all"
                                                />
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <label htmlFor="message" className="text-sm font-medium text-zinc-400">
                                                Message
                                            </label>
                                            <textarea
                                                required
                                                name="message"
                                                id="message"
                                                rows={6}
                                                placeholder="Tell me about your project..."
                                                className="w-full px-4 py-3 bg-zinc-900/50 border border-zinc-800 rounded-lg focus:ring-2 focus:ring-zinc-700 focus:border-transparent outline-none text-zinc-200 placeholder-zinc-600 resize-none transition-all"
                                            />
                                        </div>

                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="w-full md:w-auto px-8 py-3 bg-white text-black font-medium rounded-lg hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
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

                    {/* RIGHT COLUMN: SOCIALS (Takes 1 space) */}
                    <div className="flex flex-col gap-4">
                        {socials.map((s) => (
                            <Card key={s.label}>
                                <Link
                                    href={s.href}
                                    target="_blank"
                                    className="p-4 flex flex-row items-center gap-4 group hover:bg-zinc-900/50 transition-colors rounded-xl"
                                >
                                    <span className="relative flex items-center justify-center w-10 h-10 text-sm border rounded-full text-zinc-200 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 group-hover:bg-zinc-800 transition-all">
                                        {s.icon}
                                    </span>
                                    <div className="flex flex-col">
                                        <span className="text-sm font-medium text-zinc-200 group-hover:text-white">
                                            {s.handle}
                                        </span>
                                        <span className="text-xs text-zinc-500 group-hover:text-zinc-400">
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