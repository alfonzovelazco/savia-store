import { listCategories } from "@lib/data/categories"
import { listCollections } from "@lib/data/collections"
import { Text } from "@modules/common/components/ui"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

export default async function Footer() {
  const { collections } = await listCollections({ fields: "*products" })
  const productCategories = await listCategories()

  return (
    <footer
      style={{
        backgroundColor: "var(--color-deep)",
        borderTop: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <div className="content-container py-20">
        <div className="flex flex-col gap-y-12 small:flex-row small:gap-x-16 small:justify-between">

          {/* Brand column */}
          <div className="max-w-xs">
            {/* Wordmark */}
            <div className="mb-4">
              <div
                style={{
                  fontFamily: "var(--font-label)",
                  fontWeight: 700,
                  fontSize: "20px",
                  textTransform: "uppercase",
                  letterSpacing: "0.12em",
                  color: "var(--color-mist)",
                }}
              >
                Savia
              </div>
              <div
                style={{
                  fontFamily: "var(--font-label)",
                  fontWeight: 400,
                  fontSize: "9px",
                  textTransform: "uppercase",
                  letterSpacing: "0.22em",
                  color: "var(--color-bark)",
                }}
              >
                · Organics ·
              </div>
            </div>

            {/* Tagline */}
            <p
              className="italic mb-6"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "16px",
                color: "rgba(255,255,255,0.5)",
                lineHeight: 1.5,
              }}
            >
              Conecta tu piel con la naturaleza.
            </p>

            {/* Social links */}
            <div className="flex gap-4">
              {[
                { label: "Instagram", href: "https://instagram.com/saviaorganics" },
                { label: "TikTok",    href: "https://tiktok.com/@saviaorganics"   },
              ].map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    fontFamily: "var(--font-label)",
                    fontWeight: 700,
                    fontSize: "11px",
                    textTransform: "uppercase",
                    letterSpacing: "0.057em",
                    color: "rgba(255,255,255,0.45)",
                    transition: "color 0.2s",
                  }}
                  className="footer-social-link"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* Links grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-10">

            {/* Productos */}
            <div>
              <span
                className="block mb-4"
                style={{
                  fontFamily: "var(--font-label)",
                  fontWeight: 700,
                  fontSize: "11px",
                  textTransform: "uppercase",
                  letterSpacing: "0.091em",
                  color: "var(--color-mist)",
                }}
              >
                Productos
              </span>
              <ul className="flex flex-col gap-y-2">
                {[
                  { label: "Jabones artesanales", href: "/categories/jabones"  },
                  { label: "Bálsamos labiales",   href: "/categories/balsamos" },
                  { label: "Aceites de cutícula", href: "/categories/aceites"  },
                  { label: "Ver todo",            href: "/store"               },
                ].map(({ label, href }) => (
                  <li key={href}>
                    <LocalizedClientLink
                      href={href}
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "14px",
                        color: "rgba(255,255,255,0.45)",
                        transition: "color 0.2s",
                      }}
                    >
                      {label}
                    </LocalizedClientLink>
                  </li>
                ))}
                {productCategories?.slice(0, 4).map((c) => {
                  if (c.parent_category) return null
                  return (
                    <li key={c.id}>
                      <LocalizedClientLink
                        href={`/categories/${c.handle}`}
                        style={{
                          fontFamily: "var(--font-body)",
                          fontSize: "14px",
                          color: "rgba(255,255,255,0.35)",
                        }}
                      >
                        {c.name}
                      </LocalizedClientLink>
                    </li>
                  )
                })}
              </ul>
            </div>

            {/* Información */}
            <div>
              <span
                className="block mb-4"
                style={{
                  fontFamily: "var(--font-label)",
                  fontWeight: 700,
                  fontSize: "11px",
                  textTransform: "uppercase",
                  letterSpacing: "0.091em",
                  color: "var(--color-mist)",
                }}
              >
                Información
              </span>
              <ul className="flex flex-col gap-y-2">
                {[
                  { label: "Sobre nosotras",        href: "/sobre-nosotras"  },
                  { label: "Ingredientes",           href: "/ingredientes"    },
                  { label: "Política de envíos",     href: "/envios"          },
                  { label: "Devoluciones",           href: "/devoluciones"    },
                  { label: "Aviso legal",            href: "/aviso-legal"     },
                  { label: "Política de privacidad", href: "/privacidad"      },
                ].map(({ label, href }) => (
                  <li key={href}>
                    <LocalizedClientLink
                      href={href}
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "14px",
                        color: "rgba(255,255,255,0.45)",
                      }}
                    >
                      {label}
                    </LocalizedClientLink>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contacto */}
            <div>
              <span
                className="block mb-4"
                style={{
                  fontFamily: "var(--font-label)",
                  fontWeight: 700,
                  fontSize: "11px",
                  textTransform: "uppercase",
                  letterSpacing: "0.091em",
                  color: "var(--color-mist)",
                }}
              >
                Contacto
              </span>
              <ul className="flex flex-col gap-y-2">
                {[
                  { label: "hola@saviaorganic.com", href: "mailto:hola@saviaorganic.com" },
                  { label: "Instagram",             href: "https://instagram.com/saviaorganics" },
                ].map(({ label, href }) => (
                  <li key={href}>
                    <a
                      href={href}
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "14px",
                        color: "rgba(255,255,255,0.45)",
                      }}
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col small:flex-row justify-between items-center gap-4 mt-16 pt-8"
          style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
        >
          <Text
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "12px",
              color: "rgba(255,255,255,0.3)",
            }}
          >
            © {new Date().getFullYear()} Savia Organics. Todos los derechos reservados.
          </Text>
          <div
            style={{
              fontFamily: "var(--font-label)",
              fontSize: "11px",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.057em",
              color: "rgba(255,255,255,0.2)",
            }}
          >
            100% Orgánico · Hecho con amor
          </div>
        </div>
      </div>
    </footer>
  )
}
