import { ArrowRight, MessageCircle } from 'lucide-react'

export default function CTABlock() {
  return (
    <section className="section cta-block">
      <div className="container cta-panel reveal">
        <div className="cta-content">
          <div className="eyebrow"><span></span> Vamos conversar</div>
          <h2>Vamos criar algo que represente o seu negócio?</h2>
          <p>Seu próximo site pode começar com uma conversa.</p>
          <a className="site-button" href="https://wa.me/5511999999999" target="_blank" rel="noreferrer">Falar comigo no WhatsApp <ArrowRight size={14} /></a>
        </div>
        <div className="cta-icon">
          <MessageCircle size={86} />
        </div>
      </div>
    </section>
  )
}
