# Entre Laços

Projeto desenvolvido como parte de um trabalho acadêmico para demonstrar uma interface web completa do sistema Entre Laços, com foco em acessibilidade, responsividade e navegação para três perfis: idoso/solicitante, jovem/prestador e administrador.

## Objetivo

Este projeto apresenta uma demonstração funcional da plataforma, incluindo:

- fluxo de login simulado por perfil;
- painel do idoso com ajuda, agendamento e tutoriais;
- painel do jovem com chamados, chat e gamificação;
- painel administrativo com indicadores, usuários e auditoria;
- ajustes de acessibilidade como fonte, alto contraste e leitura em voz alta.

## Como rodar localmente

1. Clone o repositório e entre na pasta do projeto:
   ```bash
   git clone https://github.com/Guilh3rme2007/entre-lacos.git
   cd entre-lacos
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev -- --host 0.0.0.0 --port 4173
   ```

4. Acesse no navegador:
   ```text
   http://127.0.0.1:4173
   ```

## Scripts disponíveis

```bash
npm run dev
npm run build
npm run lint
```

## Observação

Este é um protótipo acadêmico com dados fictícios e simulação de interações, com foco em apresentação e validação de experiência de usuário e arquitetura de interface.
