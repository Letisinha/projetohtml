FROM node:latest
WORKDIR /app
COPY package*.json ./
RUN npm install -y
COPY . .
EXPOSE 3000
# CMD [ "npm", "start" ]
RUN npm install express -y && npm install body-parser -y && npm install mysql@latest -y && npm install http -y && npm start -y 