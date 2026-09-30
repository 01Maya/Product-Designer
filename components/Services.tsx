'use client'

import { Compass, Layers3, MousePointer2, Shapes } from 'lucide-react'

const services = [
  {
    icon: Compass,
    title: 'Product design',
    text: 'From early direction to launch-ready flows, I help shape products people want to use.',
  },
  {
    icon: MousePointer2,
    title: 'UI / UX design',
    text: 'Thoughtful interfaces that feel clear, considered, and quietly delightful.',
  },
  {
    icon: Layers3,
    title: 'Design systems',
    text: 'Flexible foundations that bring consistency without slowing down creativity.',
  },
  {
    icon: Shapes,
    title: 'Prototyping',
    text: 'Fast, high-fidelity prototypes that turn fuzzy ideas into shared understanding.',
  },
]

export default function Services() {
  return (
    <section className="services section-shell motion-section" id="services">
      <div className="section-label">02 / What I do</div>

      <div className="service-head">
        <h2>
          Good design makes the complex feel <em>obvious.</em>
        </h2>
        <p>A flexible practice for teams at every stage — from first sketch to the next big thing.</p>
      </div>

      <div className="service-grid">
        {services.map(({ icon: Icon, title, text }, index) => (
          <div className="service-card" key={title}>
            <div className="service-number">0{index + 1}</div>
            <Icon size={24} strokeWidth={1.5} aria-hidden="true" />
            <h3>{title}</h3>
            <p>{text}</p>
            <span className="service-line" />
          </div>
        ))}
      </div>

      <style jsx>{`
        .section-shell {
          max-width: 1280px;
          margin: 0 auto;
          padding: 120px 5vw;
        }

        .section-label {
          width: min(100%, 1120px);
          margin: 0 auto;
          color: #9b7ebd;
        }

        .service-head {
          display: flex;
          justify-content: space-between;
          gap: clamp(28px, 6vw, 96px);
          align-items: flex-end;
          max-width: 1120px;
          margin: 48px auto 60px;
        }

        .service-head h2 {
          min-width: 0;
          max-width: 650px;
          font-size: clamp(38px, 4.5vw, 66px);
          line-height: 1.08;
          letter-spacing: -0.06em;
        }

        .service-head h2 em {
          color: #9b7ebd;
          font-family: Georgia, serif;
          font-weight: 400;
        }

        .service-head p {
          max-width: 270px;
          color: #777;
          font-size: 14px;
          line-height: 1.7;
        }

        .service-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 1px;
          width: min(100%, 1120px);
          margin: 0 auto;
          border-top: 1px solid #eee;
          border-bottom: 1px solid #eee;
        }

        .service-card {
          position: relative;
          min-width: 0;
          min-height: 245px;
          padding: 27px 22px;
          border-right: 1px solid #eee;
          border-left: 1px solid transparent;
          transition: background 0.25s ease, transform 0.25s ease, border-color 0.25s ease;
        }

        .service-card:first-child {
          border-left: 0;
        }

        .service-card:last-child {
          border-right: 0;
        }

        .service-card:hover {
          background: #faf8fd;
          border-color: rgba(155, 126, 189, 0.12);
          transform: translateY(-4px);
        }

        .service-number {
          position: absolute;
          top: 27px;
          right: 22px;
          color: #aaa;
          font-size: 11px;
        }

        .service-card svg {
          margin-bottom: 48px;
          color: #9b7ebd;
        }

        .service-card h3 {
          font-size: 16px;
          line-height: 1.3;
        }

        .service-card p {
          margin-top: 10px;
          color: #777;
          font-size: 13px;
          line-height: 1.7;
        }

        .service-line {
          position: absolute;
          bottom: 0;
          left: 22px;
          width: 35px;
          height: 2px;
          background: #c9b8e4;
        }

        @media (max-width: 800px) {
          .service-head {
            display: block;
            margin-top: 30px;
          }

          .service-head p {
            margin-top: 22px;
          }

          .service-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .service-card:nth-child(2) {
            border-right: 0;
          }

          .service-card:nth-child(-n + 2) {
            border-bottom: 1px solid #eee;
          }
        }

        @media (max-width: 500px) {
          .service-card {
            min-height: 220px;
            padding: 22px 16px;
          }

          .service-card svg {
            margin-bottom: 36px;
          }

          .service-number {
            top: 22px;
            right: 16px;
          }

          .service-line {
            left: 16px;
          }
        }
      `}</style>
    </section>
  )
}
