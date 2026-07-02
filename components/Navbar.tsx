"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

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
        backgroundColor: scrolled ? "rgba(15,56,78,0.9)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,167,167,0.2)" : "none",
        boxShadow: scrolled ? "0 2px 20px rgba(255,167,167,0.12)" : "none",
    };

    return (
        <header style={headerStyle}>
            <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1.5rem", display: "flex", alignItems: "center", justifyContent: "space-between", height: "4.5rem" }}>

                {/* Logo */}
                <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "0.75rem" }}>
                    <Image src="/pics/mb-logo.jpg" alt="MB-Kosmetik Logo" width={40} height={40} style={{ objectFit: "contain" }} />
                    <div>
                        <div style={{ fontFamily: "var(--font-display)", fontSize: "1.5rem", fontWeight: 600, color: "#CCAF85", letterSpacing: "-0.02em", lineHeight: 1 }}>MB-Kosmetik</div>
                        <div style={{ fontSize: "0.6rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#CCAF85", lineHeight: 1 }}>Beauty Salon</div>
                    </div>
                </Link>

                {/* Desktop Navigation — nur ab 769px sichtbar */}
                <nav className="desktop-nav" style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
                    {navLinks.map((l) => (
                        <a key={l.href} href={l.href}
                            style={{ fontSize: "0.9rem", color: "#CCAF85", textDecoration: "none", fontWeight: 500, transition: "color var(--transition)" }}
                            onMouseOver={(e) => (e.currentTarget.style.color = "var(--color-rose-dark)")}
                            onMouseOut={(e) => (e.currentTarget.style.color = "#CCAF85")}
                        >{l.label}</a>
                    ))}
                </nav>

                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>

                    {/* Termin Button — nur ab 769px sichtbar */}
                    <a href="#kontakt" className="desktop-cta" style={{
                        background: "#0F384E", color: "#CCAF85", padding: "0.5rem 1.25rem",
                        borderRadius: "9999px", fontSize: "0.875rem", fontWeight: 600, textDecoration: "none",
                        boxShadow: "var(--shadow-sm)", transition: "all var(--transition)",
                    }}
                        onMouseOver={(e) => { (e.currentTarget as HTMLElement).style.background = "#154F6E"; }}
                        onMouseOut={(e) => { (e.currentTarget as HTMLElement).style.background = "#0F384E"; }}
                    >Termin buchen</a>

                    {/* Hamburger Button — nur auf Mobile sichtbar */}
                    <button
                        onClick={() => setOpen(!open)}
                        className="mobile-menu-btn"
                        aria-label="Menü öffnen"
                        style={{ display: "none", padding: "0.5rem", color: "#CCAF85", background: "none", border: "none", cursor: "pointer" }}
                    >
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            {open
                                ? <><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></>
                                : <><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" /></>
                            }
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Dropdown Menü */}
            {open && (
                <div style={{
                    background: "rgba(15,56,78,0.98)", backdropFilter: "blur(16px)",
                    padding: "1.5rem", borderTop: "1px solid rgba(255,167,167,0.2)",
                    display: "flex", flexDirection: "column", gap: "0",
                }}>
                    {navLinks.map((l) => (
                        <a key={l.href} href={l.href} onClick={() => setOpen(false)} style={{
                            fontSize: "1rem", color: "#CCAF85", textDecoration: "none",
                            fontWeight: 500, padding: "1rem 0",
                            borderBottom: "1px solid rgba(255,167,167,0.15)", display: "block",
                        }}>{l.label}</a>
                    ))}
                    <a href="#kontakt" onClick={() => setOpen(false)} style={{
                        background: "#CCAF85", color: "#0F384E", padding: "0.875rem",
                        borderRadius: "9999px", fontWeight: 600, textDecoration: "none",
                        textAlign: "center", marginTop: "1rem", display: "block",
                    }}>Termin buchen</a>
                </div>
            )}

            {/* Media Query — steuert Desktop vs. Mobile Sichtbarkeit */}
            <style>{`
        @media (max-width: 768px) {
          .desktop-nav  { display: none !important; }
          .desktop-cta  { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
        @media (min-width: 769px) {
          .mobile-menu-btn { display: none !important; }
        }
      `}</style>
        </header>
    );
}