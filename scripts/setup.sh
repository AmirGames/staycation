#!/bin/bash
set -e

echo "🔧 Setting up Staycation monorepo..."

# Install backend dependencies
echo "Installing backend dependencies..."
cd apps/backend
npm install
npm run build
cd ../..

# Install frontend dependencies
echo "Installing frontend dependencies..."
cd apps/frontend
npm install
cd ../..

# Create .env files
echo "Creating .env files..."
cp apps/backend/.env.example apps/backend/.env 2>/dev/null || true
cp apps/frontend/.env.example apps/frontend/.env.local 2>/dev/null || true

echo "✅ Setup complete!"
echo "Edit the .env files and run 'npm run dev' to start"
