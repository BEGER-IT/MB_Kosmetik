import Image from "next/image";

export default function Hero() {
  return (
    <section style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "center", overflow: "hidden", background: "linear-gradient(135deg, #fff9f8 0%, #ffe8e8 30%, #efffff 65%, #fffde8 100%)" }}>
      <div aria-hidden style={{ position: "absolute", top: "-5rem", right: "-5rem", width: "40vw", height: "40vw", borderRadius: "50%", background: "radial-gradient(circle, #ffa7a7, transparent 70%)", opacity: 0.25, pointerEvents: "none" }}/>
      <div aria-hidden style={{ position: "absolute", bottom: "5rem", left: "-8rem", width: "30vw", height: "30vw", borderRadius: "50%", background: "radial-gradient(circle, #a7fffe, transparent 70%)", opacity: 0.3, pointerEvents: "none" }}/>
      <div aria-hidden style={{ position: "absolute", bottom: "-3rem", right: "20%", width: "18vw", height: "18vw", borderRadius: "50%", background: "radial-gradient(circle, #fff49d, transparent 70%)", opacity: 0.45, pointerEvents: "none" }}/>

      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "8rem 1.5rem 6rem", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center", width: "100%" }} className="hero-grid">
        <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
            <div style={{ height: "1px", width: "3rem", background: "var(--color-rose-deep)" }}/>
            <span style={{ fontSize: "0.75rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--color-rose-dark)", fontWeight: 600 }}>Premium Beauty Salon Hamburg</span>
          </div>

          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(3rem, 6vw, 5.5rem)", fontWeight: 300, color: "var(--color-text)", lineHeight: 1.05, letterSpacing: "-0.03em" }}>
            Schönheit,{" "}
            <em style={{ fontStyle: "italic", fontWeight: 400, color: "var(--color-rose-dark)" }}>die leuchtet</em>
            <br />& Pflege,{" "}
            <span style={{ background: "linear-gradient(135deg, #3ab8b6, #c45555)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>die begeistert</span>
          </h1>

          <p style={{ fontSize: "1.125rem", color: "var(--color-text-muted)", lineHeight: 1.8, maxWidth: "46ch" }}>
            Erleben Sie Haar-Laser, professionelle Skin Care, strahlendes Zahn-Bleaching und exklusive Behandlungen — zugeschnitten auf Sie.
          </p>

          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <a href="#kontakt" style={{ background: "var(--color-rose)", color: "var(--color-text)", padding: "1rem 2rem", borderRadius: "9999px", fontSize: "0.875rem", fontWeight: 700, textDecoration: "none", boxShadow: "var(--shadow-md)", letterSpacing: "0.03em", textTransform: "uppercase" }}>
              Jetzt Termin buchen
            </a>
            <a href="#leistungen" style={{ border: "2px solid var(--color-rose)", color: "var(--color-text)", padding: "1rem 2rem", borderRadius: "9999px", fontSize: "0.875rem", fontWeight: 600, textDecoration: "none", letterSpacing: "0.03em", textTransform: "uppercase" }}>
              Leistungen entdecken
            </a>
          </div>

          <div style={{ display: "flex", gap: "2rem", paddingTop: "1.5rem", borderTop: "1px solid rgba(255,167,167,0.2)", flexWrap: "wrap" }}>
            {[{ number: "500+", label: "Zufriedene Kunden" }, { number: "8+", label: "Jahre Erfahrung" }, { number: "15+", label: "Behandlungen" }].map((s) => (
              <div key={s.label}>
                <div style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.5rem, 2.5vw, 2.25rem)", fontWeight: 600, color: "var(--color-rose-dark)", lineHeight: 1 }}>{s.number}</div>
                <div style={{ fontSize: "0.8rem", color: "var(--color-text-muted)", marginTop: "0.25rem" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ position: "relative", display: "flex", justifyContent: "center", alignItems: "center" }} className="hero-img">
          <div aria-hidden style={{ position: "absolute", width: "110%", height: "110%", borderRadius: "40% 60% 55% 45% / 45% 40% 60% 55%", border: "2px solid rgba(255,167,167,0.3)" }}/>
          <div aria-hidden style={{ position: "absolute", width: "120%", height: "120%", borderRadius: "55% 45% 40% 60% / 60% 55% 45% 40%", border: "1px solid rgba(167,255,254,0.25)" }}/>

          <div style={{ position: "relative", width: "clamp(280px, 38vw, 460px)", height: "clamp(360px, 50vw, 600px)", borderRadius: "45% 55% 55% 45% / 40% 45% 55% 60%", overflow: "hidden", boxShadow: "var(--shadow-lg)" }}>
            <Image src="/pics/woman-landingpage.png" alt="Frau bei Beauty Behandlung" fill style={{ objectFit: "cover" }} priority sizes="(max-width: 768px) 90vw, 40vw"/>
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(255,167,167,0.06) 0%, rgba(167,255,254,0.06) 100%)" }}/>
          </div>

          <div style={{ position: "absolute", bottom: "10%", left: "-5%", background: "white", borderRadius: "1.25rem", padding: "1rem 1.25rem", boxShadow: "var(--shadow-md)", border: "1px solid rgba(255,167,167,0.2)", display: "flex", alignItems: "center", gap: "0.75rem" }}>
            <div style={{ width: "2.5rem", height: "2.5rem", borderRadius: "50%", background: "var(--color-rose-light)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.1rem" }}>⭐</div>
            <div>
              <div style={{ fontSize: "0.875rem", fontWeight: 700 }}>4.9 / 5.0</div>
              <div style={{ fontSize: "0.75rem", color: "var(--color-text-muted)" }}>200+ Bewertungen</div>
            </div>
          </div>

          <div style={{ position: "absolute", top: "15%", right: "-3%", background: "var(--color-mint-soft)", border: "1px solid var(--color-mint-deep)", borderRadius: "9999px", padding: "0.4rem 1rem", fontSize: "0.75rem", fontWeight: 600, color: "var(--color-mint-dark)" }}>
            ✦ Zertifiziert
          </div>
        </div>
      </div>

      <div style={{ position: "absolute", bottom: "2rem", left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem" }}>
        <span style={{ fontSize: "0.7rem", color: "var(--color-text-faint)", letterSpacing: "0.1em", textTransform: "uppercase" }}>Scrollen</span>
        <div style={{ width: "1.5rem", height: "2.5rem", border: "2px solid rgba(255,167,167,0.4)", borderRadius: "9999px", display: "flex", alignItems: "flex-start", justifyContent: "center", paddingTop: "0.3rem" }}>
          <div style={{ width: "0.3rem", height: "0.6rem", borderRadius: "9999px", background: "var(--color-rose)", animation: "scrollDot 2s ease-in-out infinite" }}/>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr !important; text-align: center; }
          .hero-img { order: -1; }
        }
      `}</style>
    </section>
  );
}
