'use client'

import { useEffect, useState } from 'react'
import { Menu, X, ArrowUpRight } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 16)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Work', href: '#work' },
    { label: 'Experience', href: '#experience' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header className={`nav-wrap motion-nav ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="nav-shell">
        <nav className="nav" aria-label="Main navigation">
          <a className="brand" href="#top" aria-label="Alex Morgan home">
            AM<span>.</span>
          </a>

          <div className="desktop-links">
            {links.map((link) => (
              <a key={link.label} href={link.href}>
                {link.label}
              </a>
            ))}
          </div>

          <a className="nav-cta" href="#contact">
            Let&apos;s talk
            <ArrowUpRight size={15} />
          </a>

          <button
            className="menu-button"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>

        {open && (
          <div className="mobile-menu">
            {links.map((link) => (
              <a key={link.label} href={link.href} onClick={() => setOpen(false)}>
                {link.label}
              </a>
            ))}

            <a href="#contact" onClick={() => setOpen(false)}>
              Let&apos;s talk
              <ArrowUpRight size={15} />
            </a>
          </div>
        )}
      </div>

      <style jsx>{`
        .nav-wrap {
          position: fixed;
          top: 16px;
          left: 50%;
          width: min(100%, 1180px);
          transform: translateX(-50%);
          z-index: 1000;
          padding: 0 18px;
          transition: top 0.35s ease, padding 0.35s ease;
        }

        .nav-wrap.is-scrolled {
          top: 12px;
        }

        .nav-shell {
          width: 100%;
          margin: 0 auto;
        }

        .nav {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 18px;
          min-height: 72px;
          padding: 12px 18px 12px 20px;
          border: 1px solid rgba(155, 126, 189, 0.18);
          border-radius: 999px;
          background: linear-gradient(135deg, rgba(255,255,255,0.92), rgba(255,255,255,0.72));
          box-shadow: 0 10px 30px rgba(28, 21, 38, 0.08), inset 0 1px 0 rgba(255,255,255,0.9);
          backdrop-filter: blur(18px);
          -webkit-backdrop-filter: blur(18px);
          transition: transform 0.35s ease, box-shadow 0.35s ease, border-color 0.35s ease, min-height 0.35s ease;
        }

        .nav-wrap.is-scrolled .nav {
          min-height: 64px;
          box-shadow: 0 12px 30px rgba(28, 21, 38, 0.07);
        }

        .nav:hover {
          transform: translateY(-1px);
          box-shadow: 0 18px 38px rgba(38, 26, 52, 0.12);
          border-color: rgba(155, 126, 189, 0.28);
        }

        .brand {
          color: #1a1a1a;
          font-size: 22px;
          font-weight: 750;
          letter-spacing: -0.08em;
          text-decoration: none;
          flex-shrink: 0;
        }

        .brand span {
          color: #9b7ebd;
        }

        .desktop-links {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: clamp(14px, 1.8vw, 28px);
          margin-inline: auto;
          flex-wrap: wrap;
        }

        .desktop-links a,
        .mobile-menu a {
          position: relative;
          color: #5f5a68;
          font-size: 12px;
          line-height: 1;
          text-decoration: none;
          transition: color 0.2s ease, transform 0.2s ease, opacity 0.2s ease;
        }

        .desktop-links a::after,
        .mobile-menu a::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: -8px;
          width: 100%;
          height: 1px;
          border-radius: 999px;
          background: linear-gradient(90deg, rgba(155,126,189,0), rgba(155,126,189,0.8), rgba(155,126,189,0));
          transform: scaleX(0);
          transform-origin: center;
          transition: transform 0.25s ease;
        }

        .desktop-links a:hover,
        .mobile-menu a:hover {
          color: #1a1a1a;
        }

        .desktop-links a:hover::after,
        .mobile-menu a:hover::after {
          transform: scaleX(1);
        }

        .nav-cta {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          padding: 10px 14px;
          border: 1px solid rgba(155, 126, 189, 0.2);
          border-radius: 999px;
          background: linear-gradient(135deg, rgba(155,126,189,0.12), rgba(255,255,255,0.5));
          color: #1a1a1a;
          font-size: 12px;
          font-weight: 600;
          text-decoration: none;
          flex-shrink: 0;
          transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
        }

        .nav-cta:hover {
          border-color: rgba(155, 126, 189, 0.35);
          box-shadow: 0 14px 24px rgba(155, 126, 189, 0.12);
        }

        .menu-button {
          display: none;
          width: 42px;
          height: 42px;
          border: 1px solid rgba(155, 126, 189, 0.2);
          border-radius: 50%;
          background: rgba(155, 126, 189, 0.06);
          color: #1a1a1a;
          cursor: pointer;
          flex-shrink: 0;
        }

        .mobile-menu {
          display: none;
        }

        @media (max-width: 820px) {
          .nav-wrap {
            top: 12px;
            padding-inline: 12px;
          }

          .nav {
            min-height: 62px;
            padding: 10px 12px 10px 16px;
          }

          .desktop-links {
            gap: 12px 18px;
          }

          .desktop-links a {
            font-size: 11px;
          }
        }

        @media (max-width: 700px) {
          .nav-wrap {
            width: min(100%, 1180px);
          }

          .desktop-links,
          .nav-cta {
            display: none;
          }

          .menu-button {
            display: inline-flex;
            align-items: center;
            justify-content: center;
          }

          .mobile-menu {
            display: flex;
            flex-direction: column;
            gap: 16px;
            width: min(100%, 1180px);
            margin-top: 10px;
            padding: 18px 18px 16px;
            border: 1px solid rgba(155, 126, 189, 0.18);
            border-radius: 22px;
            background: rgba(255, 255, 255, 0.9);
            box-shadow: 0 12px 28px rgba(28, 21, 38, 0.08);
            backdrop-filter: blur(16px);
          }

          .mobile-menu a {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 8px;
            padding: 4px 0;
            color: #1a1a1a;
            font-size: 15px;
          }
        }
      `}</style>
    </header>
  )
}