"use client";

import { useRef, useState } from "react";
import Link from "next/link";

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setMuted(videoRef.current.muted);
  };

  return (
    <section className="relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-black">
        <video
          ref={videoRef}
          className="h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster="/images/hero-stage.jpg"
        >
          <source src="/videos/hero-loop.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/10" />
      </div>

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

      <div className="relative flex min-h-[560px] flex-col justify-end px-6 pb-16 pt-40 sm:min-h-[620px] sm:px-10">
        <div className="mx-auto w-full max-w-6xl">
          <h1 className="text-3xl font-bold text-white sm:text-5xl">
            Welcome to Palace Church
          </h1>
          <p className="mt-3 max-w-lg text-lg text-white/85">
            See what God can do through you.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="#visit"
              className="rounded-full bg-white px-6 py-3 font-semibold text-black transition hover:bg-white/90"
            >
              Get Connected
            </Link>
            <Link
              href="#about"
              className="rounded-full bg-white/15 px-6 py-3 font-semibold text-white backdrop-blur transition hover:bg-white/25"
            >
              Learn More
            </Link>
          </div>
        </div>

        <div className="mx-auto mt-10 flex w-full max-w-6xl items-center justify-center gap-2">
          <span className="h-1.5 w-6 rounded-full bg-white" />
          <span className="h-1.5 w-1.5 rounded-full bg-white/40" />
          <span className="h-1.5 w-1.5 rounded-full bg-white/40" />
        </div>
      </div>
    </section>
  );
}
