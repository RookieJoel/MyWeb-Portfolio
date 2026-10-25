import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { FiExternalLink, FiCheckCircle } from "react-icons/fi";
import { badges, certificates } from "../data/certifications";

export function Certifications() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <section
      id="certifications"
      aria-labelledby="certifications-heading"
      className="w-full bg-[#010413] scroll-mt-20 py-16 px-4"
    >
      <div className="max-w-7xl mx-auto">
        <h2
          id="certifications-heading"
          className="text-3xl md:text-4xl font-bold text-white text-center"
          data-aos="zoom-in"
        >
          Certifications <span className="text-yellow-500">& Badges</span>
        </h2>
        <p className="text-center text-neutral-400 mt-3 mb-12">
          Verified credentials in cloud, security, and AI.
        </p>

        {/* Badges */}
        <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-14">
          {badges.map((badge) => (
            <li key={badge.title} data-aos="zoom-in">
              <a
                href={badge.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col items-center rounded-2xl border border-amber-900/60 bg-gradient-to-b from-amber-950/70 to-transparent px-6 py-8 text-center transition duration-300 hover:-translate-y-1 hover:border-amber-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-amber-400"
              >
                <img
                  src={badge.img}
                  alt={`${badge.title} badge`}
                  width={160}
                  height={160}
                  loading="lazy"
                  className="h-32 w-32 object-contain drop-shadow-[0_8px_24px_rgba(245,158,11,0.25)] transition-transform duration-300 group-hover:scale-105 md:h-40 md:w-40"
                />
                <h3 className="mt-5 font-semibold text-white">{badge.title}</h3>
                <p className="mt-1 text-sm text-amber-400">{badge.issuer}</p>
                <p className="mt-1 text-xs text-neutral-500">{badge.date}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-neutral-400 group-hover:text-amber-300">
                  <FiCheckCircle /> Verify on Credly
                </span>
              </a>
            </li>
          ))}
        </ul>

        {/* Certificates */}
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert) => (
            <li key={cert.title} data-aos="fade-up">
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col overflow-hidden rounded-xl bg-amber-950 transition duration-300 hover:-translate-y-1 hover:bg-amber-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-amber-400"
              >
                <div className="aspect-[4/3] overflow-hidden bg-white">
                  <img
                    src={cert.img}
                    alt={`${cert.title} certificate`}
                    width={1200}
                    height={900}
                    loading="lazy"
                    className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-4">
                  <h3 className="font-semibold leading-snug text-white">{cert.title}</h3>
                  <p className="mt-1 text-sm text-amber-400">{cert.issuer}</p>
                  <div className="mt-auto flex items-center justify-between pt-4 text-xs">
                    <span className="text-neutral-400">{cert.date}</span>
                    <span className="inline-flex items-center gap-1 font-semibold text-neutral-300 group-hover:text-amber-300">
                      {cert.verifiable ? "Verify" : "View"} <FiExternalLink />
                    </span>
                  </div>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
