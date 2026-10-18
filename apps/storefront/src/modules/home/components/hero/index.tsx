import LocalizedClientLink from "@modules/common/components/localized-client-link"

const Hero = () => {
  return (
    <section className="w-full">
      {/* ── Announcement bar ── */}
      <div
        className="w-full text-center py-2 text-white text-xs"
        style={{
          backgroundColor: "var(--color-forest)",
          fontFamily: "var(--font-label)",
          fontWeight: 700,
          textTransform: "uppercase",
          letterSpacing: "0.057em",
        }}
      >
        Envío gratuito en pedidos superiores a 30€ · 100% orgánico · Sin parabenos
      </div>

      {/* ── Hero split panel ── */}
      <div className="flex flex-col small:flex-row w-full min-h-[70vh]">
        {/* Left — editorial text on deep green */}
        <div
          className="flex-1 flex flex-col justify-center px-10 small:px-20 py-20"
          style={{ backgroundColor: "var(--color-deep)" }}
        >
          {/* Eyebrow */}
          <span
            className="text-xs mb-4"
            style={{
              color: "var(--color-mist)",
              fontFamily: "var(--font-label)",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.091em",
            }}
          >
            Cosméticos naturales · Desde el campo
          </span>

          {/* Display headline */}
          <h1
            className="text-white mb-6"
            style={{
              fontFamily: "var(--font-display)",
              fontStyle: "italic",
              fontWeight: 400,
              fontSize: "clamp(42px, 5vw, 72px)",
              lineHeight: 1.1,
              letterSpacing: "-0.025em",
              maxWidth: "560px",
            }}
          >
            La naturaleza en tu piel, cada día.
          </h1>

          {/* Subtext */}
          <p
            className="mb-8 max-w-sm"
            style={{
              color: "rgba(255,255,255,0.75)",
              fontFamily: "var(--font-body)",
              fontSize: "16px",
              lineHeight: 1.6,
            }}
          >
            Jabones artesanales, bálsamos y aceites elaborados con ingredientes 100% orgánicos. Sin químicos, sin compromisos.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3">
            <LocalizedClientLink href="/store" className="btn-savia-ghost">
              Ver productos
            </LocalizedClientLink>
            <LocalizedClientLink href="/collections/jabones" className="btn-savia-primary">
              Jabones artesanales
            </LocalizedClientLink>
          </div>
        </div>

        {/* Right — full-bleed image placeholder (replace with real photo) */}
        <div
          className="flex-1 min-h-[50vh] small:min-h-0 relative overflow-hidden"
          style={{ backgroundColor: "var(--color-fog)" }}
        >
          {/* Decorative botanical overlay until real photo is added */}
          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{ backgroundColor: "var(--color-cream)" }}
          >
            {/* SVG botanical illustration */}
            <svg
              viewBox="0 0 400 400"
              className="w-3/4 max-w-xs opacity-30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="200" cy="200" r="160" stroke="#3d5a3e" strokeWidth="1.5" />
              <path
                d="M200 80 C180 120, 140 140, 120 180 C100 220, 120 260, 160 270 C180 275, 200 260, 200 260"
                stroke="#3d5a3e"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M200 80 C220 120, 260 140, 280 180 C300 220, 280 260, 240 270 C220 275, 200 260, 200 260"
                stroke="#3d5a3e"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M160 180 C170 160, 190 155, 200 170 C210 155, 230 160, 240 180"
                stroke="#3d5a3e"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M200 80 L200 40 M200 260 L200 320"
                stroke="#7a6652"
                strokeWidth="1"
                strokeLinecap="round"
              />
              <circle cx="200" cy="35" r="4" fill="#7a6652" opacity="0.6" />
              <circle cx="190" cy="30" r="3" fill="#7a6652" opacity="0.5" />
              <circle cx="210" cy="28" r="3" fill="#7a6652" opacity="0.5" />
            </svg>
            {/* Placeholder text */}
            <div
              className="absolute bottom-8 left-8"
              style={{
                fontFamily: "var(--font-label)",
                fontSize: "11px",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                color: "var(--color-stone)",
              }}
            >
              Foto del producto
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
