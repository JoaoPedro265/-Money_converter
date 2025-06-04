# Etapa de build
FROM node:18.18

WORKDIR /app

ARG VITE_API_URL
ENV VITE_API_URL=${VITE_API_URL} 

COPY package.json yarn.lock ./

RUN yarn install

COPY . .

EXPOSE 5173

CMD ["yarn", "dev"]

#docker build -t meu_app .
#docker run --name react_app -p 5173:5173 meu_app




# # Diretório de trabalho no container
# WORKDIR /app

# # Recebe a URL da API no build arquivo .env
# ARG VITE_API_URL
# ENV VITE_API_URL=${VITE_API_URL} 

# # Instala as dependências
# #COPY package.json package-lock.json ./
# COPY package.json yarn.lock ./
# RUN yarn install

# # Copia o restante dos arquivos
# COPY . .

# # Faz o build do projeto (gera a pasta dist)
# #RUN npm run build
# RUN yarn build

# # Etapa para servir com NGINX (leve e rápido)
# FROM nginx:stable-alpine


# # Copia os arquivos da build para o nginx
# COPY --from=build /app/dist /usr/share/nginx/html

# # Expondo a porta padrão do nginx
# EXPOSE 80

# # Comando padrão do nginx
# CMD ["nginx", "-g", "daemon off;"]


#docker build -t meu-app --build-arg VITE_API_URL=https://sua-api.com . criar imagem
#docker image ls
#docker run -d -p 8080:80 meu-app

