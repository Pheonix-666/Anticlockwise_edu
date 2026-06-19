'use client'
import { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  useEffect(() => {
    const observerOptions = { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active')
        }
      })
    }, observerOptions)

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="bg-background">
      {/* ─── HERO SECTION ──────────────────────────────────────────────── */}
      <>
        {/* Mobile Hero (finalm3) */}
        <section className="relative h-[90vh] min-h-[600px] flex flex-col justify-end overflow-hidden md:hidden">
          {/* Background Layer */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/hero-abstract.png"
              alt="Hero Background"
              fill
              className="object-cover contrast-125 brightness-[0.4]"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
          </div>

          {/* Text Overlap Layer */}
          <div className="relative z-10 px-margin-mobile pb-24">
            <div className="reveal active">
              <p className="font-label-md text-xs text-white/60 mb-8 tracking-[0.6em] uppercase">
                Private Consultancy v.01
              </p>
              <h1 className="font-headline-xl text-white mb-12 -ml-1 text-overlap leading-none">
                Think <span className="block italic -mt-2">Against</span>{' '}
                <span className="block -mt-2">The Clock.</span>
              </h1>
              <div className="space-y-6 max-w-xs">
                <p className="font-body-md text-white/70 leading-relaxed text-base">
                  We engineer academic dominance. Strategic planning meets cognitive excellence for the next generation of global leaders.
                </p>
                <div className="pt-4 flex flex-col gap-4">
                  <Link
                    href="/courses"
                    className="bg-white text-black py-5 px-8 font-label-md text-xs uppercase tracking-[0.4em] text-center"
                  >
                    Methodology
                  </Link>
                  <Link
                    href="/about"
                    className="border border-white/20 text-white py-5 px-8 font-label-md text-xs uppercase tracking-[0.4em] backdrop-blur-sm text-center"
                  >
                    Case Studies
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Desktop Hero (final3 Grid) */}
        <section className="relative min-h-[85vh] py-10 items-center px-margin-desktop max-w-container-max mx-auto overflow-visible hidden md:flex">
          <div className="grid grid-cols-2 gap-12 items-center w-full">
            <div className="z-10 reveal active">
              <p className="font-label-md text-secondary mb-6 tracking-[0.4em] uppercase text-sm">
                Intelligence Redefined
              </p>
              <h1
                className="font-headline-xl text-white mb-8 leading-none tracking-tight"
                style={{ fontSize: 'clamp(80px, 10vw, 160px)', fontWeight: 200, lineHeight: 0.9, position: 'relative', zIndex: 20 }}
              >
                Think <br /><span className="text-white italic"> Against</span> The Clock
              </h1>
              <p className="font-body-lg text-on-surface-variant max-w-lg mb-10 leading-relaxed text-lg">
                We don't just tutor; we engineer academic dominance. Strategic planning meets cognitive excellence for the next generation of global leaders.
              </p>
              <div className="flex flex-row gap-4">
                <Link
                  href="/courses"
                  className="bg-white text-black px-10 py-5 font-label-md text-xs uppercase tracking-widest hover:scale-105 transition-transform text-center"
                >
                  EXPLORE METHODOLOGY
                </Link>
                <Link
                  href="/about"
                  className="border border-white/20 text-white px-10 py-5 font-label-md text-xs uppercase tracking-widest hover:bg-white/10 transition-colors text-center"
                >
                  CASE STUDIES
                </Link>
              </div>
            </div>
            <div className="relative h-[600px] xl:h-[750px] w-full flex justify-center items-center">
              {/* Abstract 3D Asset Mockup */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-transparent blur-3xl opacity-30"></div>
              <Image
                src="/hero-abstract.png"
                alt="Hero Asset"
                fill
                className="object-contain z-0 scale-[1.3] "
                priority
              />
              <div className="absolute -right-20 top-1/4 writing-vertical opacity-5 select-none pointer-events-none lg:block">
                <span className="font-headline-xl text-[200px] text-white tracking-tighter">PRECISION</span>
              </div>
            </div>
          </div>
        </section>
      </>

      {/* ─── ADVANCED MODULES (final3 Dossier Overlap) ──────────── */}
      <section className="bg-surface-dim pt-section-padding pb-section-padding px-margin-mobile md:px-margin-desktop relative border-y border-white/5">
        <div className="max-w-container-max mx-auto relative z-20">
          <div className="mb-24 reveal flex flex-col md:flex-row justify-between md:items-end hairline-white-left pl-6 border-white/20 border-l-2">
            <div>
              <p className="font-label-md text-xs text-white/40 tracking-[0.5em] uppercase mb-4">
                Core Framework
              </p>
              <h2 className="font-headline-lg text-white uppercase">Advanced Modules.</h2>
            </div>
            <span className="font-label-md text-xs text-white/40 tracking-[0.2em] mt-6 md:mt-0">
              V.2024.08
            </span>
          </div>

          <div className="space-y-32">
            {/* Module 01 — Image left, card overlapping right */}
            <div className="relative flex flex-col md:flex-row items-center gap-12 reveal">
              <div className="w-full md:w-2/3 relative z-10">
                <div className="aspect-video overflow-hidden border border-white/10">
                  <Image
                    src="/module-staircase.png"
                    alt="Cognitive Engineering"
                    width={800}
                    height={450}
                    className="w-full h-full object-cover grayscale-noir"
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2 md:-ml-32 relative z-20 bg-background/90 backdrop-blur-md p-10 border border-white/10 shadow-2xl">
                <span className="absolute -top-12 -left-8 watermark-num">01</span>
                <h3 className="font-headline-md text-white mb-6 uppercase tracking-tight relative z-10">
                  Cognitive Engineering
                </h3>
                <p className="font-body-md text-on-surface-variant leading-relaxed relative z-10">
                  Restructuring how students process complex information using neuro-linguistic frameworks and data-driven pattern recognition.
                </p>
              </div>
            </div>

            {/* Module 02 — Image right, card overlapping left */}
            <div className="relative flex flex-col md:flex-row-reverse items-center gap-12 reveal">
              <div className="w-full md:w-2/3 relative z-10">
                <div className="aspect-video overflow-hidden border border-white/10">
                  <Image
                    src="/module-books.png"
                    alt="Strategic Mapping"
                    width={800}
                    height={450}
                    className="w-full h-full object-cover grayscale-noir"
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2 md:-mr-32 relative z-20 bg-background/90 backdrop-blur-md p-10 border border-white/10 shadow-2xl">
                <span className="absolute -top-12 -right-8 watermark-num">02</span>
                <h3 className="font-headline-md text-white mb-6 uppercase tracking-tight relative z-10">
                  Strategic Mapping
                </h3>
                <p className="font-body-md text-on-surface-variant leading-relaxed relative z-10">
                  A custom-built 24-month roadmap that aligns academic goals with extracurricular dominance and personal brand development.
                </p>
              </div>
            </div>

            {/* Module 03 — Image left, card overlapping right */}
            <div className="relative flex flex-col md:flex-row items-center gap-12 reveal">
              <div className="w-full md:w-2/3 relative z-10">
                <div className="aspect-video overflow-hidden border border-white/10">
                  <Image
                    src="/module-equations.png"
                    alt="Competitive Execution"
                    width={800}
                    height={450}
                    className="w-full h-full object-cover grayscale-noir"
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2 md:-ml-32 relative z-20 bg-background/90 backdrop-blur-md p-10 border border-white/10 shadow-2xl">
                <span className="absolute -top-12 -left-8 watermark-num">03</span>
                <h3 className="font-headline-md text-white mb-6 uppercase tracking-tight relative z-10">
                  Competitive Execution
                </h3>
                <p className="font-body-md text-on-surface-variant leading-relaxed relative z-10">
                  Performance under pressure. Our mentors simulate high-stakes environments to ensure zero friction during final examinations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── ELITE VANGUARD (final3 3-col grid + finalm3 dark) ──────────────────────────── */}
      <section className="px-margin-mobile md:px-margin-desktop py-section-padding max-w-container-max mx-auto relative overflow-hidden">
        <div className="absolute -left-32 top-1/2 w-64 h-64 bg-white/5 blur-[120px] pointer-events-none" />

        <div className="mb-20 reveal">
          <h2 className="font-headline-lg text-white mb-4 uppercase">The Elite Vanguard</h2>
          <p className="font-label-md text-xs text-white/40 tracking-[0.4em] uppercase">
            Ivy League Alumni &amp; Industry Strategists
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Mentor 1 */}
          <div className="relative reveal reveal-stagger-1 group">
            <div className="aspect-[3/4] overflow-hidden bg-surface-container-high border border-white/5">
              <Image
                src="/mentor-1.png"
                alt="Alexander Vance"
                fill
                className="object-cover grayscale-noir"
              />
            </div>
            <div className="mt-8 flex justify-between items-start">
              <div>
                <h4 className="font-headline-md text-2xl text-white uppercase mb-1">Alexander Vance</h4>
                <p className="font-label-md text-[11px] text-white/40 tracking-widest uppercase">Strategy &amp; Economics</p>
              </div>
              <span className="font-label-md text-[11px] text-white/20 mt-2">OXF / HARV</span>
            </div>
          </div>

          {/* Mentor 2 */}
          <div className="relative reveal reveal-stagger-2 group md:mt-12">
            <div className="aspect-[3/4] overflow-hidden bg-surface-container-high border border-white/5">
              <Image
                src="/mentor-2.png"
                alt="Dr. Elena Rossi"
                fill
                className="object-cover grayscale-noir"
              />
            </div>
            <div className="mt-8 flex justify-between items-start">
              <div>
                <h4 className="font-headline-md text-2xl text-white uppercase mb-1">Dr. Elena Rossi</h4>
                <p className="font-label-md text-[11px] text-white/40 tracking-widest uppercase">Cognitive Science</p>
              </div>
              <span className="font-label-md text-[11px] text-white/20 mt-2">STAN / MIT</span>
            </div>
          </div>

          {/* Mentor 3 */}
          <div className="relative reveal reveal-stagger-3 group">
            <div className="aspect-[3/4] overflow-hidden bg-surface-container-high border border-white/5">
              <Image
                src="/mentor-1.png"
                alt="Julian Thorne"
                fill
                className="object-cover grayscale-noir"
              />
            </div>
            <div className="mt-8 flex justify-between items-start">
              <div>
                <h4 className="font-headline-md text-2xl text-white uppercase mb-1">Julian Thorne</h4>
                <p className="font-label-md text-[11px] text-white/40 tracking-widest uppercase">Quantitative Analysis</p>
              </div>
              <span className="font-label-md text-[11px] text-white/20 mt-2">CAM / LSE</span>
            </div>
          </div>
        </div>

        <div className="mt-40 text-center reveal flex flex-col items-center">
          <div className="h-px w-12 bg-white/20 mb-12" />
          <blockquote className="font-body-md italic text-white/60 text-xl leading-relaxed max-w-2xl">
            "Academic success is not an effort of will, but an architecture of logic."
          </blockquote>
        </div>
      </section>

      {/* ─── OUTCOMES (Brutalist Data Grid from final3) ──────────── */}
      <section className="bg-black py-section-padding border-y border-white/5">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop reveal">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 border border-white/10">
            {/* Stat 1 */}
            <div className="bg-black p-12 md:p-16 flex flex-col justify-center border-r border-white/5">
              <p className="font-label-md text-xs text-white/40 uppercase tracking-[0.5em] mb-8">
                Outcomes // Improved
              </p>
              <div className="flex items-center gap-8">
                <div className="hairline-white-left h-24 opacity-50" />
                <span className="font-headline-xl text-white text-7xl md:text-8xl">+240</span>
              </div>
              <p className="font-body-md text-white/50 mt-10 text-base max-w-[280px]">
                Mean SAT score elevation within a 12-week cycle. Outperforming traditional prep by 3.4x.
              </p>
            </div>

            {/* Stat 2 */}
            <div className="bg-zinc-900/30 flex flex-col p-12 md:p-16 relative overflow-hidden">
              <div className="absolute inset-0 dossier-overlay opacity-50" />
              <div className="relative z-10">
                <p className="font-label-md text-xs text-white/40 uppercase tracking-[0.5em] mb-8">
                  Placement // Ivy League
                </p>
                <div className="flex items-center gap-8">
                  <div className="hairline-white-left h-24 opacity-50" />
                  <span className="font-headline-xl text-white text-7xl md:text-8xl">98%</span>
                </div>
                <p className="font-body-md text-white/50 mt-10 text-base max-w-[280px]">
                  Successful matriculation rate at top-tier global institutions.
                </p>
              </div>
            </div>
          </div>

          {/* Case Study Sub-grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 border-x border-b border-white/10">
            <div className="bg-surface-container-low p-10 group hover:bg-surface-variant transition-colors cursor-pointer border-r border-white/5">
              <p className="font-label-md text-xs text-on-surface-variant mb-6 uppercase tracking-widest">
                Case Study: Stanford Strategy
              </p>
              <div className="flex justify-between items-center">
                <span className="font-label-md text-xs text-white tracking-[0.2em]">READ ARCHIVE</span>
                <span className="material-symbols-outlined text-white group-hover:translate-x-2 transition-transform">arrow_right_alt</span>
              </div>
            </div>
            <div className="bg-surface-container-low p-10 group hover:bg-surface-variant transition-colors cursor-pointer border-r border-white/5">
              <p className="font-label-md text-xs text-on-surface-variant mb-6 uppercase tracking-widest">
                Case Study: MIT Engineering
              </p>
              <div className="flex justify-between items-center">
                <span className="font-label-md text-xs text-white tracking-[0.2em]">READ ARCHIVE</span>
                <span className="material-symbols-outlined text-white group-hover:translate-x-2 transition-transform">arrow_right_alt</span>
              </div>
            </div>
            <div className="bg-surface-container-low p-10 group hover:bg-surface-variant transition-colors cursor-pointer">
              <p className="font-label-md text-xs text-on-surface-variant mb-6 uppercase tracking-widest">
                Case Study: Oxford Humanities
              </p>
              <div className="flex justify-between items-center">
                <span className="font-label-md text-xs text-white tracking-[0.2em]">READ ARCHIVE</span>
                <span className="material-symbols-outlined text-white group-hover:translate-x-2 transition-transform">arrow_right_alt</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA (finalm3) ────────────────────────────────── */}
      <section className="py-48 px-margin-mobile text-center reveal">
        <div className="max-w-md mx-auto">
          <h2 className="font-headline-lg text-white mb-8 uppercase tracking-tight">Ready to<br />pivot?</h2>
          <p className="font-body-md text-white/40 mb-16 leading-relaxed">
            Entry is restricted to thirty students per cycle to ensure uncompromising performance.
          </p>
          <Link
            href="/admission"
            className="block bg-white text-black w-full py-6 font-label-md text-xs uppercase tracking-[0.5em] hover:bg-neutral-200 transition-colors"
          >
            Apply for Consultation
          </Link>
        </div>
      </section>
    </div>
  )
}
