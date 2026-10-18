import LocalizedClientLink from "@modules/common/components/localized-client-link"

const Hero = () => {
  return (
    <section className="w-full">
      {/* ── Announcement bar ── */}
      <div
        className="w-full text-center py-2 text-white text-xs"
        style={{
          backgroundColor: "var(--color-carbon-ink)",
          fontFamily: "var(--font-label)",
          fontWeight: 700,
          textTransform: "uppercase",
          letterSpacing: "0.057em",
        }}
      >
        Envío gratuito en pedidos superiores a 30€ · 100% orgánico · Sin parabenos
      </div>

      {/* ── Hero full-bleed ── */}
      <div className="relative w-full overflow-hidden" style={{ minHeight: "92vh" }}>

        {/* Background image */}
        <div
          className="hero-bg absolute inset-0 w-full h-full"
          style={{
            backgroundImage: "url('/images/hero-soap.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center 30%",
          }}
        />

        {/* Gradient overlay — left side darker for text legibility */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(105deg, rgba(10,17,15,0.88) 0%, rgba(10,17,15,0.65) 45%, rgba(10,17,15,0.15) 100%)",
          }}
        />

        {/* Content */}
        <div
          className="relative z-10 flex flex-col justify-center h-full px-8 small:px-20"
          style={{ minHeight: "92vh", maxWidth: "680px" }}
        >
          {/* Eyebrow */}
          <span
            className="hero-eyebrow block mb-5"
            style={{
              color: "var(--color-mist)",
              fontFamily: "var(--font-label)",
              fontWeight: 700,
              fontSize: "11px",
              textTransform: "uppercase",
              letterSpacing: "0.13em",
            }}
          >
            Cosméticos naturales · Desde el campo
          </span>

          {/* Display headline — char-by-char drop animation via CSS */}
          <h1
            className="hero-heading text-white mb-6"
            style={{
              fontFamily: "var(--font-display)",
              fontStyle: "italic",
              fontWeight: 400,
              fontSize: "clamp(48px, 6.5vw, 88px)",
              lineHeight: 1.0,
              letterSpacing: "-0.025em",
            }}
          >
            La naturaleza
            <br />
            en tu piel,
            <br />
            cada día.
          </h1>

          {/* Description */}
          <p
            className="hero-desc mb-8 max-w-sm"
            style={{
              color: "rgba(255,255,255,0.72)",
              fontFamily: "var(--font-body)",
              fontSize: "15px",
              lineHeight: 1.65,
            }}
          >
            Jabones artesanales, bálsamos y aceites elaborados
            con ingredientes 100% orgánicos. Sin químicos,
            sin compromisos.
          </p>

          {/* CTAs */}
          <div className="hero-ctas flex flex-wrap gap-3">
            <LocalizedClientLink
              href="/store"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                fontFamily: "var(--font-label)",
                fontWeight: 700,
                fontSize: "13px",
                textTransform: "uppercase",
                letterSpacing: "0.057em",
                color: "var(--color-paper-white)",
                borderBottom: "1px solid rgba(255,255,255,0.5)",
                paddingBottom: "4px",
                transition: "border-color 0.2s, opacity 0.2s",
              }}
              className="hero-link"
            >
              Ver productos
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ transform: "rotate(-45deg)" }}>
                <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </LocalizedClientLink>

            <LocalizedClientLink href="/store" className="btn-savia-ghost">
              Tienda
            </LocalizedClientLink>
          </div>

          {/* Trust badge bottom-left */}
          <p
            className="hero-trust absolute bottom-8 left-8 small:left-20"
            style={{
              fontFamily: "var(--font-label)",
              fontWeight: 700,
              fontSize: "10px",
              textTransform: "uppercase",
              letterSpacing: "0.091em",
              color: "rgba(255,255,255,0.35)",
            }}
          >
            100% Orgánico · Hecho con amor · Sin parabenos
          </p>
        </div>

        {/* Floating product card — bottom right */}
        <div
          className="hero-card absolute bottom-10 right-8 small:right-16 z-20 hidden small:flex flex-col"
          style={{
            width: "200px",
            background: "rgba(10,17,15,0.55)",
            border: "1px solid rgba(255,255,255,0.18)",
            borderRadius: "var(--radius-md)",
            backdropFilter: "blur(12px)",
            padding: "10px",
            animation: "heroFloat 4s ease-in-out infinite",
          }}
        >
          <img
            src="/images/hero-soap.jpg"
            alt="Jabón artesanal Savia"
            style={{
              width: "100%",
              height: "100px",
              objectFit: "cover",
              borderRadius: "2px",
            }}
          />
          <div className="flex items-center justify-between mt-2 px-1">
            <span
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "12px",
                color: "rgba(255,255,255,0.85)",
              }}
            >
              Jabón de Cúrcuma
            </span>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ transform: "rotate(-45deg)", color: "rgba(255,255,255,0.6)" }}>
              <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      </div>

      <style>{`
        /* Background zoom-in on load */
        .hero-bg {
          animation: heroBgReveal 1.6s cubic-bezier(0.16,1,0.3,1) both;
        }
        @keyframes heroBgReveal {
          from { opacity: 0; transform: scale(1.1); filter: blur(24px); }
          to   { opacity: 1; transform: scale(1);   filter: blur(0px);  }
        }

        /* Eyebrow fade-up */
        .hero-eyebrow {
          animation: heroFadeUp 0.7s 0.2s cubic-bezier(0.16,1,0.3,1) both;
        }
        /* Heading */
        .hero-heading {
          animation: heroFadeUp 0.8s 0.35s cubic-bezier(0.16,1,0.3,1) both;
        }
        /* Description */
        .hero-desc {
          animation: heroFadeUp 0.8s 0.5s cubic-bezier(0.16,1,0.3,1) both;
        }
        /* CTAs */
        .hero-ctas {
          animation: heroFadeUp 0.7s 0.65s cubic-bezier(0.16,1,0.3,1) both;
        }
        /* Trust */
        .hero-trust {
          animation: heroFadeUp 0.6s 0.8s cubic-bezier(0.16,1,0.3,1) both;
        }
        /* Floating card */
        .hero-card {
          animation: heroCardIn 1.1s 0.5s cubic-bezier(0.16,1,0.3,1) both,
                     heroFloat 4s 1.6s ease-in-out infinite;
        }
        @keyframes heroFadeUp {
          from { opacity: 0; transform: translateY(22px); filter: blur(10px); }
          to   { opacity: 1; transform: translateY(0);    filter: blur(0px);  }
        }
        @keyframes heroCardIn {
          from { opacity: 0; transform: translateX(-40px) rotate(-6deg); filter: blur(14px); }
          to   { opacity: 1; transform: translateX(0)     rotate(0deg);  filter: blur(0px);  }
        }
        @keyframes heroFloat {
          0%, 100% { transform: translateY(0); }
          50%       { transform: translateY(-10px); }
        }

        /* CTA underline hover */
        .hero-link:hover {
          border-color: rgba(255,255,255,0.9) !important;
          opacity: 0.85;
        }
      `}</style>
    </section>
  )
}

export default Hero
