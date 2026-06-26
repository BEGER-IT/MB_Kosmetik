import Image from "next/image";

export default function About() {
  return (
    <section id="ueber-uns" style={{ padding: "clamp(4rem,8vw,8rem) 0", background: "linear-gradient(180deg, var(--color-bg) 0%, #fff0f0 50%, #efffff 100%)" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1.5rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }} className="about-grid">
          <div style={{ position: "relative", height: "clamp(380px,50vw,560px)" }} className="about-imgs">
            <div style={{ position: "absolute", top: 0, left: 0, width: "65%", height: "75%", borderRadius: "2rem", overflow: "hidden", boxShadow: "var(--shadow-lg)" }}>
              <Image src="/pics/woman.png" alt="Lumière Beauty Salon Innenraum" fill style={{ objectFit: "cover" }} loading="lazy" sizes="30vw"/>
            </div>
            <div style={{ position: "absolute", bottom: 0, right: 0, width: "55%", height: "60%", borderRadius: "2rem", overflow: "hidden", boxShadow: "var(--shadow-lg)", border: "4px solid white" }}>
              <Image src="/pics/inhouse.png" alt="Professionelle Kosmetikerin" fill style={{ objectFit: "cover" }} loading="lazy" sizes="25vw"/>
            </div>
            <div style={{ position: "absolute", top: "55%", left: "42%", background: "var(--color-gold)", borderRadius: "50%", width: "6.5rem", height: "6.5rem", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", boxShadow: "var(--shadow-gold)", border: "3px solid white", textAlign: "center", padding: "0.5rem" }}>
              <span style={{ fontSize: "1.2rem" }}>✦</span>
              <span style={{ fontSize: "0.6rem", fontWeight: 700, color: "#2a1f1f", letterSpacing: "0.05em", lineHeight: 1.3 }}>TOP<br/>SALON<br/>2026</span>
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <span style={{ fontSize: "0.75rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--color-rose-dark)", fontWeight: 600 }}>Über MB-Kosmetik</span>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem,4vw,3.5rem)", fontWeight: 400, color: "var(--color-text)", letterSpacing: "-0.02em", lineHeight: 1.1 }}>
              Leidenschaft für{" "}<em style={{ fontStyle: "italic", color: "var(--color-rose-dark)" }}>Ihre Schönheit</em>
            </h2>
            <p style={{ fontSize: "1rem", color: "var(--color-text-muted)", lineHeight: 1.8 }}>Seit über 8 Jahren verwöhnen wir unsere Kundinnen und Kunden in Hamburg mit erstklassigen Beauty-Behandlungen. Unser zertifiziertes Team verbindet modernste Technologien mit jahrelanger Expertise.</p>
            <p style={{ fontSize: "1rem", color: "var(--color-text-muted)", lineHeight: 1.8 }}>Bei MB-Kosmetik steht Ihre Zufriedenheit an erster Stelle. Jede Behandlung wird individuell auf Ihre Bedürfnisse abgestimmt, damit Sie das bestmögliche Ergebnis erzielen.</p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginTop: "1rem" }}>
              {[
                { icon: "🌸", title: "Zertifiziertes Team", desc: "Staatlich zertifizierte Behandlerinnen" },
                { icon: "💎", title: "Premium Produkte", desc: "Nur führende Marken & Technologien" },
                { icon: "🌿", title: "Schonende Methoden", desc: "Verträglich für alle Hauttypen" },
                { icon: "✨", title: "Individuelle Beratung", desc: "Persönliche Analyse vor jeder Behandlung" },
              ].map((f) => (
                <div key={f.title} style={{ background: "white", borderRadius: "1.25rem", padding: "1.25rem", border: "1px solid rgba(255,167,167,0.15)", boxShadow: "var(--shadow-sm)" }}>
                  <div style={{ fontSize: "1.4rem", marginBottom: "0.5rem" }}>{f.icon}</div>
                  <div style={{ fontSize: "0.875rem", fontWeight: 700, color: "var(--color-text)", marginBottom: "0.25rem" }}>{f.title}</div>
                  <div style={{ fontSize: "0.8rem", color: "var(--color-text-muted)", lineHeight: 1.5 }}>{f.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) { .about-grid { grid-template-columns: 1fr !important; } .about-imgs { height: 320px !important; } }
      `}</style>
    </section>
  );
}
