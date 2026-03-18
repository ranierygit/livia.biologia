"use client";

import { useState, useEffect } from "react";
import { Leaf, Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Início", href: "#" },
    { name: "Sobre", href: "#sobre" },
    { name: "Serviços", href: "#servicos" },
    { name: "Benefícios", href: "#beneficios" },
    { name: "Área de Atuação", href: "#area" },
    { name: "Fale com a Bio IA", href: "#bio-ia" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-surface/80 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <a href="#" className="flex items-center gap-2 group">
          <Leaf className="w-6 h-6 text-primary transition-transform group-hover:scale-110" />
          <span className="font-display font-semibold text-2xl text-text tracking-tight">
            Lívia Oliveira
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden xl:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-muted hover:text-primary transition-colors text-sm font-medium"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contato"
            className="ml-4 bg-primary hover:bg-primary/90 text-white px-5 py-2.5 rounded-full text-sm font-medium transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5"
          >
            Solicitar Contato
          </a>
        </nav>

        {/* Mobile menu button */}
        <button
          className="xl:hidden p-2 text-text"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="xl:hidden absolute top-full left-0 w-full bg-surface shadow-lg border-t border-sand/50 py-4">
          <nav className="flex flex-col px-4 gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-text hover:text-primary transition-colors font-medium p-2 rounded-lg hover:bg-leaf"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contato"
              onClick={() => setMobileMenuOpen(false)}
              className="bg-primary text-white text-center px-4 py-3 rounded-xl font-medium mt-2"
            >
              Solicitar Contato
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
