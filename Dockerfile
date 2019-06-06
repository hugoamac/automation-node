FROM node:8

#environment
ENV NODE_ENV="development"

#set wokspace
WORKDIR /usr/www

COPY package*.json ./

RUN npm install 

COPY . .

EXPOSE 8080

CMD ["npm","start"]