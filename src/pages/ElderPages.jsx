import { useState } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import { AppShell } from '../components/AppShell'
import {
  contactOptions,
  elderHistory,
  elderRequests,
  issueCategories,
  notificationList,
  tutorialLibrary,
  chatMessages,
  elderNav,
} from '../data/mockData'

export function ElderShell({ setFontScale, setHighContrast, fontScale }) {
  return (
    <AppShell
      profile="idoso"
      navItems={elderNav}
      title="Idoso / Solicitante"
      setFontScale={setFontScale}
      setHighContrast={setHighContrast}
      fontScale={fontScale}
    >
      <Routes>
        <Route index element={<ElderDashboard />} />
        <Route path="solicitar-ajuda" element={<RequestHelpPage />} />
        <Route path="acompanhamento" element={<ElderTicketsPage />} />
        <Route path="chat" element={<ChatPage profile="idoso" />} />
        <Route path="historico" element={<HistoryPage />} />
        <Route path="agendamento" element={<SchedulingPage />} />
        <Route path="tutoriais" element={<KnowledgePage />} />
        <Route path="acessibilidade" element={<AccessibilityPage />} />
        <Route path="contato-confianca" element={<TrustContactPage />} />
      </Routes>
    </AppShell>
  )
}

function ElderDashboard() {
  return (
    <div className="page-grid">
      <section className="hero-panel dashboard-card">
        <div>
          <span className="eyebrow">Olá, Dona Maria</span>
          <h3>Como posso ajudar hoje?</h3>
        </div>
        <div className="quick-actions">
          <Link to="/idoso/solicitar-ajuda" className="primary-button large">Preciso de Ajuda</Link>
          <Link to="/idoso/agendamento" className="secondary-button large">Agendar Atendimento</Link>
        </div>
      </section>

      <div className="stats-grid three-up">
        <div className="metric-card">
          <span>Atendimentos em andamento</span>
          <strong>02</strong>
        </div>
        <div className="metric-card">
          <span>Últimos atendimentos</span>
          <strong>05</strong>
        </div>
        <div className="metric-card">
          <span>Notificações</span>
          <strong>03</strong>
        </div>
      </div>

      <section className="content-grid two-col">
        <div className="panel-block">
          <div className="panel-header">
            <h4>Resumo dos atendimentos</h4>
            <button type="button" className="ghost-button small">Ver todos</button>
          </div>
          <div className="ticket-list compact">
            {elderRequests.map((item) => (
              <div key={item.id} className="ticket-item">
                <div>
                  <strong>{item.summary}</strong>
                  <small>{item.category}</small>
                </div>
                <span className={`status-pill ${item.status === 'Concluído' ? 'done' : item.status === 'Em andamento' ? 'pending' : ''}`}>
                  {item.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="panel-block">
          <div className="panel-header">
            <h4>Notificações recentes</h4>
          </div>
          <ul className="notification-list">
            {notificationList.map((message) => (
              <li key={message}>{message}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="content-grid two-col">
        <div className="panel-block">
          <div className="panel-header">
            <h4>Base de conhecimento</h4>
            <Link to="/idoso/tutoriais" className="link-button">Abrir biblioteca</Link>
          </div>
          <div className="card-list">
            {tutorialLibrary.slice(0, 3).map((item) => (
              <div key={item.title} className="mini-card">
                <strong>{item.title}</strong>
                <small>{item.category}</small>
              </div>
            ))}
          </div>
        </div>

        <div className="panel-block">
          <div className="panel-header">
            <h4>Contato de confiança</h4>
            <Link to="/idoso/contato-confianca" className="link-button">Gerenciar</Link>
          </div>
          <div className="contact-card">
            <strong>Joana Martins</strong>
            <span>Filha • (11) 99999-1203</span>
            <button type="button" className="primary-button small">Acionar emergência</button>
          </div>
        </div>
      </section>
    </div>
  )
}

function RequestHelpPage() {
  const [form, setForm] = useState({
    category: 'WhatsApp e mensagens',
    description: '',
    voiceNote: 'Mensagem de voz anexada',
    image: 'Captura_WhatsApp.jpg',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
  }

  return (
    <div className="page-grid">
      {!submitted ? (
        <section className="panel-block form-panel">
          <div className="panel-header">
            <h3>Solicitar ajuda</h3>
            <span className="status-pill">Fluxo simples</span>
          </div>

          <div className="request-form">
            <label>
              Categoria de dificuldade
              <select name="category" value={form.category} onChange={handleChange}>
                {issueCategories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </label>

            <label>
              Descreva o problema
              <textarea
                name="description"
                value={form.description}
                onChange={handleChange}
                placeholder="Ex.: Não consigo anexar a foto do meu neto no WhatsApp."
                rows={5}
              />
            </label>

            <div className="inline-actions">
              <button type="button" className="secondary-button small">Gravar voz</button>
              <button type="button" className="secondary-button small">Anexar imagem</button>
            </div>

            <div className="upload-summary">
              <strong>Anexos</strong>
              <span>{form.voiceNote}</span>
              <span>{form.image}</span>
            </div>

            <div className="two-actions">
              <button type="button" className="ghost-button small">Revisar dados</button>
              <button type="button" className="primary-button" onClick={() => setSubmitted(true)}>
                Confirmar solicitação
              </button>
            </div>
          </div>
        </section>
      ) : (
        <section className="panel-block success-box">
          <h3>Solicitação enviada com sucesso!</h3>
          <p>
            Sua demanda foi encaminhada para a fila de atendimento. Você pode acompanhar em “Acompanhamento”.
          </p>
          <div className="success-badges">
            <span>Status: Aguardando atendimento</span>
            <span>Atendimento previsto: 15 minutos</span>
          </div>
          <Link to="/idoso/acompanhamento" className="primary-button">Acompanhar chamado</Link>
        </section>
      )}
    </div>
  )
}

function ElderTicketsPage() {
  return (
    <div className="page-grid">
      <section className="panel-block">
        <div className="panel-header">
          <h3>Acompanhamento de chamados</h3>
          <button type="button" className="ghost-button small">Filtrar</button>
        </div>
        <div className="ticket-list">
          {elderRequests.map((item) => (
            <div key={item.id} className="ticket-item ticket-card">
              <div>
                <strong>{item.id}</strong>
                <span>{item.summary}</span>
              </div>
              <div className="ticket-meta">
                <span>{item.category}</span>
                <span>{item.date}</span>
              </div>
              <div className="ticket-actions">
                <span className={`status-pill ${item.status === 'Concluído' ? 'done' : item.status === 'Em andamento' ? 'pending' : ''}`}>
                  {item.status}
                </span>
                <button type="button" className="secondary-button small">Detalhes</button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

function HistoryPage() {
  return (
    <div className="page-grid">
      <section className="panel-block">
        <div className="panel-header">
          <h3>Histórico de atendimentos</h3>
        </div>
        <div className="history-list">
          {elderHistory.map((item) => (
            <div key={item.id} className="history-item">
              <div>
                <strong>{item.provider}</strong>
                <small>{item.category}</small>
              </div>
              <div className="rating">{'★'.repeat(item.rating)}{'☆'.repeat(5 - item.rating)}</div>
              <span>{item.summary}</span>
              <button type="button" className="ghost-button small">Ver passo a passo</button>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

function SchedulingPage() {
  return (
    <div className="page-grid">
      <section className="panel-block">
        <div className="panel-header">
          <h3>Agendamento</h3>
          <button type="button" className="secondary-button small">Novo agendamento</button>
        </div>
        <div className="calendar-grid">
          <div className="day-box selected">Seg <strong>12</strong></div>
          <div className="day-box">Ter <strong>13</strong></div>
          <div className="day-box">Qua <strong>14</strong></div>
          <div className="day-box">Qui <strong>15</strong></div>
        </div>
        <div className="request-form compact-form">
          <label>
            Horário
            <select defaultValue="14:30">
              <option>14:30</option>
              <option>15:00</option>
              <option>16:00</option>
            </select>
          </label>
          <label>
            Categoria
            <select defaultValue="WhatsApp e mensagens">
              {issueCategories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </label>
          <label>
            Descrição da necessidade
            <textarea rows={3} defaultValue="Preciso aprender a enviar fotos para minha neta." />
          </label>
          <button type="button" className="primary-button">Salvar agendamento</button>
        </div>
      </section>
    </div>
  )
}

function KnowledgePage() {
  return (
    <div className="page-grid">
      <section className="panel-block">
        <div className="panel-header">
          <h3>Base de conhecimento</h3>
          <input type="search" placeholder="Pesquisar tutorial" className="search-input" />
        </div>
        <div className="knowledge-grid">
          {tutorialLibrary.map((item) => (
            <article key={item.title} className="knowledge-card">
              <span className="tag">{item.tag}</span>
              <h4>{item.title}</h4>
              <small>{item.category}</small>
              <button type="button" className="ghost-button small">Assistir</button>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}

function AccessibilityPage() {
  return (
    <div className="page-grid">
      <section className="panel-block">
        <div className="panel-header">
          <h3>Configurações de acessibilidade</h3>
        </div>
        <div className="accessibility-options">
          <button type="button" className="secondary-button large">Aumentar fonte</button>
          <button type="button" className="secondary-button large">Diminuir fonte</button>
          <button type="button" className="secondary-button large">Alto contraste</button>
          <button type="button" className="secondary-button large">Leitura em voz alta</button>
        </div>
      </section>
    </div>
  )
}

function TrustContactPage() {
  return (
    <div className="page-grid">
      <section className="panel-block">
        <div className="panel-header">
          <h3>Contato de confiança</h3>
        </div>
        <div className="contact-list">
          {contactOptions.map((person) => (
            <div key={person.phone} className="contact-card">
              <strong>{person.name}</strong>
              <span>{person.relation}</span>
              <span>{person.phone}</span>
              <span>{person.email}</span>
            </div>
          ))}
        </div>
        <div className="request-form compact-form">
          <label>
            Nome
            <input type="text" defaultValue="Joana Martins" />
          </label>
          <label>
            Telefone
            <input type="tel" defaultValue="(11) 99999-1203" />
          </label>
          <label>
            E-mail
            <input type="email" defaultValue="joana@gmail.com" />
          </label>
          <button type="button" className="primary-button">Salvar contato</button>
        </div>
      </section>
    </div>
  )
}

function ChatPage({ profile }) {
  const [messages, setMessages] = useState(chatMessages)
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
          <button type="button" className="secondary-button small">Contato de confiança</button>
        </div>

        <div className="chat-composer">
          <input value={draft} onChange={(event) => setDraft(event.target.value)} placeholder="Digite sua mensagem..." />
          <button type="button" className="primary-button" onClick={sendMessage}>Enviar</button>
        </div>
      </section>
    </div>
  )
}
