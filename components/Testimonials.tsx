'use client'

const testimonials = [
  {
    quote:
      'Alex has a rare ability to zoom out to the big picture, then zoom right back in to make the smallest details sing.',
    name: 'Maya Chen',
    role: 'VP Product, Daylight',
    initials: 'MC',
  },
  {
    quote:
      'The work was thoughtful, strategic, and beautifully executed. Alex made a complex project feel surprisingly easy.',
    name: 'Jordan Lee',
    role: 'Founder, Mori',
    initials: 'JL',
  },
]

export default function Testimonials() {
  return (
    <section className="testimonials section-shell motion-section" id="testimonials">
      <div className="section-label">05 / Kind words</div>

      <div className="testimonial-grid">
        {testimonials.map((item) => (
          <figure className="testimonial" key={item.name}>
            <div className="quote-mark">“</div>

            <blockquote>{item.quote}</blockquote>

            <figcaption>
              <div className="avatar">{item.initials}</div>
              <div>
                <strong>{item.name}</strong>
                <span>{item.role}</span>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>

      <style jsx>{`
        .section-label {
          width: min(100%, 1120px);
          margin: 18px auto 0;
          color: #9b7ebd;
        }

        .testimonial-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 22px;
          width: min(100%, 1120px);
          margin: 45px auto 0;
        }

        .testimonial {
          display: flex;
          flex-direction: column;
          min-width: 0;
          min-height: 260px;
          padding: clamp(28px, 4vw, 40px);
          border-radius: 22px;
          background: #f3eef9;
          transition: transform 0.35s ease, box-shadow 0.35s ease;
        }

        .testimonial:nth-child(2) {
          background: #fff4ee;
        }

        .testimonial:hover {
          transform: translateY(-4px);
        }

        .quote-mark {
          color: #9b7ebd;
          font: 60px / 0.7 Georgia, serif;
        }

        blockquote {
          max-width: 470px;
          margin: 23px 0 35px;
          font-size: clamp(24px, 2.5vw, 34px);
          line-height: 1.28;
          letter-spacing: -0.035em;
        }

        figcaption {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-top: auto;
        }

        .avatar {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 33px;
          height: 33px;
          border-radius: 50%;
          color: #6d5287;
          background: #dfd0ed;
          font-size: 10px;
          font-weight: 700;
        }

        figcaption strong,
        figcaption span {
          display: block;
        }

        figcaption strong {
          font-size: 12px;
        }

        figcaption span {
          margin-top: 3px;
          color: #777;
          font-size: 11px;
        }

        @media (max-width: 650px) {
          .section-label,
          .testimonial-grid {
            width: min(100%, 1120px);
            max-width: 100%;
            margin-inline: auto;
            box-sizing: border-box;
          }

          .section-label,
          .testimonial-grid {
            padding-inline: 18px;
          }

          .testimonial-grid {
            grid-template-columns: minmax(0, 1fr);
            gap: 18px;
            margin-top: 36px;
          }

          .testimonial {
            width: 100%;
            padding: 26px 22px;
            border-radius: 18px;
          }

          blockquote {
            max-width: 100%;
            overflow-wrap: anywhere;
          }
        }
      `}</style>
    </section>
  )
}
