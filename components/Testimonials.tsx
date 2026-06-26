const reviews = [
  { name: "Sarah M.", location: "Hamburg", text: "Absolut begeistert! Die Laser-Behandlung war schmerzlos und das Ergebnis nach nur 3 Sitzungen überzeugend. Das Team ist professionell und freundlich.", service: "Haar-Laser", avatar: "S", bg: "#fff5f5" },
  { name: "Laura K.", location: "Hamburg-Bergedorf", text: "Das Zahn-Bleaching hat mein Lächeln komplett verändert! Sicher, schnell und super ergebnisstark. Werde auf jeden Fall wiederkommen.", service: "Zahn-Bleaching", avatar: "L", bg: "#efffff" },
  { name: "Mia B.", location: "Glinde", text: "Das monatliche Premium-Paket ist jeden Cent wert. Meine Haut sieht strahlender aus als je zuvor. Die Hydra-Facial Behandlung ist mein absolutes Highlight!", service: "Skin Care", avatar: "M", bg: "#fffeee" },
  { name: "Tanja R.", location: "Hamburg-Wandsbek", text: "Super professionelle Beratung! Man merkt, dass das Team wirklich Ahnung hat. Ich fühle mich bei Lumière Beauty immer bestens aufgehoben.", service: "Gesichtsbehandlung", avatar: "T", bg: "#fff5f5" },
  { name: "Nina W.", location: "Hamburg-Rahlstedt", text: "Die Atmosphäre ist so entspannt und wohnlich. Meine Wimpern-Extensions sitzen perfekt — bekomme ständig Komplimente. Danke, liebes Team!", service: "Wimpern & Brauen", avatar: "N", bg: "#efffff" },
  { name: "Jana S.", location: "Hamburg", text: "Beste Entscheidung überhaupt! Nach meinem Luxe-Paket fühle ich mich wie eine neue Frau. Die VIP-Behandlung ist einfach traumhaft.", service: "Luxe-Paket", avatar: "J", bg: "#fffeee" },
];

export default function Testimonials() {
  return (
    <section id="bewertungen" style={{ padding: "clamp(4rem,8vw,8rem) 0", background: "white" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1.5rem" }}>
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <span style={{ fontSize: "0.75rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--color-rose-dark)", fontWeight: 600, display: "block", marginBottom: "0.75rem" }}>Kundenstimmen</span>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem,4vw,3.5rem)", fontWeight: 400, color: "var(--color-text)", letterSpacing: "-0.02em" }}>
            Was unsere Kunden <em style={{ fontStyle: "italic", color: "var(--color-rose-dark)" }}>sagen</em>
          </h2>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "0.75rem", marginTop: "1.25rem" }}>
            <span style={{ color: "#f59e0b", fontSize: "1.3rem", letterSpacing: "0.1em" }}>★★★★★</span>
            <span style={{ fontSize: "1rem", fontWeight: 700 }}>4.9</span>
            <span style={{ fontSize: "0.875rem", color: "var(--color-text-muted)" }}>aus 200+ Bewertungen</span>
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(300px,100%), 1fr))", gap: "1.5rem" }}>
          {reviews.map((r, i) => (
            <div key={i} style={{ background: r.bg, borderRadius: "1.25rem", padding: "1.75rem", border: "1px solid rgba(255,167,167,0.12)", boxShadow: "var(--shadow-sm)" }}>
              <div style={{ color: "#f59e0b", marginBottom: "1rem", fontSize: "1rem", letterSpacing: "0.05em" }}>★★★★★</div>
              <p style={{ fontSize: "0.9rem", color: "var(--color-text-muted)", lineHeight: 1.8, marginBottom: "1.25rem" }}>&ldquo;{r.text}&rdquo;</p>
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                <div style={{ width: "2.5rem", height: "2.5rem", borderRadius: "50%", background: "var(--color-rose)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1rem", fontWeight: 700, color: "white", flexShrink: 0 }}>{r.avatar}</div>
                <div>
                  <div style={{ fontSize: "0.875rem", fontWeight: 700, color: "var(--color-text)" }}>{r.name}</div>
                  <div style={{ fontSize: "0.75rem", color: "var(--color-text-muted)" }}>{r.location} · {r.service}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
