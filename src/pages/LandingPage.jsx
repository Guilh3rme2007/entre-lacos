import { Link } from 'react-router-dom'

export function LandingPage({ setFontScale, setHighContrast }) {
  return (
    <div className="landing-page">
      <header className="landing-header">
        <div className="brand-block">
          <span className="brand-mark">EL</span>
          <div>
            <strong>Entre Laços</strong>
            <small>Conexão humana para a inclusão digital</small>
          </div>
        </div>
        <div className="accessibility-inline">
          <button type="button" className="mini-button" onClick={() => setFontScale((value) => Number((value - 0.1).toFixed(1)))}>
            A-
          </button>
          <button type="button" className="mini-button" onClick={() => setFontScale((value) => Number((value + 0.1).toFixed(1)))}>
            A+
          </button>
          <button type="button" className="mini-button" onClick={() => setHighContrast((value) => !value)}>
            Alto contraste
          </button>
        </div>
      </header>

      <main className="landing-hero">
        <div className="hero-copy">
          <span className="eyebrow">Acesso com acolhimento</span>
          <h1>Ajuda digital segura, simples e humana para quem mais precisa.</h1>
          <p>
            A plataforma conecta idosos, jovens prestadores e administradores em um ambiente acolhedor,
            acessível e pensado para fortalecer a autonomia digital.
          </p>
          <div className="hero-actions">
            <Link to="/idoso" className="primary-button">Entrar como Idoso</Link>
            <Link to="/jovem" className="secondary-button">Entrar como Jovem</Link>
            <Link to="/admin" className="ghost-button">Entrar como Administrador</Link>
          </div>
        </div>

        <div className="hero-panel">
          <div className="floating-card card-success">
            <span className="status-dot" />
            18 atendimentos em andamento
          </div>
          <div className="feature-grid">
            <div className="feature-tile">
              <strong>1.8k</strong>
              <span>Idosos apoiados</span>
            </div>
            <div className="feature-tile">
              <strong>94%</strong>
              <span>Satisfação</span>
            </div>
            <div className="feature-tile">
              <strong>320</strong>
              <span>Voluntários</span>
            </div>
            <div className="feature-tile">
              <strong>24h</strong>
              <span>Resposta média</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
