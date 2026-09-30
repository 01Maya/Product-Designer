'use client'

import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'

const projects = [
  {
    title: 'Forma',
    category: 'Product strategy · SaaS',
    description: 'A calmer way for modern teams to understand their work and make better decisions.',
    image: '/images/project-1.png',
    className: 'large',
  },
  {
    title: 'Mori',
    category: 'Mobile experience · Fintech',
    description: 'Making money feel a little less intimidating.',
    image: '/images/project-2.png',
    className: 'small',
  },
  {
    title: 'Northstar',
    category: 'Design system · Health',
    description: 'A new visual language for a more human healthcare platform.',
    image: '/images/project-3.png',
    className: 'small',
  },
]

export default function FeaturedWork() {
  return (
    <section className="work section-shell motion-section" id="work">
      <div className="section-label">03 / Selected work</div>

      <div className="work-head">
        <h2>A few things I&apos;ve helped bring to life.</h2>
        <a href="#contact">
          See all projects <ArrowUpRight size={15} aria-hidden="true" />
        </a>
      </div>

      <div className="project-grid">
        {projects.map((project) => (
          <a className={`project-card ${project.className}`} href="#contact" key={project.title}>
            <div className="project-image">
              <Image
                src={project.image}
                alt={`${project.title} project preview`}
                fill
                sizes="(max-width: 700px) 100vw, 50vw"
                style={{ objectPosition: 'center' }}
              />
            </div>

            <div className="project-info">
              <div>
                <div className="project-category">{project.category}</div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
              <span className="project-arrow">
                <ArrowUpRight size={17} aria-hidden="true" />
              </span>
            </div>
          </a>
        ))}
      </div>

      <style jsx>{`
        .section-label {
          width: min(100%, 1120px);
          margin: 18px auto 0;
          color: #9b7ebd;
        }

        .work-head {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 32px;
          max-width: 1120px;
          margin: 48px auto 44px;
        }

        .work-head h2 {
          min-width: 0;
          max-width: 620px;
          font-size: clamp(38px, 4.5vw, 66px);
          line-height: 1.08;
          letter-spacing: -0.06em;
        }

        .work-head a {
          display: flex;
          flex: 0 0 auto;
          gap: 6px;
          align-items: center;
          color: #1a1a1a;
          font-size: 13px;
          text-decoration: none;
        }

        .project-grid {
          display: grid;
          grid-template-columns: minmax(0, 1.35fr) minmax(0, 0.65fr);
          grid-template-areas:
            'featured secondary'
            'featured secondary-two';
          gap: 22px;
          width: min(100%, 1120px);
          margin: 0 auto;
          align-items: start;
        }

        .project-card.large { grid-area: featured; }
        .project-card.small:nth-child(2) { grid-area: secondary; }
        .project-card.small:nth-child(3) { grid-area: secondary-two; }

        .project-card {
          min-width: 0;
          color: #1a1a1a;
          text-decoration: none;
          border: 1px solid rgba(155, 126, 189, 0.08);
          border-radius: 18px;
          padding: 0;
          background: rgba(255, 255, 255, 0.2);
          transition: transform 0.35s cubic-bezier(.22, 1, .36, 1), border-color 0.35s ease;
          overflow: hidden;
        }

        .project-card.large {
          transform: translateY(-2px);
        }

        .project-image {
          position: relative;
          min-height: 420px;
          overflow: hidden;
          border-radius: 18px 18px 0 0;
          background: #f0eaf7;
        }

        .project-card.small .project-image {
          min-height: 220px;
        }

        .project-card.wide {
          grid-column: 1 / -1;
        }

        .project-card.wide .project-image {
          min-height: 280px;
        }

        .project-card img {
          object-fit: cover;
          object-position: center center;
          transition: transform 0.6s cubic-bezier(0.2, 0.7, 0.2, 1);
        }

        .project-card:hover img {
          transform: scale(1.02);
        }

        .project-card:hover .project-arrow {
          transform: translate(3px, -3px);
        }

        .project-info {
          display: flex;
          justify-content: space-between;
          gap: 20px;
          padding: 18px 6px 4px;
        }

        .project-category {
          color: #9b7ebd;
          font-size: 10px;
          letter-spacing: 0.06em;
          text-transform: uppercase;
        }

        .project-info h3 {
          margin-top: 7px;
          font-size: 21px;
          line-height: 1.2;
        }

        .project-info p {
          margin-top: 7px;
          color: #777;
          font-size: 13px;
          line-height: 1.7;
        }

        .project-arrow {
          display: flex;
          flex: 0 0 auto;
          align-items: center;
          justify-content: center;
          width: 34px;
          height: 34px;
          border: 1px solid #e9e4ef;
          border-radius: 50%;
        }

        @media (max-width: 700px) {
          .section-label,
          .work-head,
          .project-grid {
            width: min(100%, 1120px);
            max-width: 100%;
            margin-inline: auto;
            box-sizing: border-box;
          }

          .section-label,
          .work-head,
          .project-grid {
            padding-inline: 18px;
          }

          .work-head {
            display: block;
            margin: 36px auto 0;
          }

          .work-head h2 {
            max-width: 100%;
            overflow-wrap: anywhere;
          }

          .work-head a {
            width: fit-content;
            margin-top: 22px;
          }

          .project-grid {
            grid-template-columns: minmax(0, 1fr);
            grid-template-areas:
              'featured'
              'secondary'
              'secondary-two';
            gap: 28px;
          }

          .project-card,
          .project-info {
            width: 100%;
            min-width: 0;
          }

          .project-card.wide {
            grid-column: auto;
          }

          .project-image,
          .project-card.small .project-image,
          .project-card.wide .project-image {
            width: 100%;
            min-height: 240px;
          }

          .project-info {
            gap: 14px;
            padding-top: 16px;
          }

          .project-info p {
            max-width: 30ch;
          }
        }
      `}</style>
    </section>
  )
}
