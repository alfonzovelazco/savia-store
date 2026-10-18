import { Suspense } from "react"
import { listRegions } from "@lib/data/regions"
import { StoreRegion } from "@medusajs/types"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import CartButton from "@modules/layout/components/cart-button"
import SideMenu from "@modules/layout/components/side-menu"

export default async function Nav() {
  const regions = await listRegions().then((regions: StoreRegion[]) => regions)

  return (
    <div
      className="sticky top-0 inset-x-0 z-50 group"
      style={{ height: "var(--nav-height, 64px)" }}
    >
      <header
        className="relative h-full"
        style={{
          background: "var(--color-ivory, #f8f6f1)",
          borderBottom: "1px solid rgba(10,17,15,0.08)",
        }}
      >
        <nav className="content-container flex items-center justify-between h-full">
          {/* LEFT — Mobile menu + desktop links */}
          <div className="flex items-center gap-8 h-full">
            <div className="small:hidden">
              <SideMenu regions={regions} />
            </div>
            <div className="hidden small:flex items-center gap-7 h-full">
              {[
                { label: "Tienda", href: "/store" },
                { label: "Jabones", href: "/collections/jabones" },
                { label: "Bálsamos", href: "/collections/balsamos" },
                { label: "Aceites", href: "/collections/aceites" },
              ].map((link) => (
                <LocalizedClientLink
                  key={link.href}
                  href={link.href}
                  style={{
                    fontFamily: "var(--font-label)",
                    fontWeight: 700,
                    fontSize: "11px",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    color: "var(--color-carbon-ink)",
                    textDecoration: "none",
                    opacity: 0.7,
                    transition: "opacity 0.15s",
                  }}
                  className="hover:opacity-100"
                >
                  {link.label}
                </LocalizedClientLink>
              ))}
            </div>
          </div>

          {/* CENTER — Logo */}
          <LocalizedClientLink
            href="/"
            style={{ textDecoration: "none", position: "absolute", left: "50%", transform: "translateX(-50%)" }}
          >
            <div className="flex flex-col items-center leading-none select-none">
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 600,
                  fontSize: "22px",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "var(--color-carbon-ink)",
                  lineHeight: 1,
                }}
              >
                SAVIA
              </span>
              <span
                style={{
                  fontFamily: "var(--font-label)",
                  fontWeight: 700,
                  fontSize: "8px",
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  color: "rgba(10,17,15,0.5)",
                  lineHeight: 1,
                  marginTop: "3px",
                }}
              >
                · ORGANICS ·
              </span>
            </div>
          </LocalizedClientLink>

          {/* RIGHT — Search, Account, Cart */}
          <div className="flex items-center gap-5">
            <LocalizedClientLink
              href="/account"
              style={{
                fontFamily: "var(--font-label)",
                fontWeight: 700,
                fontSize: "11px",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                color: "var(--color-carbon-ink)",
                textDecoration: "none",
                opacity: 0.7,
                transition: "opacity 0.15s",
              }}
              className="hidden small:block hover:opacity-100"
            >
              Mi cuenta
            </LocalizedClientLink>
            <Suspense
              fallback={
                <span
                  style={{
                    fontFamily: "var(--font-label)",
                    fontWeight: 700,
                    fontSize: "11px",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    color: "var(--color-carbon-ink)",
                    opacity: 0.7,
                  }}
                >
                  Cesta (0)
                </span>
              }
            >
              <CartButton />
            </Suspense>
          </div>
        </nav>
      </header>
    </div>
  )
}
