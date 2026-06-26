"use client";

export default function Contact() {
  return (
    <section id="kontakt" style={{ padding: "clamp(4rem,8vw,8rem) 0", background: "linear-gradient(135deg, #fff5f5 0%, #efffff 100%)" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1.5rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "start" }} className="contact-grid">
          <div>
            <span style={{ fontSize: "0.75rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--color-rose-dark)", fontWeight: 600, display: "block", marginBottom: "1rem" }}>Kontakt & Termin</span>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem,4vw,3.5rem)", fontWeight: 400, color: "var(--color-text)", letterSpacing: "-0.02em", marginBottom: "1.5rem" }}>
              Wir freuen uns{" "}<em style={{ fontStyle: "italic", color: "var(--color-rose-dark)" }}>auf Sie</em>
            </h2>
            <p style={{ fontSize: "1rem", color: "var(--color-text-muted)", lineHeight: 1.8, marginBottom: "2rem" }}>
              Vereinbaren Sie jetzt Ihren persönlichen Beratungstermin. Unser Team beantwortet alle Ihre Fragen und erstellt einen individuellen Beautyplan für Sie.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              {[
                { icon: "📍", label: "Adresse", value: "Flamweg 15, 25335 Elmshorn" },
                { icon: "📞", label: "Telefon", value: "04121 7801363" },
                { icon: "✉️", label: "E-Mail", value: "info@mb-kosmetik-hamburg.de" },
                { icon: "🕐", label: "Öffnungszeiten", value: "Mo–Fr 10–17 Uhr | Sa 10–14 Uhr" },
              ].map((info) => (
                <div key={info.label} style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                  <div style={{ width: "3rem", height: "3rem", borderRadius: "1.25rem", flexShrink: 0, background: "white", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.2rem", boxShadow: "var(--shadow-sm)", border: "1px solid rgba(255,167,167,0.2)" }}>{info.icon}</div>
                  <div>
                    <div style={{ fontSize: "0.7rem", color: "var(--color-text-faint)", letterSpacing: "0.12em", textTransform: "uppercase", fontWeight: 600 }}>{info.label}</div>
                    <div style={{ fontSize: "0.9rem", color: "var(--color-text)", fontWeight: 500, marginTop: "0.15rem" }}>{info.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ background: "white", borderRadius: "2rem", padding: "2.5rem", boxShadow: "var(--shadow-lg)", border: "1px solid rgba(255,167,167,0.15)" }}>
            <h3 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.5rem,2.5vw,2rem)", fontWeight: 500, color: "var(--color-text)", marginBottom: "1.5rem" }}>Termin anfragen</h3>
            <form style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }} onSubmit={(e) => e.preventDefault()}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                {[{ id: "vorname", label: "Vorname", placeholder: "Marie" }, { id: "nachname", label: "Nachname", placeholder: "Müller" }].map((f) => (
                  <div key={f.id}>
                    <label htmlFor={f.id} style={{ display: "block", fontSize: "0.7rem", fontWeight: 600, color: "var(--color-text-muted)", marginBottom: "0.5rem", letterSpacing: "0.08em", textTransform: "uppercase" }}>{f.label}</label>
                    <input id={f.id} type="text" placeholder={f.placeholder} style={{ width: "100%", padding: "0.75rem 1rem", borderRadius: "0.75rem", border: "1.5px solid rgba(255,167,167,0.3)", fontSize: "0.9rem", color: "var(--color-text)", background: "#fff5f5", outline: "none" }}
                      onFocus={(e) => (e.target.style.borderColor = "var(--color-rose)")}
                      onBlur={(e) => (e.target.style.borderColor = "rgba(255,167,167,0.3)")}
                    />
                  </div>
                ))}
              </div>
              {[{ id: "email", label: "E-Mail", type: "email", placeholder: "marie@beispiel.de" }, { id: "telefon", label: "Telefon", type: "tel", placeholder: "040 123 456 78" }].map((f) => (
                <div key={f.id}>
                  <label htmlFor={f.id} style={{ display: "block", fontSize: "0.7rem", fontWeight: 600, color: "var(--color-text-muted)", marginBottom: "0.5rem", letterSpacing: "0.08em", textTransform: "uppercase" }}>{f.label}</label>
                  <input id={f.id} type={f.type} placeholder={f.placeholder} style={{ width: "100%", padding: "0.75rem 1rem", borderRadius: "0.75rem", border: "1.5px solid rgba(255,167,167,0.3)", fontSize: "0.9rem", color: "var(--color-text)", background: "#fff5f5", outline: "none" }}
                    onFocus={(e) => (e.target.style.borderColor = "var(--color-rose)")}
                    onBlur={(e) => (e.target.style.borderColor = "rgba(255,167,167,0.3)")}
                  />
                </div>
              ))}
              <div>
                <label htmlFor="behandlung" style={{ display: "block", fontSize: "0.7rem", fontWeight: 600, color: "var(--color-text-muted)", marginBottom: "0.5rem", letterSpacing: "0.08em", textTransform: "uppercase" }}>Gewünschte Behandlung</label>
                <select id="behandlung" style={{ width: "100%", padding: "0.75rem 1rem", borderRadius: "0.75rem", border: "1.5px solid rgba(255,167,167,0.3)", fontSize: "0.9rem", color: "var(--color-text)", background: "#fff5f5", outline: "none" }}>
                  <option value="">Bitte wählen...</option>
                  <option>Haar-Laser</option><option>Skin Care</option><option>Zahn-Bleaching</option>
                  <option>Gesichtsbehandlung</option><option>Wimpern & Brauen</option><option>Körperpflege</option>
                  <option>Beratungsgespräch</option>
                </select>
              </div>
              <div>
                <label htmlFor="nachricht" style={{ display: "block", fontSize: "0.7rem", fontWeight: 600, color: "var(--color-text-muted)", marginBottom: "0.5rem", letterSpacing: "0.08em", textTransform: "uppercase" }}>Nachricht (optional)</label>
                <textarea id="nachricht" rows={3} placeholder="Ihre Fragen oder Wünsche..." style={{ width: "100%", padding: "0.75rem 1rem", borderRadius: "0.75rem", border: "1.5px solid rgba(255,167,167,0.3)", fontSize: "0.9rem", color: "var(--color-text)", background: "#fff5f5", outline: "none", resize: "vertical" }}
                  onFocus={(e) => (e.target.style.borderColor = "var(--color-rose)")}
                  onBlur={(e) => (e.target.style.borderColor = "rgba(255,167,167,0.3)")}
                />
              </div>
              <button type="submit" style={{ background: "var(--color-rose)", color: "#2a1f1f", padding: "1rem", borderRadius: "9999px", fontSize: "0.875rem", fontWeight: 700, letterSpacing: "0.05em", textTransform: "uppercase", boxShadow: "var(--shadow-md)", width: "100%" }}
                onMouseOver={(e) => (e.currentTarget.style.background = "var(--color-rose-deep)")}
                onMouseOut={(e) => (e.currentTarget.style.background = "var(--color-rose)")}
              >Termin anfragen ✦</button>
            </form>
          </div>
        </div>
      </div>
      <style>{`@media (max-width: 768px) { .contact-grid { grid-template-columns: 1fr !important; } }`}</style>
    </section>
  );
}
