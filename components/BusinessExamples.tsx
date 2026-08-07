import { ArrowUpRight, Building2, ChefHat, Scissors, UserRound } from 'lucide-react'

const businessCards = [
  { icon: Building2, title: 'Construção civil', label: 'Serviços · Portfólio · Orçamento · WhatsApp', preview: 'Obra' },
  { icon: ChefHat, title: 'Restaurante', label: 'Cardápio · Informações · Pedido · WhatsApp', preview: 'Cardápio' },
  { icon: Scissors, title: 'Barbearia', label: 'Serviços · Preços · Agendamento · Contato', preview: 'Agenda' },
  { icon: UserRound, title: 'Profissional autônomo', label: 'Serviços · Portfólio · Depoimentos · Contato', preview: 'Perfil' }
]

export default function BusinessExamples() {
  return (
    <section className="section business">
      <div className="container">
        <div className="section-title reveal">
          <div className="eyebrow"><span></span> Seu negócio poderia ter algo assim</div>
          <h2>Seu negócio poderia ter algo assim.</h2>
        </div>
        <div className="business-grid">
          {businessCards.map((item, index) => {
            const Icon = item.icon
            return (
              <article key={item.title} className="business-card card reveal">
                <div className="business-card-head">
                  <span className="icon-badge"><Icon size={26} /></span>
                  <span className="business-index">0{index + 1}</span>
                </div>
                <div className="business-preview">
                  <div className="preview-bars"><span></span><span></span><span></span></div>
                  <div className="preview-title">{item.preview}</div>
                  <div className="preview-lines">
                    <span></span><span></span><span></span>
                  </div>
                </div>
                <h3>{item.title}</h3>
                <p>{item.label}</p>
                <a className="text-link" href="#contact">Quero algo parecido <ArrowUpRight size={14} /></a>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
