'use client'

export default function About() {
  return (
    <section
      className="about section-shell motion-section"
      id="about"
    >
      <div className="section-label">
        01 / About me
      </div>

      <div className="about-grid">
        <h2>
          Design is how I make sense of the world — and help others do the same.
        </h2>

        <div className="about-copy">
          <p>
            I&apos;m a product designer who loves the space between a messy
            problem and a clear solution. My work sits at the intersection of
            strategy, interaction, and visual craft.
          </p>

          <p>
            I care about the details that make a product feel intuitive: the
            right words, the useful motion, the moment a user thinks, “oh, I
            get it.”
          </p>

          <div className="skill-list">
            <span>Product strategy</span>
            <span>Interaction design</span>
            <span>Visual systems</span>
            <span>Prototyping</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        .section-shell {
          max-width: 1280px;
          margin: 0 auto;
          padding: 44px 5vw 0;
        }

        .section-label {
          color: #9b7ebd;
          font-size: 11px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          width: min(100%, 1120px);
          margin: 0 auto 0;
        }

        .about-grid {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: clamp(32px, 7vw, 96px);
          margin-top: 50px;
          align-items: start;
        }

        h2 {
          font-size: clamp(38px, 4.5vw, 66px);
          line-height: 1.08;
          letter-spacing: -0.06em;
        }

        .about-copy {
          max-width: 500px;
          margin-left: auto;
          color: #6b6b6b;
          font-size: 15px;
        }

        .about-copy p + p {
          margin-top: 20px;
        }

        .skill-list {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: 30px;
          padding-top: 18px;
          border-top: 1px solid rgba(155, 126, 189, 0.12);
        }

        .skill-list span {
          padding: 8px 12px;
          border: 1px solid rgba(155, 126, 189, 0.12);
          border-radius: 999px;
          color: #555;
          font-size: 11px;
          background: rgba(255, 255, 255, 0.3);
        }

        @media (max-width: 700px) {
          .section-shell {
            padding: 82px 5vw 0;
          }

          .about-grid {
            grid-template-columns: 1fr;
            gap: 28px;
            margin-top: 30px;
          }
        }
      `}</style>
    </section>
  )
}