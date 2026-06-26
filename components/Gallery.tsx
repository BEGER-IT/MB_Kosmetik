"use client";
import Image from "next/image";

const images = [
  { src: "/pics/body.png", alt: "Skin Care Behandlung", tall: true },
  { src: "/pics/leggs.png", alt: "Laser Behandlung", tall: false },
  { src: "/pics/head.jpg", alt: "Wellness Massage", tall: false },
  { src: "/pics/leggs-2.jpg", alt: "Zahn Bleaching", tall: false },
  { src: "/pics/tooth.png", alt: "Gesichtsbehandlung", tall: true },
  { src: "https://picsum.photos/seed/gal-beauty6/600/340", alt: "Wimpern Extensions", tall: false },
];

export default function Gallery() {
  return (
    <section id="galerie" style={{ padding: "clamp(4rem,8vw,8rem) 0", background: "white" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1.5rem" }}>
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <span style={{ fontSize: "0.75rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--color-mint-dark)", fontWeight: 600, display: "block", marginBottom: "0.75rem" }}>Galerie</span>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem,4vw,3.5rem)", fontWeight: 400, color: "var(--color-text)", letterSpacing: "-0.02em" }}>
            Unsere <em style={{ fontStyle: "italic", color: "var(--color-mint-dark)" }}>Ergebnisse</em>
          </h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridTemplateRows: "220px 220px", gap: "1rem" }} className="gallery-grid">
          {images.map((img, i) => (
            <div key={i} style={{ borderRadius: "1.25rem", overflow: "hidden", position: "relative", gridRow: img.tall ? "span 2" : "span 1", boxShadow: "var(--shadow-sm)", transition: "box-shadow 0.3s ease" }}
              onMouseOver={(e) => (e.currentTarget as HTMLElement).style.boxShadow = "var(--shadow-lg)"}
              onMouseOut={(e) => (e.currentTarget as HTMLElement).style.boxShadow = "var(--shadow-sm)"}
            >
              <Image src={img.src} alt={img.alt} fill style={{ objectFit: "cover", transition: "transform 0.4s ease" }} loading="lazy" sizes="33vw"
                onMouseOver={(e) => (e.currentTarget as HTMLElement).style.transform = "scale(1.05)"}
                onMouseOut={(e) => (e.currentTarget as HTMLElement).style.transform = "scale(1)"}
              />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, transparent 60%, rgba(255,167,167,0.25) 100%)" }}/>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          .gallery-grid { grid-template-columns: repeat(2,1fr) !important; grid-template-rows: auto !important; }
          .gallery-grid > div { grid-row: span 1 !important; height: 180px; }
        }
      `}</style>
    </section>
  );
}
