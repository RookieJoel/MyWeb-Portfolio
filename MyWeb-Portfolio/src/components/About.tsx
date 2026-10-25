import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { Compare } from "./ui/compare";
import { TypingEffect } from "./ui/TypeEffect";
import { storyParagraphs, storySubtitle, storyTitle } from "../data/aboutStory";

const STATS = [
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

export function About() {
  const [isStoryOpen, setIsStoryOpen] = useState(false);

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="w-full bg-[#010413] scroll-mt-20 py-16 mb-20 px-6 md:px-20"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 items-start">
        <div>
          {/* TypingEffect renders its own centered <h2>; w-fit keeps it left-aligned */}
          <div id="about-heading" className="w-fit text-white mb-4">
            <TypingEffect text="About Me" />
          </div>
          <p className="text-2xl text-yellow-400 mb-6">
            Hi! I'm <span className="text-amber-300">Suttanop Chanah</span>
          </p>

          <p className="text-lg text-gray-300 leading-relaxed max-w-2xl">
            A Computer Engineering student at <strong className="text-white">Chulalongkorn University</strong> who
            builds backends in Go and Node.js, ships infrastructure on AWS with Terraform, and wires security
            into CI/CD pipelines. I like the parts of software that have to keep working when real people
            depend on them, and I enjoy teaching others how to build them right.
          </p>

          {/* Quick stats */}
          <dl className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 max-w-3xl">
            {STATS.map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-amber-900/60 bg-amber-950/40 px-4 py-5"
              >
                <dt className="sr-only">{stat.label}</dt>
                <dd className="text-3xl font-bold text-amber-400">{stat.value}</dd>
                <dd className="mt-1 text-sm text-neutral-400 leading-snug">{stat.label}</dd>
              </div>
            ))}
          </dl>

          {/* Focus areas */}
          <h3 className="mt-10 mb-3 text-sm font-semibold uppercase tracking-widest text-neutral-500">
            Focus areas
          </h3>
          <ul className="flex flex-wrap gap-2">
            {FOCUS_AREAS.map((area) => (
              <li
                key={area}
                className="rounded-full border border-amber-700/60 px-4 py-1.5 text-sm text-amber-200 transition-colors hover:bg-amber-700/30"
              >
                {area}
              </li>
            ))}
          </ul>

          {/* Current roles */}
          <h3 className="mt-10 mb-3 text-sm font-semibold uppercase tracking-widest text-neutral-500">
            Right now
          </h3>
          <ul className="space-y-3 max-w-2xl">
            {NOW.map((item) => (
              <li key={item.role} className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 flex-none rounded-full bg-amber-400 shadow-[0_0_10px_rgba(251,191,36,0.8)]" />
                <span className="text-gray-300">
                  <span className="font-semibold text-white">{item.role}</span> – {item.org}
                </span>
              </li>
            ))}
          </ul>

          {/* Personal essay (Thai) */}
          <div className="mt-10 max-w-3xl rounded-2xl border border-amber-900/60 bg-amber-950/20">
            <button
              type="button"
              onClick={() => setIsStoryOpen((open) => !open)}
              aria-expanded={isStoryOpen}
              aria-controls="about-story"
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-amber-400 rounded-2xl"
            >
              <span>
                <span className="block text-xs font-semibold uppercase tracking-widest text-neutral-500">
                  My story
                </span>
                <span className="mt-1 block text-xl font-bold text-amber-300">{storyTitle}</span>
              </span>
              <FiChevronDown
                className={`flex-none text-2xl text-amber-300 transition-transform duration-300 ${
                  isStoryOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            {isStoryOpen && (
              <div id="about-story" lang="th" className="px-6 pb-6">
                <p className="text-lg text-yellow-400 mb-3">{storySubtitle}</p>
                <div className="space-y-4 text-base leading-relaxed text-gray-300">
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

        <figure className="flex flex-col items-center lg:sticky lg:top-28">
          <Compare
            firstImage="/myself.png"
            secondImage="/futureme.png"
            firstImageClassName="object-cover object-left-top"
            secondImageClassname="object-cover object-left-center"
            className="h-[320px] w-[260px] md:h-[460px] md:w-[400px]"
            slideMode="hover"
          />
          <figcaption className="mt-4 text-sm text-neutral-500">
            Hover to see me now vs. me in 5 years
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
