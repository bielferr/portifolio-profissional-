import { Code2, Database, Layers, MonitorSmartphone, Network } from 'lucide-react'

const tech = [
  { icon: Code2, title: 'Next.js', label: 'Aplicações modernas' },
  { icon: Network, title: 'React', label: 'Componentização' },
  { icon: Layers, title: 'TypeScript', label: 'Tipo seguro' },
  { icon: MonitorSmartphone, title: 'Tailwind CSS', label: 'Design rápido' },
  { icon: Code2, title: 'Node.js', label: 'Integrações' },
  { icon: Database, title: 'PostgreSQL', label: 'Dados' }
]

export default function Technologies() {
  return (
    <section className="section technology">
      <div className="container tech-layout">
        <div className="section-title reveal">
          <div className="eyebrow"><span></span> Tecnologia por trás da experiência</div>
          <h2>Tecnologia por trás da experiência.</h2>
        </div>
        <div className="tech-grid reveal">
          {tech.map((item) => {
            const Icon = item.icon
            return (
              <article key={item.title} className="tech-card">
                <span className="tech-icon"><Icon size={26} /></span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.label}</p>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
