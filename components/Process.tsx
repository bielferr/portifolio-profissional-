import { ArrowRight, Check } from 'lucide-react'

const steps = [
  { number: '01', title: 'Você me chama.', text: 'Você entra em contato com uma ideia, necessidade ou objetivo.' },
  { number: '02', title: 'Entendemos seu negócio.', text: 'Entendo seu público, oferta e principais objetivos de conversão.' },
  { number: '03', title: 'Planejamos o projeto.', text: 'Definimos estrutura, conteúdo, layout e prioridades.' },
  { number: '04', title: 'Eu desenvolvo.', text: 'Crio uma interface moderna com foco em velocidade e clareza.' },
  { number: '05', title: 'Você aprova.', text: 'Você revisa a solução com ajustes e refinamentos.' },
  { number: '06', title: 'Seu site vai para o ar.', text: 'Coloco o projeto em produção com atenção ao deploy.' }
]

export default function Process() {
  return (
    <section className="section process">
      <div className="container">
        <div className="section-title reveal">
          <div className="eyebrow"><span></span> Como funciona</div>
          <h2>Do primeiro contato ao site no ar.</h2>
        </div>
        <div className="timeline-wrapper reveal">
          <div className="timeline">
            {steps.map((step) => (
              <article key={step.number} className="timeline-step">
                <div className="step-node">
                  <span>{step.number}</span>
                  <div className="step-line"></div>
                </div>
                <div className="step-content">
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
