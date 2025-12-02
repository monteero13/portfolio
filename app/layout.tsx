import "../global.css";
import { Inter } from "@next/font/google";
import LocalFont from "@next/font/local";
import { Metadata } from "next";
import { Analytics } from "./components/analytics";
import { GravityStarsBackground } from "../components/animate-ui/components/backgrounds/gravity-stars"

export const metadata: Metadata = {
  title: {
    default: "Alberto Montero",
    template: "%s | Alberto Montero",
  },
  description: "Health Engineering Student & Bioinformatics Specialist specializing in AI, LLMs, and Web Development.",
  openGraph: {
    title: "Alberto Montero",
    description: "Health Engineering Student & Bioinformatics Specialist specializing in AI, LLMs, and Web Development.",
    url: "https://albertomontero.vercel.app", // He puesto un placeholder común de Vercel, cámbialo si tienes dominio propio
    siteName: "Alberto Montero",
    images: [
      {
        url: "/fp.jpg", // Asegúrate de tener una imagen llamada og.png en tu carpeta public/
        width: 1920,
        height: 1080,
      },
    ],
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "Alberto Montero",
    card: "summary_large_image",
  },
  icons: {
    shortcut: "/fp.jpg",
  },
};
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const calSans = LocalFont({
  src: "../public/fonts/CalSans-SemiBold.ttf",
  variable: "--font-calsans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={[inter.variable, calSans.variable].join(" ")}>
      <head>
        <Analytics />
      </head>
      <body
        className={`${process.env.NODE_ENV === "development" ? "debug-screens" : undefined
          }`}
      >
        <div className="relative z-10">
          {children}
        </div>
        <GravityStarsBackground className="fixed inset-0 -z-10 bg-black text-white" />
      </body>
    </html>
  );
}
