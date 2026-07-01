export default function About() {
  return (
    <div className="relative w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-section-padding">
      {/* Background glow */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-secondary/5 blur-[120px] pointer-events-none"></div>

      {/* Header */}
      <div className="mb-24 border-b border-primary/10 pb-12 reveal active">
        <span className="font-label-md text-secondary tracking-[0.35em] uppercase block mb-4 text-sm">
          THE ELITE SANCTUM
        </span>
        <h1 className="font-headline-xl text-primary uppercase tracking-tight leading-none text-7xl md:text-8xl">
          ABOUT US.
        </h1>
        <div className="font-body-lg text-on-surface-variant max-w-3xl mt-6 leading-relaxed space-y-4">
          <p>
            Anticlockwise is a premium academic mentorship institute dedicated to helping international curriculum students achieve academic excellence. Unlike traditional coaching classes that focus only on teaching, Anticlockwise focuses on personalized mentorship, strategic guidance, concept mastery, and long-term academic success.
          </p>
          <p>
            We support students through expert subject mentoring, exam preparation, IA/EE guidance, study planning, and performance tracking, helping them reach their full academic potential.
          </p>
        </div>
      </div>

      {/* Philosophy Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-36 reveal active">
        <div>
          <h2 className="font-headline-md text-primary mb-6 uppercase tracking-wider text-3xl">
            Our Methodology
          </h2>
          <p className="font-body-md text-on-surface-variant leading-relaxed mb-6 text-base md:text-lg">
            Standard educational systems focus on linear content delivery. They present formulas, list historical equations, and expect students to memorize solutions. At Anticlockwise, we reverse the paradigm.
          </p>
          <p className="font-body-md text-on-surface-variant leading-relaxed text-base">
            We focus on cognitive mapping—teaching the underlying logic structure first. Our students learn to dismantle complex questions, isolate the target output, and reverse-engineer the quickest path to a solution. This approach builds structural clarity and speed that standard tutoring cannot match.
          </p>
        </div>
        <div className="space-y-8 border-l border-primary/15 pl-8">
          <div className="hairline-gold pl-6 py-1">
            <h3 className="font-headline-md text-primary mb-2 uppercase tracking-wide text-xl">
              1. Cognitive Engineering
            </h3>
            <p className="font-body-md text-on-surface-variant leading-relaxed text-base">
              Reshaping how students absorb and process advanced physics and sciences logic using systematic diagnostic tracking.
            </p>
          </div>
          <div className="hairline-gold pl-6 py-1">
            <h3 className="font-headline-md text-primary mb-2 uppercase tracking-wide text-xl">
              2. Result Anchoring
            </h3>
            <p className="font-body-md text-on-surface-variant leading-relaxed text-base">
              Simulating exam pressure through precise testing metrics to build high-stakes resilience and eliminate friction.
            </p>
          </div>
          <div className="hairline-gold pl-6 py-1">
            <h3 className="font-headline-md text-primary mb-2 uppercase tracking-wide text-xl">
              3. Personalized Dossier
            </h3>
            <p className="font-body-md text-on-surface-variant leading-relaxed text-base">
              A custom-built academic road map tracking progress, speed parameters, error types, and conceptual weak points.
            </p>
          </div>
        </div>
      </div>

      {/* Vision callout */}
      <div className="relative bg-primary border border-primary/20 p-10 md:p-16 text-center overflow-hidden reveal active">
        <div className="absolute inset-0 dossier-overlay opacity-40 pointer-events-none"></div>
        <div className="absolute -right-32 bottom-0 w-96 h-96 bg-white/5 blur-[120px] pointer-events-none"></div>

        <div className="relative z-10 max-w-3xl mx-auto py-4">
          <span className="font-label-md text-white/60 tracking-[0.35em] uppercase block mb-6 font-semibold text-xs">
            THE ANTICLOCKWISE CODEX
          </span>
          <h3 className="font-headline-md text-white mb-8 italic leading-relaxed text-2xl md:text-4xl">
            &ldquo;Academic excellence is an engineering discipline.&rdquo;
          </h3>
          <p className="font-body-md text-white/70 leading-relaxed max-w-2xl mx-auto text-sm md:text-base">
            We do not promise simple improvements. We promise complete restructuring of logic capabilities. We exist to create the future leaders of sciences, engineering, and strategic sectors globally.
          </p>
        </div>
      </div>
    </div>
  )
}
