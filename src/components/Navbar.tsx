'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

const navLinks = [
  { label: 'STRATEGY', href: '/' },
  { label: 'COURSES', href: '/courses' },
  { label: 'ADMISSION', href: '/admission' },
  { label: 'CAREERS', href: '/careers' },
  { label: 'ABOUT US', href: '/about' },
]

export default function Navbar() {
  const [hidden, setHidden] = useState(false)
  const [lastScroll, setLastScroll] = useState(0)
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => {
      const cur = window.scrollY
      if (cur > 50) { setScrolled(true) } else { setScrolled(false) }
      if (cur <= 10) { setHidden(false) }
      else if (cur > lastScroll && cur > 100 && !menuOpen) { setHidden(true) }
      else { setHidden(false) }
      setLastScroll(cur)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [lastScroll, menuOpen])

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <header
        className={`fixed top-0 w-full z-[100] flex justify-between items-center px-margin-mobile md:px-margin-desktop transition-all duration-500 border-b border-white/5 ${menuOpen ? 'bg-transparent' : 'bg-background/40 backdrop-blur-xl'
          } ${scrolled ? 'py-4' : 'py-6'}`}
        style={{ transform: hidden ? 'translateY(-100%)' : 'translateY(0)' }}
      >
        <Link href="/" className="flex items-center gap-3" onClick={() => setMenuOpen(false)}>
          <img
            src="/logo.png"
            alt="Anticlockwise Logo"
            className="h-6 w-auto invert"
          />
          <span className="font-label-md text-xs tracking-[0.4em] text-white uppercase mt-1">
            Anticlockwise
          </span>
        </Link>
        <button
          className="text-white p-2 md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="material-symbols-outlined text-4xl">
            {menuOpen ? 'close' : 'menu'}
          </span>
        </button>

        {/* Desktop Nav - Not strictly in finalm3 mobile view but adapting it */}
        <nav className="hidden md:flex gap-8 items-center">
          {navLinks.map(link => {
            const active = pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`font-label-md text-xs tracking-[0.15em] uppercase transition-colors duration-300 ${active ? 'text-white border-b border-white pb-1' : 'text-on-surface-variant hover:text-white'
                  }`}
              >
                {link.label}
              </Link>
            )
          })}
          <Link
            href="/admission#enquire"
            className="bg-white text-black px-8 py-3 font-label-md text-xs uppercase tracking-widest hover:bg-neutral-champagne transition-all duration-300 ml-4"
          >
            ENQUIRE
          </Link>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-[90] bg-black flex flex-col items-start justify-center p-margin-mobile md:hidden ${menuOpen ? 'active' : ''}`}
        id="mobile-menu"
      >
        <div className="w-full max-w-xs space-y-12">
          <p className="font-label-md text-[9px] text-white/30 tracking-[0.5em] uppercase border-b border-white/10 pb-4">
            Classification: Internal
          </p>
          <nav className="flex flex-col gap-10">
            {navLinks.map((link) => {
              const active = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`font-headline-lg text-4xl transition-all ${active ? 'text-white italic' : 'text-white/40 hover:text-white'
                    }`}
                >
                  {link.label}
                </Link>
              )
            })}
          </nav>
          <Link
            href="/admission#enquire"
            onClick={() => setMenuOpen(false)}
            className="inline-block mt-12 bg-white text-black px-12 py-5 font-label-md text-label-md uppercase tracking-[0.3em] w-full text-center"
          >
            Enquire
          </Link>
        </div>
      </div>
    </>
  )
}
