FROM node:12
RUN mkdir /app
WORKDIR /app
ADD ./package.json ./
RUN npm install
ADD . .
CMD ["npm", "start"]
