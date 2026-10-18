import { getBaseURL } from "@lib/util/env"
import { Metadata } from "next"
import "styles/globals.css"

export const metadata: Metadata = {
  metadataBase: new URL(getBaseURL()),
  title: {
    default: "Savia Organics — Conecta tu piel con la naturaleza",
    template: "%s | Savia Organics",
  },
  description:
    "Cosméticos 100% orgánicos elaborados con ingredientes naturales. Jabones artesanales, bálsamos labiales, aceites de cutícula y más.",
  openGraph: {
    siteName: "Savia Organics",
    locale: "es_ES",
    type: "website",
  },
}

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="es" data-mode="light">
      <body>
        <main className="relative">{props.children}</main>
      </body>
    </html>
  )
}
