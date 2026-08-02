import { useState } from "react";
import { Footer } from "@/components/site/Footer";
import { Navbar } from "@/components/site/Navbar";
import { Preloader } from "@/components/site/Preloader";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";
import { About } from "@/sections/About";
import { Contact } from "@/sections/Contact";
import { Courses } from "@/sections/Courses";
import { Culture } from "@/sections/Culture";
import { Faq } from "@/sections/Faq";
import { Hero } from "@/sections/Hero";
import { Method } from "@/sections/Method";
import { QuoteBreak } from "@/sections/QuoteBreak";
import { Stats } from "@/sections/Stats";
import { Testimonials } from "@/sections/Testimonials";
import { WhyJapanese } from "@/sections/WhyJapanese";

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      <a
        href="#contenido"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:bg-aka focus:px-5 focus:py-3 focus:text-paper"
      >
        Saltar al contenido principal
      </a>

      {!loaded && <Preloader onDone={() => setLoaded(true)} />}

      <Navbar />
      <WhatsAppButton />

      {/* Offset for desktop left rail */}
      <div className="lg:pl-[92px]">
        <main id="contenido">
          <Hero />
          <Stats />
          <About />
          <WhyJapanese />
          <Courses />
          <Method />
          <Culture />
          <QuoteBreak />
          <Testimonials />
          <Faq />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
