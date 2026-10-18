import { Text } from "@modules/common/components/ui"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

export default async function Footer() {
  return (
    <footer style={{ background: "var(--color-deep, #0a110f)", color: "rgba(255,255,255,0.7)" }}>
      <div style={{ borderBottom: "1px solid rgba(255,255,255,0.08)", padding: "40px 0" }}>
        <div className="content-container">
          <div className="flex flex-col small:flex-row items-center justify-between gap-6">
            <div>
              <h3 style={{ fontFamily: "var(--font-display)", fontStyle: "italic", fontWeight: 400, fontSize: "22px", color: "rgba(255,255,255,0.9)", marginBottom: "4px" }}>Únete a la comunidad Savia</h3>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "13px", color: "rgba(255,255,255,0.5)" }}>Recibe consejos de cuidado natural y acceso prioritario a nuevos productos.</p>
            </div>
            <form className="flex gap-2 w-full small:w-auto">
              <input type="email" placeholder="tu@email.com" style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.15)", borderRadius: "4px", padding: "10px 16px", fontFamily: "var(--font-body)", fontSize: "13px", color: "rgba(255,255,255,0.9)", outline: "none", flex: 1, minWidth: "220px" }} />
              <button type="submit" style={{ fontFamily: "var(--font-label)", fontWeight: 700, fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--color-deep, #0a110f)", background: "rgba(255,255,255,0.9)", border: "none", borderRadius: "4px", padding: "10px 20px", cursor: "pointer", whiteSpace: "nowrap" }}>Suscribirme</button>
            </form>
          </div>
        </div>
      </div>
      <div className="content-container py-16">
        <div className="grid grid-cols-1 small:grid-cols-4 gap-10 small:gap-8">
          <div className="small:col-span-1">
            <div className="flex flex-col mb-4">
              <span style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "20px", letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(255,255,255,0.9)", lineHeight: 1 }}>SAVIA</span>
              <span style={{ fontFamily: "var(--font-label)", fontWeight: 700, fontSize: "8px", letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)", lineHeight: 1, marginTop: "3px" }}>· ORGANICS ·</span>
            </div>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "13px", color: "rgba(255,255,255,0.45)", lineHeight: 1.7, marginBottom: "20px", fontStyle: "italic", maxWidth: "200px" }}>Conecta tu piel con la naturaleza.</p>
            <div className="flex gap-4">
              <a href="https://instagram.com/saviaorganic" target="_blank" rel="noopener noreferrer" className="footer-social-link">Instagram</a>
              <a href="https://tiktok.com/@saviaorganic" target="_blank" rel="noopener noreferrer" className="footer-social-link">TikTok</a>
            </div>
          </div>
          <div>
            <h4 style={{ fontFamily: "var(--font-label)", fontWeight: 700, fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.15em", color: "rgba(255,255,255,0.35)", marginBottom: "16px" }}>Productos</h4>
            <ul className="flex flex-col gap-3">
              {[
                { label: "Jabones artesanales", href: "/collections/jabones" },
                { label: "Bálsamos labiales", href: "/collections/balsamos" },
                { label: "Aceites de cutícula", href: "/collections/aceites" },
                { label: "Ver todo", href: "/store" },
              ].map(l => (
                <li key={l.label}>
                  <LocalizedClientLink href={l.href} style={{ fontFamily: "var(--font-body)", fontSize: "13px", color: "rgba(255,255,255,0.55)", textDecoration: "none" }} className="hover:text-white">{l.label}</LocalizedClientLink>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 style={{ fontFamily: "var(--font-label)", fontWeight: 700, fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.15em", color: "rgba(255,255,255,0.35)", marginBottom: "16px" }}>Información</h4>
            <ul className="flex flex-col gap-3">
              {[
                { label: "Sobre nosotras", href: "/about" },
                { label: "Ingredientes", href: "/store" },
                { label: "Política de envíos", href: "/shipping" },
                { label: "Devoluciones", href: "/returns" },
                { label: "Aviso legal", href: "/legal" },
                { label: "Política de privacidad", href: "/privacy" },
              ].map(l => (
                <li key={l.label}>
                  <LocalizedClientLink href={l.href} style={{ fontFamily: "var(--font-body)", fontSize: "13px", color: "rgba(255,255,255,0.55)", textDecoration: "none" }} className="hover:text-white">{l.label}</LocalizedClientLink>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 style={{ fontFamily: "var(--font-label)", fontWeight: 700, fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.15em", color: "rgba(255,255,255,0.35)", marginBottom: "16px" }}>Contacto</h4>
            <ul className="flex flex-col gap-3">
              <li><a href="mailto:hola@saviaorganic.com" style={{ fontFamily: "var(--font-body)", fontSize: "13px", color: "rgba(255,255,255,0.55)", textDecoration: "none" }} className="hover:text-white">hola@saviaorganic.com</a></li>
              <li><a href="https://instagram.com/saviaorganic" target="_blank" rel="noopener noreferrer" style={{ fontFamily: "var(--font-body)", fontSize: "13px", color: "rgba(255,255,255,0.55)", textDecoration: "none" }} className="hover:text-white">Instagram</a></li>
            </ul>
            <div style={{ marginTop: "28px", padding: "16px", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "4px", background: "rgba(255,255,255,0.03)" }}>
              <p style={{ fontFamily: "var(--font-label)", fontWeight: 700, fontSize: "9px", textTransform: "uppercase", letterSpacing: "0.12em", color: "rgba(255,255,255,0.3)", marginBottom: "6px" }}>Envío gratuito</p>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "13px", color: "rgba(255,255,255,0.6)" }}>En pedidos superiores a 30€ a toda España</p>
            </div>
          </div>
        </div>
      </div>
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", padding: "20px 0" }}>
        <div className="content-container flex flex-col small:flex-row items-center justify-between gap-3">
          <Text style={{ fontFamily: "var(--font-body)", fontSize: "12px", color: "rgba(255,255,255,0.25)" }}>
            © 2026 Savia Organics. Todos los derechos reservados.
          </Text>
          <Text style={{ fontFamily: "var(--font-label)", fontWeight: 700, fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.1em", color: "rgba(255,255,255,0.2)" }}>
            100% Orgánico · Hecho con amor
          </Text>
        </div>
      </div>
    </footer>
  )
}
