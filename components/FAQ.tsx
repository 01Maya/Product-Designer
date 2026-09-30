'use client'

import { useState } from 'react'
import { Plus } from 'lucide-react'

const faqs = [
  {
    q: 'What kind of projects do you take on?',
    a: 'I love working on digital products with a clear purpose — especially at the early-to-growth stages where design can shape the direction, not just the surface.',
  },
  {
    q: 'How do you like to work with a team?',
    a: 'Collaboratively and openly. I bring structure to the process, invite the right voices in early, and keep the work visible so decisions feel shared.',
  },
  {
    q: 'What does a typical engagement look like?',
    a: 'Every project is different, but most start with a focused discovery phase, move into exploration and prototyping, then wrap with a refined system ready to ship.',
  },
  {
    q: 'Are you available for a new project?',
    a: 'I am currently available for select projects starting in the next few months. The best way to find out is to send me a note.',
  },
]

export default function FAQ() {
  const [active, setActive] = useState<number | null>(0)

  return (
    <section className="faq section-shell motion-section" id="faq">
      <div className="section-label">06 / FAQ</div>

      <div className="faq-grid">
        <h2>A few answers, before we begin.</h2>

        <div className="faq-list">
          {faqs.map((item, index) => {
            const isActive = active === index

            return (
              <div className={`faq-item ${isActive ? 'active' : ''}`} key={item.q}>
                <button
                  type="button"
                  onClick={() => setActive(isActive ? null : index)}
                  aria-expanded={isActive}
                >
                  <span>{item.q}</span>
                  <Plus size={18} aria-hidden="true" />
                </button>

                <div className="faq-answer">
                  <p>{item.a}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      <style jsx>{`
        .section-label {
          width: min(100%, 1120px);
          margin: 18px auto 0;
          color: #9b7ebd;
        }

        .faq-grid {
          display: grid;
          grid-template-columns: minmax(0, 0.8fr) minmax(0, 1.2fr);
          gap: clamp(36px, 8vw, 128px);
          width: min(100%, 1120px);
          margin: 50px auto 0;
        }

        h2 {
          min-width: 0;
          font-size: clamp(38px, 4.5vw, 66px);
          line-height: 1.08;
          letter-spacing: -0.06em;
        }

        .faq-list {
          min-width: 0;
        }

        .faq-item {
          border-top: 1px solid #e9e6ec;
        }

        .faq-item:last-child {
          border-bottom: 1px solid #e9e6ec;
        }

        .faq-item button {
          display: flex;
          width: 100%;
          justify-content: space-between;
          align-items: center;
          gap: 20px;
          padding: 24px 0;
          border: 0;
          background: none;
          color: #1a1a1a;
          text-align: left;
          font: inherit;
          font-size: 15px;
          cursor: pointer;
          transition: opacity 0.25s ease;
        }

        .faq-item:hover button {
          opacity: 0.9;
        }

        .faq-item button svg {
          flex: 0 0 auto;
          color: #9b7ebd;
          transition: transform 0.3s ease;
        }

        .faq-item.active button svg {
          transform: rotate(45deg);
        }

        .faq-answer {
          max-height: 0;
          overflow: hidden;
          opacity: 0;
          transition: max-height 0.45s ease, opacity 0.3s ease, padding-bottom 0.3s ease;
        }

        .faq-item.active .faq-answer {
          max-height: 180px;
          opacity: 1;
          padding-bottom: 22px;
        }

        .faq-item p {
          max-width: 560px;
          padding: 0 30px 0 0;
          color: #777;
          font-size: 13px;
          line-height: 1.75;
        }

        @media (max-width: 800px) {
          .section-label,
          .faq-grid,
          .faq-list {
            width: min(100%, 1120px);
            max-width: 100%;
            margin-inline: auto;
            box-sizing: border-box;
          }

          .section-label,
          .faq-grid {
            padding-inline: 18px;
          }

          .faq-grid {
            grid-template-columns: minmax(0, 1fr);
            gap: 34px;
            margin: 36px auto 0;
          }

          h2 {
            max-width: 100%;
            overflow-wrap: anywhere;
          }

          .faq-item,
          .faq-item button {
            min-width: 0;
          }

          .faq-item button {
            padding: 18px 0;
          }

          .faq-item button span {
            min-width: 0;
            overflow-wrap: anywhere;
          }

          .faq-item p {
            max-width: 100%;
            padding: 0 0 22px;
            overflow-wrap: anywhere;
          }
        }
      `}</style>
    </section>
  )
}
