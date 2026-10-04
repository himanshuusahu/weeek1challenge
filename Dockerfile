# Multi-stage Dockerfile for HeritageScribe AI Fullstack
FROM node:20-alpine AS frontend-builder
WORKDIR /app/frontend
COPY frontend/package*.json ./
RUN npm install
COPY frontend/ ./
RUN npm run build

FROM node:20-alpine AS backend
WORKDIR /app
COPY backend/package*.json ./backend/
RUN cd backend && npm install
COPY backend/ ./backend/
COPY --from=frontend-builder /app/frontend/dist ./backend/public

EXPOSE 5000
ENV PORT=5000
CMD ["node", "backend/server.js"]
