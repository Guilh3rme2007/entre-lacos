export const elderNav = [
  { label: 'Painel', to: '/idoso' },
  { label: 'Solicitar ajuda', to: '/idoso/solicitar-ajuda' },
  { label: 'Acompanhamento', to: '/idoso/acompanhamento' },
  { label: 'Chat', to: '/idoso/chat' },
  { label: 'Histórico', to: '/idoso/historico' },
  { label: 'Agendamento', to: '/idoso/agendamento' },
  { label: 'Tutoriais', to: '/idoso/tutoriais' },
  { label: 'Acessibilidade', to: '/idoso/acessibilidade' },
  { label: 'Contato de confiança', to: '/idoso/contato-confianca' },
]

export const youngNav = [
  { label: 'Painel', to: '/jovem' },
  { label: 'Chamados', to: '/jovem/chamados' },
  { label: 'Atendimento', to: '/jovem/atendimento' },
  { label: 'Gamificação', to: '/jovem/gamificacao' },
  { label: 'Comprovante', to: '/jovem/comprovante' },
  { label: 'Habilidades', to: '/jovem/habilidades' },
  { label: 'Comunidade', to: '/jovem/comunidade' },
]

export const adminNav = [
  { label: 'Dashboard', to: '/admin' },
  { label: 'Usuários', to: '/admin/usuarios' },
  { label: 'Prestadores', to: '/admin/prestadores' },
  { label: 'Chamados', to: '/admin/chamados' },
  { label: 'Denúncias', to: '/admin/denuncias' },
  { label: 'Relatórios', to: '/admin/relatorios' },
  { label: 'Auditoria', to: '/admin/auditoria' },
]

export const issueCategories = [
  'Bancos e pagamentos',
  'WhatsApp e mensagens',
  'Redes sociais',
  'Configurações do celular',
  'Compras pela internet',
  'Aplicativos',
  'Internet e Wi‑Fi',
  'Outros problemas',
]

export const elderRequests = [
  {
    id: '#EL-1042',
    category: 'WhatsApp e mensagens',
    summary: 'Preciso enviar uma foto para minha filha.',
    status: 'Aguardando atendimento',
    date: 'Hoje • 14:20',
    priority: 'Alta',
  },
  {
    id: '#EL-1040',
    category: 'Bancos e pagamentos',
    summary: 'Não consigo acessar o app do banco.',
    status: 'Em andamento',
    date: 'Ontem • 18:30',
    priority: 'Média',
  },
  {
    id: '#EL-1039',
    category: 'Configurações do celular',
    summary: 'Quero aumentar o tamanho da fonte.',
    status: 'Concluído',
    date: '12/09 • 09:10',
    priority: 'Baixa',
  },
]

export const elderHistory = [
  {
    id: '#AT-220',
    provider: 'Lívia',
    category: 'WhatsApp',
    date: '09 ago 2026',
    status: 'Concluído',
    rating: 5,
    summary: 'Ensinei como enviar fotos pelo aplicativo.',
  },
  {
    id: '#AT-210',
    provider: 'Mateus',
    category: 'App do banco',
    date: '02 ago 2026',
    status: 'Reaberto',
    rating: 4,
    summary: 'Ajudei a confirmar o login com biometria.',
  },
]

export const tutorialLibrary = [
  { title: 'Como enviar fotos pelo WhatsApp', category: 'Mensagens', duration: '4 min', tag: 'Visual' },
  { title: 'Como instalar um aplicativo', category: 'Aplicativos', duration: '6 min', tag: 'Passo a passo' },
  { title: 'Como conectar ao Wi‑Fi', category: 'Internet', duration: '3 min', tag: 'Guia' },
  { title: 'Como usar o app bancário', category: 'Bancos', duration: '7 min', tag: 'Aula' },
]

export const contactOptions = [
  { name: 'Joana Martins', relation: 'Filha', phone: '(11) 99999-1203', email: 'joana@gmail.com' },
  { name: 'Carlos Neves', relation: 'Vizinhos', phone: '(11) 98888-7765', email: 'carlos@exemplo.com' },
]

export const youngCalls = [
  {
    id: '#JV-118',
    category: 'WhatsApp e mensagens',
    description: 'Idosa não consegue anexar imagens em conversas com familiares.',
    date: 'Hoje • 09:45',
    priority: 'Alta',
    neededSkill: 'WhatsApp',
    match: 'Compatível',
    participant: 'Maria do Carmo',
  },
  {
    id: '#JV-116',
    category: 'Compras pela internet',
    description: 'Usuária precisa confirmar endereço e forma de pagamento.',
    date: 'Hoje • 07:20',
    priority: 'Média',
    neededSkill: 'Compras online',
    match: 'Compatível',
    participant: 'Ana Lúcia',
  },
  {
    id: '#JV-109',
    category: 'Aplicativos',
    description: 'A pessoa não consegue instalar o app de saúde digital.',
    date: 'Ontem • 15:40',
    priority: 'Baixa',
    neededSkill: 'Aplicativos',
    match: 'Parcial',
    participant: 'José Carlos',
  },
]

export const youngSkills = ['Android', 'iOS', 'Aplicativos bancários', 'WhatsApp', 'Redes sociais', 'Compras online', 'Segurança digital']

export const adminUsers = [
  { name: 'Maria do Carmo', email: 'maria@email.com', phone: '(11) 97777-1123', profile: 'Idoso', date: '12/02/2026', status: 'Ativo' },
  { name: 'Lívia Souza', email: 'livia@email.com', phone: '(11) 98888-4554', profile: 'Prestador', date: '03/05/2026', status: 'Validado' },
  { name: 'Carlos Silva', email: 'carlos@email.com', phone: '(11) 96666-7753', profile: 'Jovem', date: '18/06/2026', status: 'Em revisão' },
]

export const adminMetrics = [
  { label: 'Usuários cadastrados', value: '9.240', delta: '+12%' },
  { label: 'Idosos', value: '4.680', delta: '+8%' },
  { label: 'Jovens', value: '2.310', delta: '+15%' },
  { label: 'Prestadores ativos', value: '1.410', delta: '+9%' },
]

export const adminAudit = [
  { time: '10:12', user: 'Marina', action: 'Login realizado' },
  { time: '10:25', user: 'Lívia', action: 'Aceite de atendimento' },
  { time: '11:03', user: 'Maria', action: 'Encerramento de chamado' },
  { time: '11:40', user: 'Sistema', action: 'Compartilhamento de tela consentido' },
]

export const notificationList = [
  'Atendimento aceito por Lívia Souza.',
  'Seu contato de confiança foi atualizado.',
  'Tutorial de WhatsApp disponível hoje.',
]

export const chatMessages = [
  { sender: 'idoso', text: 'Bom dia! Não consigo mandar as fotos para minha filha.', time: '09:12' },
  { sender: 'prestador', text: 'Claro, vamos abrir o WhatsApp e clicar no ícone de clipe.', time: '09:13' },
  { sender: 'idoso', text: 'Preciso de ajuda para escolher a foto certa.', time: '09:13' },
  { sender: 'prestador', text: 'Posso te mostrar como enviar em seguida; também posso te dar uma resposta rápida.', time: '09:14' },
]

export const graphData = [48, 63, 55, 72, 88, 92]

export function readAloud(text) {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
    return
  }

  window.speechSynthesis.cancel()
  const utterance = new SpeechSynthesisUtterance(text)
  window.speechSynthesis.speak(utterance)
}
