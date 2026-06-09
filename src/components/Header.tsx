"use client";

import { useState, useEffect } from "react";
import { Menu, X, PhoneCall } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Inicio", href: "/" },
    { label: "Quiénes Somos", href: "/quienes-somos" },
    { label: "Servicios", href: "/servicios" },
    { label: "Proyectos", href: "/proyectos" },
    { label: "Clientes", href: "/clientes" },
    { label: "Blog", href: "/blog" },
    { label: "Contacto", href: "/contacto" },
  ];

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${
          scrolled
            ? "py-3 bg-black/85 backdrop-blur-md border-b border-dicssa-yellow/20"
            : "py-6 bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo DICSSA */}
          <a href="/" className="flex items-center group" aria-label="DICSSA Infraestructura — Inicio">
            <div className="bg-white rounded-lg px-3 py-2 shadow-md shadow-black/30 ring-1 ring-white/10 transition-transform duration-300 group-hover:scale-[1.03]">
              <Image
                src="/images/logo.png"
                alt="DICSSA Infraestructura"
                width={140}
                height={55}
                priority
                className={`w-auto transition-all duration-300 ${scrolled ? "h-7" : "h-9"}`}
              />
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                className="text-xs font-sans font-extrabold uppercase tracking-widest text-dicssa-gray-light hover:text-dicssa-yellow transition-colors relative py-1 group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-dicssa-yellow group-hover:w-full transition-all duration-350" />
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center space-x-3">
            <a
              href="tel:5525897307"
              aria-label="Llamar a DICSSA"
              className="flex items-center justify-center w-9 h-9 text-white bg-dicssa-dark-gray hover:bg-white/10 rounded-full border border-white/10 transition-all duration-300"
            >
              <PhoneCall className="w-4 h-4" />
            </a>
            <a
              href="/cotizacion"
              className="flex items-center space-x-2 text-xs font-sans font-black uppercase tracking-widest text-black bg-dicssa-yellow hover:bg-dicssa-yellow-bright px-5 py-2.5 rounded-full transition-all duration-300 hover:scale-[1.04]"
            >
              <span>Cotizar</span>
            </a>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="lg:hidden p-2 text-white hover:text-dicssa-yellow transition-colors"
            aria-label="Abrir Menú"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </motion.header>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-[101] bg-black flex flex-col justify-between"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", ease: "easeInOut", duration: 0.4 }}
          >
            {/* Header in mobile menu */}
            <div className="p-6 flex items-center justify-between border-b border-white/10">
              <div className="bg-white rounded-lg px-2.5 py-1.5">
                <Image src="/images/logo.png" alt="DICSSA Infraestructura" width={120} height={47} className="h-7 w-auto" />
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-white hover:text-dicssa-yellow transition-colors"
                aria-label="Cerrar Menú"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Menu links list */}
            <nav className="flex flex-col items-center justify-center space-y-6 px-6 py-12 flex-grow">
              {navItems.map((item, idx) => (
                <motion.a
                  key={idx}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-display tracking-widest font-black uppercase text-white hover:text-dicssa-yellow transition-colors"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                >
                  {item.label}
                </motion.a>
              ))}
            </nav>

            {/* Call Action in bottom of mobile menu */}
            <div className="p-6 border-t border-white/10 flex flex-col space-y-4">
              <a
                href="tel:5525897307"
                className="flex items-center justify-center space-x-3 text-sm font-mono font-bold text-black bg-dicssa-yellow py-3.5 rounded-lg w-full transition-transform active:scale-[0.98]"
              >
                <PhoneCall className="w-4 h-4" />
                <span>LLAMAR A DICSSA</span>
              </a>
              <p className="text-[10px] text-center text-dicssa-gray font-mono">
                CONSTRUCCIÓN VIAL Y EDIFICACIÓN - MÉXICO
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
