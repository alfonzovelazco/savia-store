import { Metadata } from "next"

import FeaturedProducts from "@modules/home/components/featured-products"
import Hero from "@modules/home/components/hero"
import { listCollections } from "@lib/data/collections"
import { getRegion } from "@lib/data/regions"

export const metadata: Metadata = {
  title: "Savia Organics — Cosméticos 100% orgánicos",
  description:
    "Jabones artesanales, bálsamos labiales, aceites de cutícula y más. Elaborados con ingredientes 100% naturales y orgánicos.",
}

export default async function Home(props: {
  params: Promise<{ countryCode: string }>
}) {
  const params = await props.params
  const { countryCode } = params

  const region = await getRegion(countryCode)
  const { collections } = await listCollections({ fields: "id, handle, title" })

  if (!collections || !region) return null

  return (
    <>
      <Hero />

      {/* ── Brand pillars ── */}
      <section
        className="w-full py-16"
        style={{ backgroundColor: "var(--color-ivory)" }}
      >
        <div className="content-container">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              {
                icon: "🌿",
                title: "100% Orgánico",
                body: "Ingredientes certificados sin pesticidas, sin parabenos ni sulfatos.",
              },
              {
                icon: "🧪",
                title: "Sin química",
                body: "Fórmulas limpias que respetan la barrera natural de tu piel.",
              },
              {
                icon: "✦",
                title: "Hecho a mano",
                body: "Elaborado en pequeños lotes para garantizar la máxima calidad.",
              },
            ].map(({ icon, title, body }) => (
              <div key={title} className="flex flex-col gap-3">
                <span style={{ fontSize: "24px" }}>{icon}</span>
                <h3
                  style={{
                    fontFamily: "var(--font-label)",
                    fontWeight: 700,
                    fontSize: "13px",
                    textTransform: "uppercase",
                    letterSpacing: "0.057em",
                    color: "var(--color-forest)",
                  }}
                >
                  {title}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "14px",
                    lineHeight: 1.7,
                    color: "var(--color-stone)",
                  }}
                >
                  {body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Category spotlight ── */}
      <section
        className="w-full py-20"
        style={{ borderTop: "1px solid var(--color-hairline)", backgroundColor: "var(--color-ivory)" }}
      >
        <div className="content-container">
          {/* Section heading */}
          <h2
            className="mb-12"
            style={{
              fontFamily: "var(--font-display)",
              fontStyle: "italic",
              fontWeight: 400,
              fontSize: "clamp(32px, 4vw, 52px)",
              letterSpacing: "-0.02em",
              lineHeight: 1.15,
              color: "var(--color-charcoal)",
            }}
          >
            Cuida tu piel, cada día —
          </h2>

          <div className="grid grid-cols-2 small:grid-cols-4 gap-4">
            {[
              { label: "Jabones",     desc: "Arroz · Cúrcuma · Aloe · Avena", href: "/categories/jabones",  bg: "#d6e4d7" },
              { label: "Bálsamos",   desc: "Para unos labios perfectos",        href: "/categories/balsamos", bg: "#e8dfd6" },
              { label: "Aceites",    desc: "Cutícula · Árbol de té · Ricino",   href: "/categories/aceites",  bg: "#dde6de" },
              { label: "Novedades",  desc: "Lo último de Savia",                href: "/store",               bg: "#f0ebe3" },
            ].map(({ label, desc, href, bg }) => (
              <a
                key={label}
                href={href}
                className="group flex flex-col justify-end min-h-[180px] small:min-h-[240px] p-6 relative overflow-hidden"
                style={{ backgroundColor: bg, borderRadius: "8px" }}
              >
                <div className="relative z-10">
                  <p
                    style={{
                      fontFamily: "var(--font-label)",
                      fontWeight: 700,
                      fontSize: "16px",
                      textTransform: "uppercase",
                      letterSpacing: "0.057em",
                      color: "var(--color-charcoal)",
                    }}
                  >
                    {label}
                  </p>
                  <p
                    className="mt-1"
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "12px",
                      color: "var(--color-stone)",
                    }}
                  >
                    {desc}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Featured products ── */}
      <section
        className="w-full py-20"
        style={{ borderTop: "1px solid var(--color-hairline)", backgroundColor: "var(--color-ivory)" }}
      >
        <div className="content-container">
          <h2
            className="mb-12"
            style={{
              fontFamily: "var(--font-display)",
              fontStyle: "italic",
              fontWeight: 400,
              fontSize: "clamp(28px, 4vw, 48px)",
              letterSpacing: "-0.02em",
              lineHeight: 1.15,
              color: "var(--color-charcoal)",
            }}
          >
            Más queridos —
          </h2>

          <ul className="flex flex-col gap-x-6">
            <FeaturedProducts collections={collections} region={region} />
          </ul>
        </div>
      </section>

      {/* ── Manifesto dark band ── */}
      <section
        className="w-full py-24"
        style={{ backgroundColor: "var(--color-deep)" }}
      >
        <div className="content-container max-w-2xl">
          <p
            className="italic mb-8"
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 400,
              fontSize: "clamp(28px, 4vw, 44px)",
              lineHeight: 1.25,
              letterSpacing: "-0.02em",
              color: "#fff",
            }}
          >
            "Creemos que la naturaleza tiene todo lo que tu piel necesita. Solo hay que saber escucharla."
          </p>
          <a
            href="/sobre-nosotras"
            className="btn-savia-ghost"
            style={{ display: "inline-flex" }}
          >
            Nuestra historia
          </a>
        </div>
      </section>
    </>
  )
}
