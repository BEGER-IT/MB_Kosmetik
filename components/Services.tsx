"use client";
import Image from "next/image";

const services = [
  { id: "haar-laser", title: "Haar-Laser", subtitle: "Dauerhafte Haarentfernung", description: "Modernste Laser-Technologie für dauerhaft glatte Haut. Schonend, präzise und effektiv für alle Hauttypen.", image: "/pics/epilation.jpg", bg: "#fff0f0", tag: "Bestseller" },
  { id: "skin-care", title: "Skin Care", subtitle: "Professionelle Hautpflege", description: "Maßgeschneiderte Behandlungen für strahlende Haut — von Tiefenreinigung bis Anti-Aging-Therapien.", image: "/pics/skin-care.png", bg: "#efffff", tag: "Empfohlen" },
  { id: "zahn-bleaching", title: "Zahn-Bleaching", subtitle: "Strahlendes Lächeln", description: "Professionelles Whitening für ein strahlendes, selbstsicheres Lächeln. Sicher und nachhaltig wirksam.", image: "/pics/bleaching.png", bg: "#fffeee", tag: "Neu" },
  { id: "gesicht", title: "Gesichtsbehandlung", subtitle: "Hydra Facial & Peeling", description: "Intensive Feuchtigkeitsbehandlungen, chemische Peelings und Microneedling für jugendlich frische Haut.", image: "/pics/facial.png", bg: "#fff5f5", tag: "" },
  { id: "wimpern", title: "Wimpern & Brauen", subtitle: "Lifting & Extensions", description: "Wimpernverlängerungen, Lash-Lifting und Augenbrauen-Styling für einen ausdrucksstarken Blick.", image: "/pics/eyebrows.png", bg: "#efffff", tag: "" },
  { id: "koerper", title: "Körperpflege", subtitle: "Massage & Wellness", description: "Entspannende Massagen, Körperpackungen und Wellness-Treatments für Körper und Seele.", image: "/pics/massage.png", bg: "#fffeee", tag: "" },
];

export default function Services() {
  return (
    <section id="leistungen" style={{ padding: "clamp(4rem,8vw,8rem) 0", background: "var(--color-bg)" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1.5rem" }}>
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <span style={{ fontSize: "0.75rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--color-rose-dark)", fontWeight: 600, display: "block", marginBottom: "1rem" }}>Unsere Leistungen</span>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem,4vw,3.5rem)", fontWeight: 400, color: "var(--color-text)", letterSpacing: "-0.02em" }}>
            Alles für Ihre <em style={{ fontStyle: "italic", color: "var(--color-rose-dark)" }}>Schönheit</em>
          </h2>
          <p style={{ fontSize: "1rem", color: "var(--color-text-muted)", maxWidth: "55ch", margin: "1rem auto 0", lineHeight: 1.7 }}>
            Von modernster Laser-Technologie bis zu entspannenden Wellness-Behandlungen — ein umfassendes Spektrum an Schönheitsleistungen.
          </p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(340px,100%), 1fr))", gap: "1.5rem" }}>
          {services.map((s) => (
            <article key={s.id} style={{ background: "white", borderRadius: "2rem", overflow: "hidden", border: "1px solid rgba(255,167,167,0.15)", boxShadow: "var(--shadow-sm)", transition: "all 0.3s ease" }}
              onMouseOver={(e) => { const el = e.currentTarget as HTMLElement; el.style.boxShadow = "var(--shadow-lg)"; el.style.transform = "translateY(-4px)"; }}
              onMouseOut={(e) => { const el = e.currentTarget as HTMLElement; el.style.boxShadow = "var(--shadow-sm)"; el.style.transform = "none"; }}
            >
              <div style={{ position: "relative", height: "220px", background: s.bg }}>
                <Image src={s.image} alt={s.title} fill style={{ objectFit: "cover", opacity: 0.85 }} loading="lazy" sizes="(max-width:768px) 100vw, 33vw"/>
                {s.tag && <div style={{ position: "absolute", top: "1rem", right: "1rem", background: "white", borderRadius: "9999px", padding: "0.25rem 0.75rem", fontSize: "0.75rem", fontWeight: 700, color: "var(--color-rose-dark)", boxShadow: "var(--shadow-sm)" }}>{s.tag}</div>}
              </div>
              <div style={{ padding: "1.5rem" }}>
                <span style={{ fontSize: "0.75rem", color: "var(--color-text-muted)", letterSpacing: "0.08em", textTransform: "uppercase", fontWeight: 500 }}>{s.subtitle}</span>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.5rem,2.5vw,2rem)", fontWeight: 500, color: "var(--color-text)", margin: "0.5rem 0 0.75rem" }}>{s.title}</h3>
                <p style={{ fontSize: "0.9rem", color: "var(--color-text-muted)", lineHeight: 1.7 }}>{s.description}</p>
                <a href="#kontakt" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", marginTop: "1.25rem", fontSize: "0.875rem", fontWeight: 600, color: "var(--color-rose-dark)", textDecoration: "none" }}>Mehr erfahren →</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
