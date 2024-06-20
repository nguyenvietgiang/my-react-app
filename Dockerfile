# Bước 1: Xây dựng ứng dụng ReactJS bằng image 'node:19-alpine'
FROM node:19-alpine AS builder
WORKDIR /app
COPY . ./
RUN npm install && npm run build

FROM node:19-alpine AS runner
WORKDIR /app

COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/build ./build

EXPOSE 3000
CMD ["npm", "start"]
