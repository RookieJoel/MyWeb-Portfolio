import "./index.css"
import Nav from "./components/Nav"
import Hero from "./components/Hero"
import {Journey} from "./components/Journey"
import { useEffect } from "react";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import Contact from "./components/Contact";
import { ResumeQuickAccess } from "./components/ui/ResumeQuickAccess";

export default function App() {
  useEffect(() => {
    if (window.location.hash) {
      window.history.replaceState(null, '', '/');
    }

    window.scrollTo({
      top: 0,behavior: 'smooth'
    });
  }, []);
  
  return (
    <>
      <Nav />
      <Hero/>
      <Journey />
      <Skills />
      <Projects />
      <About />
      <Contact />
      
      {/* Floating Resume Quick Access */}
      <ResumeQuickAccess />
    </>
  )
}
