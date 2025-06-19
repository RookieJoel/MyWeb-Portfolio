import "./index.css"
import Nav from "./components/Nav"
import Hero from "./components/Hero"
import { GridSection } from "./components/GridSection"

export default function App() {
  return (
    <>
      <Nav />
      <Hero/>
      <GridSection />
      <section className="h-screen flex items-center justify-center" />
    </>
  )
}
