import { AtSign, Briefcase, GitFork, Globe, MessageCircle } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="container footer-grid">
        <div>
          <h3>Gabriel Ferreira</h3>
          <p>Desenvolvedor Web Freelancer</p>
        </div>
        <div className="footer-links">
          <a href="https://github.com" target="_blank" rel="noreferrer"><GitFork size={16} /> GitHub</a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer"><AtSign size={16} /> Instagram</a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer"><Briefcase size={16} /> LinkedIn</a>
          <a href="https://wa.me/5511999999999" target="_blank" rel="noreferrer"><MessageCircle size={16} /> WhatsApp</a>
        </div>
        <div className="footer-copy">© 2026 Gabriel Ferreira</div>
      </div>
      <div className="container footer-bottom">
        <span>Construído com código, café e atenção aos detalhes.</span>
      </div>
    </footer>
  )
}
