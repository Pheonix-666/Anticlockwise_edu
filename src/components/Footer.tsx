import Link from 'next/link'
import Image from 'next/image'
import { Bodoni_Moda } from 'next/font/google';

const bodoni = Bodoni_Moda({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
});


export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 px-margin-mobile md:px-margin-desktop pt-32 pb-20">
      <div className="max-w-container-max mx-auto flex flex-col gap-24">
        <div className="flex flex-col md:flex-row justify-between gap-16">
          <div className="max-w-md">
            <div className="flex items-center gap-4 mb-10">
              <img
                src="logo.png"
                alt="Anticlockwise Logo"
                className="h-20 w-auto invert"
              />
              <span
                className={`${bodoni.className} text-[40px] tracking-[0.3em] text-white uppercase font-medium`}
              >
                Anticlockwise
              </span>
            </div>
            <p className="font-body-md text-sm text-white/30 leading-loose max-w-[280px]">
              Strategic academic consultancy specializing in high-potential cognitive performance and elite global placement.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-12 md:gap-24">
            <div className="space-y-8">
              <h5 className="font-label-md text-xs text-white/20 uppercase tracking-[0.4em]">Index</h5>
              <ul className="space-y-6">
                <li>
                  <Link href="/courses" className="font-label-md text-xs text-white/50 hover:text-white uppercase transition-colors">
                    Courses
                  </Link>
                </li>
                <li>
                  <Link href="/admission" className="font-label-md text-xs text-white/50 hover:text-white uppercase transition-colors">
                    Admission
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="font-label-md text-xs text-white/50 hover:text-white uppercase transition-colors">
                    Vanguard
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="font-label-md text-xs text-white/50 hover:text-white uppercase transition-colors">
                    Careers
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-8">
              <h5 className="font-label-md text-xs text-white/20 uppercase tracking-[0.4em]">Connect</h5>
              <ul className="space-y-6">
                <li>
                  <a href="#" className="font-label-md text-xs text-white/50 hover:text-white uppercase transition-colors">
                    London
                  </a>
                </li>
                <li>
                  <a href="#" className="font-label-md text-xs text-white/50 hover:text-white uppercase transition-colors">
                    New York
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-20 text-center border-t border-white/5">
          <p className="font-label-md text-[10px] text-white/20 uppercase tracking-[0.5em]">
            © {new Date().getFullYear()} ANTICLOCKWISE CONSULTANCY.
          </p>
        </div>
      </div>
    </footer>
  )
}
