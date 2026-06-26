"use client";
export default function Footer() {
  return (
    <footer style={{ background: "#2a1f1f", color: "white", padding: "4rem 0 2rem" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1.5rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: "3rem", marginBottom: "3rem" }} className="footer-grid">
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.5rem" }}>
              <svg width="32" height="32" viewBox="0 0 36 36" fill="none">
                <circle cx="18" cy="18" r="16" fill="#ffa7a7" opacity="0.3"/>
                <path d="M18 8C18 8 26 14 26 20C26 24.4 22.4 28 18 28C13.6 28 10 24.4 10 20C10 14 18 8 18 8Z" fill="#ffa7a7"/>
                <path d="M18 12C18 12 23 16 23 20C23 22.8 20.8 25 18 25C15.2 25 13 22.8 13 20C13 16 18 12 18 12Z" fill="white" opacity="0.5"/>
                <circle cx="18" cy="20" r="3.5" fill="#e07575"/>
              </svg>
              <div>
                <div style={{ fontFamily: "var(--font-display)", fontSize: "1.4rem", fontWeight: 600, color: "white" }}>MB-Kosmetik</div>
                <div style={{ fontSize: "0.6rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,167,167,0.7)" }}>Beauty Salon</div>
              </div>
            </div>
            <p style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.8, maxWidth: "32ch" }}>Ihr exklusiver Beauty Salon in Hamburg. Modernste Technologien, zertifizierte Expertinnen, unvergessliche Ergebnisse.</p>
            <div style={{ display: "flex", gap: "0.75rem", marginTop: "1.5rem" }}>
              {["I", "F", "T"].map((s, i) => (
                <a key={i} href="#" target="_blank" rel="noopener noreferrer" style={{ width: "2.5rem", height: "2.5rem", borderRadius: "50%", border: "1px solid rgba(255,167,167,0.3)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.8rem", color: "rgba(255,167,167,0.8)", textDecoration: "none" }}
                  onMouseOver={(e) => { const el = e.currentTarget as HTMLElement; el.style.background = "var(--color-rose)"; el.style.color = "#2a1f1f"; }}
                  onMouseOut={(e) => { const el = e.currentTarget as HTMLElement; el.style.background = "transparent"; el.style.color = "rgba(255,167,167,0.8)"; }}
                >{s}</a>
              ))}
            </div>
          </div>
          {[
            { title: "Leistungen", links: ["Haar-Laser", "Skin Care", "Zahn-Bleaching", "Gesichtsbehandlung", "Wimpern & Brauen"] },
            { title: "Salon", links: ["Über uns", "Galerie", "Preise", "Karriere"] },
            { title: "Rechtliches", links: ["Impressum", "Datenschutz", "AGB", "Kontakt"] },
          ].map((col) => (
            <div key={col.title}>
              <h4 style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--color-rose)", marginBottom: "1.25rem" }}>{col.title}</h4>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {col.links.map((l) => (
                  <li key={l}><a href="#" style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.5)", textDecoration: "none" }}
                    onMouseOver={(e) => (e.currentTarget.style.color = "white")}
                    onMouseOut={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.5)")}
                  >{l}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: "2rem", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem" }}>
          <p style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.35)" }}>© 2024 Lumière Beauty Salon. Alle Rechte vorbehalten.</p>
          <p style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.35)" }}>Made by BEGER-IT</p>
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) { .footer-grid { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 480px) { .footer-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </footer>
  );
}
