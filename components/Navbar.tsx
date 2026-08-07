"use client"

import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`navbar ${isScrolled ? 'is-scrolled' : ''}`}> 
      <div className="container nav-container">
        <a className="brand" href="#home" aria-label="Gabriel Ferreira home">
          Gabriel
        </a>

        <nav className="desktop-nav" aria-label="Navegação principal">
          <a className="nav-link" href="#about">Sobre</a>
          <a className="nav-link" href="#services">Serviços</a>
          <a className="nav-link" href="#demos">Demos</a>
          <a className="nav-link" href="#projects">Projetos</a>
          <a className="nav-link" href="#contact">Contato</a>
        </nav>

        <div className="nav-actions">
          <a className="nav-cta" href="#contact">Solicitar orçamento</a>
          <button className="mobile-menu" aria-label="Abrir menu" aria-expanded={mobileOpen} onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="mobile-panel">
          <a href="#about" onClick={() => setMobileOpen(false)}>Sobre</a>
          <a href="#services" onClick={() => setMobileOpen(false)}>Serviços</a>
          <a href="#demos" onClick={() => setMobileOpen(false)}>Demos</a>
          <a href="#projects" onClick={() => setMobileOpen(false)}>Projetos</a>
          <a href="#contact" onClick={() => setMobileOpen(false)}>Contato</a>
          <a className="nav-cta mobile-cta" href="#contact" onClick={() => setMobileOpen(false)}>Solicitar orçamento</a>
        </div>
      )}
    </header>
  )
}
