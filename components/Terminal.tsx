export default function Terminal() {
  return (
    <section className="section terminal-section">
      <div className="container">
        <div className="terminal-block reveal">
          <div className="terminal-head">
            <span></span><span></span><span></span>
            <div className="terminal-title">gabriel@dev:~$</div>
          </div>
          <div className="terminal-content">
            <div className="terminal-row">gabriel@dev:~$ start-project</div>
            <div className="terminal-row">Initializing project...</div>
            <div className="terminal-bar"><span></span></div>
            <div className="terminal-row">✓ Project ready</div>
            <div className="terminal-row">gabriel@dev:~$</div>
            <a className="site-button terminal-button" href="#contact">Iniciar meu projeto <span aria-hidden="true">→</span></a>
          </div>
        </div>
      </div>
    </section>
  )
}
