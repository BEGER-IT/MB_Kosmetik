const plans = [
  { name: "Essential", price: "69", period: "pro Behandlung", bg: "#efffff", border: "#a7fffe", accent: "#3ab8b6", features: ["1 Behandlung nach Wahl", "Hauttyp-Analyse", "Pflegeberatung", "Nachsorge-Tipps"], cta: "Buchen", popular: false },
  { name: "Premium", price: "149", period: "pro Monat", bg: "#ffe0e0", border: "#ffa7a7", accent: "#c45555", features: ["3 Behandlungen/Monat", "Persönlicher Beautyplan", "Exklusive Produkte", "Priority-Termine", "Treuepunkte"], cta: "Beliebt wählen", popular: true },
  { name: "Luxe", price: "299", period: "pro Monat", bg: "#fffbd0", border: "#fff49d", accent: "#b8a000", features: ["Unbegrenzte Behandlungen", "VIP-Beratung & Planung", "Premium Produktpaket", "Same-Day Termine", "Exklusive Events", "Heim-Service Option"], cta: "VIP werden", popular: false },
];

export default function Pricing() {
  return (
    <section id="preise" style={{ padding: "clamp(4rem,8vw,8rem) 0", background: "linear-gradient(135deg, #fff5f5 0%, #fffeee 50%, #efffff 100%)" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1.5rem" }}>
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <span style={{ fontSize: "0.75rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--color-gold-dark)", fontWeight: 600, display: "block", marginBottom: "0.75rem" }}>Preise & Pakete</span>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem,4vw,3.5rem)", fontWeight: 400, color: "var(--color-text)", letterSpacing: "-0.02em" }}>
            Ihr perfektes <em style={{ fontStyle: "italic", color: "var(--color-gold-dark)" }}>Beauty-Paket</em>
          </h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(300px,100%), 1fr))", gap: "1.5rem", alignItems: "start" }}>
          {plans.map((p) => (
            <div key={p.name} style={{ background: "white", borderRadius: "2rem", border: p.popular ? `2px solid ${p.border}` : "1px solid rgba(255,167,167,0.2)", padding: "2rem", boxShadow: p.popular ? "var(--shadow-lg)" : "var(--shadow-sm)", position: "relative", transform: p.popular ? "scale(1.03)" : "scale(1)" }}>
              {p.popular && <div style={{ position: "absolute", top: "-0.8rem", left: "50%", transform: "translateX(-50%)", background: "var(--color-rose)", color: "#2a1f1f", borderRadius: "9999px", padding: "0.25rem 1rem", fontSize: "0.7rem", fontWeight: 700, whiteSpace: "nowrap" }}>✦ BELIEBTESTE WAHL</div>}
              <div style={{ background: p.bg, borderRadius: "1.25rem", padding: "1rem", display: "inline-block", marginBottom: "1.25rem" }}>
                <span style={{ fontFamily: "var(--font-display)", fontSize: "1.75rem", fontWeight: 600, color: p.accent }}>{p.name}</span>
              </div>
              <div style={{ marginBottom: "1.5rem" }}>
                <span style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem,3.5vw,3rem)", fontWeight: 600, color: "var(--color-text)" }}>€{p.price}</span>
                <span style={{ fontSize: "0.875rem", color: "var(--color-text-muted)", marginLeft: "0.5rem" }}>{p.period}</span>
              </div>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.75rem", marginBottom: "2rem" }}>
                {p.features.map((f) => (
                  <li key={f} style={{ display: "flex", gap: "0.75rem", alignItems: "center", fontSize: "0.875rem", color: "var(--color-text-muted)" }}>
                    <span style={{ color: p.accent, flexShrink: 0, fontWeight: 700 }}>✓</span>{f}
                  </li>
                ))}
              </ul>
              <a href="#kontakt" style={{ display: "block", textAlign: "center", padding: "0.875rem", background: p.popular ? "var(--color-rose)" : p.bg, color: p.popular ? "#2a1f1f" : p.accent, borderRadius: "9999px", fontWeight: 700, textDecoration: "none", fontSize: "0.875rem", border: p.popular ? "none" : `2px solid ${p.border}` }}>
                {p.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
