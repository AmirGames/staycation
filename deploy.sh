#!/bin/bash
set -e

echo "🚀 Deploying Staycation SaaS..."

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

# Check prerequisites
echo "${YELLOW}Checking prerequisites...${NC}"
if ! command -v docker &> /dev/null; then
    echo "${RED}Docker is not installed${NC}"
    exit 1
fi

if ! command -v docker-compose &> /dev/null; then
    echo "${RED}Docker Compose is not installed${NC}"
    exit 1
fi

# Stop existing containers
echo "${YELLOW}Stopping existing containers...${NC}"
docker-compose down || true

# Build images
echo "${YELLOW}Building Docker images...${NC}"
docker-compose build

# Start services
echo "${YELLOW}Starting services...${NC}"
docker-compose up -d

# Wait for database
echo "${YELLOW}Waiting for database...${NC}"
sleep 10

# Run migrations
echo "${YELLOW}Running database migrations...${NC}"
docker-compose exec -T backend npm run db:migrate

# Health check
echo "${YELLOW}Checking health...${NC}"
max_attempts=30
attempt=1
while [ $attempt -le $max_attempts ]; do
    if curl -f http://localhost:3001/health > /dev/null 2>&1; then
        echo "${GREEN}✅ Backend is healthy${NC}"
        break
    fi
    echo "Attempt $attempt/$max_attempts: Backend not ready yet..."
    sleep 2
    ((attempt++))
done

if [ $attempt -gt $max_attempts ]; then
    echo "${RED}Backend failed to start${NC}"
    exit 1
fi

echo ""
echo "${GREEN}✅ Deployment successful!${NC}"
echo ""
echo "Services running at:"
echo "  Frontend:  http://localhost:3000"
echo "  Backend:   http://localhost:3001"
echo "  Database:  postgres://postgres:postgres@localhost:5432/staycation"
echo "  Redis:     redis://localhost:6379"
echo ""
echo "To view logs:"
echo "  docker-compose logs -f backend"
echo "  docker-compose logs -f frontend"
echo ""
