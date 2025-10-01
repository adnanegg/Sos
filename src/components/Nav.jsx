"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Nav() {
  const [isResponsive, setIsResponsive] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const onEsc = (e) => {
      if (e.key === "Escape") {
        setServicesOpen(false);
        setIsResponsive(false);
      }
    };
    window.addEventListener("keydown", onEsc);
    return () => window.removeEventListener("keydown", onEsc);
  }, []);

  return (
    <nav>
      <div className="logo">
        <Link href="/"><img src="/logo.svg" alt="logo" /></Link>
      </div>

      <div className="links">
        <Link href="/">Acceuil</Link>
        <div
          className="services-dropdown"
          onMouseEnter={() => setServicesOpen(true)}
          onMouseLeave={() => setServicesOpen(false)}
        >
          <button className="services-trigger" onClick={() => setServicesOpen(!servicesOpen)}>
            Nos Services <i className={servicesOpen ? "fa fa-chevron-up" : "fa fa-chevron-down"}></i>
          </button>
          {servicesOpen && (
            <div className="services-menu">
              <Link href="/services/transport-medicalise">Transport médicalisé</Link>
              <Link href="/services/intervention-urgence">Intervention d'urgence</Link>
              <Link href="/services/assistance-patients">Assistance aux patients</Link>
            </div>
          )}
        </div>
        <Link href="/faq">FAQ</Link>
        <Link href="/contact">Contact</Link>
      </div>

      <div className="call">
        <a href="tel:+2120656561701">Appeler Maintenant</a>
      </div>

      <div className="toggle" onClick={() => setIsResponsive(!isResponsive)}>
        <i className={isResponsive ? "fa fa-times" : "fa fa-bars"}></i>
      </div>

      {isResponsive && (
        <div className="dropdown" onClick={() => setIsResponsive(false)}>
          <Link href="/">Acceuil</Link>
          <div className="dropdown-group">
            <span className="group-title">Nos Services</span>
            <Link href="/services/transport-medicalise">Transport médicalisé</Link>
            <Link href="/services/intervention-urgence">Intervention d'urgence</Link>
            <Link href="/services/assistance-patients">Assistance aux patients</Link>
          </div>
          <Link href="/faq">FAQ</Link>
          <a className="btn" href="tel:+2120656561701">Appeler Maintenant</a>
        </div>
      )}
    </nav>
  );
}


