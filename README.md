# 🏠 Staycation - Vacation Rental SaaS Platform

Complete, production-ready Airbnb-like SaaS platform built with Next.js 14, Express, Prisma, and PostgreSQL.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- Docker & Docker Compose
- PostgreSQL 15+
- Redis 7+

### Local Development

```bash
# Install dependencies
npm install

# Configure environment
cp apps/backend/.env.example apps/backend/.env
cp apps/frontend/.env.example apps/frontend/.env

# Edit .env files with your settings

# Start development servers
npm run dev

# Open browser
# Frontend: http://localhost:3000
# Backend: http://localhost:3001
```

### Docker Deployment

```bash
# Deploy with Docker Compose
npm run deploy

# Or manually
docker-compose up -d

# View logs
docker-compose logs -f
```

## 📁 Project Structure

```
staycation-monorepo/
├── apps/
│   ├── backend/              # Express.js API
│   │   ├── src/
│   │   ├── prisma/
│   │   ├── Dockerfile.backend
│   │   ├── package.json
│   │   └── tsconfig.json
│   └── frontend/             # Next.js 14 App
│       ├── app/
│       ├── components/
│       ├── Dockerfile.frontend
│       ├── package.json
│       ├── next.config.js
│       └── tsconfig.json
├── scripts/                  # Utility scripts
├── docker-compose.yml        # Docker orchestration
├── nginx.conf               # NGINX configuration
├── deploy.sh                # Deployment script
└── package.json             # Monorepo configuration
```

## 🛠️ Development

### Backend
```bash
cd apps/backend
npm run dev          # Start dev server
npm run db:migrate   # Run migrations
npm run db:seed      # Seed database
npm run test         # Run tests
```

### Frontend
```bash
cd apps/frontend
npm run dev          # Start dev server
npm run build        # Build for production
npm run lint         # Run linter
```

## 📦 Deployment

### Environment Variables

Create `.env` files in both `apps/backend` and `apps/frontend`:

**Backend (.env)**
```
DATABASE_URL=postgresql://user:password@localhost:5432/staycation
REDIS_URL=redis://localhost:6379
JWT_SECRET=your-secret-key
STRIPE_SECRET_KEY=sk_test_...
EMAIL_USER=your-email@gmail.com
```

**Frontend (.env.local)**
```
NEXT_PUBLIC_API_URL=https://api.example.com
NEXT_PUBLIC_STRIPE_KEY=pk_test_...
```

### Docker Compose
```bash
docker-compose up -d
docker-compose logs -f
docker-compose down
```

### Kubernetes
```bash
kubectl apply -f k8s/
kubectl rollout status deployment/staycation
```

## 🔒 Security

- OWASP ASVS Level 2+ compliant
- JWT authentication with refresh tokens
- 2FA TOTP support
- Role-Based Access Control (RBAC)
- Multi-tenant isolation
- Input validation & sanitization
- Rate limiting
- Security headers (CSP, HSTS, etc)

## 🧪 Testing

```bash
# Backend tests
npm run test -w backend

# Frontend tests
npm run test -w frontend

# E2E tests (coming soon)
npm run test:e2e
```

## 📊 API Documentation

See `docs/API.md` for complete API specification.

## 🚢 CI/CD

GitHub Actions workflow included for:
- Automated testing
- Docker build & push
- Kubernetes deployment
- Performance monitoring

## 📝 License

MIT

## 🤝 Support

For support, email support@staycation.com

---

**Built with ❤️ by Team Midnight**
