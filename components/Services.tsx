import { ArrowUpRight, Blocks, Code, LayoutTemplate, MessageCircle, MonitorUp } from 'lucide-react'

const services = [
  { icon: LayoutTemplate, title: 'Landing Pages', description: 'Sites focados em apresentação, conversão e geração de contatos.' },
  { icon: BuildingIcon, title: 'Sites Institucionais', description: 'Presença profissional para empresas e negócios.' },
  { icon: UserRoundIcon, title: 'Portfólios', description: 'Sites para profissionais mostrarem seus trabalhos.' },
  { icon: DatabaseIcon, title: 'Sistemas Web', description: 'Interfaces e sistemas personalizados para necessidades específicas.' },
  { icon: PlugIcon, title: 'Integrações', description: 'WhatsApp, formulários, APIs e outras integrações.' }
]

function BuildingIcon(props: any) { return <Blocks {...props} /> }
function UserRoundIcon(props: any) { return <MessageCircle {...props} /> }
function DatabaseIcon(props: any) { return <Code {...props} /> }
function PlugIcon(props: any) { return <MonitorUp {...props} /> }

export default function Services() {
  return (
    <section className="section services" id="services">
      <div className="container">
        <div className="section-title reveal">
          <div className="eyebrow"><span></span> O que eu posso criar para você</div>
          <h2>O que eu posso criar para você.</h2>
          <p>Soluções digitais pensadas para transformar sua presença online.</p>
        </div>
        <div className="service-grid">
          {services.map((service, i) => {
            const Icon = service.icon
            return (
              <article key={service.title} className="service-card card reveal">
                <div className="card-top">
                  <span className="icon-badge"><Icon size={26} /></span>
                  <span className="index">0{i + 1}</span>
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <a href="#contact" className="text-link">Entender essa necessidade <ArrowUpRight size={16} /></a>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
