import { Suspense } from "react"

import { listLocales } from "@lib/data/locales"
import { getLocale } from "@lib/data/locale-actions"
import { listRegions } from "@lib/data/regions"
import { StoreRegion } from "@medusajs/types"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import CartButton from "@modules/layout/components/cart-button"
import Search from "@modules/layout/components/search"
import SideMenu from "@modules/layout/components/side-menu"

export default async function Nav() {
  const [regions, locales, currentLocale] = await Promise.all([
    listRegions().then((regions: StoreRegion[]) => regions),
    listLocales(),
    getLocale(),
  ])

  return (
    <div className="sticky top-0 inset-x-0 z-50 group">
      <header
        className="relative h-16 mx-auto"
        style={{
          backgroundColor: "var(--color-ivory)",
          borderBottom: "1px solid var(--color-hairline)",
        }}
      >
        <nav
          className="content-container flex items-center justify-between w-full h-full"
          style={{ fontFamily: "var(--font-label)" }}
        >
          {/* Left: hamburger menu (mobile) + nav links (desktop) */}
          <div className="flex-1 basis-0 h-full flex items-center gap-x-6">
            <div className="h-full small:hidden">
              <SideMenu regions={regions} locales={locales} currentLocale={currentLocale} />
            </div>
            <div className="hidden small:flex items-center gap-x-6 h-full">
              {[
                { href: "/store",              label: "Tienda"    },
                { href: "/categories/jabones", label: "Jabones"   },
                { href: "/categories/balsamos",label: "Bálsamos"  },
                { href: "/categories/aceites", label: "Aceites"   },
              ].map(({ href, label }) => (
                <LocalizedClientLink
                  key={href}
                  href={href}
                  className="transition-colors"
                  style={{
                    fontFamily: "var(--font-label)",
                    fontWeight: 700,
                    fontSize: "13px",
                    textTransform: "uppercase",
                    letterSpacing: "0.057em",
                    color: "var(--color-charcoal)",
                  }}
                >
                  {label}
                </LocalizedClientLink>
              ))}
            </div>
          </div>

          {/* Center: Savia Organics wordmark */}
          <div className="flex items-center h-full">
            <LocalizedClientLink
              href="/"
              className="flex flex-col items-center leading-none"
              data-testid="nav-store-link"
            >
              <span
                style={{
                  fontFamily: "var(--font-label)",
                  fontWeight: 700,
                  fontSize: "18px",
                  textTransform: "uppercase",
                  letterSpacing: "0.12em",
                  color: "var(--color-forest)",
                }}
              >
                Savia
              </span>
              <span
                style={{
                  fontFamily: "var(--font-label)",
                  fontWeight: 400,
                  fontSize: "9px",
                  textTransform: "uppercase",
                  letterSpacing: "0.22em",
                  color: "var(--color-bark)",
                  marginTop: "-1px",
                }}
              >
                · Organics ·
              </span>
            </LocalizedClientLink>
          </div>

          {/* Right: search, account, cart */}
          <div className="flex items-center gap-x-5 h-full flex-1 basis-0 justify-end">
            <Search />
            <div className="hidden small:flex items-center gap-x-5 h-full">
              <LocalizedClientLink
                href="/account"
                data-testid="nav-account-link"
                style={{
                  fontFamily: "var(--font-label)",
                  fontWeight: 700,
                  fontSize: "12px",
                  textTransform: "uppercase",
                  letterSpacing: "0.057em",
                  color: "var(--color-stone)",
                }}
              >
                Mi cuenta
              </LocalizedClientLink>
            </div>
            <Suspense
              fallback={
                <LocalizedClientLink
                  href="/cart"
                  data-testid="nav-cart-link"
                  style={{
                    fontFamily: "var(--font-label)",
                    fontWeight: 700,
                    fontSize: "12px",
                    textTransform: "uppercase",
                    letterSpacing: "0.057em",
                    color: "var(--color-charcoal)",
                  }}
                >
                  Cesta (0)
                </LocalizedClientLink>
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
