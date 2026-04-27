"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface NotebookProps {
  readonly leftPage: React.ReactNode;
  readonly rightPage: React.ReactNode;
  readonly isOpen: boolean;
}

function SpiralBinding({ visible }: { readonly visible: boolean }) {
  return (
    <div
      className={cn(
        "absolute top-0 left-0 z-30 flex h-full w-6 -translate-x-1/2 flex-col items-center justify-evenly transition-opacity duration-500",
        visible ? "opacity-100 delay-700" : "opacity-0"
      )}
    >
      {Array.from({ length: 14 }).map((_, i) => (
        <div key={i}>
          <div className="h-5 w-8 rounded-full border-2 border-gold-500/35 bg-stone-200/80 shadow-sm" />
        </div>
      ))}
    </div>
  );
}

function RuledPageBackground() {
  return (
    <div
      className="pointer-events-none absolute inset-0"
      style={{
        backgroundImage:
          "repeating-linear-gradient(transparent, transparent 35px, rgba(123,196,226,0.22) 35px, rgba(123,196,226,0.22) 36px)",
        backgroundSize: "100% 36px",
      }}
    />
  );
}

export function Notebook({ leftPage, rightPage, isOpen }: NotebookProps) {
  return (
    <div className="flex justify-center">
      {/*
        Container: narrow when closed (just the cover),
        full width when open (two pages).
      */}
      <div
        className={cn(
          "relative transition-all duration-[1200ms] ease-in-out",
          isOpen ? "w-full max-w-6xl" : "w-full max-w-md"
        )}
        style={{ perspective: "2500px" }}
      >
        <div className="relative min-h-[680px]">
          {/* === TWO-PAGE SPREAD (sits underneath the cover) === */}
          <div
            className={cn(
              "absolute inset-0 grid min-h-[680px] grid-cols-1 overflow-hidden rounded-sm md:grid-cols-2",
              "transition-opacity duration-500",
              isOpen ? "opacity-100 delay-500" : "opacity-0"
            )}
          >
            {/* Spine shadow */}
            <div className="absolute inset-y-0 left-1/2 z-20 hidden w-14 -translate-x-1/2 bg-gradient-to-r from-transparent via-stone-900/10 to-transparent md:block" />

            {/* Left page */}
            <div className="relative overflow-hidden bg-stone-100 md:rounded-l-sm">
              <RuledPageBackground />
              <div className="absolute top-0 right-0 hidden h-full w-px bg-gold-500/20 md:block" />
              <div className="relative z-10 h-full p-8 sm:p-10">
                {leftPage}
              </div>
              <div className="absolute inset-y-0 right-0 hidden w-6 bg-gradient-to-l from-stone-200/40 to-transparent md:block" />
            </div>

            {/* Right page */}
            <div className="relative overflow-hidden bg-stone-100 md:rounded-r-sm">
              <RuledPageBackground />
              <div className="absolute top-0 left-10 h-full w-px bg-gold-500/20" />
              <div className="relative z-10 h-full p-8 pl-14 sm:p-10 sm:pl-16">
                {rightPage}
              </div>
              <div className="absolute inset-y-0 left-0 hidden w-6 bg-gradient-to-r from-stone-200/40 to-transparent md:block" />
            </div>

            {/* Spiral binding at center */}
            <div className="absolute inset-y-0 left-1/2 hidden md:block">
              <SpiralBinding visible={isOpen} />
            </div>
          </div>

          {/* === FRONT COVER — flips like turning a real book page === */}
          <div
            className={cn(
              "absolute inset-0 z-40 overflow-hidden rounded-sm shadow-2xl",
              isOpen && "pointer-events-none"
            )}
            style={{
              transformStyle: "preserve-3d",
              transformOrigin: "left center",
              transform: isOpen ? "rotateY(-165deg)" : "rotateY(0deg)",
              transition: "transform 1.4s cubic-bezier(0.32, 0.72, 0.35, 1.0)",
            }}
          >
            {/* Front face of cover */}
            <div
              className="absolute inset-0"
              style={{ backfaceVisibility: "hidden" }}
            >
              {/* Cover background */}
              <div className="absolute inset-0 bg-gradient-to-br from-navy-800 via-navy-900 to-navy-950" />

              {/* Leather texture */}
              <div
                className="absolute inset-0 opacity-10 mix-blend-overlay"
                style={{
                  backgroundImage:
                    "url(\"data:image/svg+xml,%3Csvg width='6' height='6' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M5 0h1L0 5V4zm1 5v1H5zM0 1V0h1z' fill='%23fff' fill-opacity='0.4'/%3E%3C/svg%3E\")",
                }}
              />

              {/* Spine (left edge) */}
              <div className="absolute top-0 left-0 h-full w-5 bg-gradient-to-r from-navy-600 via-navy-700 to-transparent" />

              {/* Page edge (right side — stacked pages look) */}
              <div className="absolute top-2 right-0 h-[calc(100%-16px)] w-2">
                <div className="h-full w-px bg-gold-500/10" />
                <div className="absolute top-0 left-0.5 h-full w-px bg-gold-500/5" />
              </div>

              {/* Cover content */}
              <div className="relative flex h-full flex-col items-center px-8 pt-14">
                <div className="rounded-sm border border-gold-500/30 p-6 sm:p-8">
                  <div className="mb-4 flex items-center justify-center gap-3">
                    <div className="h-px w-12 bg-gold-500/40" />
                    <div className="h-2 w-2 rotate-45 bg-gold-500/50" />
                    <div className="h-px w-12 bg-gold-500/40" />
                  </div>

                  <h3 className="font-heading text-3xl font-semibold tracking-tight text-gold-400 sm:text-4xl">
                    Book your session
                  </h3>

                  <div className="mt-5 flex items-center justify-center gap-3">
                    <div className="h-px w-12 bg-gold-500/40" />
                    <div className="h-2 w-2 rotate-45 bg-gold-500/50" />
                    <div className="h-px w-12 bg-gold-500/40" />
                  </div>
                </div>

                <div className="relative mt-16 h-32 w-32 overflow-hidden rounded-2xl border border-gold-500/25 bg-white/95 p-2">
                  <Image
                    src="/Aristotle Logo.jpg"
                    alt="Aristotle Ascent logo"
                    fill
                    sizes="128px"
                    className="object-contain p-1"
                  />
                </div>
              </div>

              {/* Corner accents */}
              <div className="absolute top-4 left-8 h-8 w-8 rounded-tl-sm border-t border-l border-gold-500/20" />
              <div className="absolute top-4 right-4 h-8 w-8 rounded-tr-sm border-t border-r border-gold-500/20" />
              <div className="absolute bottom-4 left-8 h-8 w-8 rounded-bl-sm border-b border-l border-gold-500/20" />
              <div className="absolute bottom-4 right-4 h-8 w-8 rounded-br-sm border-b border-r border-gold-500/20" />
            </div>

            {/* Back face of cover (visible when flipped — shows inside cover texture) */}
            <div
              className="absolute inset-0 bg-gradient-to-br from-navy-700 to-navy-800"
              style={{
                backfaceVisibility: "hidden",
                transform: "rotateY(180deg)",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

/* Hook + wrapper that manages open/close state */
export function NotebookWithScroll({
  leftPage,
  rightPage,
}: Omit<NotebookProps, "isOpen">) {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.25 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 767px)");
    const onChange = (event: MediaQueryListEvent) => setIsMobile(event.matches);
    setIsMobile(media.matches);
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (isMobile) {
      setIsOpen(true);
    }
  }, [isMobile]);

  useEffect(() => {
    if (isMobile) return;
    if (isVisible && !isOpen) {
      timerRef.current = setTimeout(() => setIsOpen(true), 3000);
    }
    if (!isVisible && isOpen) {
      if (timerRef.current) clearTimeout(timerRef.current);
      queueMicrotask(() => setIsOpen(false));
    }
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [isVisible, isOpen]);

  const handleClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  if (isMobile) {
    return (
      <NotebookContext.Provider value={{ onClose: handleClose }}>
        <div className="mx-auto w-full max-w-[760px] space-y-4">
          <div className="relative overflow-hidden rounded-2xl border border-[#D4EAFA] bg-stone-100">
            <RuledPageBackground />
            <div className="relative z-10 p-5 sm:p-6">{leftPage}</div>
          </div>
          <div className="relative overflow-hidden rounded-2xl border border-[#D4EAFA] bg-stone-100">
            <RuledPageBackground />
            <div className="relative z-10 p-5 sm:p-6">{rightPage}</div>
          </div>
        </div>
      </NotebookContext.Provider>
    );
  }

  return (
    <div ref={containerRef}>
      <NotebookContext.Provider value={{ onClose: handleClose }}>
        <Notebook leftPage={leftPage} rightPage={rightPage} isOpen={isOpen} />
      </NotebookContext.Provider>
    </div>
  );
}

/* Context so the form can trigger close */
import { createContext, useContext } from "react";

const NotebookContext = createContext<{ onClose: () => void }>({
  onClose: () => {},
});

export function useNotebookClose() {
  return useContext(NotebookContext).onClose;
}
