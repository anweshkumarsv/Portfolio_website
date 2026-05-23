import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Work } from "@/components/Work";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Cursor } from "@/components/Cursor";
import { Preloader } from "@/components/Preloader";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Anwesh Kumar S V — ML & AI Engineer" },
      {
        name: "description",
        content:
          "Portfolio of Anwesh Kumar S V — CS student at DSCE Bengaluru building intelligent ML/DL systems, AI models, and deep data insights.",
      },
    ],
  }),
});

function Index() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (loading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [loading]);

  return (
    <div className="min-h-screen bg-background p-3 md:p-5">
      <Preloader onComplete={() => setLoading(false)} />
      <Cursor />
      <main className="frame-shell relative overflow-hidden text-canvas-foreground">
        <Nav />
        <Hero />
        <Work />
        <About />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

