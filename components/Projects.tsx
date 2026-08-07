import { ExternalLink, FolderCode, GitFork } from 'lucide-react'

export default function Projects() {
  return (
    <section className="section projects" id="projects">
      <div className="container">
        <div className="section-title reveal">
          <div className="eyebrow"><span></span> Projetos reais</div>
          <h2>Projetos reais.</h2>
          <p>Alguns dos projetos que desenvolvi.</p>
        </div>

        <div className="project-grid">
          <article className="project-card project-feature card reveal">
            <div className="project-image">
              <div className="project-image-overlay">
                <div className="image-code-lines">
                  <span></span><span></span><span></span>
                </div>
                <div className="project-label">Anderson — Serviços Gerais</div>
              </div>
            </div>
            <div className="project-content">
              <div className="project-meta"><span>Landing page</span><span>Next.js</span></div>
              <h3>Anderson — Serviços Gerais</h3>
              <p>Landing page profissional para prestador de serviços.</p>
              <div className="tech-tags">
                <span>React</span><span>SEO</span><span>WhatsApp</span>
              </div>
              <a className="text-link" href="#contact">Ver projeto <ExternalLink size={14} /></a>
            </div>
          </article>

          <article className="project-card project-card-simple card reveal">
            <div className="project-content compact">
              <div className="project-icon"><FolderCode size={34} /></div>
              <h3>Estrutura preparada</h3>
              <p>Espaço para destacar projetos reais com screenshot, descrição, tecnologias e links.</p>
              <a className="text-link" href="#contact">Solicitar projeto <ExternalLink size={14} /></a>
            </div>
          </article>

          <article className="project-card project-card-simple card reveal">
            <div className="project-content compact">
              <div className="project-icon"><GitFork size={34} /></div>
              <h3>Code quality</h3>
              <p>Implementação com foco em estrutura, performance e experiência de usuário.</p>
              <a className="text-link" href="#contact">Discussão técnica <ExternalLink size={14} /></a>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
