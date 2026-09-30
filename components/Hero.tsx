'use client'

import { useEffect, useRef } from 'react'
import {
  ArrowUpRight,
  Sparkles,
} from 'lucide-react'

export default function Hero() {
  const heroRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const hero = heroRef.current
    if (!hero) return

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion) {
      hero.style.setProperty('--hero-shift', '0px')
      hero.style.setProperty('--hero-opacity', '1')
      return
    }

    const updateMotion = () => {
      const scrollY = window.scrollY
      const shift = Math.min(scrollY * 0.12, 26)
      const opacity = Math.max(0.7, 1 - scrollY * 0.00065)

      hero.style.setProperty('--hero-shift', `${shift}px`)
      hero.style.setProperty('--hero-opacity', opacity.toFixed(3))
    }

    updateMotion()
    window.addEventListener('scroll', updateMotion, { passive: true })

    return () => window.removeEventListener('scroll', updateMotion)
  }, [])

  return (
    <section
      ref={heroRef}
      className="hero motion-hero"
      id="top"
    >
      <div className="hero-glow glow-one" />

      <div className="hero-glow glow-two" />

      <div className="hero-content">
        <div className="eyebrow">
          <span className="status-dot" />

          Available for select projects · 2024
        </div>

        <h1>
          I turn bold ideas into <em>thoughtful</em> digital experiences.
        </h1>

        <p className="hero-copy">
          I&apos;m Alex, a product designer based in New York. I partner with
          ambitious teams to make complex products feel simple, useful, and
          distinctly human.
        </p>

        <div className="hero-actions">
          <a
            className="button button-dark"
            href="#work"
          >
            View my work

            <ArrowUpRight size={17} />
          </a>

          <a
            className="button button-light"
            href="#contact"
          >
            Let&apos;s connect
          </a>
        </div>

      </div>

      <div
        className="hero-card"
        aria-label="Featured project preview"
      >
        <div className="card-top">
          <span>
            Selected work
          </span>

          <Sparkles size={16} />
        </div>

        <div className="card-art">
          <div className="art-orb" />

          <div className="art-window">
            <div />
            <div />
            <div />
          </div>
        </div>

        <div className="card-bottom">
          <div>
            <strong>
              Forma
            </strong>

            <span>
              Product direction · 2024
            </span>
          </div>

          <span className="card-arrow">
            ↗
          </span>
        </div>
      </div>

      <style jsx>{`
        .hero {
          --hero-shift: 0px;
          --hero-opacity: 1;
          position: relative;
          z-index: 1;
          max-width: 1280px;
          min-height: 700px;
          margin: 0 auto;
          padding: 150px 5vw 60px;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: clamp(28px, 4vw, 72px);
        }

        .hero-content {
          position: relative;
          z-index: 2;
          flex: 1 1 660px;
          max-width: 780px;
          opacity: var(--hero-opacity);
          transform: translate3d(0, calc(var(--hero-shift) * -0.2), 0);
          transition: opacity 0.8s ease, transform 0.8s ease;
        }

        .eyebrow {
          display: flex;
          align-items: center;
          gap: 9px;
          color: #777;
          font-size: 11px;
          letter-spacing: 0.06em;
          text-transform: uppercase;
        }

        .status-dot {
          width: 7px;
          height: 7px;
          display: inline-block;
          border-radius: 50%;
          background: #86b98b;
          box-shadow: 0 0 0 5px #eaf5eb;
        }

        h1 {
          margin: 28px 0 30px;
          font-size: clamp(58px, 7vw, 106px);
          line-height: 1.0;
          letter-spacing: -0.075em;
          max-width: 800px;
        }

        h1 em {
          color: #9b7ebd;
          font-family: Georgia, serif;
          font-weight: 400;
        }

        .hero-copy {
          max-width: 430px;
          color: #6b6b6b;
          font-size: 16px;
          line-height: 1.7;
        }

        .hero-actions {
          display: flex;
          gap: 12px;
          margin-top: 36px;
        }

        .button {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          border-radius: 999px;
          padding: 14px 20px;
          font-size: 13px;
          text-decoration: none;
          transition:
            transform 0.25s ease,
            box-shadow 0.25s ease;
        }

        .button:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 25px rgba(44, 31, 59, 0.12);
        }

        .button-dark {
          color: #fff;
          background: #1a1a1a;
        }

        .button-light {
          color: #1a1a1a;
          background: #f3eef9;
        }

        .hero-card {
          position: absolute;
          z-index: 1;
          right: 5vw;
          bottom: 95px;
          width: 270px;
          padding: 15px;
          border: 1px solid rgba(155, 126, 189, 0.14);
          border-radius: 22px;
          background: rgba(255, 255, 255, 0.68);
          box-shadow: 0 14px 44px rgba(108, 76, 142, 0.08);
          backdrop-filter: blur(18px);
          transform: rotate(4deg) translate3d(0, calc(var(--hero-shift) * 0.45), 0);
          transition:
            transform 0.6s cubic-bezier(0.22, 1, 0.36, 1),
            box-shadow 0.6s ease,
            border-color 0.35s ease;
          animation:
            reveal-scale 1s 0.35s both,
            float-soft 6s 1.5s ease-in-out infinite;
        }

        .hero-card:hover {
          transform: rotate(1.5deg) translateY(-8px);
          box-shadow: 0 22px 56px rgba(108, 76, 142, 0.12);
          border-color: rgba(155, 126, 189, 0.22);
        }

        .card-top,
        .card-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 10px;
          color: #777;
        }

        .card-art {
          height: 190px;
          margin: 12px 0;
          position: relative;
          overflow: hidden;
          border-radius: 14px;
          background: linear-gradient(
            140deg,
            #cdb6eb,
            #f1dff4 58%,
            #eed4c8
          );
        }

        .art-orb {
          position: absolute;
          width: 150px;
          height: 150px;
          top: 35px;
          left: 55px;
          border-radius: 50%;
          background: radial-gradient(
            circle at 30% 28%,
            #fff 0 2%,
            #c4aae5 16%,
            #7651a5 65%,
            #4c326d 100%
          );
          box-shadow: -15px 25px 35px rgba(86, 48, 120, 0.25);
        }

        .art-window {
          position: absolute;
          width: 100px;
          height: 74px;
          bottom: 17px;
          left: 15px;
          padding: 10px;
          border: 1px solid rgba(255, 255, 255, 0.7);
          border-radius: 9px;
          background: rgba(255, 255, 255, 0.5);
          backdrop-filter: blur(12px);
        }

        .art-window div {
          height: 5px;
          margin-bottom: 7px;
          border-radius: 4px;
          background: rgba(92, 52, 121, 0.35);
        }

        .art-window div:first-child {
          width: 58%;
          background: rgba(92, 52, 121, 0.7);
        }

        .card-bottom strong,
        .card-bottom span {
          display: block;
        }

        .card-bottom strong {
          color: #1a1a1a;
          font-size: 13px;
          font-weight: 600;
        }

        .card-bottom span {
          margin-top: 3px;
        }

        .card-arrow {
          color: #1a1a1a;
          font-size: 17px;
        }

        .hero-glow {
          position: absolute;
          border-radius: 50%;
          filter: blur(1px);
          opacity: 0.7;
          pointer-events: none;
        }

        .glow-one {
          width: 490px;
          height: 490px;
          right: -120px;
          top: 40px;
          background: radial-gradient(
            circle,
            #ede4f8 0%,
            rgba(237, 228, 248, 0) 70%
          );
        }

        .glow-two {
          width: 330px;
          height: 330px;
          left: 38%;
          bottom: 0;
          background: radial-gradient(
            circle,
            #fff1ec 0%,
            rgba(255, 241, 236, 0) 70%
          );
        }

        @media (max-width: 980px) {
          .hero {
            min-height: auto;
            padding-top: 110px;
            padding-bottom: 72px;
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-start;
            gap: 0;
          }

          .hero-content {
            max-width: 100%;
            width: 100%;
            flex: 0 1 auto;
          }

        }

        @media (max-width: 620px) {
          .hero {
            padding-top: 124px;
            padding-inline: 24px;
            padding-bottom: 56px;
          }

          .eyebrow {
            font-size: 10px;
            letter-spacing: 0.08em;
          }

          h1 {
            margin-top: 26px;
            margin-bottom: 24px;
            max-width: 100%;
            font-size: clamp(40px, 10vw, 58px);
            line-height: 1;
            letter-spacing: -0.055em;
            overflow-wrap: anywhere;
          }

          .hero-copy {
            max-width: 100%;
            font-size: 16px;
            line-height: 1.7;
          }

          .hero-actions {
            flex-direction: column;
            align-items: stretch;
            width: 100%;
            gap: 14px;
            margin-top: 30px;
          }

          .button {
            width: 100%;
            justify-content: center;
            padding-block: 16px;
          }

          .hero-card {
            position: relative;
            right: auto;
            bottom: auto;
            align-self: center;
            width: min(100%, 320px);
            margin-top: 32px;
            transform: none;
          }
        }
      `}</style>
    </section>
  )
}