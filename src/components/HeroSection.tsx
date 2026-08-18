"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

type Slide = {
  id: string;
  type: "video" | "image";
  src: string;
  poster?: string;
  heading: string;
  subheading: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
};

const SLIDES: Slide[] = [
  {
    id: "welcome",
    type: "video",
    src: "/videos/hero-loop.mp4",
    poster: "/images/hero-stage.jpg",
    heading: "Welcome to Palace Church",
    subheading: "See what God can do through you.",
    primaryCta: { label: "Get Connected", href: "#visit" },
    secondaryCta: { label: "Learn More", href: "#about" },
  },
  {
    id: "groups",
    type: "image",
    src: "/images/hero-stage-2.jpg",
    heading: "Find Your People",
    subheading: "Join a group and grow in faith together this week.",
    primaryCta: { label: "Explore Groups", href: "#groups" },
    secondaryCta: { label: "Learn More", href: "#about" },
  },
  {
    id: "give",
    type: "image",
    src: "/images/hero-stage-3.jpg",
    heading: "Give Online",
    subheading: "Partner with what God is doing here at Palace Church.",
    primaryCta: { label: "Give Now", href: "/give" },
    secondaryCta: { label: "Learn More", href: "#about" },
  },
];

const SLIDE_DURATION = 6000;

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [index, setIndex] = useState(0);
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % SLIDES.length);
    }, SLIDE_DURATION);
    return () => clearInterval(timer);
  }, []);

  const active = SLIDES[index];

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setMuted(videoRef.current.muted);
  };

  return (
    <section className="relative isolate overflow-hidden bg-black">
      <div className="absolute inset-0 -z-10">
        {SLIDES.map((slide, i) => (
          <div
            key={slide.id}
            className="absolute inset-0 transition-opacity duration-700"
            style={{ opacity: i === index ? 1 : 0 }}
          >
            {slide.type === "video" ? (
              <video
                ref={i === index ? videoRef : undefined}
                className="h-full w-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                poster={slide.poster}
              >
                <source src={slide.src} type="video/mp4" />
              </video>
            ) : (
              <div
                className="h-full w-full scale-105 bg-cover bg-center"
                style={{
                  backgroundImage: `url(${slide.src})`,
                  animation:
                    i === index ? "heroKenBurns 8s ease-out forwards" : undefined,
                }}
              />
            )}
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/10" />
      </div>

      {active.type === "video" && (
        <button
          onClick={toggleMute}
          aria-label={muted ? "Unmute video" : "Mute video"}
          className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-white transition hover:bg-black/70"
        >
          {muted ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
            >
              <path d="M11 5 6 9H2v6h4l5 4V5Z" />
              <line x1="23" y1="9" x2="17" y2="15" />
              <line x1="17" y1="9" x2="23" y2="15" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
            >
              <path d="M11 5 6 9H2v6h4l5 4V5Z" />
              <path d="M15.5 8.5a5 5 0 0 1 0 7" />
              <path d="M18.5 5.5a9 9 0 0 1 0 13" />
            </svg>
          )}
        </button>
      )}

      <div className="relative flex min-h-[560px] flex-col justify-end px-6 pb-16 pt-40 sm:min-h-[620px] sm:px-10">
        <div className="mx-auto w-full max-w-6xl">
          <h1 className="text-3xl font-bold text-white sm:text-5xl">
            {active.heading}
          </h1>
          <p className="mt-3 max-w-lg text-lg text-white/85">
            {active.subheading}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href={active.primaryCta.href}
              className="rounded-full bg-white px-6 py-3 font-semibold text-black transition hover:bg-white/90"
            >
              {active.primaryCta.label}
            </Link>
            <Link
              href={active.secondaryCta.href}
              className="rounded-full bg-white/15 px-6 py-3 font-semibold text-white backdrop-blur transition hover:bg-white/25"
            >
              {active.secondaryCta.label}
            </Link>
          </div>
        </div>

        <div className="mx-auto mt-10 flex w-full max-w-6xl items-center justify-center gap-2">
          {SLIDES.map((slide, i) => (
            <button
              key={slide.id}
              aria-label={`Show slide ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`h-1.5 rounded-full transition-all ${
                i === index ? "w-6 bg-white" : "w-1.5 bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes heroKenBurns {
          from { transform: scale(1); }
          to { transform: scale(1.08); }
        }
      `}</style>
    </section>
  );
}
