#!/bin/bash
set -e

echo "🗑️ Resetting database..."

cd apps/backend

echo "Removing Prisma artifacts..."
rm -rf prisma/migrations
rm -f .prisma/client

echo "Running migrations..."
npx prisma migrate dev --name init

echo "Seeding database..."
npx prisma db seed

echo "✅ Database reset complete!"
