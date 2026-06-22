import Link from 'next/link'

export default function Courses() {
  const coursesList = [
    {
      id: 'ibdp-physics',
      num: '01',
      tag: 'COURSES',
      title: 'IBDP Physics',
      duration: '2 Year Comprehensive Program',
      frequency: 'Personalized Sessions',
      overview: 'Expert mentoring for the IB Diploma Programme Physics curriculum, covering core, AHL, and options.',
      image: '/module-equations.png',
      highlights: [
        'In-depth conceptual mastery of all topics',
        'Focus on analytical problem solving',
        'Past paper practice and exam technique',
        'Targeted support for difficult concepts'
      ],
      methodology: 'Strategic planning meets personalized mentorship to ensure top predicted grades and final board success.'
    },
    {
      id: 'ib-myp',
      num: '02',
      tag: 'COURSES',
      title: 'IB MYP Science & Physics',
      duration: 'Flexible / Continuous',
      frequency: 'Personalized Sessions',
      overview: 'Building strong foundations in MYP Science and Physics to prepare for the rigorous IBDP.',
      image: '/module-books.png',
      highlights: [
        'Scientific inquiry and conceptual understanding',
        'Application of scientific knowledge',
        'Building core skills for transition to IBDP',
        'Regular assessments and feedback'
      ],
      methodology: 'Fostering intellectual curiosity and foundational logic to build confidence early on.'
    },
    {
      id: 'igcse-physics',
      num: '03',
      tag: 'COURSES',
      title: 'IGCSE Physics',
      duration: '1-2 Year Program',
      frequency: 'Personalized Sessions',
      overview: 'Comprehensive preparation for the IGCSE Physics board examinations.',
      image: '/module-staircase.png',
      highlights: [
        'Complete syllabus coverage',
        'Practical skills and alternative to practical preparation',
        'Mock exams and past paper analysis',
        'Targeted weak area identification'
      ],
      methodology: 'Systematic approach to theoretical understanding and application of physics principles.'
    },
    {
      id: 'as-level',
      num: '04',
      tag: 'COURSES',
      title: 'AS Level Physics',
      duration: '1 Year Program',
      frequency: 'Personalized Sessions',
      overview: 'Specialized mentoring for the AS Level Physics curriculum.',
      image: '/module-equations.png',
      highlights: [
        'Core concepts and mathematical applications',
        'Data analysis and experimental skills',
        'Strategic revision for AS exams',
        'Step-by-step problem solving strategies'
      ],
      methodology: 'Focused cognitive engineering to handle the leap in complexity from IGCSE.'
    },
    {
      id: 'a-level',
      num: '05',
      tag: 'COURSES',
      title: 'A Level Physics',
      duration: '1 Year Program (A2)',
      frequency: 'Personalized Sessions',
      overview: 'Advanced preparation for final A Level Physics board exams, ensuring university readiness.',
      image: '/module-books.png',
      highlights: [
        'Advanced physics principles and applications',
        'Synthesis of complex topics',
        'Rigorous mock exam simulations',
        'A* focused exam strategies'
      ],
      methodology: 'Performance under pressure through high-stakes simulated testing.'
    },
    {
      id: 'ia-guidance',
      num: '06',
      tag: 'ACADEMIC MENTORSHIP',
      title: 'IA (Internal Assessment) Guidance',
      duration: 'Project-based',
      frequency: 'One-on-One Mentoring',
      overview: 'Expert support for IB Physics Internal Assessments to ensure maximum marks.',
      image: '/module-staircase.png',
      highlights: [
        'Topic selection and research question formulation',
        'Experiment design and data collection strategies',
        'Data analysis and error evaluation',
        'Review and refinement for top bands'
      ],
      methodology: 'Strategic mapping of the IA criteria to ensure every point is targeted and achieved.'
    },
    {
      id: 'ee-guidance',
      num: '07',
      tag: 'ACADEMIC MENTORSHIP',
      title: 'EE (Extended Essay) Guidance',
      duration: 'Project-based',
      frequency: 'One-on-One Mentoring',
      overview: 'Comprehensive mentorship for the IB Extended Essay in Physics.',
      image: '/module-equations.png',
      highlights: [
        'Original research topic development',
        'Literature review and methodology planning',
        'Writing and structuring the 4000-word essay',
        'Preparation for the viva voce'
      ],
      methodology: 'Academic rigor and independent research skills building for top EE grades.'
    },
    {
      id: 'exam-strategy',
      num: '08',
      tag: 'ACADEMIC MENTORSHIP',
      title: 'Exam Strategy & Revision Programs',
      duration: 'Intensive Revision',
      frequency: 'Before Unit Tests/Mocks/Boards',
      overview: 'Preparation for all school assessments, mid-terms, mocks, and final board examinations.',
      image: '/module-books.png',
      highlights: [
        'Personalized improvement plans',
        'Predicted grade assessment',
        'Performance analysis and academic audits',
        'Time management and stress reduction techniques'
      ],
      methodology: 'Simulated environments to build high-stakes resilience and eliminate friction during exams.'
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
