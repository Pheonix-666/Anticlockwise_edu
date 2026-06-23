'use client'
import { useState } from 'react'

export default function Careers() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    role: 'IB/A Level Physics Senior Mentor',
    experience: '',
    bio: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    window.open("https://wa.me/9137773967", "_blank")
    setIsSubmitted(true)
  }

  const values = [
    {
      title: 'Pedagogical Autonomy',
      desc: 'We define the baseline outcomes, but you own the classroom execution. Design lessons that break standard conventions.'
    },
    {
      title: 'Elite Student Cohort',
      desc: 'Teach students who possess the baseline intelligence and hunger to match your depth. No remedial slow-downs.'
    },
    {
      title: 'High-Stakes Support',
      desc: 'Access extensive research assets, simulated diagnostic data systems, and state-of-the-art administrative support.'
    }
  ]

  const roles = [
    {
      title: 'IB/A Level Physics Senior Mentor',
      location: 'Hybrid / South Mumbai',
      type: 'Full-time',
      requirements: 'M.Sc. Physics or equivalent from a premier institute. Minimum 5 years teaching advanced physics for IBDP and A Level.'
    },
    {
      title: 'IGCSE Physics Mentor',
      location: 'Hybrid / South Mumbai',
      type: 'Full-time',
      requirements: 'B.Sc./M.Sc. in Physics. Exceptional clarity in foundational concepts and experience preparing students for IGCSE board examinations.'
    },
    {
      title: 'IA & EE Guidance Specialist',
      location: 'Remote',
      type: 'Part-time',
      requirements: 'Experience in educational research and scientific writing. Skill in guiding students through the rigorous process of IB Internal Assessments and Extended Essays in Physics.'
    }
  ]

  return (
    <div className="relative w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-section-padding">
      {/* Background glow */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-white/5 blur-[120px] pointer-events-none"></div>

      {/* Header */}
      <div className="mb-24 border-b border-white/10 pb-12 reveal active">
        <span className="font-label-md text-secondary tracking-[0.35em] uppercase block mb-4 text-sm">
          JOIN THE ELITE VANGUARD
        </span>
        <h1 className="font-headline-xl text-white uppercase tracking-tight leading-none text-7xl md:text-8xl">
          CAREERS.
        </h1>
        <p className="font-body-lg text-on-surface-variant max-w-2xl mt-6 leading-relaxed">
          We look for educators who see teaching as an engineering discipline. Join a cohort of experts redefining scholastic dominance in international curricula.
        </p>
      </div>

      {/* Core values - Brutalist Grid Layout */}
      <div className="mb-32 reveal active">
        <div className="flex items-center gap-4 mb-12">
          <span className="h-[1px] w-8 bg-secondary"></span>
          <h2 className="font-headline-md text-white uppercase tracking-wider text-2xl md:text-3xl">
            Why Teach With Us
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 border border-white/10">
          {values.map((v, i) => (
            <div key={i} className="bg-surface-container-low p-10 relative group hover:bg-surface-variant transition-colors">
              <span className="absolute top-0 left-0 w-8 h-[2px] bg-secondary"></span>
              <h3 className="font-headline-md text-white mb-4 uppercase tracking-wide text-xl">
                {v.title}
              </h3>
              <p className="font-body-md text-on-surface-variant leading-relaxed text-base">
                {v.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Open Roles */}
      <div className="mb-32 reveal active">
        <div className="flex items-center gap-4 mb-12">
          <span className="h-[1px] w-8 bg-secondary"></span>
          <h2 className="font-headline-md text-white uppercase tracking-wider text-2xl md:text-3xl">
            Open Roles
          </h2>
        </div>
        <div className="space-y-6">
          {roles.map((role, idx) => (
            <div
              key={idx}
              className="bg-surface-container-low border border-white/10 p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-8 transition-colors duration-300 hover:border-secondary/30"
            >
              <div className="max-w-3xl">
                <div className="flex flex-wrap gap-3 items-center mb-4">
                  <h3 className="font-headline-md text-white uppercase tracking-wide text-xl">
                    {role.title}
                  </h3>
                  <span className="font-label-md bg-white/10 text-white px-2 py-0.5 tracking-widest uppercase font-semibold text-[10px]">
                    {role.location}
                  </span>
                  <span className="font-label-md bg-secondary/20 text-secondary px-2 py-0.5 tracking-widest uppercase font-semibold text-[10px]">
                    {role.type}
                  </span>
                </div>
                <p className="font-body-md text-on-surface-variant leading-relaxed text-base">
                  {role.requirements}
                </p>
              </div>
              <div>
                <a
                  href="#apply"
                  onClick={() => setFormData({ ...formData, role: role.title })}
                  className="inline-block border border-secondary text-secondary hover:bg-secondary hover:text-background px-8 py-3.5 font-label-md tracking-widest uppercase transition-all duration-300 font-semibold whitespace-nowrap"
                >
                  APPLY ROLE
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Application Form */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start reveal active" id="apply">
        <div>
          <h2 className="font-headline-md text-white mb-6 uppercase tracking-wider text-3xl">
            Apply For Candidacy
          </h2>
          <p className="font-body-md text-on-surface-variant leading-relaxed mb-8 text-base">
            Ready to shape the trajectory of elite students? Submit your portfolio credentials, educational logs, and curriculum notes below.
          </p>
          <div className="bg-surface-container-low border border-white/10 p-8 relative">
            <span className="absolute top-0 left-0 w-8 h-[2px] bg-secondary"></span>
            <h4 className="font-label-md text-secondary tracking-widest uppercase mb-6 font-semibold">
              THE RECRUITMENT FLOW
            </h4>
            <ul className="space-y-6 font-body-md text-on-surface-variant leading-relaxed text-base">
              <li className="flex gap-4 items-start">
                <span className="font-headline-md text-secondary">1.</span>
                <div>
                  <span className="text-white block font-medium uppercase font-label-md tracking-wider mb-1">Portfolio Audit</span>
                  <span>Credentials review, academic history, and past student placement audits.</span>
                </div>
              </li>
              <li className="flex gap-4 items-start">
                <span className="font-headline-md text-secondary">2.</span>
                <div>
                  <span className="text-white block font-medium uppercase font-label-md tracking-wider mb-1">Pedagogical Demo</span>
                  <span>Presenting a speed-optimized roadmap module or solving advanced concepts on the board.</span>
                </div>
              </li>
              <li className="flex gap-4 items-start">
                <span className="font-headline-md text-secondary">3.</span>
                <div>
                  <span className="text-white block font-medium uppercase font-label-md tracking-wider mb-1">Consensus Align</span>
                  <span>Aligning teaching philosophy with the Anticlockwise Cognitive Engineering methodology.</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Candidacy Form Container */}
        <div className="bg-surface-container-high border border-white/10 p-8 md:p-12 relative overflow-hidden">
          <div className="absolute inset-0 dossier-overlay opacity-30 pointer-events-none"></div>
          <span className="absolute top-0 right-0 w-3 h-3 bg-secondary"></span>

          {isSubmitted ? (
            <div className="relative z-10 text-center py-12">
              <span className="material-symbols-outlined text-secondary text-5xl mb-6">
                workspace_premium
              </span>
              <h3 className="font-headline-md text-white mb-4 uppercase tracking-wide text-2xl">
                Application Deposited
              </h3>
              <p className="font-body-md text-on-surface-variant leading-relaxed max-w-sm mx-auto text-base">
                Your portfolio details have been entered into our mentor review registry. Our operations lead will contact you to organize a screening.
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="mt-8 font-label-md tracking-widest text-secondary uppercase hover:text-white transition-colors duration-300"
              >
                Submit another application
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="font-label-md text-white/50 tracking-widest uppercase block mb-2 font-semibold"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-surface-variant border border-outline-variant text-white p-3 font-body-md text-sm rounded-none focus:outline-none focus:border-secondary focus:ring-0 transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="email"
                    className="font-label-md text-white/50 tracking-widest uppercase block mb-2 font-semibold text-xs"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-surface-variant border border-outline-variant text-white p-3 font-body-md text-base rounded-none focus:outline-none focus:border-secondary focus:ring-0 transition-colors"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="font-label-md text-white/50 tracking-widest uppercase block mb-2 font-semibold text-xs"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-surface-variant border border-outline-variant text-white p-3 font-body-md text-base rounded-none focus:outline-none focus:border-secondary focus:ring-0 transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="role"
                    className="font-label-md text-white/50 tracking-widest uppercase block mb-2 font-semibold text-xs"
                  >
                    Applying Position
                  </label>
                  <select
                    id="role"
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    className="w-full bg-surface-variant border border-outline-variant text-white p-3 font-body-md text-sm rounded-none focus:outline-none focus:border-secondary focus:ring-0 transition-colors appearance-none cursor-pointer"
                  >
                    <option value="IB/A Level Physics Senior Mentor">IB/A Level Physics Senior Mentor</option>
                    <option value="IGCSE Physics Mentor">IGCSE Physics Mentor</option>
                    <option value="IA & EE Guidance Specialist">IA & EE Guidance Specialist</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="experience"
                    className="font-label-md text-white/50 tracking-widest uppercase block mb-2 font-semibold text-xs"
                  >
                    Years of Relevant Exp.
                  </label>
                  <input
                    type="text"
                    id="experience"
                    required
                    placeholder="e.g. 6 years"
                    value={formData.experience}
                    onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                    className="w-full bg-surface-variant border border-outline-variant text-white p-3 font-body-md text-base rounded-none focus:outline-none focus:border-secondary focus:ring-0 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="bio"
                  className="font-label-md text-white/50 tracking-widest uppercase block mb-2 font-semibold"
                >
                  Credentials summary or notable student accomplishments
                </label>
                <textarea
                  id="bio"
                  rows={4}
                  value={formData.bio}
                  onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                  placeholder="Tell us about the highest rank you have mentored, or your educational background..."
                  className="w-full bg-surface-variant border border-outline-variant text-white p-3 font-body-md text-sm rounded-none focus:outline-none focus:border-secondary focus:ring-0 placeholder-white/20 transition-colors"
                ></textarea>
              </div>

              <button
                type="submit"
                id="submit-candidate-btn"
                className="w-full bg-white text-black py-4 font-label-md tracking-widest uppercase hover:bg-secondary transition-all duration-300 font-semibold shadow-[0_4px_10px_rgba(255,255,255,0.03)]"
              >
                SUBMIT CANDIDACY PORTFOLIO
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
