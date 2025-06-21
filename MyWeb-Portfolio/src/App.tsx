import "./index.css"
import Nav from "./components/Nav"
import Hero from "./components/Hero"
import {Journey} from "./components/Journey"
import { useEffect } from "react";
import { Skills } from "./components/Skills";

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
      {/* <About /> */}
    </>
  )
}
