import { Link, NavLink } from 'react-router-dom'
import { readAloud } from '../data/mockData'

export function AppShell({ profile, navItems, title, children, setFontScale, setHighContrast, fontScale }) {
  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="sidebar-brand">
          <span className="brand-mark">EL</span>
          <div>
            <strong>Entre Laços</strong>
            <small>Portal {title}</small>
          </div>
        </div>

        <nav className="sidebar-nav" aria-label="Menu de navegação">
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} end={item.to === '/idoso' || item.to === '/jovem' || item.to === '/admin'}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="sidebar-footer">
          <button type="button" className="mini-button" onClick={() => setFontScale((value) => Number((value - 0.1).toFixed(1)))}>
            A-
          </button>
          <button type="button" className="mini-button" onClick={() => setFontScale((value) => Number((value + 0.1).toFixed(1)))}>
            A+
          </button>
          <button type="button" className="mini-button" onClick={() => setHighContrast((value) => !value)}>
            Contraste
          </button>
          <span className="font-size-readout">Fonte {fontScale.toFixed(1)}x</span>
        </div>
      </aside>

      <div className="main-panel">
        <header className="topbar">
          <div>
            <p className="crumb">Painel de demonstração</p>
            <h2>{title}</h2>
          </div>
          <div className="topbar-actions">
            <button type="button" className="ghost-button small" onClick={() => readAloud('Painel do ' + profile)}>
              Leitura em voz alta
            </button>
            <Link to="/" className="secondary-button small">Voltar ao início</Link>
          </div>
        </header>
        {children}
      </div>
    </div>
  )
}
