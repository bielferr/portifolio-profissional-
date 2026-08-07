"use client"

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  { q: 'Quanto custa um site?', a: 'O custo depende do escopo, estrutura, integrações e complexidade. Para um orçamento alinhado ao seu negócio, me envie o contexto e eu devolvo uma proposta.' },
  { q: 'Quanto tempo leva?', a: 'O prazo varia conforme o projeto. Landing pages e sites simples podem ser entregues em poucos dias, enquanto projetos com estruturas mais complexas podem demandar mais etapas.' },
  { q: 'O domínio está incluso?', a: 'Domínio e hospedagem podem ser configurados conforme a necessidade do projeto e o plano de hospedagem escolhido.' },
  { q: 'O site funciona no celular?', a: 'Sim. O foco é construir uma experiência responsiva e clara para telas pequenas, tablets e desktops.' },
  { q: 'Posso pedir alterações?', a: 'Sim. Ajustes e refinamentos fazem parte do processo conforme combinado no projeto.' },
  { q: 'Vocês fazem manutenção?', a: 'Sim. Também posso oferecer manutenção e melhorias contínuas como serviço adicional.' }
]

export default function FAQ() {
  const [open, setOpen] = useState(0)

  return (
    <section className="section faq">
      <div className="container faq-layout">
        <div className="section-title reveal">
          <div className="eyebrow"><span></span> FAQ</div>
          <h2>Perguntas frequentes.</h2>
        </div>
        <div className="accordion-list reveal">
          {faqs.map((item, index) => (
            <article className={`faq-item ${open === index ? 'open' : ''}`} key={item.q}>
              <button className="faq-question" aria-expanded={open === index} onClick={() => setOpen(open === index ? -1 : index)}>
                <span>{item.q}</span>
                <ChevronDown size={18} />
              </button>
              <div className="faq-answer">
                <p>{item.a}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
