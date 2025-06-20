import "./index.css"
import Nav from "./components/Nav"
import Hero from "./components/Hero"
import { Experience } from "./components/Experiences"

export default function App() {
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
