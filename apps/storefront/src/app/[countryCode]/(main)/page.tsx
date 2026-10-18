import { Metadata } from "next"
import Hero from "@modules/home/components/hero"
import FeaturedProducts from "@modules/home/components/featured-products"
import { listCollections } from "@lib/data/collections"
import { getRegion } from "@lib/data/regions"

export const metadata: Metadata = {
  title: "Savia Organics — Jabones Artesanales Naturales | Cosmética Natural España",
  description: "Jabones artesanales ecológicos elaborados con ingredientes naturales. Para piel seca, manchas, piel sensible y mixta. Envío gratis +30€. Cosmética natural hecha con amor en España.",
}

export default async function Home({ params }: { params: { countryCode: string } }) {
  const { countryCode } = params
  const region = await getRegion(countryCode)

  let collections: any[] = []
  try {
    const result = await listCollections({ fields: "id, handle, title" })
    collections = result?.response?.collections ?? result?.collections ?? []
  } catch (e) {
    collections = []
  }

  return (
    <>
      <Hero />

      <section style={{ background: "var(--color-deep, #0a110f)", borderBottom: "1px solid rgba(255,255,255,0.06)", padding: "14px 0" }}>
        <div className="content-container">
          <div className="grid grid-cols-3 gap-4 text-center">
            {[
              { icon: "🌿", text: "100% Ingredientes Naturales" },
              { icon: "🚚", text: "Envío Gratis +30€" },
              { icon: "✦", text: "Elaborado Artesanalmente" },
            ].map(item => (
              <div key={item.text} className="flex items-center justify-center gap-2">
                <span style={{ fontSize: "14px" }}>{item.icon}</span>
                <span style={{ fontFamily: "var(--font-label)", fontWeight: 700, fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.12em", color: "rgba(255,255,255,0.55)" }}>{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: "var(--color-paper-white, #f7f5f0)", padding: "80px 0" }}>
        <div className="content-container">
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <span style={{ fontFamily: "var(--font-label)", fontWeight: 700, fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.2em", color: "var(--color-carbon-ink, #1a2e1a)", opacity: 0.5 }}>Encuentra tu jabón ideal</span>
            <h2 style={{ fontFamily: "var(--font-display)", fontStyle: "italic", fontWeight: 400, fontSize: "clamp(32px, 5vw, 48px)", color: "var(--color-deep, #0a110f)", marginTop: "8px", lineHeight: 1.15 }}>¿Qué necesita tu piel?</h2>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "15px", color: "var(--color-deep, #0a110f)", opacity: 0.55, maxWidth: "480px", margin: "12px auto 0" }}>Cada piel es única. Te ayudamos a encontrar el jabón artesanal perfecto para tu tipo de piel.</p>
          </div>
          <div className="grid grid-cols-1 small:grid-cols-2 large:grid-cols-4 gap-6">
            {[
              { tipo: "Piel Seca", problema: "¿Sientes tirantez o descamación?", solucion: "Jabón de Arroz", descripcion: "El almidón de arroz nutre en profundidad y restaura la barrera hidrolipídica de la piel más seca.", ingrediente: "Arroz · Manteca de karité", color: "#e8ddd0" },
              { tipo: "Manchas & Tono", problema: "¿Manchas o tono desigual?", solucion: "Jabón de Cúrcuma", descripcion: "La cúrcuma ilumina de forma natural y unifica el tono sin irritar. Visible desde la primera semana.", ingrediente: "Cúrcuma · Aceite de coco", color: "#f0e4c0" },
              { tipo: "Piel Sensible", problema: "¿Rojeces o irritación frecuente?", solucion: "Jabón de Aloe Vera", descripcion: "Ultra suave y calmante. El aloe vera reduce la inflamación y deja la piel en calma desde el primer uso.", ingrediente: "Aloe vera · Manzanilla", color: "#d8ebd8" },
              { tipo: "Piel Mixta", problema: "¿Zonas grasas y secas a la vez?", solucion: "Jabón de Avena y Miel", descripcion: "Equilibra sin resecar. La avena calma y la miel aporta hidratación donde más se necesita.", ingrediente: "Avena · Miel de abeja", color: "#e8e0cc" },
            ].map(card => (
              <div key={card.tipo} style={{ background: card.color, borderRadius: "8px", padding: "28px 24px", display: "flex", flexDirection: "column", gap: "12px" }}>
                <span style={{ fontFamily: "var(--font-label)", fontWeight: 700, fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.15em", color: "var(--color-deep, #0a110f)", opacity: 0.5 }}>{card.tipo}</span>
                <p style={{ fontFamily: "var(--font-display)", fontStyle: "italic", fontSize: "20px", color: "var(--color-deep, #0a110f)", lineHeight: 1.2, margin: 0 }}>{card.problema}</p>
                <div style={{ width: "32px", height: "1px", background: "var(--color-deep, #0a110f)", opacity: 0.3 }} />
                <p style={{ fontFamily: "var(--font-label)", fontWeight: 700, fontSize: "13px", textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--color-deep, #0a110f)", margin: 0 }}>→ {card.solucion}</p>
                <p style={{ fontFamily: "var(--font-body)", fontSize: "13px", color: "var(--color-deep, #0a110f)", opacity: 0.65, lineHeight: 1.6, margin: 0 }}>{card.descripcion}</p>
                <p style={{ fontFamily: "var(--font-label)", fontSize: "11px", color: "var(--color-deep, #0a110f)", opacity: 0.4, margin: 0, marginTop: "auto", paddingTop: "8px" }}>{card.ingrediente}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: "var(--color-ivory, #faf8f3)", padding: "80px 0" }}>
        <div className="content-container">
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <span style={{ fontFamily: "var(--font-label)", fontWeight: 700, fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.2em", color: "var(--color-carbon-ink, #1a2e1a)", opacity: 0.5 }}>Nuestros productos</span>
            <h2 style={{ fontFamily: "var(--font-display)", fontStyle: "italic", fontWeight: 400, fontSize: "clamp(28px, 4vw, 42px)", color: "var(--color-deep, #0a110f)", marginTop: "8px" }}>Elaborados con intención</h2>
          </div>
          {region && collections.length > 0 && (
            <FeaturedProducts collections={collections} region={region} />
          )}
        </div>
      </section>

      <section style={{ background: "var(--color-deep, #0a110f)", padding: "80px 0" }}>
        <div className="content-container">
          <div style={{ textAlign: "center", marginBottom: "56px" }}>
            <span style={{ fontFamily: "var(--font-label)", fontWeight: 700, fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.2em", color: "rgba(255,255,255,0.35)" }}>Nuestro proceso</span>
            <h2 style={{ fontFamily: "var(--font-display)", fontStyle: "italic", fontWeight: 400, fontSize: "clamp(28px, 4vw, 42px)", color: "rgba(255,255,255,0.9)", marginTop: "8px" }}>Del campo a tu piel</h2>
          </div>
          <div className="grid grid-cols-1 small:grid-cols-3 gap-12">
            {[
              { num: "01", titulo: "Ingredientes de origen", texto: "Seleccionamos cada ingrediente por su pureza y eficacia. Sin sulfatos, parabenos ni conservantes artificiales." },
              { num: "02", titulo: "Elaboración artesanal", texto: "Cada jabón se elabora en pequeños lotes usando el método frío tradicional, preservando todas las propiedades naturales." },
              { num: "03", titulo: "Curado y control", texto: "Curamos cada pieza entre 4 y 6 semanas para garantizar un pH óptimo y una duración superior a los jabones comerciales." },
            ].map(paso => (
              <div key={paso.num} style={{ borderTop: "1px solid rgba(255,255,255,0.12)", paddingTop: "28px" }}>
                <span style={{ fontFamily: "var(--font-label)", fontWeight: 700, fontSize: "32px", color: "rgba(255,255,255,0.08)", letterSpacing: "-0.02em" }}>{paso.num}</span>
                <h3 style={{ fontFamily: "var(--font-display)", fontStyle: "italic", fontWeight: 400, fontSize: "22px", color: "rgba(255,255,255,0.85)", margin: "12px 0 10px" }}>{paso.titulo}</h3>
                <p style={{ fontFamily: "var(--font-body)", fontSize: "14px", color: "rgba(255,255,255,0.45)", lineHeight: 1.7 }}>{paso.texto}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: "var(--color-mist, #c8d4c0)", padding: "80px 0" }}>
        <div className="content-container">
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <span style={{ fontFamily: "var(--font-label)", fontWeight: 700, fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.2em", color: "var(--color-deep, #0a110f)", opacity: 0.5 }}>Lo que dicen nuestras clientas</span>
            <h2 style={{ fontFamily: "var(--font-display)", fontStyle: "italic", fontWeight: 400, fontSize: "clamp(28px, 4vw, 42px)", color: "var(--color-deep, #0a110f)", marginTop: "8px" }}>Resultados reales</h2>
          </div>
          <div className="grid grid-cols-1 small:grid-cols-3 gap-6">
            {[
              { nombre: "Laura M.", ciudad: "Madrid", texto: "Llevo 3 semanas usando el jabón de cúrcuma y mis manchas han mejorado notablemente. Jamás pensé que un jabón natural pudiera hacer tanto. Mi piel está más luminosa que nunca.", producto: "Jabón de Cúrcuma" },
              { nombre: "Carmen R.", ciudad: "Barcelona", texto: "Tengo la piel muy sensible y probé todo. Con el jabón de aloe vera desaparecieron las rojeces en días. Huele increíble y mi piel ya no tira después de lavarse.", producto: "Jabón de Aloe Vera" },
              { nombre: "Ana P.", ciudad: "Valencia", texto: "El jabón de arroz es una maravilla. En invierno mi piel estaba deshidratada y reseca, ahora está suave todo el día. Lo he regalado a mi madre y ella también está enamorada.", producto: "Jabón de Arroz" },
            ].map(t => (
              <div key={t.nombre} style={{ background: "rgba(255,255,255,0.5)", borderRadius: "8px", padding: "28px 24px" }}>
                <div style={{ display: "flex", gap: "2px", marginBottom: "16px" }}>
                  {"★★★★★".split("").map((s, i) => <span key={i} style={{ color: "var(--color-carbon-ink, #1a2e1a)", fontSize: "14px" }}>{s}</span>)}
                </div>
                <p style={{ fontFamily: "var(--font-body)", fontSize: "14px", color: "var(--color-deep, #0a110f)", lineHeight: 1.7, marginBottom: "20px", fontStyle: "italic" }}>"{t.texto}"</p>
                <div style={{ borderTop: "1px solid rgba(0,0,0,0.1)", paddingTop: "16px" }}>
                  <p style={{ fontFamily: "var(--font-label)", fontWeight: 700, fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--color-deep, #0a110f)", margin: 0 }}>{t.nombre} · {t.ciudad}</p>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: "12px", color: "var(--color-deep, #0a110f)", opacity: 0.5, margin: "2px 0 0" }}>{t.producto}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: "var(--color-paper-white, #f7f5f0)", padding: "80px 0" }}>
        <div className="content-container">
          <div className="grid grid-cols-1 small:grid-cols-2 gap-16 items-center">
            <div>
              <span style={{ fontFamily: "var(--font-label)", fontWeight: 700, fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.2em", color: "var(--color-carbon-ink, #1a2e1a)", opacity: 0.5 }}>Transparencia total</span>
              <h2 style={{ fontFamily: "var(--font-display)", fontStyle: "italic", fontWeight: 400, fontSize: "clamp(28px, 4vw, 42px)", color: "var(--color-deep, #0a110f)", marginTop: "8px", marginBottom: "20px" }}>Sabemos lo que ponemos en tu piel</h2>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "15px", color: "var(--color-deep, #0a110f)", opacity: 0.6, lineHeight: 1.8, marginBottom: "24px" }}>En Savia no escondemos nada. Cada ingrediente tiene un propósito y lo explicamos con claridad.</p>
              <div className="flex flex-col gap-3">
                {["✓  Sin sulfatos SLS/SLES", "✓  Sin parabenos ni conservantes artificiales", "✓  Sin colorantes sintéticos", "✓  Aceites vegetales de primera presión", "✓  pH equilibrado para la piel"].map(item => (
                  <p key={item} style={{ fontFamily: "var(--font-body)", fontSize: "14px", color: "var(--color-deep, #0a110f)", opacity: 0.75, margin: 0 }}>{item}</p>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { nombre: "Aceite de oliva", beneficio: "Hidratación profunda y antioxidante" },
                { nombre: "Manteca de karité", beneficio: "Regenera y protege la barrera cutánea" },
                { nombre: "Aceite de coco", beneficio: "Limpieza suave y efecto antibacteriano" },
                { nombre: "Aloe vera", beneficio: "Calma, hidrata y reduce inflamación" },
                { nombre: "Cúrcuma", beneficio: "Ilumina y unifica el tono de forma natural" },
                { nombre: "Avena coloidal", beneficio: "Suaviza y calma pieles sensibles" },
              ].map(ing => (
                <div key={ing.nombre} style={{ background: "rgba(26,46,26,0.05)", borderRadius: "6px", padding: "16px" }}>
                  <p style={{ fontFamily: "var(--font-label)", fontWeight: 700, fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--color-carbon-ink, #1a2e1a)", margin: "0 0 4px" }}>{ing.nombre}</p>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: "12px", color: "var(--color-deep, #0a110f)", opacity: 0.55, margin: 0, lineHeight: 1.5 }}>{ing.beneficio}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: "var(--color-carbon-ink, #1a2e1a)", padding: "80px 0" }}>
        <div className="content-container" style={{ textAlign: "center", maxWidth: "680px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-display)", fontStyle: "italic", fontWeight: 400, fontSize: "clamp(28px, 5vw, 52px)", color: "rgba(255,255,255,0.9)", lineHeight: 1.2, marginBottom: "24px" }}>La naturaleza tiene todas las respuestas. Nosotras solo las escuchamos.</h2>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "15px", color: "rgba(255,255,255,0.5)", lineHeight: 1.8, marginBottom: "36px" }}>Creamos jabones que respetan tu piel y el planeta. Sin atajos, sin ingredientes vacíos, sin pretensiones.</p>
          <a href="/store" style={{ fontFamily: "var(--font-label)", fontWeight: 700, fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.15em", color: "var(--color-carbon-ink, #1a2e1a)", background: "rgba(255,255,255,0.9)", padding: "14px 32px", borderRadius: "4px", textDecoration: "none", display: "inline-block" }}>Descubrir la colección</a>
        </div>
      </section>

      <section style={{ background: "var(--color-ivory, #faf8f3)", padding: "80px 0" }}>
        <div className="content-container" style={{ maxWidth: "720px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <span style={{ fontFamily: "var(--font-label)", fontWeight: 700, fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.2em", color: "var(--color-carbon-ink, #1a2e1a)", opacity: 0.5 }}>Preguntas frecuentes</span>
            <h2 style={{ fontFamily: "var(--font-display)", fontStyle: "italic", fontWeight: 400, fontSize: "clamp(28px, 4vw, 42px)", color: "var(--color-deep, #0a110f)", marginTop: "8px" }}>Resolvemos tus dudas</h2>
          </div>
          <div className="flex flex-col gap-0">
            {[
              { q: "¿Son seguros los jabones naturales para pieles sensibles?", a: "Sí. Nuestros jabones están formulados sin irritantes comunes como SLS, parabenos o perfumes sintéticos. El jabón de Aloe Vera está especialmente indicado para pieles sensibles, atópicas o reactivas." },
              { q: "¿Cuánto tiempo dura un jabón artesanal?", a: "En condiciones normales (manteniéndolo fuera del agua entre usos) un jabón de 100g dura entre 4 y 6 semanas. Recomendamos usarlos antes de 12 meses desde la compra." },
              { q: "¿Hacéis envíos a toda España?", a: "Sí, enviamos a toda la España peninsular e islas. Los pedidos superiores a 30€ tienen envío gratuito. Entrega en 2-4 días hábiles desde el momento del pago." },
              { q: "¿Puedo devolver el producto si no me convence?", a: "Aceptamos devoluciones en los 14 días siguientes a la recepción si el producto no ha sido abierto. Si el jabón presenta algún defecto, contáctanos y lo solucionamos de inmediato." },
            ].map((faq, i) => (
              <div key={i} style={{ borderBottom: "1px solid rgba(26,46,26,0.1)", padding: "24px 0" }}>
                <p style={{ fontFamily: "var(--font-label)", fontWeight: 700, fontSize: "14px", textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--color-deep, #0a110f)", margin: "0 0 10px" }}>{faq.q}</p>
                <p style={{ fontFamily: "var(--font-body)", fontSize: "14px", color: "var(--color-deep, #0a110f)", opacity: 0.6, lineHeight: 1.7, margin: 0 }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
