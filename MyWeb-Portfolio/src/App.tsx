import "./index.css"
import Nav from "./components/Nav"
import Hero from "./components/Hero"
import { Experience } from "./components/Experiences"
import { useEffect } from "react";

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
      <Experience />
      {/* <About /> */}
      <section className="h-screen flex items-center justify-center" />
    </>
  )
}
