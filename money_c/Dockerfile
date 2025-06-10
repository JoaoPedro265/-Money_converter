# Etapa de build
FROM node:18.18

#Define o diretório de trabalho dentro do container
WORKDIR /app

#Copia os arquivos de dependência para o container
COPY package.json yarn.lock ./

#Instala as dependências
RUN yarn install

ARG VITE_API_URL
ENV VITE_API_URL=${VITE_API_URL} 

#Copia todo o resto do código para dentro do container.
COPY . .

#Informa que a aplicação usa a porta 5173 (React/Vite usa essa porta por padrão).
EXPOSE 5173




#docker build -t meu_app .
#docker run --name react_app -p 5173:5173 meu_app

