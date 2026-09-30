'use client'

import { ArrowUpRight } from 'lucide-react'

export default function Footer() {
  return (
    <footer
      className="footer motion-footer"
      id="contact"
    >
      <div className="footer-inner">
        <div className="footer-top footer-reveal">
          <div className="footer-label">
            Have a good idea?
          </div>

          <h2>
            Let&apos;s make it <em>real.</em>
          </h2>

          <a
            className="footer-button"
            href="mailto:hello@alexmorgan.design"
          >
            Start a conversation

            <ArrowUpRight size={17} />
          </a>
        </div>

        <div className="footer-bottom">
          <div>
            <strong>
              Alex Morgan<span>.</span>
            </strong>

            <p>
              Product designer · New York / Everywhere
            </p>
          </div>

          <div className="socials">
            <a href="mailto:hello@alexmorgan.design">
              Email
            </a>

            <a href="#top">
              LinkedIn
            </a>

            <a href="#top">
              Instagram
            </a>

            <a href="#top">
              Dribbble
            </a>
          </div>

          <span className="copyright">
            © 2024 Alex Morgan
          </span>
        </div>
      </div>

      <style jsx>{`
        .footer {
          padding: 0 5vw;
          color: #fff;
          background: #1a1a1a;
        }

        .footer-inner {
          max-width: 1280px;
          margin: 0 auto;
        }

        .footer-top {
          padding: 120px 0 140px;
        }

        .footer-label {
          color: #c9b8e4;
          font-size: 11px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        h2 {
          margin: 28px 0 38px;
          font-size: clamp(66px, 10.8vw, 150px);
          line-height: 0.9;
          letter-spacing: -0.08em;
        }

        h2 em {
          position: relative;
          color: #c9b8e4;
          font-family: Georgia, serif;
          font-weight: 400;
        }

        h2 em::after {
          content: '';
          position: absolute;
          left: 10%;
          right: 10%;
          bottom: 12%;
          height: 24%;
          background: rgba(201, 184, 228, 0.14);
          filter: blur(16px);
          z-index: -1;
        }

        .footer-button {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 15px 20px;
          border-radius: 999px;
          color: #1a1a1a;
          background: #fff;
          font-size: 13px;
          text-decoration: none;
          transition:
            transform 0.35s cubic-bezier(0.22, 1, 0.36, 1),
            box-shadow 0.35s ease;
        }

        .footer-button:hover {
          transform: translateY(-5px);
          box-shadow: 0 14px 30px rgba(0, 0, 0, 0.22);
        }

        .footer-button svg {
          transition:
            transform 0.35s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .footer-button:hover svg {
          transform: translate(3px, -3px);
        }

        .footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: end;
          gap: 20px;
          padding: 25px 0 30px;
          border-top: 1px solid #373337;
        }

        .footer-bottom strong {
          font-size: 16px;
        }

        .footer-bottom strong span {
          color: #c9b8e4;
        }

        .footer-bottom p,
        .copyright {
          margin-top: 8px;
          color: #999;
          font-size: 11px;
        }

        .socials {
          display: flex;
          gap: 22px;
        }

        .socials a {
          color: #ccc;
          font-size: 12px;
          text-decoration: none;
        }

        .socials a:hover {
          color: #fff;
        }

        @media (max-width: 650px) {
          .footer-top {
            padding: 90px 0 100px;
          }

          .footer-bottom {
            display: block;
          }

          .socials {
            margin-top: 25px;
            flex-wrap: wrap;
          }

          .copyright {
            display: block;
            margin-top: 25px;
          }
        }
      `}</style>
    </footer>
  )
}