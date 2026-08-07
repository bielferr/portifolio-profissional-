"use client"

import { ArrowRight, CheckCircle2, Code2, Layers, MonitorSmartphone } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="hero section">
      <div className="container hero-grid">
        <div className="hero-copy reveal">
          <div className="eyebrow"><span></span> Desenvolvedor web freelancer</div>
          <h1 className="hero-title">GABRIEL FERREIRA</h1>
          <h2 className="sub-title">Desenvolvedor Web Freelancer</h2>
          <h3 className="hero-headline">Sites que fazem seu negócio ser levado a sério.</h3>
          <p className="hero-text">Crio sites modernos, rápidos e responsivos para empresas e profissionais que querem construir uma presença digital profissional.</p>
          <div className="hero-actions">
            <a className="site-button" href="#contact">Quero meu site <ArrowRight size={15} /></a>
            <a className="site-button secondary" href="#projects">Ver projetos</a>
          </div>
          <div className="hero-proof">
            <span><CheckCircle2 size={16} /> Design focado em conversão</span>
            <span><CheckCircle2 size={16} /> Site responsivo</span>
            <span><CheckCircle2 size={16} /> Código otimizado</span>
          </div>
        </div>

        <motion.aside className="hero-visual reveal" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <div className="code-window floating-panel">
            <div className="window-top">
              <div className="dots"><span></span><span></span><span></span></div>
              <div className="window-title">project://gabriel.dev</div>
            </div>
            <div className="window-content">
              <div className="code-line"><span className="code-key">const</span> website = {'{'}</div>
              <div className="code-line indent">design: <span className="code-string">"modern"</span>,</div>
              <div className="code-line indent">responsive: <span className="code-boolean">true</span>,</div>
              <div className="code-line indent">performance: <span className="code-string">"high"</span>,</div>
              <div className="code-line">{' }'}</div>
              <div className="terminal-status">
                <CheckCircle2 size={15} /> Build successful
              </div>
            </div>
            <div className="mini-chip chip-one"><Code2 size={13} /> front-end</div>
            <div className="mini-chip chip-two"><MonitorSmartphone size={13} /> responsive</div>
            <div className="mini-chip chip-three"><Layers size={13} /> strategy</div>
          </div>
        </motion.aside>
      </div>
    </section>
  )
}
