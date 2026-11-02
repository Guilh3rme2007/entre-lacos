import { useState } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import { AppShell } from '../components/AppShell'
import {
  issueCategories,
  youngCalls,
  youngNav,
  youngSkills,
} from '../data/mockData'

export function YoungShell({ setFontScale, setHighContrast, fontScale }) {
  return (
    <AppShell
      profile="jovem"
      navItems={youngNav}
      title="Jovem / Prestador"
      setFontScale={setFontScale}
      setHighContrast={setHighContrast}
      fontScale={fontScale}
    >
      <Routes>
        <Route index element={<YoungDashboard />} />
        <Route path="chamados" element={<YoungRequestsPage />} />
        <Route path="atendimento" element={<ChatPage profile="jovem" />} />
        <Route path="gamificacao" element={<GamificationPage />} />
        <Route path="comprovante" element={<CertificatePage />} />
        <Route path="habilidades" element={<SkillsPage />} />
        <Route path="comunidade" element={<CommunityPage />} />
      </Routes>
    </AppShell>
  )
}

function YoungDashboard() {
  const [online, setOnline] = useState(true)

  return (
    <div className="page-grid">
      <section className="hero-panel dashboard-card">
        <div>
          <span className="eyebrow">Olá, Lívia</span>
          <h3>Hoje você está {online ? 'online' : 'offline'}.</h3>
        </div>
        <button type="button" className="primary-button" onClick={() => setOnline((value) => !value)}>
          {online ? 'Definir como offline' : 'Conectar online'}
        </button>
      </section>

      <div className="stats-grid three-up">
        <div className="metric-card">
          <span>Atendimentos realizados</span>
          <strong>124</strong>
        </div>
        <div className="metric-card">
          <span>Horas de voluntariado</span>
          <strong>86h</strong>
        </div>
        <div className="metric-card">
          <span>Avaliação média</span>
          <strong>4.9</strong>
        </div>
      </div>

      <div className="content-grid two-col">
        <section className="panel-block">
          <div className="panel-header">
            <h4>Chamados disponíveis</h4>
            <Link to="/jovem/chamados" className="link-button">Abrir fila</Link>
          </div>
          <div className="ticket-list compact">
            {youngCalls.slice(0, 2).map((item) => (
              <div key={item.id} className="ticket-item">
                <div>
                  <strong>{item.category}</strong>
                  <small>{item.participant}</small>
                </div>
                <span className="status-pill pending">{item.priority}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="panel-block">
          <div className="panel-header">
            <h4>Medalhas e conquistas</h4>
          </div>
          <div className="badge-row">
            <span className="badge">⭐ Mestre do WhatsApp</span>
            <span className="badge">🛡️ Cuidador digital</span>
            <span className="badge">🏆 Voluntário destacado</span>
          </div>
        </section>
      </div>
    </div>
  )
}

function YoungRequestsPage() {
  const [filter, setFilter] = useState('Todos')
  const [selected, setSelected] = useState(null)

  const filteredCalls = filter === 'Todos' ? youngCalls : youngCalls.filter((item) => item.category === filter)

  return (
    <div className="page-grid">
      <section className="panel-block">
        <div className="panel-header">
          <h3>Central de solicitações</h3>
          <select value={filter} onChange={(event) => setFilter(event.target.value)}>
            <option>Todos</option>
            {issueCategories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        <div className="request-grid">
          {filteredCalls.map((call) => (
            <article key={call.id} className={`request-card ${selected?.id === call.id ? 'selected' : ''}`}>
              <div className="request-card-head">
                <span className="status-pill pending">{call.priority}</span>
                <span className="match-pill">{call.match}</span>
              </div>
              <h4>{call.category}</h4>
              <p>{call.description}</p>
              <small>{call.participant} • {call.date}</small>
              <button type="button" className="primary-button small" onClick={() => setSelected(call)}>
                {selected?.id === call.id ? 'Selecionado' : 'Detalhes'}
              </button>
            </article>
          ))}
        </div>

        {selected && (
          <div className="accept-panel">
            <div>
              <strong>{selected.id}</strong>
              <p>{selected.description}</p>
            </div>
            <div className="two-actions">
              <button type="button" className="ghost-button small">Voltar</button>
              <Link to="/jovem/atendimento" className="primary-button small">Aceitar atendimento</Link>
            </div>
          </div>
        )}
      </section>
    </div>
  )
}

function ChatPage({ profile }) {
  const [messages, setMessages] = useState([
    { sender: 'idoso', text: 'Bom dia! Não consigo mandar as fotos para minha filha.', time: '09:12' },
    { sender: 'prestador', text: 'Claro, vamos abrir o WhatsApp e clicar no ícone de clipe.', time: '09:13' },
    { sender: 'idoso', text: 'Preciso de ajuda para escolher a foto certa.', time: '09:13' },
    { sender: 'prestador', text: 'Posso te mostrar como enviar em seguida; também posso te dar uma resposta rápida.', time: '09:14' },
  ])
  const [draft, setDraft] = useState('')

  const sendMessage = () => {
    if (!draft.trim()) return
    setMessages((current) => [...current, { sender: profile, text: draft, time: 'Agora' }])
    setDraft('')
  }

  return (
    <div className="page-grid">
      <section className="panel-block chat-panel">
        <div className="panel-header">
          <div>
            <h3>Atendimento em andamento</h3>
            <small>{profile === 'idoso' ? 'Com Lívia Souza' : 'Com Maria do Carmo'}</small>
          </div>
          <span className="warning-banner">Alerta de inatividade: 25 min • Encerramento automático: 30 min</span>
        </div>

        <div className="chat-thread" aria-live="polite">
          {messages.map((message, index) => (
            <div key={`${message.time}-${index}`} className={`message ${message.sender === profile ? 'mine' : 'other'}`}>
              <span>{message.text}</span>
              <small>{message.time}</small>
            </div>
          ))}
        </div>

        <div className="quick-replies">
          <button type="button" className="ghost-button small">Preciso repetir</button>
          <button type="button" className="ghost-button small">Mostrar passo a passo</button>
          <button type="button" className="ghost-button small">Posso enviar a foto agora</button>
        </div>

        <div className="chat-actions">
          <button type="button" className="secondary-button small">Chamada de voz</button>
          <button type="button" className="secondary-button small">Compartilhar tela</button>
          <button type="button" className="secondary-button small">Pausar atendimento</button>
          <button type="button" className="secondary-button small">Transferir</button>
        </div>

        <div className="chat-composer">
          <input value={draft} onChange={(event) => setDraft(event.target.value)} placeholder="Digite sua mensagem..." />
          <button type="button" className="primary-button" onClick={sendMessage}>Enviar</button>
        </div>
      </section>
    </div>
  )
}

function GamificationPage() {
  return (
    <div className="page-grid">
      <section className="panel-block">
        <div className="panel-header">
          <h3>Gamificação</h3>
        </div>
        <div className="stats-grid four-up">
          <div className="metric-card"><span>Pontuação</span><strong>1.430</strong></div>
          <div className="metric-card"><span>Medalhas</span><strong>08</strong></div>
          <div className="metric-card"><span>Chamados resolvidos</span><strong>114</strong></div>
          <div className="metric-card"><span>Ranking</span><strong>#6</strong></div>
        </div>
      </section>
    </div>
  )
}

function CertificatePage() {
  return (
    <div className="page-grid">
      <section className="panel-block">
        <div className="panel-header">
          <h3>Comprovante de voluntariado</h3>
        </div>
        <div className="certificate-box">
          <p>Período:</p>
          <strong>01/08/2026 - 31/10/2026</strong>
          <button type="button" className="primary-button">Baixar PDF</button>
        </div>
      </section>
    </div>
  )
}

function SkillsPage() {
  return (
    <div className="page-grid">
      <section className="panel-block">
        <div className="panel-header">
          <h3>Habilidades técnicas</h3>
        </div>
        <div className="badge-row large">
          {youngSkills.map((skill) => (
            <span key={skill} className="badge skill-badge">{skill}</span>
          ))}
        </div>
      </section>
    </div>
  )
}

function CommunityPage() {
  return (
    <div className="page-grid">
      <section className="panel-block">
        <div className="panel-header">
          <h3>Fórum da comunidade</h3>
          <button type="button" className="secondary-button small">Novo tópico</button>
        </div>
        <div className="community-list">
          <div className="community-item">
            <strong>Como explicar o WhatsApp para idosos sem pressa?</strong>
            <small>12 comentários • 3 curtidas</small>
          </div>
          <div className="community-item">
            <strong>Dicas para configurar celulares com voz alta</strong>
            <small>8 comentários • 5 curtidas</small>
          </div>
        </div>
      </section>
    </div>
  )
}
