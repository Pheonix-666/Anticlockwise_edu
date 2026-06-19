'use client'
import { useState } from 'react'
import Link from 'next/link'

export default function FloatingEnquire() {
  const [hovered, setHovered] = useState(false)

  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col items-end gap-3">
      {hovered && (
        <div
          className="bg-[#1c1c13] border border-[#e9c349]/40 text-[#e6e3d3] px-5 py-3 text-sm font-metro tracking-widest uppercase animate-fadeUp"
          style={{ fontFamily: 'Metrophobic, sans-serif', fontSize: '12px', letterSpacing: '0.1em' }}
        >
          Questions? Let&apos;s talk.
        </div>
      )}
      <Link
        href="/admission#enquire"
        id="floating-enquire-btn"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="enquire-float bg-[#e9c349] text-[#14140b] w-16 h-16 flex items-center justify-center hover:bg-white hover:scale-110 transition-all duration-300 shadow-[0_8px_30px_rgba(233,195,73,0.35)]"
        aria-label="Enquire Now"
      >
        <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      </Link>
    </div>
  )
}
