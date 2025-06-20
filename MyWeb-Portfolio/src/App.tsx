import "./index.css"
import Nav from "./components/Nav"
import Hero from "./components/Hero"
import { About } from "./components/About"

export default function App() {
  return (
    <>
      <Nav />
      <Hero/>
      <About />
      <section className="h-screen flex items-center justify-center" />
    </>
  )
}
