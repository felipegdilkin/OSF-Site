# OSF Digital - Site

## Frontend (Next.js 16)

### Deploy no Vercel

#### Configuração do Projeto:
1. **Root Directory**: Defina como `frontend`
2. **Framework Preset**: Next.js
3. **Build Command**: `npm run build` (padrão)
4. **Output Directory**: `.next` (padrão)
5. **Install Command**: `npm install` (padrão)

#### Variáveis de Ambiente Necessárias:

```env
NEXT_PUBLIC_STRAPI_URL=https://seu-backend-strapi.com
```

⚠️ **Importante**: O frontend depende do backend Strapi para funcionar completamente. Sem a URL do Strapi configurada, a página exibirá uma mensagem de "Backend not connected".

### Backend (Strapi v5)

O backend Strapi está na pasta `backend/` e deve ser hospedado separadamente (Railway, Render, Heroku, VPS, etc.).

### Estrutura do Repositório

```
/
├── frontend/          # Next.js App (deploy no Vercel)
├── backend/           # Strapi CMS (deploy separado)
├── _assets/           # Assets do projeto
└── _bkps/            # Backups
```

### Desenvolvimento Local

#### Frontend:
```bash
cd frontend
npm install
npm run dev
```

#### Backend:
```bash
cd backend
npm install
npm run develop
```

### Tecnologias

- **Frontend**: Next.js 16, React 19, TypeScript, Tailwind CSS
- **Backend**: Strapi v5, TypeScript
- **Deploy**: Vercel (frontend) + Railway/Render (backend)
