import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

function Divider() {
  return (
    <div className="max-w-page mx-auto px-6">
      <div className="divider" />
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Divider />
      <Reveal>
        <About />
      </Reveal>
      <Divider />
      <Reveal>
        <Experience />
      </Reveal>
      <Divider />
      <Reveal>
        <Projects />
      </Reveal>
      <Divider />
      <Reveal>
        <Skills />
      </Reveal>
      <Reveal>
        <Education />
      </Reveal>
      <Reveal>
        <Footer />
      </Reveal>
    </main>
  );
}
