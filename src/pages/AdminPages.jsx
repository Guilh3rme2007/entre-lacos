import { Route, Routes } from 'react-router-dom'
import { AppShell } from '../components/AppShell'
import { adminAudit, adminMetrics, adminNav, adminUsers, graphData } from '../data/mockData'

export function AdminShell({ setFontScale, setHighContrast, fontScale }) {
  return (
    <AppShell
      profile="admin"
      navItems={adminNav}
      title="Administrador"
      setFontScale={setFontScale}
      setHighContrast={setHighContrast}
      fontScale={fontScale}
    >
      <Routes>
        <Route index element={<AdminDashboard />} />
        <Route path="usuarios" element={<UsersPage />} />
        <Route path="prestadores" element={<ProvidersPage />} />
        <Route path="chamados" element={<AdminCallsPage />} />
        <Route path="denuncias" element={<ReportsPage />} />
        <Route path="relatorios" element={<ReportsDashboard />} />
        <Route path="auditoria" element={<AuditPage />} />
      </Routes>
    </AppShell>
  )
}

function AdminDashboard() {
  return (
    <div className="page-grid">
      <div className="stats-grid four-up">
        {adminMetrics.map((metric) => (
          <div key={metric.label} className="metric-card">
            <span>{metric.label}</span>
            <strong>{metric.value}</strong>
            <small>{metric.delta}</small>
          </div>
        ))}
      </div>

      <div className="content-grid two-col">
        <section className="panel-block">
          <div className="panel-header">
            <h4>Chamados por categoria</h4>
          </div>
          <div className="chart-bars" aria-label="Gráfico de chamados por categoria">
            {graphData.map((height, index) => (
              <div key={index} className="bar-column" style={{ height: `${height}%` }} />
            ))}
          </div>
        </section>

        <section className="panel-block">
          <div className="panel-header">
            <h4>Atividade dos prestadores</h4>
          </div>
          <div className="mini-activity">
            <span>Ativos hoje: 210</span>
            <span>Disponíveis: 68</span>
            <span>Chamados aguardando aceite: 42</span>
          </div>
        </section>
      </div>
    </div>
  )
}

function UsersPage() {
  return (
    <div className="page-grid">
      <section className="panel-block">
        <div className="panel-header">
          <h3>Gerenciamento de usuários</h3>
          <input type="search" placeholder="Pesquisar usuário" className="search-input" />
        </div>
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Nome</th>
                <th>E-mail</th>
                <th>Telefone</th>
                <th>Perfil</th>
                <th>Status</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {adminUsers.map((user) => (
                <tr key={user.email}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  <td>{user.profile}</td>
                  <td>{user.status}</td>
                  <td>
                    <button type="button" className="ghost-button small">Detalhes</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  )
}

function ProvidersPage() {
  return (
    <div className="page-grid">
      <section className="panel-block">
        <div className="panel-header">
          <h3>Gerenciamento de prestadores</h3>
        </div>
        <div className="provider-card-grid">
          <div className="provider-card">
            <strong>Lívia Souza</strong>
            <span>Habilidades: WhatsApp, Android, Segurança digital</span>
            <span>Atendimentos: 124</span>
            <span>Validado: sim</span>
          </div>
          <div className="provider-card">
            <strong>Mateus Oliveira</strong>
            <span>Habilidades: Redes sociais, iOS, Aplicativos</span>
            <span>Atendimentos: 98</span>
            <span>Validado: sim</span>
          </div>
        </div>
      </section>
    </div>
  )
}

function AdminCallsPage() {
  return (
    <div className="page-grid">
      <section className="panel-block">
        <div className="panel-header">
          <h3>Central de chamados</h3>
        </div>
        <div className="ticket-list">
          {[
            { id: '#EL-1042', summary: 'Preciso enviar uma foto para minha filha.', status: 'Aguardando atendimento' },
            { id: '#EL-1040', summary: 'Não consigo acessar o app do banco.', status: 'Em andamento' },
          ].map((item) => (
            <div key={item.id} className="ticket-item">
              <div>
                <strong>{item.id}</strong>
                <small>{item.summary}</small>
              </div>
              <span className="status-pill pending">{item.status}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

function ReportsPage() {
  return (
    <div className="page-grid">
      <section className="panel-block">
        <div className="panel-header">
          <h3>Denúncias e moderação</h3>
        </div>
        <div className="report-list">
          <div className="report-item">
            <strong>Usuário denunciado: Fabricio</strong>
            <p>Motivo: uso indevido de dados pessoais.</p>
            <button type="button" className="secondary-button small">Em análise</button>
          </div>
          <div className="report-item">
            <strong>Usuário denunciado: Rita</strong>
            <p>Motivo: compartilhamento de tela sem consentimento.</p>
            <button type="button" className="secondary-button small">Resolver</button>
          </div>
        </div>
      </section>
    </div>
  )
}

function ReportsDashboard() {
  return (
    <div className="page-grid">
      <section className="panel-block">
        <div className="panel-header">
          <h3>Relatórios</h3>
        </div>
        <div className="report-grid">
          <button type="button" className="secondary-button">Relatório de usuários</button>
          <button type="button" className="secondary-button">Relatório de atendimentos</button>
          <button type="button" className="secondary-button">Relatório de prestadores</button>
          <button type="button" className="secondary-button">Relatório de denúncias</button>
        </div>
      </section>
    </div>
  )
}

function AuditPage() {
  return (
    <div className="page-grid">
      <section className="panel-block">
        <div className="panel-header">
          <h3>Auditoria</h3>
        </div>
        <div className="audit-list">
          {adminAudit.map((entry) => (
            <div key={`${entry.time}-${entry.user}`} className="audit-item">
              <strong>{entry.action}</strong>
              <small>{entry.time} • {entry.user}</small>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
