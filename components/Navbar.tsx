"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { label: "Leistungen", href: "#leistungen" },
  { label: "Über uns", href: "#ueber-uns" },
  { label: "Galerie", href: "#galerie" },
  { label: "Preise", href: "#preise" },
  { label: "Bewertungen", href: "#bewertungen" },
  { label: "Kontakt", href: "#kontakt" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const headerStyle: React.CSSProperties = {
    position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
    transition: "all 0.3s ease",
    backgroundColor: scrolled ? "rgba(254,252,251,0.96)" : "transparent",
    backdropFilter: scrolled ? "blur(12px)" : "none",
    borderBottom: scrolled ? "1px solid rgba(255,167,167,0.2)" : "none",
    boxShadow: scrolled ? "0 2px 20px rgba(255,167,167,0.12)" : "none",
  };

  return (
    <header style={headerStyle}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1.5rem", display: "flex", alignItems: "center", justifyContent: "space-between", height: "4.5rem" }}>
        <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "0.75rem" }}>
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-label="Lumière Logo">
            <circle cx="18" cy="18" r="16" fill="#ffa7a7" opacity="0.25"/>
            <path d="M18 8C18 8 26 14 26 20C26 24.4 22.4 28 18 28C13.6 28 10 24.4 10 20C10 14 18 8 18 8Z" fill="#ffa7a7"/>
            <path d="M18 12C18 12 23 16 23 20C23 22.8 20.8 25 18 25C15.2 25 13 22.8 13 20C13 16 18 12 18 12Z" fill="white" opacity="0.7"/>
            <circle cx="18" cy="20" r="3.5" fill="#e07575"/>
          </svg>
          <div>
            <div style={{ fontFamily: "var(--font-display)", fontSize: "1.5rem", fontWeight: 600, color: "var(--color-text)", letterSpacing: "-0.02em", lineHeight: 1 }}>MB-Kosmetik</div>
            <div style={{ fontSize: "0.6rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--color-text-muted)", lineHeight: 1 }}>Beauty Salon</div>
          </div>
        </Link>

        <nav style={{ display: "flex", gap: "2rem", alignItems: "center" }} className="hidden md:flex">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} style={{ fontSize: "0.9rem", color: "var(--color-text-muted)", textDecoration: "none", fontWeight: 500, transition: "color var(--transition)" }}
              onMouseOver={(e) => (e.currentTarget.style.color = "var(--color-rose-dark)")}
              onMouseOut={(e) => (e.currentTarget.style.color = "var(--color-text-muted)")}
            >{l.label}</a>
          ))}
        </nav>

        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
          <a href="#kontakt" style={{
            background: "var(--color-rose)", color: "var(--color-text)", padding: "0.5rem 1.25rem",
            borderRadius: "9999px", fontSize: "0.875rem", fontWeight: 600, textDecoration: "none",
            boxShadow: "var(--shadow-sm)", transition: "all var(--transition)",
          }}
            onMouseOver={(e) => { (e.currentTarget as HTMLElement).style.background = "var(--color-rose-deep)"; }}
            onMouseOut={(e) => { (e.currentTarget as HTMLElement).style.background = "var(--color-rose)"; }}
          >Termin buchen</a>
          <button onClick={() => setOpen(!open)} className="md:hidden" aria-label="Menü" style={{ padding: "0.5rem", color: "var(--color-text)" }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {open ? <><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></> : <><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></>}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div style={{ background: "rgba(254,252,251,0.98)", backdropFilter: "blur(16px)", padding: "1.5rem", borderTop: "1px solid rgba(255,167,167,0.2)", display: "flex", flexDirection: "column", gap: "1rem" }}>
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} style={{ fontSize: "1rem", color: "var(--color-text)", textDecoration: "none", fontWeight: 500, padding: "0.75rem 0", borderBottom: "1px solid rgba(255,167,167,0.15)" }}>{l.label}</a>
          ))}
          <a href="#kontakt" onClick={() => setOpen(false)} style={{ background: "var(--color-rose)", color: "var(--color-text)", padding: "0.75rem", borderRadius: "9999px", fontWeight: 600, textDecoration: "none", textAlign: "center", marginTop: "0.5rem" }}>Termin buchen</a>
        </div>
      )}
    </header>
  );
}
