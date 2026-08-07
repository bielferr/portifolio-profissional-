export default function About() {
  return (
    <section className="section about" id="about">
      <div className="container about-grid">
        <div className="about-photo reveal">
          <div className="photo-placeholder">
            <div className="avatar-ring">
              <div className="avatar-core">
                <span>GF</span>
              </div>
            </div>
          </div>
        </div>
        <div className="about-copy reveal">
          <div className="eyebrow"><span></span> Sobre</div>
          <h2>Quem está por trás do código?</h2>
          <p>Sou Gabriel Ferreira, desenvolvedor web freelancer apaixonado por criar experiências digitais modernas, rápidas e funcionais.</p>
          <p>Meu foco é transformar ideias em presença digital clara, profissional e com capacidade real de gerar conexão com o cliente.</p>
          <a className="site-button secondary" href="#contact">Falar com Gabriel</a>
        </div>
      </div>
    </section>
  )
}
