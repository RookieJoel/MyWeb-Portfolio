import { useEffect, useRef, useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { Compare } from "./ui/compare";
import { TypingEffect } from "./ui/TypeEffect";
import AdmitOneTicket from "./ui/admit-one-ticket";
import { storyParagraphs, storySubtitle, storyTitle } from "../data/aboutStory";

const FACTS = [
  { value: "4,000+", label: "users on systems I've built" },
  { value: "4", label: "hospitals on the clinical platform I support" },
  { value: "4", label: "courses as Teaching Assistant" },
  { value: "9", label: "certifications & badges" },
];

const FOCUS_AREAS = [
  "Cloud Security",
  "DevSecOps",
  "Site Reliability Engineering",
  "Backend Development",
  "AI Engineering",
];

const NOW = [
  { role: "Research Assistant & Software Developer", org: "Wannoi – Precision Diabetes Platform" },
  { role: "Teaching Assistant", org: "Database Systems · Software Engineering · Computer Networking" },
];

const MAX_TICKET_WIDTH = 400;

// Tracks an element's width so the canvas-based ticket can be sized in pixels.
function useElementWidth<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new ResizeObserver(([entry]) => setWidth(entry.contentRect.width));
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return [ref, width] as const;
}

function scrollToContact() {
  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
}

export function About() {
  const [isStoryOpen, setIsStoryOpen] = useState(false);
  const [ticketSlotRef, ticketSlotWidth] = useElementWidth<HTMLDivElement>();
  const ticketWidth = Math.min(ticketSlotWidth, MAX_TICKET_WIDTH);

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="w-full bg-[#010413] scroll-mt-20 py-20 mb-20 px-6 md:px-20 selection:bg-amber-400 selection:text-amber-950"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_400px] gap-x-16 gap-y-14 items-start">
        <div>
          <TypingEffect
            id="about-heading"
            text="About Me"
            className="text-4xl md:text-6xl font-bold tracking-tighter text-white md:leading-[4rem]"
          />
          <p className="mt-5 text-2xl text-yellow-400">
            Hi! I'm <span className="text-amber-300">Suttanop Chanah</span>
          </p>

          <p className="mt-6 text-lg text-gray-300 leading-relaxed max-w-[62ch]">
            A Computer Engineering student at <strong className="text-white">Chulalongkorn University</strong> who
            builds backends in Go and Node.js, ships infrastructure on AWS with Terraform, and wires security
            into CI/CD pipelines. I like the parts of software that have to keep working when real people
            depend on them, and I enjoy teaching others how to build them right.
          </p>

          <dl className="mt-12 grid max-w-3xl grid-cols-1 sm:grid-cols-2 border-t border-amber-900/50">
            {FACTS.map((fact) => (
              <div
                key={fact.label}
                className="flex items-baseline gap-4 border-b border-amber-900/50 py-4 sm:odd:pr-8 sm:even:pl-8 sm:even:border-l"
              >
                <dt className="sr-only">{fact.label}</dt>
                <dd className="w-28 flex-none text-3xl font-bold tabular-nums text-amber-400">{fact.value}</dd>
                <dd className="text-sm leading-snug text-amber-100/70">{fact.label}</dd>
              </div>
            ))}
          </dl>

          <h3 className="mt-14 mb-4 text-lg font-semibold text-white">Focus areas</h3>
          <ul className="flex flex-wrap gap-2">
            {FOCUS_AREAS.map((area) => (
              <li
                key={area}
                className="rounded-full border border-amber-700/60 px-4 py-1.5 text-sm text-amber-200"
              >
                {area}
              </li>
            ))}
          </ul>

          <h3 className="mt-14 mb-4 text-lg font-semibold text-white">Right now</h3>
          <ul className="space-y-3 max-w-2xl">
            {NOW.map((item) => (
              <li key={item.role} className="flex items-start gap-3">
                <span aria-hidden className="mt-2.5 h-1.5 w-1.5 flex-none rounded-full bg-amber-400" />
                <span className="text-gray-300">
                  <span className="font-semibold text-white">{item.role}</span> – {item.org}
                </span>
              </li>
            ))}
          </ul>

          {/* Personal essay (Thai) */}
          <div className="mt-14 max-w-3xl border-y border-amber-900/50">
            <button
              type="button"
              onClick={() => setIsStoryOpen((open) => !open)}
              aria-expanded={isStoryOpen}
              aria-controls="about-story"
              className="group flex w-full items-center justify-between gap-4 py-5 text-left rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-400"
            >
              <span className="text-xl font-bold text-amber-300 transition-colors group-hover:text-amber-200">
                {storyTitle}
              </span>
              <FiChevronDown
                aria-hidden
                className={`flex-none text-2xl text-amber-300 transition-transform duration-300 ease-out ${
                  isStoryOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            {isStoryOpen && (
              <div id="about-story" lang="th" className="pb-8">
                <p className="text-lg text-yellow-400 mb-4">{storySubtitle}</p>
                <div className="max-w-[70ch] space-y-4 text-base leading-loose text-gray-300">
                  {storyParagraphs.map((paragraph) => (
                    <p key={paragraph.slice(0, 24)} className="indent-8">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="flex flex-col items-center gap-12 lg:sticky lg:top-28">
          <figure className="flex flex-col items-center">
            <Compare
              firstImage="/myself.png"
              secondImage="/futureme.png"
              firstImageClassName="object-cover object-left-top"
              secondImageClassname="object-cover object-left-center"
              className="h-[320px] w-[260px] md:h-[460px] md:w-[400px]"
              slideMode="hover"
            />
            <figcaption className="mt-4 text-sm text-neutral-400">
              Hover to see me now vs. me in 5 years
            </figcaption>
          </figure>

          <div ref={ticketSlotRef} className="w-full max-w-[400px]">
            {ticketWidth > 0 && (
              <button
                type="button"
                onClick={scrollToContact}
                aria-label="Admit one: go to the contact section"
                className="block text-left rounded-[14px] drop-shadow-[0_18px_30px_rgba(239,103,28,0.25)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-400"
              >
                <AdmitOneTicket
                  name="Suttanop Chanah"
                  presenter="Chula Comp Eng presents"
                  event="Cloud · DevSecOps · AI"
                  venue="Bangkok, TH"
                  dates="Open 2026"
                  stubText="Admit one"
                  watermark="2026"
                  width={ticketWidth}
                />
              </button>
            )}
            <p className="mt-3 text-center text-sm text-neutral-400">Your ticket to a conversation</p>
          </div>
        </div>
      </div>
    </section>
  );
}
