"use client"

import { useState } from 'react'
import { ArrowRight, BarChart3, CheckCircle2, FormInput, Layout, MessagesSquare, PhoneCall, Send } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'

const demoTabs = ['Landing Page', 'Formulário', 'Dashboard', 'WhatsApp']

export default function InteractiveDemos() {
  const [active, setActive] = useState('Landing Page')

  return (
    <section className="section interactive" id="demos">
      <div className="container">
        <div className="section-title reveal">
          <div className="eyebrow"><span></span> Demonstrações</div>
          <h2>Não precisa imaginar. Experimente.</h2>
          <p>Veja algumas das experiências que posso criar para o seu negócio.</p>
        </div>

        <div className="demo-switcher reveal">
          {demoTabs.map((tab) => (
            <button key={tab} className={`demo-tab ${active === tab ? 'active' : ''}`} onClick={() => setActive(tab)}>{tab}</button>
          ))}
        </div>

        <div className="demo-stage reveal">
          <AnimatePresence mode="wait">
            {active === 'Landing Page' && <LandingDemo key="landing" />}
            {active === 'Formulário' && <FormDemo key="form" />}
            {active === 'Dashboard' && <DashboardDemo key="dashboard" />}
            {active === 'WhatsApp' && <WhatsappDemo key="whatsapp" />}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

function LandingDemo() {
  return (
    <motion.div className="demo-content landing-demo" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.25 }}>
      <div className="demo-left">
        <div className="mini-label">Landing page</div>
        <h3>Sua empresa merece ser encontrada.</h3>
        <p>Uma presença digital profissional começa aqui.</p>
        <button className="site-button">Solicitar orçamento <ArrowRight size={14} /></button>
      </div>
      <div className="demo-right">
        <div className="mock-ui">
          <div className="mock-header">
            <span></span><span></span><span></span>
            <div className="mock-title">campaign-start</div>
          </div>
          <div className="mock-body">
            <div className="mock-card highlight-card">
              <span className="tag">Seu negócio</span>
              <h4>Visibilidade profissional</h4>
              <p>Design, mensagem e conversão em uma experiência coesa.</p>
            </div>
            <div className="mock-card-grid">
              <div className="mini-card"><Layout size={24} />Presença</div>
              <div className="mini-card"><BarChart3 size={24} />Resultado</div>
              <div className="mini-card"><PhoneCall size={24} />Contato</div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

function FormDemo() {
  const [submitted, setSubmitted] = useState(false)
  return (
    <motion.div className="demo-content form-demo" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.25 }}>
      <div className="form-panel">
        <div className="mini-label">Contato rápido</div>
        <h3>Solicite uma conversa</h3>
        <form className="demo-form" onSubmit={(e) => { e.preventDefault(); setSubmitted(true) }}>
          <label><span>Nome</span><input aria-label="Nome" type="text" required placeholder="Seu nome" /></label>
          <label><span>E-mail</span><input aria-label="E-mail" type="email" required placeholder="seu@email.com" /></label>
          <label><span>Mensagem</span><textarea aria-label="Mensagem" required placeholder="Descreva sua necessidade" /></label>
          <button className="site-button" type="submit">Enviar mensagem <Send size={15} /></button>
          {submitted && <div className="success-message"><CheckCircle2 size={19} /> Mensagem enviada com sucesso!</div>}
        </form>
      </div>
    </motion.div>
  )
}

function DashboardDemo() {
  return (
    <motion.div className="demo-content dashboard-demo" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.25 }}>
      <div className="dash-layout">
        <aside className="dash-sidebar">
          <div className="brand-dot">Dashboard</div>
          <div className="nav-stack">
            <span className="active">Visão geral</span>
            <span>Pedidos</span>
            <span>Usuários</span>
            <span>Atividades</span>
            <span>Configurações</span>
          </div>
        </aside>
        <div className="dash-main">
          <div className="dash-top"><h3>Visão geral</h3><button className="site-button secondary small">Filtrar</button></div>
          <div className="dash-cards">
            <article><span>Pedidos</span><strong>13</strong></article>
            <article><span>Usuários</span><strong>28</strong></article>
            <article><span>Atividades</span><strong>08</strong></article>
          </div>
          <div className="chart-panel">
            <div className="chart-lines">
              <span></span><span></span><span></span><span></span><span></span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

function WhatsappDemo() {
  return (
    <motion.div className="demo-content whatsapp-demo" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.25 }}>
      <div className="chat-window">
        <div className="chat-header"><span></span> Atende online</div>
        <div className="chat-body">
          <div className="bubble customer">Olá, gostaria de saber mais sobre os serviços.</div>
          <div className="bubble gabriel">Claro! Como posso ajudar?</div>
          <div className="bubble customer">Gostaria de solicitar um orçamento.</div>
        </div>
        <button className="site-button chat-button">Solicitar orçamento</button>
      </div>
    </motion.div>
  )
}
