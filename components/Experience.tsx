'use client'

const roles = [
  {
    year: '2023 — now',
    role: 'Independent product designer',
    place: 'Working with curious people on meaningful digital products.',
  },
  {
    year: '2020 — 2023',
    role: 'Senior product designer · Daylight',
    place: 'Led product design across a suite of tools for growing teams.',
  },
  {
    year: '2017 — 2020',
    role: 'Product designer · Studio North',
    place: 'Designed mobile and web experiences for culture, commerce, and care.',
  },
  {
    year: '2014 — 2017',
    role: 'Designer · Freelance',
    place: 'Learning by making: identities, websites, and the occasional poster.',
  },
]

export default function Experience() {
  return (
    <section
      className="experience section-shell motion-section"
      id="experience"
    >
      <div className="section-label">
        04 / Experience
      </div>

      <div className="experience-grid experience-reveal">
        <h2>
          A path shaped by curiosity.
        </h2>

        <div className="timeline">
          {roles.map((item) => (
            <div
              className="timeline-item"
              key={item.year}
              style={{
                animationDelay: `${roles.indexOf(item) * 90}ms`,
              }}
            >
              <div className="timeline-year">
                {item.year}
              </div>

              <div>
                <h3>
                  {item.role}
                </h3>

                <p>
                  {item.place}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .section-label {
          width: min(100%, 1120px);
          margin: 18px auto 0;
          color: #9b7ebd;
        }

        .experience {
          background: #f8f6fb;
          max-width: none;
          padding-left: calc((100% - 1180px) / 2);
          padding-right: calc((100% - 1180px) / 2);
        }

        .experience-grid {
          display: grid;
          grid-template-columns: 0.7fr 1.3fr;
          gap: 8vw;
          margin-top: 50px;
        }

        h2 {
          font-size: clamp(38px, 4.5vw, 66px);
          line-height: 1.08;
          letter-spacing: -0.06em;
        }

        .timeline {
          position: relative;
          padding-left: 10px;
        }

        .timeline::before {
          content: '';
          position: absolute;
          left: 18px;
          top: 6px;
          bottom: 6px;
          width: 1px;
          background: rgba(155, 126, 189, 0.26);
        }

        .timeline-item {
          position: relative;
          display: grid;
          grid-template-columns: 150px minmax(0, 1fr);
          gap: 18px;
          align-items: start;
          padding: 0 0 30px;
          margin-bottom: 27px;
          border-bottom: 1px solid #e8e1ef;
        }

        .timeline-item::before {
          content: '';
          position: absolute;
          left: 12px;
          top: 7px;
          width: 12px;
          height: 12px;
          border: 1px solid rgba(155, 126, 189, 0.55);
          border-radius: 50%;
          background: #fff;
          box-shadow: 0 0 0 3px rgba(155, 126, 189, 0.06);
        }

        .timeline-item > div:last-child {
          min-width: 0;
        }

        .timeline-year {
          position: relative;
          padding-left: 32px;
          color: #9b7ebd;
          font-size: 11px;
          letter-spacing: 0.05em;
          line-height: 1.7;
        }

        h3 {
          font-size: 16px;
          line-height: 1.3;
          font-weight: 600;
        }

        .timeline-item p {
          margin-top: 8px;
          color: #777;
          font-size: 13px;
          line-height: 1.7;
        }

        @media (max-width: 800px) {
          .experience {
            padding-left: 5vw;
            padding-right: 5vw;
          }

          .experience-grid {
            grid-template-columns: 1fr;
            gap: 45px;
          }

          .timeline {
            padding-left: 0;
          }

          .timeline::before {
            left: 12px;
          }

          .timeline-item {
            grid-template-columns: 110px minmax(0, 1fr);
            gap: 18px;
          }

          .timeline-item::before {
            left: 8px;
          }

          .timeline-year {
            padding-left: 24px;
          }
        }

        @media (max-width: 500px) {
          .timeline {
            padding-left: 2px;
          }

          .timeline-item {
            grid-template-columns: 1fr;
            gap: 10px;
            padding-left: 28px;
          }

          .timeline-item::before {
            left: 6px;
          }

          .timeline-year {
            padding-left: 0;
            margin-top: 2px;
          }

          h3,
          .timeline-item p {
            overflow-wrap: anywhere;
          }
        }
      `}</style>
    </section>
  )
}