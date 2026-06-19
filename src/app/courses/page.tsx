import Link from 'next/link'

export default function Courses() {
  const coursesList = [
    {
      id: 'jee',
      num: '01',
      tag: 'ENGINEERING ADMISSIONS',
      title: 'IIT-JEE Masterclass',
      duration: '2 Year Comprehensive Program',
      frequency: '4 Sessions per Week + Simulated Testing',
      overview: 'Our flagship engineering program designed to transform core math, physics, and chemistry concepts into execution tools for JEE Main & Advanced.',
      image: '/module-equations.png',
      highlights: [
        'Advanced Calculus & Coordinate Geometry integration',
        'Mechanics, Electromagnetism, and Quantum physics core mastery',
        'Organic mechanisms, Inorganic synthesis, & Physical thermodynamics',
        'Simulated mock tests mimicking the actual exam environment'
      ],
      methodology: 'Focuses on inverse logical parsing—analyzing the end goal of a complex equation first and tracing paths backward to construct a speed-optimized solution.'
    },
    {
      id: 'neet',
      num: '02',
      tag: 'MEDICAL ADMISSIONS',
      title: 'NEET Accelerator',
      duration: '2 Year Dedicated Program',
      frequency: '4 Sessions per Week + Diagnostic Audits',
      overview: 'An intensive medical stream curriculum optimizing theoretical biology retention, analytical physics calculations, and organic pathways.',
      image: '/module-books.png',
      highlights: [
        'Complete NCERT mapping + advanced conceptual extensions',
        'Physical chemistry calculations & organic mechanism practice',
        'Mock tests tracking accuracy metrics, time management, and error mapping',
        'Doubt-clearing workshops with medical school alumni mentors'
      ],
      methodology: 'Implements biological spatial retention maps and high-speed analytical physics patterns to reduce conceptual retrieval time to under 40 seconds per question.'
    },
    {
      id: 'foundation',
      num: '03',
      tag: 'SCHOLASTIC DOMINANCE',
      title: 'Olympiad & Foundation Core',
      duration: '1 Year Acceleration Program',
      frequency: '3 Sessions per Week',
      overview: 'Building the fundamental logical structures in Mathematics and Sciences for Class 8, 9, and 10 students aiming for national-level Olympiads (RMO, INJSO, NTSE) and strong Board scores.',
      image: '/module-staircase.png',
      highlights: [
        'Number theory, combinatorics, and geometry foundations',
        'Conceptual mechanics and atomic physics introductions',
        'Structured logical deduction and verbal analysis modules',
        'Preparation for major competitive foundation screens'
      ],
      methodology: 'Replaces rote memorization with experimental thinking. Students learn to derive laws and formulas from first principles, establishing intellectual resilience early.'
    }
  ]

  return (
    <div className="relative w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-section-padding">
      {/* Header section with radial background glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/5 blur-[120px] pointer-events-none"></div>

      <div className="mb-24 border-b border-white/10 pb-12 reveal active">
        <span className="font-label-md text-secondary tracking-[0.35em] uppercase block mb-4 text-sm">
          ACADEMIC SPECTRUM
        </span>
        <h1 className="font-headline-xl text-white uppercase tracking-tight leading-none text-7xl md:text-8xl">
          OUR PROGRAMS.
        </h1>
        <p className="font-body-lg text-on-surface-variant max-w-2xl mt-6 leading-relaxed">
          At Anticlockwise, our curriculum is engineered rather than assembled. We offer highly targeted, intense academic modules designed for maximum return on student effort.
        </p>
      </div>

      {/* Program Detailed Modules (Alternating Dossier Layout) */}
      <div className="space-y-40">
        {coursesList.map((course, index) => {
          const isEven = index % 2 === 0
          return (
            <div
              id={course.id}
              key={course.id}
              className={`relative flex flex-col ${
                isEven ? 'md:flex-row' : 'md:flex-row-reverse'
              } items-center gap-12 reveal active`}
            >
              {/* Image side */}
              <div className="w-full md:w-2/3 relative z-10">
                <div className="aspect-[16/10] overflow-hidden border border-white/10">
                  <img
                    alt={course.title}
                    className="w-full h-full object-cover grayscale-noir hover:scale-105"
                    src={course.image}
                  />
                </div>
              </div>

              {/* Overlap content card */}
              <div
                className={`w-full md:w-1/2 relative z-20 bg-background/90 backdrop-blur-md p-8 md:p-10 border border-white/10 shadow-2xl ${
                  isEven ? 'md:-ml-32' : 'md:-mr-32'
                }`}
              >
                {/* Background ghost number */}
                <span
                  className={`watermark-num absolute -top-12 ${
                    isEven ? '-left-6' : '-right-6'
                  }`}
                >
                  {course.num}
                </span>

                <div className="relative z-10">
                  <span className="font-label-md text-secondary tracking-[0.25em] uppercase block mb-3 font-semibold text-sm">
                    {course.tag}
                  </span>
                  <h2 className="font-headline-md text-white tracking-wide mb-6 uppercase">
                    {course.title}
                  </h2>
                  <p className="font-body-md text-on-surface-variant leading-relaxed mb-8">
                    {course.overview}
                  </p>

                  {/* Syllabus / Highlights */}
                  <div className="mb-8">
                    <h4 className="font-label-md text-white/40 tracking-wider uppercase mb-3 text-xs">
                      SYLLABUS HIGHLIGHTS
                    </h4>
                    <ul className="space-y-3">
                      {course.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <span className="text-secondary mt-1 text-xs font-label-md">▪</span>
                          <p className="font-body-md text-on-surface-variant leading-relaxed text-base">
                            {highlight}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Metadata and Methodology Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 bg-surface-container-high/70 p-5 border border-white/10 mb-8">
                    <div>
                      <span className="font-label-md text-white/40 uppercase tracking-widest block mb-1">
                        DURATION
                      </span>
                      <span className="font-body-md text-on-surface font-light text-[15px]">
                        {course.duration}
                      </span>
                    </div>
                    <div>
                      <span className="font-label-md text-white/40 uppercase tracking-widest block mb-1">
                        SCHEDULE
                      </span>
                      <span className="font-body-md text-on-surface font-light text-[15px]">
                        {course.frequency}
                      </span>
                    </div>
                  </div>

                  {/* Methodological focus */}
                  <div className="hairline-gold pl-4">
                    <h4 className="font-label-md text-secondary tracking-widest uppercase mb-2 font-semibold text-xs">
                      METHODOLOGICAL FOCUS
                    </h4>
                    <p className="font-body-md text-on-surface-variant leading-relaxed italic text-base">
                      {course.methodology}
                    </p>
                  </div>

                  {/* Apply anchor */}
                  <div className="mt-8 pt-6 border-t border-white/5 flex justify-between items-center">
                    <span className="font-label-md text-white/40 tracking-wider uppercase text-xs">
                      Cohort size: 30 students
                    </span>
                    <Link
                      href="/admission#enquire"
                      className="text-secondary hover:text-white text-sm font-label-md font-semibold tracking-wider transition-colors duration-300 uppercase flex items-center gap-1"
                    >
                      APPLY NOW <span className="material-symbols-outlined text-xs">arrow_right_alt</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Program callout with ambient glow and border */}
      <div className="mt-36 relative bg-surface-container-high border border-white/10 p-8 md:p-12 flex flex-col md:flex-row justify-between items-center gap-8 overflow-hidden reveal active">
        <div className="absolute inset-0 dossier-overlay opacity-30 pointer-events-none"></div>
        <div className="relative z-10">
          <h3 className="font-headline-md text-white mb-3 uppercase tracking-wide">
            Not sure which program fits your profile?
          </h3>
          <p className="font-body-md text-on-surface-variant max-w-xl leading-relaxed">
            Schedule a diagnostic profile audit with our counseling registry to evaluate student conceptual depth, pacing capabilities, and target metrics.
          </p>
        </div>
        <div className="relative z-10 whitespace-nowrap">
          <Link
            href="/admission#enquire"
            className="inline-block bg-white text-black px-8 py-4 font-label-md tracking-widest uppercase hover:bg-secondary hover:text-white transition-all duration-300 shadow-[0_5px_15px_rgba(255,255,255,0.05)]"
          >
            BOOK PROFILE AUDIT
          </Link>
        </div>
      </div>
    </div>
  )
}
