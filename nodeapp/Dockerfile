FROM node:18
ARG PORT
WORKDIR /app
COPY ./nodeapp/server1.js server1.js
COPY ./nodeapp/package.json package.json
RUN npm install
CMD ["node", "server1.js"]